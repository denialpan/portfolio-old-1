import React from 'react'
import { motion } from "framer-motion"

function Jailbreak() {
    return (

        <motion.div 
            key="Jailbreak"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}>

            <p> Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak </p>

        </motion.div>

    )
}

export default Jailbreak