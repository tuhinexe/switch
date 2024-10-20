'use client';

import Image from 'next/image';
import { Metadata } from 'next';
import VideoCard from '@/components/UI/VideoCard';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section className="bg-indigo-900/20 rounded-sm m-2 p-2 flex justify-center items-center">
      <div className="grid grid-flow-row lg:grid-cols-5 grid-cols-1  items-center gap-4 overflow-y-scroll h-[90vh] no-scrollbar">
        {[...Array(40)].map((_, i) => (
          <VideoCard key={i} />
        ))}
      </div>
    </motion.section>
  );
}
