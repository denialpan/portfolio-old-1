import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import './Home.scss'
  
function Home() {

    const text1 = 'Hello! I am a 20 year old computer science major currently studying at the Georgia Institute of Technology. I have a lot of experience in efficient programming practices for various data structures in multiple languages. ';

    const text2 = "I also have an active hobby in 3D animation and simulation, along with minimalistic UI design, like this portfolio right here!"

    const text3 = "If any of this interests you, have a look around!"

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
                
            </p>

        </motion.div>

    )
}

export default Home