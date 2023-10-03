'use client';

import React, { useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { HiOutlineMoon } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import SwitcherSkeleton from '../UI/Skeletons/SwitcherSkeleton';

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Suspense fallback
    return (
      <SwitcherSkeleton />
    );
  }

  return (
    <div className="w-12 flex items-center justify-start rounded-full border-2 border-primary dark:border-primary bg-indigo-800 bg-opacity-10 dark:bg-indigo-950 dark:bg-opacity-10">
      <motion.button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        initial={{ x: 0 }}
        animate={{ x: theme === 'dark' ? 0 : 20 }}
        transition={{ type: 'spring', stiffness: 150, duration: 0.2 }}
        className={`p-[3px] rounded-full bg-violet-400 `}
      >
        {theme === 'dark' ? (
          <HiOutlineMoon className="text-gray-800" />
        ) : (
          <FiSun className="text-gray-800" />
        )}
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
