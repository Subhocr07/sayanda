// Import necessary modules
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const compression = require("compression");
const axios = require("axios");
const cors = require("cors");
const passportStrategy = require("./passport");
const connectToDatabase = require("./db.js");
const authRoute = require("./routes/authRoutes.js");
const { exec } = require("child_process");
const https = require("https");
const fs = require("fs");

// Read SSL certificate and private key files
// const privateKey = fs.readFileSync("./cert/key.pem", "utf8");
// const certificate = fs.readFileSync("./cert/cert.pem", "utf8");

// Create options object for HTTPS server
// const httpsOptions = {
//   key: privateKey,
//   cert: certificate,
// };

// Initialize server
const app = express();
// Add CORS headers
app.use(cors());

// Create HTTPS server
// const server = https.createServer(httpsOptions, app);

// Import utility functions
const extractChaptersAndVerses = require("./utils/extractChaptersAndVerses");
const singleChapterAndVerses = require("./utils/singleChapterAndVerse");
const youtubeVideosOnChapters = require("./utils/youtubeVideosOnChapters");
const getGitaShloka = require("./helper/sanskrit");

// Load environment variables
require("dotenv").config();

// Set up middleware
app.use(bodyParser.json());
app.use(compression());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Initialize OpenAI API
const configuration = new Configuration({
  organization: process.env.ORGANIZATION_KEY,
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

connectToDatabase();

// Set port
const port = process.env.PORT || 4000;

// Define POST endpoint
app.post("/", async (req, res) => {
  // Extract question from request body
  const { question } = req.body;

  // Call OpenAI API to generate response
  const response = await axios.post(
    "https://api.openai.com/v1/engines/text-davinci-003/completions",
    {
      prompt: `Using teachings from the Bhagavad Gita written by A.C. Bhaktivedanta Swami Prabhupada, can you provide gentle advice to ${question}? Please also include the chapter and verse number where the advice can be found.`,
      max_tokens: 700,
      temperature: 0.6,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${configuration.apiKey}`,
      },
    }
  );

  // Extract generated response
  const firstResponse = response.data.choices[0].text;

  // Extract chapter and verse numbers from response
  const { chapter, verse } = singleChapterAndVerses(firstResponse);

  // Extract answer from response text
  const answer = firstResponse
    .replace(/,\s*,\s*/g, ",")
    .replace(/,/g, "")
    .replace(/"/g, "")
    .replace(/\n/g, "")
    .trim();

  // Generate shloka text based on chapter and verse
  const { hindi, meaning, sanskrit } = await getGitaShloka(chapter, verse);

  // Combine chapter, verse, shloka, and answer into response message
  const generatedAnswer = `From The Bhagwad Gita As It Is :- \n\n${answer}\n\nMentioned in: Chapter ${chapter}, Verse ${verse}`;

  // Extract related chapters and verses from response
  const relatedChapters = extractChaptersAndVerses(generatedAnswer);

  // Retrieve related YouTube videos based on related chapters
  const videosRelatedToRelatedChapters = await youtubeVideosOnChapters(
    relatedChapters
  );

  // Combine all information into final response
  const finalAnswer = `From The Bhagwad Gita As It Is :- \n\n${answer}\n\nMentioned in: Chapter ${chapter}, Verse ${verse}`;
  //send the response to frontend as json format
  res.json({
    finalAnswer,
    chapter,
    verse,
    hindi,
    meaning,
    sanskrit,
    videosRelatedToRelatedChapters,
  });
  console.log({
    finalAnswer,
    chapter,
    verse,
    hindi,
    sanskrit,
    videosRelatedToRelatedChapters,
  });
});

// app.post("/", async (req, res) => {
//   const question = req.body.question;
//   console.log(question);

//   // Execute the Python script
//   const pythonProcess = exec(
//     "python dc_model/app.py",
//     async (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error executing Python script: ${error.message}`);
//         res.status(500).json({ error: "Internal server error" });
//         return;
//       }

//       const response = JSON.parse(stdout);
//       console.log("Response from Python script:", response);

//       // Retrieve related YouTube videos based on related chapters
//       const videosRelatedToRelatedChapters = await youtubeVideosOnChapters(
//         response.chapters.join()
//       );

//       const result = {
//         results: response,
//         videos: videosRelatedToRelatedChapters,
//       };

//       res.send(result);
//     }
//   );

//   // Pass the question as input to the Python script
//   pythonProcess.stdin.write(question);
//   pythonProcess.stdin.end();
// });

app.use("/api/v1", require("./routes/routes.js"));
app.use("/api/auth/v1", require("./routes/userRoutes.js"));

//just a texting api to test server is running or not
app.get("/test", async (req, res) => {
  res.send("Hello World");
});
//listening the server on
app.listen(port, (err) => {
  !err && console.log(`Node app listening on port ${port}`);
});
