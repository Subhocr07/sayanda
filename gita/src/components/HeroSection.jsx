import React from 'react'
import { Link } from 'react-router-dom'
const HeroSection = () => {

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
        <figure className="site-banner">
            <div className="banner-content">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className="ban-text wow fadeInRight">
                                <h1>Welcome message</h1>
                                <p>Ov. Kvasirade böv. Kaledes tegisk. Knarkometer eldost bement kameratelefon. Visukal
                                    analig
                                    ståpaddling buda tills nenar. Orade semirar innan fövis. Teligen favybide i tempovalens.
                                    Abnomi hemirede temakonfirmation nilogi. Beska favis, för att tetrana om kuddbok, iss.
                                    Låprevis an och tidsfönster. Hexaktig preras så båsamma poll. Pong paddeltennis supont,
                                    neledes. </p>
                            </div>
                            <div className="btn-wrap  wow fadeInRight">
                                <Link style={btnStyle} href="javascript:void(0);" className="btn">CTA</Link>
                                <Link style={btnStyle} href="javascript:void(0);" className="btn">CTA</Link>
                            </div>
                            {/* <p className="built-by  wow fadeInUp">Developed by <img src="images/icon1.svg" alt="" /> Built by
                                <img src="images/icon2.svg" alt="" />
                            </p> */}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <figure className="banner-pic wow fadeInLeft"><img src="images/banner-img.png" alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    )
}

export default HeroSection