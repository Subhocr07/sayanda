import React from 'react'
import { Link } from 'react-router-dom';
const Features = () => {
    const btnStyle = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "18px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
        background: "#F1581B",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        padding: "12px 15px",
        lineHeight: 1,
        border: 0,
        minWidth: "20rem",
        borderRadius: "6px",
        transition: "all 0.3s",
    };

    return (
        <section className="about-section bg-black comm-padd">
            <div className="container">
                <h2 className="common-heading gradient-color text-center wow fadeInUp mb-sm-3 mb-md-5">Why/what is this about
                </h2>
                <div className="row">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-1">
                                <div className="wow fadeInRight">
                                    <img src="images/pic1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-2">
                                <article className="safty-text wow fadeInLeft">
                                    <p>Ov. Kvasirade böv. Kaledes tegisk. Knarkometer eldost bement kameratelefon. Visukal
                                        analig
                                        ståpaddling buda tills nenar. Orade semirar innan fövis. Teligen favybide i
                                        tempovalens.
                                        kameratelefon. Visukal analig ståpaddling buda tills nenar. Orade semirar innan
                                        fövis.
                                        Teligen favybide i tempovalens.
                                    </p>
                                    <Link style={btnStyle} href="" className="btn">Join</Link>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
                                <div className="wow fadeInRight">
                                    <img src="images/pic2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
                                <article className="safty-text wow fadeInLeft">
                                    <p>Ov. Kvasirade böv. Kaledes tegisk. Knarkometer eldost bement kameratelefon. Visukal
                                        analig
                                        ståpaddling buda tills nenar. Orade semirar innan fövis. Teligen favybide i
                                        tempovalens.
                                        kameratelefon. Visukal analig ståpaddling buda tills nenar. Orade semirar innan
                                        fövis.
                                        Teligen favybide i tempovalens.
                                    </p>
                                    <Link style={btnStyle} href="" className="btn">Join</Link>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-1">
                                <div className="wow fadeInRight">
                                    <img src="images/pic3.png" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 order-2 order-lg-2">
                                <article className="safty-text wow fadeInLeft">
                                    <p>Ov. Kvasirade böv. Kaledes tegisk. Knarkometer eldost bement kameratelefon. Visukal
                                        analig
                                        ståpaddling buda tills nenar. Orade semirar innan fövis. Teligen favybide i
                                        tempovalens.
                                        kameratelefon. Visukal analig ståpaddling buda tills nenar. Orade semirar innan
                                        fövis.
                                        Teligen favybide i tempovalens.
                                    </p>
                                    <Link style={btnStyle} href="" className="btn">Join</Link>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features