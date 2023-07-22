import React from 'react'
import { motion } from 'framer-motion'

function GBA() {
    return (

        <motion.div 
            key="GBA"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}>

            <p> GBA GBA GBA GBA GBA GBA GBA GBA </p> 
        
        </motion.div>

    )
}

export default GBA