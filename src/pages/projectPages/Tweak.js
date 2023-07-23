import React from 'react'
import { motion } from "framer-motion"

function Tweak() {
    return (

        <motion.div 
            key="Tweak"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}>

            <p> iOS Tweak iOS Tweak iOS Tweak iOS Tweak iOS Tweak iOS Tweak iOS Tweak iOS Tweak </p>

        </motion.div>

    )
}

export default Tweak