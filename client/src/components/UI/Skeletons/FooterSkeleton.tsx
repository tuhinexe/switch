import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const FooterSkeleton = (props: Props) => {
  return (
    <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        
     className='z-50 fixed bottom-0 flex justify-evenly w-full py-4 bg-indigo-200/50 backdrop-blur-md dark:bg-indigo-950 '>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
        <div className='p-4 rounded-xl animate-pulse bg-indigo-800/30'></div>
    </motion.div>
  )
}

export default FooterSkeleton