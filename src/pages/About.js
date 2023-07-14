import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import pfp from '../images/pfp.jpg'
import './About.scss'
import Navigation from '../components/Navigation'

function About() {

    return (

        <motion.div className="about-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className='mobile-menu'>

                <Navigation />
                
            </div>

            <div className='desktop-menu'>

                

                <span><Link to="/">Home</Link></span>
                <span><Link to="/about">About</Link></span>
                <span><Link to="/projects">Projects</Link></span>
                <span><Link to="/blog">Blog</Link></span>
                

                <hr class="solid"/>

            </div>

            <img className="pfp" src={pfp} alt="pfp" />

            <div className="about-description">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam urna, mollis eget blandit id, volutpat ac ipsum. Donec ac orci non quam lacinia egestas nec eget felis. Aenean id pellentesque lacus. Vivamus euismod turpis vel nunc vestibulum, congue molestie lacus hendrerit. Donec sit amet ornare orci. Nulla facilisi. Sed sit amet vulputate elit, id fringilla orci. Nulla dui dui, elementum et elit id, ullamcorper ultrices lacus. Aliquam malesuada enim augue, in malesuada dolor viverra in. Vivamus faucibus nulla tristique velit imperdiet, at tincidunt nisi tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ligula turpis, suscipit in massa vitae, vestibulum malesuada odio. Donec volutpat convallis ligula nec sagittis. Etiam ex erat, pharetra sed ante ac, ornare malesuada metus. Suspendisse sit amet feugiat tortor.  </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
                <p> sohos </p>
            </div>



        </motion.div>


    )
}

export default About