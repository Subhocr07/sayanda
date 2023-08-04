// Require the necessary libraries
const axios = require("axios");
const cheerio = require("cheerio");

// Define an async function that fetches and scrapes data from a URL
async function getGitaShloka(chapter, verse) {
  // Construct the URL based on the specified chapter and verse
  const url = `https://www.holy-bhagavad-gita.org/chapter/${chapter}/verse/${verse}`;
  try {
    // Fetch the HTML content from the URL using Axios
    const response = await axios.get(url);
    // Load the HTML content into Cheerio
    const html = response.data;
    const $ = cheerio.load(html);
    // Extract the Sanskrit and Hindi text from the HTML using Cheerio selectors
    const hindi = $("div#originalVerse > p").text().trim();
    // const meaning = $("div#translation > p").text().trim();
    const result = {
         // Optional: Extract the main text of the verse
      sanskrit: $("div#transliteration > p").text().trim(),
      meaning: $("div#translation > p").text().trim(),
      hindi,
    };
    return result; // Return the object containing the Sanskrit and Hindi text
  } catch (error) {
    console.log(error); // Log any errors that occur during the process
    return { error: "Something went wrong" }; // Return an object containing an error message
  }
}

module.exports = getGitaShloka; // Export the function so that it can be used in other modules
