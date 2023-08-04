const express = require("express");
const router = express.Router();
const fetchGitaController = require("../controller/fetchGitaController");

router.get("/allchapters/", fetchGitaController.fetchAllChapters);

router.get("/chapter/:chapterId", fetchGitaController.fetchChapterVerses);

router.get(
  "/chapter/:chapterId/verses/:verseId",
  fetchGitaController.fetchVerse
);

module.exports = router;
