import React from 'react'
import { motion } from 'framer-motion'
import GBAGame from './gbaImages/GBA.mp4'
import GBAGameThumbnail from './gbaImages/GBAThumbnail.png'

function GBA() {
    return (

        <motion.div 
            key="GBA"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}>

            <p> I've always been fond of retro-styled games. </p>

            <p className='center-figures'>
                <figure>
                    <video id="media" className="project-images" src={GBAGame} poster={GBAGameThumbnail} width="100%" controls preload='all'></video>
                    <figcaption>
                        <i> Video showcase of the Gameboy game I made. Graphics and objective heavily inspired by Tetris of clearing lines. </i>
                    </figcaption>
                </figure>
            </p>

            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>


        </motion.div>

    )
}

export default GBA