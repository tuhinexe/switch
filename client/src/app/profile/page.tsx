'use client';
import React from 'react'
import {motion} from 'framer-motion'
import Banner from '@/components/Profile/Banner'
import ProfileCard from '@/components/Profile/ProfileCard'
import Logout from '@/components/UI/Buttons/Logout';

type Props = {}

const page = (props: Props) => {
  return (
    <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        
     className='flex flex-col overflow-y-scroll h-[90vh] no-scrollbar  items-center rounded-md p-2 bg-indigo-950/10 m-2'>
      <div className='ml-auto'>
      <Logout />
      </div>
        <Banner />
        <ProfileCard />
    </motion.div>
    
  )
}

export default page