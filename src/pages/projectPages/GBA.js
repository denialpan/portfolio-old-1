import React from 'react'
import { motion } from 'framer-motion'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import GBAGame from './gbaImages/GBA.mp4'
import GBAGameThumbnail from './gbaImages/GBAThumbnail.png'

export const code1 = `
//start game
if (KEY_JUST_PRESSED(BUTTON_START)) {
    
    vBlankCounter = 0;                             //reset blank counter for VSync

    drawFullScreenImageDMA(tetrisGameBackground);          // drawbackground image
    drawImageDMA(PLAYERICON_WIDTH, PLAYERICON_HEIGHT, playerIcon);  // draw player
}

`.trim();

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
                        <i> Video of the gameboy game I made, showcased in an emulator. Graphics and objective heavily inspired by Tetris and clearing lines, just horizontally instead of vertically. </i>
                    </figcaption>
                </figure>
            </p>

            <p> It's extremely simple, definitely not something worthy of a high quality Nintendo game, but I still learned a lot from it. For the little processing power that a gameboy has, every possible optimization had to be squeezed out. </p>
            
            <p> A major optimization was the drawing of graphics on the screen. Traditionally, processing power is fast enough for each pixel on a screen to be redrawn quizkly, even if the color is the same. However, this is not a luxury that a gameboy has. If a gameboy were to redraw every frame in its entirety, it would cause visual tearing in places where the screen has yet to finish drawing. This problem can be avoided if we know what pixels do not need to be redrawn.</p>

            <p> There is a subtle background image that remains static during gameplay. Redrawing the entire background would be a huge waste, since the only dynamic thing on the scene is just player movement. This was one way for me to optmize my game, where only the near pixels around the player were set to be redrawn instead. This allowed player movement to be smooth at 60 FPS. </p>

            <p> Code-wise, there were specifics needed in what/the area to draw, such as a single pixel, a rectangle of pixels, and text, and also undrawing portions of the display, primarily used by player movement to redraw the background. When these methods are combined, the drawing of graphics is trivial when just thought as layers on a canvas. </p>

            <p>
                <figure><SyntaxHighlighter language="c" style={oneDark}>{code1}</SyntaxHighlighter>
                <figcaption><i>Code snippet description ill add something here</i> </figcaption>
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