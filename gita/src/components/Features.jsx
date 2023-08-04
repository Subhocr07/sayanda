import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"




const Features = () => {
    return (
        <section className="feature-section">
            <div className="container">
                <h2 className="common-heading black text-center wow fadeInUp mb-sm-3 mb-md-5">Feature</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="feature-card-wrapper">
                            <div className="feature-card">
                                <figure className="feature-pic wow fadeInLeft"><img src="images/feature-pic1.jpg" alt="" />
                                </figure>
                                <div className="text-box">
                                    <p>Talk about the Chat GPT Q/A service</p>
                                    <Link to="/ask" className="cta-link">Ask Anything</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="feature-card-wrapper">
                            <div className="feature-card">
                                <figure className="feature-pic wow fadeInLeft"><img src="images/feature-pic2.jpg" alt="" />
                                </figure>
                                <div className="text-box">
                                    <p>Talk about how you can
                                        create midjourney avatar.</p>
                                    <a href="#a" className="cta-link">Imagine Your Avatar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features