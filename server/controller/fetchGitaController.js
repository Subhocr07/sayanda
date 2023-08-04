const chapterModel = require("../model/ChapterModel");
const verseModel = require("../model/VerseModel");

exports.fetchAllChapters = async (req, res) => {
  try {
    const chapters = await new Promise((resolve, reject) => {
      chapterModel.find({}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    res.json(chapters);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving chapters.",
    });
  }
};

exports.fetchChapterVerses = (req, res) => {
  const chapterId = req.params.chapterId;
  console.log(chapterId);

  chapterModel
    .findOne({ _id: chapterId })
    .populate("verses")
    .then((chapter) => {
      if (!chapter) {
        return res
          .status(404)
          .send({ message: "Chapter not found with id " + chapterId });
      }
      res.json(chapter.verses);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving verses.",
      });
    });
};

exports.fetchVerse = async (req, res) => {
  try {
    const chapterId = req.params.chapterId;
    const verseId = req.params.verseId;

    console.log(chapterId + "lllllllll" + verseId);

    const verse = await verseModel.findOne({
      chapter: chapterId,
      verse_number: verseId,
    });
    res.json(verse);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving verse.",
    });
  }
};
