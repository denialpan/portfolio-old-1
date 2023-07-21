import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function GBA() {
  return (

    <AnimatePresence>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> GBA </motion.div>
        
    </AnimatePresence>

  )
}

export default GBA