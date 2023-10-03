import React from 'react'
import Image from 'next/image'
import Button from '../UI/Buttons/Button'
import VideoCard from '../UI/VideoCard'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {motion} from 'framer-motion'

type Props = {}

const ProfileCard = (props: Props) => {
  return (
    <div className='w-full mt-4'>
      <div className='flex items-center justify-between'>
        <div className='flex justify-center items-center gap-4 ml-4'>
          <Image className='rounded-full bg-indigo-900 p-2' src='/assets/images/hacker.png' alt='avatar' width={100} height={100} />
          <div>
          <h1 className='text-3xl font-head font-bold'>TraaxXD</h1>
          <small>@traaxxd</small>
          
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 mr-4'>
          <Button onClick={()=> console.log("Clicked")}>Edit Profile</Button>
          {/* <Button onClick={()=> console.log("Clicked")}>Follow</Button>
          <Button onClick={()=> console.log("Clicked")}>Subscribe</Button> */}
        </div>
      </div>
      <div className='mt-2 flex flex-col'>
        <motion.h1 
        className='text-xl font-bold ml-4 mt-4'>About</motion.h1>
        <p className='ml-4 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quae incidunt pariatur architecto omnis magni quis. Natus deserunt iste modi ipsa, magnam voluptates obcaecati dolores nulla aspernatur qui hic blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non laborum labore sapiente aut magni cupiditate itaque, earum impedit explicabo quo adipisci doloribus corporis vitae odit dolore eligendi praesentium? Totam.</p>
      </div>
      <div className='mt-2 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold ml-4 mt-4'>Streams</h1>
          <motion.span 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer text-primary mt-4 bg-indigo-900/30 p-2 rounded-full'>
          <AiOutlineArrowRight className='' size={25} />
            </motion.span>
        </div>
        <div className='flex gap-2 ml-4'>
        {
          [...Array(5)].map((_, i) => (
            <VideoCard key={i} />
          )
          )
        }
        </div>
      </div>
      <div className='mt-2 flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold ml-4 mt-4'>Following</h1>
        <motion.span 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer text-primary mt-4 bg-indigo-900/30 p-2 rounded-full'>
          <AiOutlineArrowRight className='' size={25} />
            </motion.span>
        </div>
        <div className='flex gap-4 ml-4'>
        {
          [...Array(10)].map((_, i) => (
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
             key={i} className=' flex flex-col justify-center items-center cursor-pointer'>
              <Image  className='rounded-full bg-indigo-900 p-2' src='/assets/images/hacker.png' alt='avatar' width={150} height={100} />
              <p className='text-center text-lg'>TraaxXD</p>
              <small>10K Followers</small>
            </motion.div>
          )
          )
        }
      </div>
      </div>
      <div className='mt-2 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold ml-4 mt-4'>Liked Streams</h1>
          <motion.span 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer text-primary mt-4 bg-indigo-900/30 p-2 rounded-full'>
          <AiOutlineArrowRight className='' size={25} />
            </motion.span>
        </div>
        <div className='flex gap-2 ml-4'>
        {
          [...Array(5)].map((_, i) => (
            <VideoCard key={i} />
          )
          )
        }
        </div>
      </div>
      

    </div>
  )
}

export default ProfileCard