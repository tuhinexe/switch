'use client';
import React from 'react';
import { toast } from 'react-toastify';
import ThemeSwitcher from './ThemeSwitcher';
import SearchBar from '../UI/SearchBar';
import { PiBellRingingBold } from 'react-icons/pi';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" flex justify-between w-full items-start mt-4">
      <div className="ml-6">
        <SearchBar
          placeHolder="Search streams or channels"
          onSearch={(searchTerm: string) => {
            toast.info(`Searching for ${searchTerm}`);
          }}
        />
      </div>
      <div className="flex justify-center items-center mr-6 gap-6">
        <ThemeSwitcher />
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-indigo-900/20 cursor-pointer"
          title="Start Streaming"
        >
          <AiOutlineVideoCameraAdd className="text-primary" size={25} />
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-indigo-900/20 cursor-pointer"
          title="Notifications"
        >
          <PiBellRingingBold className="text-primary" size={25} />
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-indigo-900/20 cursor-pointer"
          title="Profile"
        >
          <Image src="/assets/images/hacker.png" alt='profile-logo'  width={25} height={40} />
        </motion.span>
      </div>
    </nav>
  );
};

export default Navbar;
