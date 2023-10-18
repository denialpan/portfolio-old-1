import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import './Projects.scss'

import NavigationMobile from '../components/NavigationMobile'
import NavigationDesktop from '../components/NavigationDesktop';
import Tweak from './projectPages/Tweak'
import Blender from './projectPages/Blender'
import GBA from './projectPages/GBA';
import { type } from '@testing-library/user-event/dist/type';

function Projects() {

    //mobile dropdown menu for projects
    const [projectContent, setProjectContent] = useState("iOS Tweak Development");
    const [mobileDropdown, setMobileDropdown] = useState(false);

    //implementation for dynamic dropdown menu size, future proof for additional things
    const projects = ["iOS Tweak Development", "Blender", "GBA"];
    const menuItems = [];

    for (let i = 0; i < projects.length; i++) {
        if (projects[i] !== projectContent) {
            menuItems.push(<p onClick={() => setProjectContent(`${projects[i]}`)}> {projects[i]} </p>)
        }
    }

    const toggleDropdownMenu = () => {
        setMobileDropdown(!mobileDropdown);
    }

    //change content
    const displayContent = (param) => {

        switch (param) {
            case "iOS Tweak Development":
                return <Tweak key="Tweak" returnImage={imageClicked}/>
            case "Blender":
                return <Blender key="Blender" />
            case "GBA":
                return <GBA key="GBA" />
            default:
                return null;
        }

    }

    const [showLightbox, setShowLightbox] = useState(false);
    const [media, setMedia] = useState(null);

    const imageClicked = (i) => {
        console.log("IMAGE CLICKED " + i);
        setShowLightbox(true);
        setMedia(i);
        console.log(media)
    }

    const typeOfMedia = () => {
        var re = /(?:\.([^.]+))?$/;
        var extension = re.exec(media)[1];
        if (extension === "png") {
            return <img className="lightbox-media" src={media}></img>
        } else if (extension === "mp4") {
            return <video className="lightbox-media" src={media}></video>
        }
    }

    //reset to top
    const resetScrollPosition = () => {
        document.getElementById('projects-display-container').scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <AnimatePresence>

                {showLightbox && (
                    <motion.div className='lightbox' 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={function() {setShowLightbox(false)}}>                 

                        {typeOfMedia()}

                    </motion.div>
                )}

            </AnimatePresence>

            <motion.div className='projects-container' 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}>

                <div className='mobile-menu'> <NavigationMobile /> </div>
                <div className='desktop-menu'> <NavigationDesktop /> </div>

                <div className='projects-quick-description'>
                    <p> <b> This page lists current projects that I have finished or am currently working on, and my background in them. Select each one below to learn more! </b> </p>
                </div>

                <div className='projects-sidebar' onClick={() => resetScrollPosition()}>
                    <motion.p whileHover={{ cursor: "pointer", backgroundColor: "rgba(255,255,255,0.1)" }} onClick={() => setProjectContent("iOS Tweak Development")}> iOS Tweak Development </motion.p>
                    <motion.p whileHover={{ cursor: "pointer", backgroundColor: "rgba(255,255,255,0.1)" }} onClick={() => setProjectContent("Blender")}> Blender </motion.p>
                    <motion.p whileHover={{ cursor: "pointer", backgroundColor: "rgba(255,255,255,0.1)" }} onClick={() => setProjectContent("GBA")}> GBA Game </motion.p>
                </div>

                <hr class="vertical" />

                <div className='projects-dropdown-menu'>

                    <motion.div className='menu-dropdown-button'
                        onClick={toggleDropdownMenu}
                        whileTap={{ scale: 0.95 }}>
                        {`${projectContent}`}
                    </motion.div>

                    <AnimatePresence>
                        {mobileDropdown && (

                            <motion.div className='menu-dropdown-items' 
                                onClick={() => {
                                    resetScrollPosition();
                                    toggleDropdownMenu();
                                }}
                                initial={{ opacity: 0, height: 0, padding: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: menuItems.length * 29, padding: 5, marginTop: 5 }}
                                exit={{ opacity: 0, height: 0, padding: 0, marginTop: 0 }}
                                transition={{ ease: "easeInOut", duration: 0.3 }}>

                                {menuItems}

                            </motion.div>

                        )}
                    </AnimatePresence>

                </div>

                <div id='projects-display-container' className='projects-display-container'>
                    <AnimatePresence mode="wait">

                        {displayContent(projectContent)}

                    </AnimatePresence>
                </div>

            </motion.div>


        </>


    )
}

export default Projects