import React from 'react';

const YouTubeVideo = ({ video }) => {

    console.log(video)
    function extractVideoId(url) {
        const match = url.match(/youtube\.com\/watch\?v=(\w+)/);
        return match ? match[1] : null;
    }
    const videoId = extractVideoId(video.url);

    return (
        <div className="youtube-video">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default YouTubeVideo;
