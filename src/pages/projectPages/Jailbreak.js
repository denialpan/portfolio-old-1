import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

function Jailbreak() {
    return (

        <AnimatePresence>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> 
            
                <p> Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak Jailbreak </p>
            
             </motion.div>

        </AnimatePresence>


    )
}

export default Jailbreak