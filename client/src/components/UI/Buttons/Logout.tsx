import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const Logout = (props: Props) => {
  return (
    <motion.button
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        
     className='flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 '
    >
        Logout
    </motion.button>
    
  )
}

export default Logout