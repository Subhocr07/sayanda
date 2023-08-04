const ytSearch = require("yt-search");

async function searchAsChV(chapter) {
  const chaptersArray = chapter.split(", ");
  console.log(chaptersArray);
  const chaptersString = chaptersArray
    .map((chapter) => `chapters ${chapter}`)
    .join(", ");
  console.log(chaptersString);

  const query = `suggest me some videos from  on the topic of gita from chapters ${chaptersString}  only by  verified youtubers`;
  try {
    const searchResults = await ytSearch(query);
    const videos = searchResults.videos.slice(0, 10).map((video) => {
      return {
        title: video.title,
        description: video.description,
        thumbnail: video.thumbnail,
        url: video.url,
      };
    });
    return videos;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while searching for videos");
  }
}

module.exports = searchAsChV;
