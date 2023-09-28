import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const Banner = (props: Props) => {
  return (
    <motion.section className='flex p-2 rounded-md'>
        <Image src='/assets/images/banner.jpg' alt='banner' width={1500} height={900} className='w-full rounded-md' />

    </motion.section>
  )
}

export default Banner