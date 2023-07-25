import React from 'react'
import { motion } from 'framer-motion'

function Blender() {
    return (

        <motion.div 
            key="Blender"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}>

            <p> Blender Blender Blender Blender Blender Blender Blender Blender Blender Blender Blender Blender Blender Blender Blender  </p>

        </motion.div>

    )
}

export default Blender