import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import './Home.scss'
  
function Home() {

    const text1 = 'Hello! This is what would have been the landing page for my first portfolio, but after spending almost half a year on this, I realized I never liked it in the beginning. This portfolio has not been published before, as it was never finished in my eyes.';

    const text2 = "However, all the content that I've had here can be still explored, as I value archiving progress, and this first iteration of my portfolio is where I learned a majority of React, CSS, and HTML."

    const text3 = "If any of this interests you, have a look around! Everything except this page is exactly how I left it before I decided to restart from scratch."

    return (

        <motion.div className="home-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

            <h1 className="home-name">  Daniel Pan </h1>

            <p className='home-description'> {text1} </p>
            <p className='home-description'> {text2} </p>
            <p className='home-description'> {text3} </p>

            <p className='home-description center-all-of-this'> 
      
                <span><Link to="/about">About</Link></span>
                <span><Link to="/projects">Projects</Link></span>
                <span><Link to="/blog">Blog</Link></span>
                <span><Link to="https://raw.githubusercontent.com/denialpan/portfolio/49e2aad7642935c975cd3f5987d8a5c426c1481d/src/Daniel%20Pan%20-%20Resume.pdf" target="_blank" >Resume</Link></span>              
                
            </p>

        </motion.div>

    )
}

export default Home