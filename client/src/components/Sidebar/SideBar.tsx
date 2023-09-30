import React from 'react';
import Image from 'next/image';
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineFire,
  AiOutlineBook,
  AiOutlineArrowRight,
  AiOutlineGithub
} from 'react-icons/ai';
import { LuRadio } from 'react-icons/lu';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props = {};

const tabs = [
  {
    name: 'Home',
    icon: <AiOutlineHome className="text-primary" size={25} />,
    url: '/',
  },
  {
    name: 'Discover',
    icon: <AiOutlineCompass className="text-primary" size={25} />,
    url: '/discover',
  },
  {
    name: 'Trending',
    icon: <AiOutlineFire className="text-primary" size={25} />,
    url: '/trending',
  },
  {
    name: 'Favourite',
    icon: <AiOutlineBook className="text-primary" size={25} />,
    url: '/favourite',
  },
];

const sampleLiveUsers = [
  {
    name: 'ItzTimmy',
    avatar: '/assets/images/hacker.png',
    viewers: '1K',
    url: '/john-doe',
  },
  {
    name: 'Valkyrae',
    avatar: '/assets/images/hacker.png',
    viewers: '10.7K',
    url: '/john-doe',
  },
  {
    name: 'Tarik',
    avatar: '/assets/images/hacker.png',
    viewers: '5.8K',
    url: '/john-doe',
  },
  {
    name: 'TenZ',
    avatar: '/assets/images/hacker.png',
    viewers: '10K',
    url: '/john-doe',
  },
  {
    name: 'Asuna',
    avatar: '/assets/images/hacker.png',
    viewers: '4K',
    url: '/john-doe',
  },
  {
    name: 'SoM',
    avatar: '/assets/images/hacker.png',
    viewers: '500',
    url: '/john-doe',
  },
  {
    name: 'Subroza',
    avatar: '/assets/images/hacker.png',
    viewers: '6K',
    url: '/john-doe',
  },
];

const SideBar = (props: Props) => {
  const pathName = usePathname();
  return (
    <aside className=" w-[300px] flex justify-start gap-2 items-center flex-col bg-indigo-950 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md h-screen ">
      <Link href="/" className="flex justify-center items-center gap-2 mt-4">
        <Image
          src="/assets/logos/logo-new.png"
          alt="logo"
          width={40}
          height={100}
        />
        <p className="font-bold font-head text-3xl">Switch</p>
      </Link>
      <div className="font-head mt-10 gap-4 w-full flex flex-col  justify-center">
        {tabs.map((tab, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={index}
          >
            <Link
              href={tab.url}
              className={`flex justify-start items-center mx-6 rounded-lg gap-2 p-2 hover:bg-indigo-800/20 cursor-pointer ${
                pathName === tab.url && 'bg-indigo-900/20'
              }`}
            >
              {tab.icon}
              <p className="font-body font-bold text-lg">{tab.name}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      <span className="h-[2px] bg-indigo-900 rounded-xl w-5/6"></span>
      <div className="  w-full flex flex-col  justify-center">
        <div className="flex justify-between items-center mx-6 rounded-lg gap-2 p-2 hover:bg-indigo-800/20 bg-indigo-900/10 cursor-pointer">
          <p className="font-bold text-lg">Live Now</p>
          <span>
            <AiOutlineArrowRight className="text-primary" size={15} />
          </span>
        </div>
        {sampleLiveUsers.map((live, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={index}
          >
            <Link
              href={live.url}
              className="flex justify-start items-center mx-6 rounded-lg gap-2 p-2 hover:bg-indigo-800/20 cursor-pointer "
            >
              <Image
                className="rounded-full bg-indigo-900 "
                src={live.avatar}
                alt="avatar"
                width={40}
                height={40}
              />
              <p className=" text-sm">{live.name}</p>
              <span>
                <LuRadio className="text-red-600" size={20} />
              </span>
              <span>{live.viewers}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <span className="h-[2px] bg-indigo-900 rounded-xl w-5/6"></span>
      <div className=" gap-2 w-full flex-col flex justify-center items-start">
        <div className="flex  justify-between items-center mx-6 rounded-lg p-2 cursor-pointer">
          <p className="font-bold text-lg">Following</p>
        </div>
        <div className="flex justify-start mx-6 gap-2 w-full flex-wrap p-2">
          {sampleLiveUsers.map(
            (live, index) =>
              index < 4 && (
                <Link key={index} href={live.url}>
                  <Image
                    className=" border-2 border-primary rounded-full bg-indigo-900 cursor-pointer"
                    src={live.avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                </Link>
              )
          )}
          <Link
            href="/"
            className="border-2 border-primary rounded-full bg-indigo-900 w-10 flex justify-center items-center cursor-pointer"
          >
            <AiOutlineArrowRight className="text-white" size={20} />
          </Link>
        </div>
      </div>
      <Link href="https://github.com/TuhinBar/switch" className="flex justify-center items-center gap-2 mt-2 text-xs">
        <span><AiOutlineGithub size={20} /></span>
      </Link>
    </aside>
  );
};

export default SideBar;
