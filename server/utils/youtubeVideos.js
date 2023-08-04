require("dotenv").config();
const ytSearch = require("yt-search");

async function searchVideos(query) {
  const text = `${query} from  gita`;
  try {
    const searchResults = await ytSearch(text);
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
  }
}
module.exports = searchVideos;
