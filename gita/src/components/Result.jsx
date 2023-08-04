import React from 'react';
import Slider from './NetflixCard';
import "./styles/Result.css";

const Result = ({ result }) => {
    console.log(result);

    if (!result) {
        return <div>Loading...</div>;
    }

    const { videosRelatedToRelatedChapters
    } = result;

    return (
        <div>
            <div >
                <div className="prompt-section">
                    <textarea
                        id='x'
                        className="prompt-answer"
                        value={result?.finalAnswer
                            || 'No answer available'}
                        readOnly
                    />
                </div>

                <div className="prompt-section">
                    <div className="prompt-answer">
                        <p className="chapter-name">
                            Chapter:{result?.chapter || 'No chapters available'}
                        </p>
                        <p className="chapter-name">Verse:{result?.verse || 'No verses available'}</p>
                        {/* <p className="chapter-name"></p> */}
                        <p className="chapter-description">
                            Original Shloka:{result?.hindi || 'No shlokas available'}
                        </p>
                        <p className="chapter-description">
                            Sanskrit:{result?.sanskrit || 'No translations available'}
                        </p>
                        <p className="chapter-description">Meaning:{result?.meaning || 'No Meaning available'}</p>
                    </div>
                </div>

                {videosRelatedToRelatedChapters && videosRelatedToRelatedChapters.length > 0 ? (
                    <Slider videos={videosRelatedToRelatedChapters} />
                ) : (
                    <div>No videos available</div>
                )}
            </div>
        </div>
    );
};

export default Result;
