function extractChaptersAndVerses(text) {
  const regex = /Chapter\s+(\d+)/g;
  let matches;
  const chapters = [];

  while ((matches = regex.exec(text)) !== null) {
    chapters.push(matches[1]);
  }

  if (chapters.length > 0) {
    return chapters.join(", ");
  } else {
    return "No chapters mentioned.";
  }
}
module.exports = extractChaptersAndVerses;
