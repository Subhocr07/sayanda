function extractChapterVerse(generatedText) {
  const chapterRegex = /[cC]hapter (\d+)/;
  const verseRegex = /[vV]erse\s+(\d+)/;
  const chapterMatch = generatedText.match(chapterRegex);
  const verseMatch = generatedText.match(verseRegex);
  const chapter = chapterMatch ? chapterMatch[1] : "";
  const verse = verseMatch ? verseMatch[1] : "";

  // Extract the answer from the generated text
  const dynamicVariable = `chapter ${chapter} verse ${verse}`;
  const modifiedString = generatedText
    .replace(/,\s*,\s*/g, ` ${dynamicVariable} `)
    .replace(/,/g, "")
    .trim();

  return { modifiedString, chapter, verse };
}

module.exports = extractChapterVerse;
