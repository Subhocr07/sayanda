import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReadGIta = () => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        fetch("https://ai-aiq6.onrender.com/api/v1/allchapters/")
            .then((response) => response.json())
            .then((data) => setChapters(data));
    }, []);
    console.log(chapters);
    return (
        <section className="form-section bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 mb-4 mb-lg-0">
                        <div className="form-outr">
                            <h1 >
                                {chapters.map((chapter, index) => (
                                    <div key={chapter._id}>
                                        <Link to={`/chapter/${chapter._id}`}>
                                            <h2 style={{ color: "white", fontFamily: "monospace" }}>{chapter.title}</h2>
                                        </Link>
                                        <p>{chapter.description}</p>
                                    </div>
                                ))}
                            </h1>


                            <div className="chakra-outr">
                                <img className="mandala" src="images/mandela.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReadGIta