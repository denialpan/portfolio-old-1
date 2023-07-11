import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import './Projects.scss'

function Projects() {
    return (
        <motion.div className='projects-container'>

            <div className='navigation'>
                <p>

                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/about">About</Link></span>
                    <span><Link to="/projects">Projects</Link></span>
                    <span><Link to="/blog">Blog</Link></span>

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