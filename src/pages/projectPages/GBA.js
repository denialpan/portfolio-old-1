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

            <p> I've always been fond of retro-styled games and the clear passion from the developers and designers to create simple past-times for the rest of us to enjoy. It's not something I tend to see a whole lot anymore in modern AAA games, with their complexity and over saturation of assets and graphics that blind the player from the experience alone. </p>

            <p> This project was done midway through a course focused on the introduction and fundamentals of the assembly language and C programming. As a fun assignment, we were given a mini project in creating our own game for the Gameboy, due to the simple nature of most games during that time and its limited processing power. As such, retro graphics were a main focus, and I thoroughly loved this project. </p>

            <p className='center-figures'>
                <figure>
                    <video id="media" className="project-images" src={GBAGame} poster={GBAGameThumbnail} width="100%" controls preload='all'></video>
                    <figcaption>
                        <i> Video of the gameboy game I made, showcased in an emulator. Graphics and objective heavily inspired by Tetris of clearing lines. </i>
                    </figcaption>
                </figure>
            </p>

            <p> It's extremely simple, definitely not something worthy of a high quality Nintendo game, but I still learned a lot from it. For the little processing power that a gameboy has, every possible optimization had to be squeezed out. </p>
            
            <p> A major optimization was the drawing of graphics on the screen. Traditionally, processing power is fast enough for each pixel on a screen to be redrawn quizkly, even if the color is the same. However, this is not a luxury that a gameboy has. If a gameboy were to redraw every frame in its entirety, it would cause visual tearing in places where the screen has yet to finish drawing. This problem can be avoided if we know what pixels do not need to be redrawn.</p>

            <p> For how I implemented my game, there is a full background image with subtle  </p>

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