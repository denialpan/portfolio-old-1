import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import './Projects.scss'

import NavigationMobile from '../components/NavigationMobile'
import NavigationDesktop from '../components/NavigationDesktop';
import Tweak from './projectPages/Tweak'
import Blender from './projectPages/Blender'
import GBA from './projectPages/GBA';

function displayContent(param) {

    switch (param) {
        case "iOS Tweak Development":
            return <Tweak key="Tweak" />
        case "Blender":
            return <Blender key="Blender" />
        case "GBA":
            return <GBA key="GBA" />
        default:
            return null;
    }

}

function Projects() {

    const [projectContent, setProjectContent] = useState("Tap me");
    const [mobileDropdown, setMobileDropdown] = useState(false);
    const projects = ["iOS Tweak Development", "Blender", "GBA"];
    const menuItems = [];
    
    for (let i = 0; i < 3; i++) {
        if (projects[i] !== projectContent) {
            menuItems.push(<p onClick={() => setProjectContent(`${projects[i]}`)}> {projects[i]} </p>)
        }
    }


    const toggleDropdownMenu = () => {
        setMobileDropdown(!mobileDropdown);
    }

    return (
        <motion.div className='projects-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            <div className='mobile-menu'> <NavigationMobile /> </div>
            <div className='desktop-menu'> <NavigationDesktop /> </div>

            <div className='projects-quick-description'>
                <p>
                    This page lists current projects that I have finished or am currently working on. Select each one below to learn more!
                </p>
            </div>

            <div className='projects-sidebar'>
                <motion.p whileHover={{ cursor: "pointer", scale: 1.07, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 1 }} onClick={() => setProjectContent("iOS Tweak Development")}> iOS Tweak Development </motion.p>
                <motion.p whileHover={{ cursor: "pointer", scale: 1.07, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 1 }} onClick={() => setProjectContent("Blender")}> Blender </motion.p>
                <motion.p whileHover={{ cursor: "pointer", scale: 1.07, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 1 }} onClick={() => setProjectContent("GBA")}> GBA Game </motion.p>
            </div>

            <div className='projects-dropdown-menu'>

                <motion.div className='menu-dropdown-button'
                    onClick={toggleDropdownMenu}
                    whileTap={{ scale: 0.95 }}>
                    {`${projectContent}`}   
                </motion.div>

                <AnimatePresence>
                    {mobileDropdown && (

                        <motion.div className='menu-dropdown-items'
                            onClick={toggleDropdownMenu}
                            initial={{ opacity: 0, height: 0, padding: 0, marginTop: 0}}
                            animate={{ opacity: 1, height: menuItems.length * 29, padding: 5, marginTop: 5}}
                            exit={{ opacity: 0, height: 0, padding: 0, marginTop: 0}}
                            transition={{ ease: "easeInOut", duration: 0.3 }}>
                            
                            {menuItems}

                        </motion.div>

                    )}
                </AnimatePresence>

            </div>

            <div className='projects-display-container'>
                <AnimatePresence mode="wait">

                    {displayContent(projectContent)}

                </AnimatePresence>
            </div>



        </motion.div>
    )
}

export default Projects