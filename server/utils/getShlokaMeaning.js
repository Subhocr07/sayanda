const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
require("dotenv").config();

// Initialize OpenAI API key
const configuration = new Configuration({
  organization: process.env.ORGANIZATION_KEY,
  apiKey: process.env.API_KEY,
});

async function getShlokaMeaning(shlokaText) {
  const response = await axios.post(
    "https://api.openai.com/v1/engines/text-davinci-003/completions",
    {
      prompt: `Please provide the English meaning of the following shloka text from the Gita: ${shlokaText}`,
      max_tokens: 300,
      temperature: 0.5,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${configuration.apiKey}`,
      },
    }
  );

  const meaning = response.data.choices[0].text.trim();
  return meaning;
}
module.exports = getShlokaMeaning;
