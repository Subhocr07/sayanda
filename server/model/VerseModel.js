const mongoose = require("mongoose");

const verseSchema = new mongoose.Schema({
  verseId: { type: String, required: true },
  title: { type: String },
  devnagari: { type: String },
  text: { type: String },
  synonyms: { type: String },
  translation: { type: String },
  purport: { type: String },

  chapter: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
});

const Verse = mongoose.model("Verse", verseSchema);
module.exports = Verse;
