import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const VideoCarousel = ({ videos }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [player, setPlayer] = useState(null);
    const handlePlayerReady = (event) => {
        // The player is ready, save a reference to it
        setIsPlayerReady(true);
        setPlayer(event.target);
    };
    useEffect(() => {
        if (player) {
            // Player is ready, make any necessary API calls here
            player.playVideo();
        }
    }, [player]);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    if (!videos) {
        return <p>No videos found.</p>;
    }
    const getYoutubeVideoId = (url) => {
        const regex = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
        const match = url.match(regex);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const handleBeforeSlideChange = (oldIndex, newIndex) => {
        // Get the currently playing video element, if any
        const playingVideo = document.querySelector('.video-playing');
        if (playingVideo) {
            setIsPlaying(true);
            // Stop autoplaying
            setTimeout(() => {
                setIsPlaying(false);
            }, 1000);
        }
    };

    return (
        <Carousel responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={3000} infinite={true} onReady={handlePlayerReady} beforeChange={handleBeforeSlideChange}>
            {videos.map((curElem) => {
                const videoId = getYoutubeVideoId(curElem.url);
                return (
                    <Wrapper key={curElem.id}>
                        <div className="container">
                            <div className="wrapper">
                                <div className="banner-image">
                                    {videoId ? (
                                        <YouTube
                                            videoId={videoId}
                                            opts={{
                                                height: '100%',
                                                width: '100%',
                                                playerVars: {
                                                    autoplay: 0,
                                                    origin: 'http://localhost:3000',
                                                    quality: "small"
                                                },
                                            }}
                                        />
                                    ) : (
                                        <figure>
                                            <img src={curElem.thumbnail} alt={curElem.title} />
                                        </figure>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                );
            })}
        </Carousel>
    );
};

export default VideoCarousel;

const Wrapper = styled.section`
  
  padding: 3rem;
  font-family: "Lexend Deca Light";



  .container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.25);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 38px;
    filter: drop-shadow(0 30px 10px rgba(0,0,0,0.125));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;

  }

  .wrapper {
    width: 100%;
    height: 100%;

  }

  .banner-image {
    height:auto;
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255, 0.255);
    overflow:hidden;
    
    img{
      width: 100%;
      height: auto;
    }
  }
  
  

  h1{
    color: rgba(255,255,255,0.98);
    text-transform: uppercase;
    font-size: 2.4rem;
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 2px;    
  }

  .button-wrapper{
    margin-top: 18px;
  }

  .outline {
    background: transparent;
    color: rgba(0, 212, 255, 0.9);
    border: 1px solid rgba(0, 212, 255, 0.6);
    transition: all .3s ease;

  }

  .outline:hover{
    transform: scale(1.125);
    color: rgba(255, 255, 255, 0.9);
    border-color: rgba(255, 255, 255, 0.9);
    transition: all .3s ease;
  }

  .fill {
    background: rgba(0, 212, 255, 0.9);
    color: rgba(255,255,255,0.95);
    filter: drop-shadow(0);
    font-weight: bold;
    transition: all .3s ease;
  }

  .fill:hover{
    transform: scale(1.125);
    border-color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
    transition: all .3s ease;
  }
`