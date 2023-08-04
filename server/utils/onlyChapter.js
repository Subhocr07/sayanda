const regex = /Chapter\s+(\d+)/g;
let matches;
const chapters = [];

while ((matches = regex.exec(inputString)) !== null) {
  chapters.push(matches[1]);
}

if (chapters.length > 0) {
  console.log(`Chapters mentioned: ${chapters.join(", ")}`);
} else {
  console.log("No chapters mentioned.");
}
