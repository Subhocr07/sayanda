import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VerseDetails = () => {
    const { chapterId, verseId } = useParams();
    const [meaning, setMeaning] = useState([])

    useEffect(() => {
        fetch(`https://ai-aiq6.onrender.com/api/v1/chapter/${chapterId}/verses/${verseId}`)
            .then((response) => response.json())
            .then((data) => setMeaning(data));
    }, [chapterId, verseId])

    if (!meaning) {
        return <div style={{ color: "white" }}>Loading...</div>; // render a message if meaning is undefined/null
    }
    return (
        <section className="form-section bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 mb-4 mb-lg-0">
                        <div className="form-outr">
                            <div style={{ color: "white" }}>
                                <h2 style={{ color: "white" }}>{meaning.devnagari}</h2>
                                <h2 style={{ color: "white" }}>{meaning.title}</h2>
                                <p>{meaning.text}</p>
                                <p>{meaning.synonyms}</p>
                                <p>{meaning.translation}</p>
                                <p>{meaning.purport}</p>
                            </div>


                            <div className="chakra-outr">
                                <img className="mandala" src="images/mandela.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default VerseDetails;
