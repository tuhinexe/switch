'use client';
import React from 'react';
import { toast } from 'react-toastify';
import ThemeSwitcher from './ThemeSwitcher';
import SearchBar from '../UI/SearchBar';
import { PiBellRingingBold } from 'react-icons/pi';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../UI/Buttons/Button';
import Signup from '../Login/Signup';
import Login from '../Login/Login';

type Props = {};

const Navbar = (props: Props) => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);


  return (
    <nav className=" flex justify-between w-full items-start lg:mt-4">
      <div className="lg:ml-6 hidden lg:block">
        <SearchBar
          placeHolder="Search streams or channels"
          onSearch={(searchTerm: string) => {
            toast.info(`Searching for ${searchTerm}`);
          }}
        />
      </div>
      <div className="w-full bg-indigo-950/30 lg:bg-inherit py-2 lg:py-auto lg:w-auto flex justify-end lg:justify-center items-center lg:mr-6 lg:gap-6 gap-2">
        <div className=' flex justify-center items-center p-2 lg:hidden mr-auto ml-2'>
        <Image className='' src="/assets/logos/logo-new.png" alt='logo' width={30} height={40} />
        <p className='font-head text-lg font-bold'>Switch</p>
        </div>
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
        <Button
          className="hidden lg:block"
          onClick={() => {
            setShowSignup(true);
          }}
        >
          Sign up
        </Button>
        <Button
          className="hidden lg:block"
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Login
        </Button>
        <Signup isOpen={showSignup} onClose={(value)=> setShowSignup(value)}/>
        <Login isOpen={showLogin} onClose={(value)=> setShowLogin(value)}/>
        {/* <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-indigo-900/20 cursor-pointer"
          title="Profile"
        >
          <Link href='/profile'>
          <Image src="/assets/images/hacker.png" alt='profile-logo'  width={25} height={40} />
          </Link>
        </motion.span> */}
      </div>
    </nav>
  );
};

export default Navbar;
