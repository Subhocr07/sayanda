const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
require("dotenv").config();
// Initialize OpenAI API key
const configuration = new Configuration({
  organization: process.env.ORGANIZATION_KEY,
  apiKey: process.env.API_KEY,
});

// Translate a given text to English
async function translateToEnglish(text) {
  const response = await axios.post(
    "https://api.openai.com/v1/engines/text-davinci-003/completions",
    {
      prompt: `translate this script from sanskrit ${text} to english script only but language should be in sanskrit`,
      max_tokens: 200,
      temperature: 0.5,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${configuration.apiKey}`,
      },
    }
  );

  const translation = response.data.choices[0].text.trim();
  return translation;
}

module.exports = translateToEnglish;
