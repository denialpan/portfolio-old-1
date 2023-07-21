import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useState } from "react";
import './Projects.scss'

import Navigation from '../components/Navigation'
import Jailbreak from './projectPages/Jailbreak'
import Blender from './projectPages/Blender'
import GBA from './projectPages/GBA';

function displayContent(param) {

    switch (param) {
        case "Jailbreak":
            return <Jailbreak />
        case "Blender":
            return <Blender />;
        case "GBA":
            return <GBA />;
        default:
            return "BOBBY";
    }

}

function Projects() {

    const [projectContent, setProjectContent] = useState("Jailbreak");

    return (
        <motion.div className='projects-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

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

            <div className='projects-quick-description'>

                <p>
                    This is a quick description of the multiple projects that I have completed and are in the process of learning. This page will always expand!
                </p>

            </div>

            <div className='projects-sidebar'>
                
                <p onClick={() => setProjectContent("Jailbreak")}> Jailbreak </p>
                
                <p onClick={() => setProjectContent("Blender")}> Blender </p>

                <p onClick={() => setProjectContent("GBA")}> GBA Game </p>


            </div>

            <div className='projects-display-container'>
                
                {displayContent(projectContent)}
                
            </div>

            

        </motion.div>
    )
}

export default Projects