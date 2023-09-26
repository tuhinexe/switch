"use client";

import React,{useEffect,useState} from 'react'
import {FiSun} from 'react-icons/fi'
import {HiOutlineMoon} from 'react-icons/hi'
import { useTheme} from 'next-themes'
import {motion} from 'framer-motion'

type Props = {}

const ThemeSwitcher = (props: Props) => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Suspense fallback
        return <div className='absolute animate-pulse rounded-full w-14 h-8 bg-gray-200 dark:bg-slate-100'></div>
    }



  return (
    <div className='absolute rounded-full border-2 border-gray-800 dark:border-white w-14 bg-sky-200 dark:bg-gray-600'>
        
            <motion.button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            initial={{x:0}}
            animate={{x: theme === 'dark' ? 0 : 20}}
            transition={
                {type: 'spring', stiffness: 150, duration: 0.2}
            }
            className={`p-2 rounded-full bg-yellow-200 relative`}>
                {theme === 'dark' ? <HiOutlineMoon className='text-gray-800' /> : <FiSun className='text-gray-800' />}
            </motion.button>
            
        
    </div>
  )
}

export default ThemeSwitcher