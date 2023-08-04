function extractYoutubeLink(generatedText) {
  // Extract the YouTube link from the generated text using a regular expression
  const youtubeLinkRegex = /https:\/\/www\.youtube\.com\/\S+/;
  const youtubeLinkMatch = generatedText.match(youtubeLinkRegex);
  const youtubeLink = youtubeLinkMatch ? youtubeLinkMatch[0] : null;
  if (youtubeLink) {
    return youtubeLink;
  } else {
    return "Youtube Link not found";
  }
}
module.exports = extractYoutubeLink;
