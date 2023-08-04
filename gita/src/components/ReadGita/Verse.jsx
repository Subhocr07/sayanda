import React from 'react';
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';

const Verses = () => {
    const { chapterId } = useParams();
    const [verses, setVerses] = useState([]);

    useEffect(() => {
        fetch(`https://ai-aiq6.onrender.com/api/v1/chapter/${chapterId}`)
            .then((response) => response.json())
            .then((data) => setVerses(data.length === 0 ? null : data));
    }, [chapterId]);

    if (verses === null) {
        return <div style={{ color: "white" }}>Loading...</div>;
    }

    return (
        <div>
            <section className="form-section bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mb-4 mb-lg-0">
                            <div className="form-outr">
                                {
                                    verses.length === 0 ? (
                                        <p>Loading...</p>
                                    ) : (
                                        verses.map((meaning) => {
                                            return (
                                                <div key={meaning._id}>
                                                    <Link
                                                        to={{
                                                            pathname: `/chapter/${chapterId}/verses/${meaning._id}`,
                                                            state: { meaning: meaning },
                                                        }}
                                                    >
                                                        <h2 style={{ color: "white" }} ><strong>{meaning.title}</strong>:{meaning.text}</h2>
                                                        {console.log("verseCom", meaning)}
                                                    </Link>
                                                </div>
                                            );
                                        })
                                    )
                                }

                                <div className="chakra-outr">
                                    <img className="mandala" src="images/mandela.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Verses;


