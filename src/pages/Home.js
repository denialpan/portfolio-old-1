import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import './Home.scss'
  
function Home() {

    // const text1 = 'Hello! I am a 20 year old computer science major currently studying at the Georgia Institute of Technology. I have a lot of experience in efficient programming practices for various data structures in multiple languages. ';

    // const text2 = "I also have an active hobby in 3D animation and simulation, along with minimalistic UI design, like this portfolio right here!"

    // const text3 = "If any of this interests you, have a look around!"

    const text1 = 'i do have existing text but right now i need to fill up space and make sure github can even host this properly';
    const text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam urna, mollis eget blandit id, volutpat ac ipsum. Donec ac orci non quam lacinia egestas nec eget felis.';
    const text3 = 'sohos osh osho hsoh osho hsoh oshhsohsohosh';

    return (

        <motion.div className="home-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

            <h1 className="home-name">  Daniel Pan </h1>

            <p className='home-description'> {text1} </p>
            <p className='home-description'> {text2} </p>
            <p className='home-description'> {text3} </p>

            <p className='home-description center-all-of-this'> 

                <span><Link to="/about">About</Link></span>
                <span><Link to="/projects">Projects</Link></span>
                <span><Link to="/blog">Blog</Link></span>
                
            </p>

        </motion.div>

    )
}

export default Home