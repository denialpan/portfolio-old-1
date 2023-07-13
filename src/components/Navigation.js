import Hamburger from "./Hamburger"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../components/Navigation.scss'

export default function Navigation() {

    const [hamburger, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }

 


    return (
        <div>
            <div className="mobile-nav" >

                <motion.div className="hamburger"
                    onClick={toggleHamburger}
                    whileTap={{ scale: 0.9 }}>
                    <Hamburger isOpen={hamburger} />
                </motion.div>

                <AnimatePresence>
                    {hamburger && (

                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 230 }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ ease: "easeInOut", duration: 1 }}>

                            <ul className="menu-items">

                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/blog">Blog</Link></li>

                            </ul>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
  
        </div>
    )
}