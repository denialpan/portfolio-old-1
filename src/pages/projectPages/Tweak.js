import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import doabarrelwall from '/portfolio/src/images/tweak/doabarrelwall.png'
import images from '/portfolio/src/images/tweak/images.png'
import '/portfolio/src/pages/Projects.scss'

function Tweak(props) {

    return (
        
        <motion.div

            key="Tweak"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}>

            <p> When I got my first iPhone at around 2018, there were small things about iOS 12 that felt lackluster, things that I saw that Android succeeded in. This was around the time when I invested in jailbreaking my phone, as I discovered that there were community-garnered system modifications, called "tweaks" that I could install to improve battery and add quality of life changes. </p>

            <p> The community is large and active in the number of users and developers creating tweaks; a majority of these tweaks served to fill in gaps that Apple failed to implement during early iOS versions that were both questioning of why Apple did not incorporate them into iOS and seeing how simple they were to fix by casual enthusiasts. As such, I wanted to contribute to the Jailbreak community by creating a tweak to fill in a gap. </p>

            <p> Up until iOS 16 was released in September 2022, there was no native way to cycle through multiple wallpapers on an iPhone, a feature that Android and Windows had decades ago. This was a frustration for me, so I went to create <b>DoABarrelWall</b>, a way to natively add this feature to set multiple homescreen and lockscreen wallpapers. </p>

            <p className='center-all-of-this'>
                
            <motion.img className="tweak-images" width="200" src={doabarrelwall} alt="bobby" onClick={function() {props.lightbox(); props.getImage(doabarrelwall);}}></motion.img>
            <motion.img className="tweak-images" width="200" src={images} alt="bobby" onClick={function() {props.lightbox(); props.getImage(images);}}></motion.img>

            </p>

            <p> The tweak was well received by the <u><Link className="embedded-link"to="https://www.reddit.com/r/jailbreak/comments/lkafdh/free_release_doabarrelwall_change_lockscreen_and/" target="_blank" >community</Link></u>. Upon release, I got positive feedback, many downloads, and requests for new features. As time went on, I not only implemented a majority of requests, but on a deeper level, optimized the tweak to utilize less memory and load backgrounds faster. I also learned a lot from two other people well-known in the community, and with their contribution, I learned  </p>

            <p> </p>

        </motion.div>

    )
}

export default Tweak