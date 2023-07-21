import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Blender() {
  return (

    <AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> Blender </motion.div>

    </AnimatePresence>

  )
}

export default Blender