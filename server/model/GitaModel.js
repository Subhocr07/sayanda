const mongoose = require("mongoose");

const gitaSchema = new mongoose.Schema({
  title: { type: String, required: false },
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapters" }],
});

const Gita = mongoose.model("Gita", gitaSchema);
module.exports = Gita;
