/* eslint-disable no-undef */
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"
import Slider from "./NetflixCard";
import MyModal from './Modal/MyModal';
import jwt_decode from "jwt-decode"
import Result from './Result';
import "./Question.css"
import { Button } from "react-bootstrap"






const Question = () => {
    // const [loginData, setLoginData] = useState(
    //     localStorage.getItem('loginData')
    //         ? JSON.parse(localStorage.getItem('loginData'))
    //         : null
    // );


    const [user, setUser] = useState({})

    // const handleCallbackResponse = (response) => {
    //     console.log("Encoded Jwt response: " + response.credential);
    //     const userObject = jwt_decode(response.credential)
    //     console.log(userObject);
    //     setUser(userObject)
    //     localStorage.setItem("loginData", JSON.stringify(userObject.jti));
    //     document.getElementById("signInDiv").hidden = true;
    // }
    // const handleFailure = (result) => {
    //     alert(result);
    // };
    const [state, setState] = useState({
        response: [],
        videos: [],
        loading: false,
        error: "",
        showPopup: false, // Track the pop-up visibility
    });


    const handleSubmit = async (event) => {
        event.preventDefault();
        const question = event.target.elements.question.value;
        try {
            setState({ ...state, loading: true });
            const response = await axios.post(
                "https://ai-aiq6.onrender.com/",
                { question },
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        body: JSON.stringify({ question }),
                    },
                }
            );
            console.log(response);
            const data = response.data;
            setState({ ...state, response: data, loading: false });
        } catch (err) {
            console.error(err);
            setState({ ...state, loading: false });
            if (err.response.data.error) {
                setState({ ...state, error: err.response.data.error });
            } else if (err.message) {
                setState({ ...state, error: err.message });
            }
            setTimeout(() => {
                setState({ ...state, error: "" });
            }, 5000);
        }

        // Display an error message or redirect to the login page


    };

    const handleQuestionClick = (event) => {
        const selectedQuestion = event.target.innerText;
        document.querySelector('input[name="question"]').value = selectedQuestion;
    }

    // const handleLogout = () => {
    //     localStorage.removeItem('loginData');
    //     setLoginData(null);
    //     setState({ ...state, response: "" });
    //     document.getElementById("signInDiv").hidden = false
    // };

    return (
        <section className="form-section bg-black">
            <div className="container">
                <div className="text-header" style={{ zIndex: "1" }}>
                    <h2 className="common-heading gradient-color text-center mb-sm-2 mb-md-1 wow fadeInUp">What troubles you my
                        friend?</h2>
                    <h4 className="sub-heading text-center wow fadeInUp red mb-2">Find solace in the wisdom of Shree Krishna
                    </h4>
                    <p className="sub-text text-center wow fadeInUp red mb-5">5,85,030+ Updesh generated so far+</p>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 mb-4 mb-lg-0">
                        <div className="form-outr">
                            <form onSubmit={handleSubmit} className="form-wrap">
                                <div className="input-wrap">
                                    <input type="text" placeholder="Enter your Question" name="question" value={state.question} onChange={(event) => setState({ ...state, question: event.target.value })} />
                                    <div className="select-question">
                                        <a href="#" onClick={handleQuestionClick}>Meaning of Dharma?</a>
                                        <a href="#" onClick={handleQuestionClick}>How to find inner peace?</a>
                                        <a href="#" onClick={handleQuestionClick}>What is life?</a>
                                    </div>
                                </div>
                                <button type="submit"
                                    className="submit-btn"><img src="images/submit-arrow.svg"
                                        alt="" /></button>
                            </form>
                            {/* <div id='signInDiv'>

                            </div> */}
                            {/* {
                                loginData &&
                                <div>
                                    <Button variant="danger" onClick={handleLogout}>Log Out</Button>{' '}
                                </div>
                            } */}
                            {state.loading ? (
                                <p>Loading...</p>
                            ) : (
                                <Result result={state.response} />
                            )}

                            {/* Popup */}
                            {state.showPopup && (
                                <div className="popup">
                                    <div className="popup-inner">
                                        {/* Content of the popup */}

                                        <MyModal closeModal={closeModal} />

                                    </div>
                                </div>
                            )}


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

export default Question