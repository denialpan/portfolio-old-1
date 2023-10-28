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

    // on each frame, draw/update only the chunk of a fullscreen image 
    // chunk is based on the size and position of player
    undrawImageDMA(player.y, player.x, 
                   PLAYERICON_WIDTH, PLAYERICON_HEIGHT, 
                   tetrisGameBackground);
}

`.trim();

export const code2 = `
// gravity (large values are closer to ground)
if (player.y < 125) {                 // if player is not touching ground
    player.yVelocity += 0.5;          // gradually increase y velocity on each frame
    player.y += player.yVelocity;     // update player y position
} else {
    player.yVelocity = 0;             // stick to ground
    player.y = 125;
}

// ... left then player.x--  right then player.x++ ...

// jumping 
// check that player is on ground to prevent jumping in midair
if (KEY_DOWN(BUTTON_UP, currentButtons) && player.y == 125) {
    player.yVelocity = -7;            // set initial upward velocity
    player.y += player.yVelocity;     
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

            <p> This project was done midway through a course focused on the introduction and fundamentals of the assembly language and C programming. As a fun assignment, we were given a mini project in creating our own game for the gameboy, due to the simple nature of most games during that time and its limited processing power. As such, retro graphics were a main focus, and I thoroughly loved this project. </p>

            <p className='center-figures'>
                <figure>
                    <video id="media" className="project-images" src={GBAGame} poster={GBAGameThumbnail} width="100%" controls preload='all'></video>
                    <figcaption>
                        <i> Video of the gameboy game I made, showcased in an emulator. Graphics and objective heavily inspired by Tetris and clearing lines, just horizontally instead of vertically. </i>
                    </figcaption>
                </figure>
            </p>

            <p> It's extremely simple, definitely not something worthy of a high quality Nintendo game, but I still learned a lot from it. For the little processing power that a gameboy has, every possible optimization had to be squeezed out. </p>
            
            <p> A major optimization was the drawing of graphics on the screen. Traditionally, processing power is fast enough for each pixel on a screen to be redrawn quickly, even if the color is the same. However, this is not a luxury that a gameboy has. If a gameboy were to redraw every frame in its entirety, it would cause visual tearing in places where the screen has yet to finish drawing. This problem can be avoided if we know what pixels do not need to be redrawn.</p>

            <p> There is a subtle background image that remains static during gameplay. Redrawing the entire background would be a huge waste, since the only dynamic thing on the scene is just player movement. This was one way for me to optimize my game, where only the near pixels around the player were set to be redrawn instead. This allowed player movement to be smooth at 60 FPS. </p>

            <p> Code-wise, there were specifics needed in what/the area to draw, such as a single pixel, a rectangle of pixels, and text, and also undrawing portions of the display, primarily used by player movement to redraw the background. When these methods are combined, the drawing of graphics is trivial when just thought as layers on a canvas. </p>

            <p>
                <figure><SyntaxHighlighter language="c" customStyle={{
                    fontSize: 16,
                    padding: 10,
                    margin: 0,
                    borderRadius: 10
                    }} style={oneDark}>{code1}</SyntaxHighlighter>
                <figcaption><i> On each frame, draw the background first, and then the player to overlap it. </i> </figcaption>
                </figure>
            </p>

            <p> There was an extra-credit opportunity for creativity, so I wanted to try something with player movement. For most 2D platformers, where is a way to create jumping with simulated gravity, so by using kinematics, I created physics just for the player, complete with setting an initial velocity and affected acceleration that would bring the player back to the ground in a parabolic motion. </p>

            <p>
                <figure><SyntaxHighlighter language='c' customStyle={{
                    fontSize: 16,
                    padding: 10,
                    margin: 0,
                    borderRadius: 10
                    }} style={oneDark}>{code2}</SyntaxHighlighter>
                <figcaption><i> In the code above, <code>playerVelocity</code> was specifically created and set in a way so that <code>player.y</code> would be affected by a constantly increasing <code>playerVelocity</code> on each frame until it was back on the ground. Note that values closer to 0 in both X and Y directions are closer to the top left of the screen. </i></figcaption>
                </figure>                
            </p>

            <p> The opportunity to take something like creating a small game to be a learning opportunity made this one of my favorite class assignments. This was also my first time making my own game, so a lot of the principles of user events and conditional rendering based on the state of the game shed light on the complexity of GBA games like Pokémon and Super Mario. </p>

            <p> This project is considered finished, I don't see myself making another GBA game, but the takeaways I got from the assignment and the class as a whole are invaluable for my deeper understanding of computer architecture and event handling. </p>

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