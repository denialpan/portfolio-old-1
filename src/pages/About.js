import React from 'react'
import { motion } from "framer-motion"
import pfp from '../images/pfp.jpg'
import NavigationMobile from '../components/NavigationMobile'
import NavigationDesktop from '../components/NavigationDesktop'

import './About.scss'

function About() {

    return (

        <motion.div className="about-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className='mobile-menu'> <NavigationMobile /> </div>
            <div className='desktop-menu'> <NavigationDesktop /> </div>

            <img className="pfp" src={pfp} alt="pfp" />

            <div className="about-description">

                <p><b> Thank you for visiting my portfolio! I hope you've liked it so far. </b></p>
                
                <p> In the early 2000s, I grew up with an old clunky Dell laptop with Windows XP that my father let me use. Apart from the few preexisting games like Space Cadet Pinball and Minesweeper, there wasn't a whole lot I did with it, but it became one of my first fond introductions to computers.</p>
                
                <p> Over the years, I've learned it has become increasingly more convenient for everyone to create software, both in the resources online and tools available. Apart from me contributing to the community by leading a coding club organization and teaching 300 members at my highschool, I wanted to branch out more and develop tools and software that people all over the world can see and use. </p>
                
                <p> Today, I am majoring in Computer Science at Georgia Tech, where not only do I have the opportunity to learn from the best people in the industry, but also harness my skill and desire to create software in a clean and efficient way that creates a seamless user experience. </p>
                
                <p> You can learn more about my experience on my resume, or visit my project page to see quick and detailed previews of what I am currently working on! </p>
                
            </div>

        </motion.div>

    )
}

export default About