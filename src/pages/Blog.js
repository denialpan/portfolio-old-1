import React from 'react'
import { motion } from 'framer-motion'
import NavigationMobile from '../components/NavigationMobile'
import NavigationDesktop from '../components/NavigationDesktop'
import './Blog.scss'


function Blog() {

    return (
        <motion.div className='blog-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='mobile-menu'> <NavigationMobile /> </div>
            <div className='desktop-menu'> <NavigationDesktop /> </div>

            <h1>under construction</h1>
        </motion.div>
    )
}

export default Blog