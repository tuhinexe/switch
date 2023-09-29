"use client";
import React,{useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineFire,
  AiOutlineBook,
} from 'react-icons/ai';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { usePathname } from 'next/navigation';
import FooterSkeleton from '../UI/Skeletons/FooterSkeleton';

type Props = {};

const MobileSidebar = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();

    useEffect(() => {
        
           setTimeout(() => {
                setMounted(true);
            }, 5000);
        }, []);

        if (!mounted) {
            return (
                <FooterSkeleton />
            );
        }

  return (
    <motion.footer
      className="z-50 fixed bottom-0 bg-indigo-200/50 backdrop-blur-md dark:bg-indigo-950 w-full flex justify-evenly p-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`bg-indigo-900/30 p-2 rounded-xl ${
          pathName === '/' && 'bg-indigo-900/50'
        }`}
        animate={pathName === '/' ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={
          pathName === '/'
            ? { duration: 1.5, repeat: Infinity }
            : { duration: 0.5 }
        }
      >
        <Link href="/">
          <AiOutlineHome className="text-primary" size={25} />
        </Link>
      </motion.div>
      <motion.div
        className={`bg-indigo-900/20 p-2 rounded-xl ${
          pathName === '/discover' && 'bg-indigo-900/50'
        }`}
        animate={pathName === '/discover' ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={
          pathName === '/discover'
            ? { duration: 1.5, repeat: Infinity }
            : { duration: 0.5 }
        }
      >
        <Link href="/discover">
          <AiOutlineCompass className="text-primary" size={25} />
        </Link>
      </motion.div>
      <motion.div
        className={`bg-indigo-900/20 p-2 rounded-xl ${
          pathName === '/trending' && 'bg-indigo-900/50'
        }`}
        animate={pathName === '/trending' ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={
          pathName === '/trending'
            ? { duration: 1.5, repeat: Infinity }
            : { duration: 0.5 }
        }
      >
        <Link href="/trending">
          <AiOutlineFire className="text-primary" size={25} />
        </Link>
      </motion.div>
      <motion.div
        className={`bg-indigo-900/20 p-2 rounded-xl ${
          pathName === '/favourite' && 'bg-indigo-900/50'
        }`}
        animate={pathName === '/favourite' ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={
          pathName === '/favourite'
            ? { duration: 1.5, repeat: Infinity }
            : { duration: 0.5 }
        }
      >
        <Link href="/favourite">
          <AiOutlineBook className="text-primary" size={25} />
        </Link>
      </motion.div>
      <motion.div
        className={`bg-indigo-900/20 p-2 rounded-xl ${
          pathName === '/search' && 'bg-indigo-900/50'
        }`}
        animate={pathName === '/search' ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={
          pathName === '/search'
            ? { duration: 1.5, repeat: Infinity }
            : { duration: 0.5 }
        }
      >
        <Link href="/search">
          <PiMagnifyingGlass className="text-primary" size={25} />
        </Link>
      </motion.div>
    </motion.footer>
  );
};

export default MobileSidebar;
