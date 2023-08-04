const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  chapterId: { type: String, required: true },
  title: { type: String, required: true },
  gita: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gita" }],
  verses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Verse" }],
});

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
