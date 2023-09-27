import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const FooterSkeleton = (props: Props) => {
  return (
    <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        
     className='fixed bottom-0 flex justify-evenly w-full py-4 bg-indigo-950 bg-opacity-30'>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
    </motion.div>
  )
}

export default FooterSkeleton