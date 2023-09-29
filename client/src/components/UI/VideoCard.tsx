import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  isLive?: boolean
}

const VideoCard = (props: Props) => {
  return (
    <motion.div 
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className='hover:cursor-pointer flex flex-col gap-2 justify-start items-start'>
        <div className='relative'>
            <small className='absolute ml-2 bg-red-600 mt-2 rounded-md text-md px-[3px] text-white'>Live</small>
            <span className='absolute bottom-1 text-sm px-2 bg-indigo-950/80 left-1 rounded-lg text-white'>500 watching</span>
            <Image className='rounded-md lg:w-[300px] w-[500px]' src='/assets/images/thumbnail.png' alt='thumbnail' width={300} height={300} />
        </div>
        <div className='flex items-center justify-center gap-2'>
            <Image className='bg-indigo-900 p-1 rounded-full' src='/assets/images/hacker.png' alt='avatar' width={50} height={40} />
            <div>
            <p className='text-sm substr'>{`Valorant live with TenZ !insta !sponsor`.substring(0,30) + ' ...'}</p>
            <small>TenZ</small>
            </div>
        </div>
    </motion.div>
  )
}

export default VideoCard