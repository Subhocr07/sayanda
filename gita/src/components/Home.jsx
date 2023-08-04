import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from './HeroSection'
import Features from './Features'
import WhatPages from './WhatPage'
import Faq from './Faq'
import Footer from "./Footer"
import Question from './Question'
import Company from './Company'

const Home = () => {
    return (
        <div>

            <HeroSection />

            <Features />
            <WhatPages />
            <Faq />
            <Company />
            <Footer />
        </div>

    )
}

export default Home