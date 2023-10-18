import React from 'react'
import { motion } from 'framer-motion'

import camerashowcase from './blenderImages/camera showcase.gif'

function Blender(props) {
    return (
        
        <motion.div 
            key="Blender"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}>

            <p> In elementary school, I spent a lot of my time drawing 3D objects during class. I was particularly good at drawing geometric shapes in an isometric view, so much so that my teacher took notice of it and even brought it up one time with my parents during a parent-teacher conference. </p>

            <p> I began delving into 3D software sometime during middleschool, but I really started to pick it up in highschool in my engineering class. The program we used was Mastercam, an industry standard CAD software for manufacturing design, and I had a great time using it. Being able to put my thoughts from paper to something more visually representative became a thrill for me. Unfortunately, because I was only using the software license the school provided, I was no longer able to use Mastercam for means of a reasonable hobby once I graduated, so I looked elsewhere to free alternatives. </p>

            <p> A program that I've touched before during middleschool was Blender, but I found it too complex for the purposes I had in mind at the time. The familiarity to coming back to it now is what enticed me to give a try again. This proved to be favorable, as the experience that I had working in Mastercam helped me overcome the issues I came across the first time years ago. </p>

            {/* <figure className='center-all-of-this'>
                <motion.img className="blender-images" width="600" src={camerashowcase} alt="bobby"></motion.img>
                <figcaption className='image-caption'>
                <i> Model inspired by film cameras, custom driver to control light strength and hue of lens. </i>
                </figcaption>
            </figure> */}

            <p className='center-figures'>
                <figure>
                    <embed>  </embed>
                </figure>
            </p>

        </motion.div>

    )
}

export default Blender