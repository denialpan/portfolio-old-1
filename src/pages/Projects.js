import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import './Projects.scss'
import Navigation from '../components/Navigation'

function Projects() {
    return (
        <motion.div className='projects-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className='mobile-menu'>

                <Navigation />
                
            </div>

            <div className='desktop-menu'>

                <p>

                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/about">About</Link></span>
                    <span><Link to="/projects">Projects</Link></span>
                    <span><Link to="/blog">Blog</Link></span>
                </p>

            </div>

            <div className='projects-quick-description'>

                <p>
                    OSHOS
                </p>

            </div>

            <div className='projects-sidebar'>
                <p>
                    Jailbreak
                    
                </p>
            </div>

        </motion.div>
    )
}

export default Projects