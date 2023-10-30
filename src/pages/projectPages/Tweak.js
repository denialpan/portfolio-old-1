import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

import doabarrelwall from './tweakImages/doabarrelwall.png'
import images from './tweakImages/images.png'
import imagesShowcase from './tweakImages/images showcase.mp4'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Tweak.scss'

export const hooking = `
//get update events on device lock - Lockscreen
%hook SBLockScreenManager
    - (void)lockUIFromSource:(int)arg1 withOptions:(id)arg2 completion:(id)arg3 {
        
        %orig;      // perform original code as intended by Apple

        updateWallpaperForLocation(kLockScreen);
        if (disableChangeOnAppExit)
            updateWallpaperForLocation(kHomeScreen);

        // ... other code I need to run while this class is called
    }
%end
`.trim();

function Tweak({returnImage}) {

    return (
        
        <motion.div

            className='initialize-flex'
            key="Tweak"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}>

            <p className='div1'> When I got my first iPhone at around 2018, there were small things about iOS 12 that felt lackluster, things that I saw that Android succeeded in. This was around the time when I invested in jailbreaking my phone, as I discovered that there were community-garnered system modifications, called "tweaks" that I could install to improve battery and add quality of life changes. </p>

            <p className='div2'> The community is large and active in the number of users and developers creating tweaks; a majority of these tweaks served to fill in gaps that Apple failed to implement during early iOS versions that were both questioning of why Apple did not incorporate them into iOS and seeing how simple they were to fix by casual enthusiasts. As such, I wanted to contribute to the Jailbreak community by creating a tweak to fill in a gap. </p>

            <p className='center-figures'>
                <figure style={{maxWidth: 200}} onClick={function() {returnImage(doabarrelwall)}}>
                <img id="media" className="project-images" type='image/jpg' src={doabarrelwall} width="100%" alt="doabarrelwall"></img>
                    <figcaption>
                        <i>Initial tweak landing page, with various settings for operation and performance.</i>
                    </figcaption>
                </figure>

                <figure style={{maxWidth: 200}} width="200px" onClick={function() {returnImage(images)}}>
                    <img id="media" className="project-images" type='image/jpg' src={images} width="100%" alt="images"></img>
                    <figcaption>
                        <i>Page to add, remove, and save images to act as wallpapers to cycle through.</i>
                    </figcaption>
                </figure>
            </p>

            <p className='item3'> Up until iOS 16 was released in September 2022, there was no native way to cycle through multiple wallpapers on an iPhone, a feature that Android and Windows had decades ago. This was a frustration for me, so I went to create <b>DoABarrelWall</b>, a way to natively add this feature to set multiple homescreen and lockscreen wallpapers. </p>


            <p> The tweak itself is functionality simple, but there was much I was walking into blind; the prerequisites for tweak development was largely centered on already owning macOS products that would give access to Xcode and easy debugging. However, because I firmly prefer Windows over macOS, much of these perks that other tweak developers had I was not able to experience. As such, much of this code had to be written with tedious ways to debug that would otherwise be redundant if I had a Apple computer. </p>

            <p> Thankfully, much of the code from iOS versions 13 - 15 predominantly stayed the same, so whatever code I wrote on my iPhone XR, iOS 13 could be ran flawlessly on a much newer model on iOS 15. </p>

            <p> For me to run my own code, I had to hook onto existing classes and either override their entire default function, or simply add my own logic that needed to be run for my tweak to work as intended. Hooking onto classes are a great way to handling user events and detecting the state of the phone, and from this, also determines when this code is to be run. </p>

            <p>
                <figure><SyntaxHighlighter language="swift" customStyle={{
                    fontSize: 16,
                    padding: 10,
                    margin: 0,
                    borderRadius: 10
                    }} style={oneDark}>{hooking}</SyntaxHighlighter>
                    <figcaption><i> Example code of hooking onto <code>SBLockScreenManager</code>. This is the class that handles the device screen going to sleep and when my own code would run. If <code>%orig</code> were to be removed, any default code that Apple had themselves would not run. </i> </figcaption>
                </figure>
            </p>

            <p> The most difficult part of this project, and also the one that I am the most proud of, are the options and preferences. Creating static preferences is relatively simple with the property list native to iOS, but for it to be dynamic and continue to feel natural to iOS, many workarounds had to be performed. </p>

            <p className='center-figures'>
                <figure>
                    <video id="media" className="project-images" src={imagesShowcase} width="100%" style={{maxHeight: 1000}} alt="img showcase" controls preload='all'></video>
                    <figcaption>
                        <i> This pages utilizes this <u><Link className='embedded-link' to="https://github.com/MrGcGamer/LibGcUniversalDocumentation" target="_blank">library</Link></u> to invoke the modal to select an image from a user's camera roll.  </i>
                    </figcaption>
                </figure>
            </p>

            <p> The tweak was well received by the <u><Link className="embedded-link"to="https://www.reddit.com/r/jailbreak/comments/lkafdh/free_release_doabarrelwall_change_lockscreen_and/" target="_blank" >community</Link></u>. Upon release, I got positive feedback, many downloads, and requests for new features. As time went on, I not only implemented a majority these requests, but on a deeper level, optimized the tweak to utilize less memory and load backgrounds faster. I also learned a lot from two other people well-known in the community, and with their contribution, I learned new methods to collaborative and joint work to implement pre-existing libraries to my current project.
             </p>

            <p> Eventually, this tweak became end-of-life, due to Apple adding the feature to cycle through an album of pictures officially in iOS 16, so support for this tweak ended around iOS 15. However, I enjoyed the creation process immensely; this project was my first major project into creating something that others could use and freely experience. In the past, all of my projects have consisted to just run locally and were small tests that I would fool around with myself, so this project is a big accomplishment for me and and I'm extremely proud of what I have been able to create and the people I worked with. </p>
            
            <p> You can view this project on <u><Link className="embedded-link"to="https://github.com/denialpan/DoABarrelWall" target="_blank" >Github</Link></u> and my release post on <u><Link className="embedded-link"to="https://www.reddit.com/r/jailbreak/comments/lkafdh/free_release_doabarrelwall_change_lockscreen_and/" target="_blank" >Reddit</Link></u>!</p>

            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            
        </motion.div>

    )
}

export default Tweak