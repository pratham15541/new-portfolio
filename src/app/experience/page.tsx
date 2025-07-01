'use client';

import React from 'react';
import TransitionEffect from '@/components/ui/transistionEffect';
import { motion } from 'motion/react';
import { techStackIcons } from '@/constants/constant';
import dynamic from 'next/dynamic';
const TechIcon = dynamic(() => import('@/components/Experience/TechIcon'), { ssr: false });
function Experience() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // stagger between items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <TransitionEffect />
      <div className="w-full h-full flex flex-col mx-4 tech-card">
        <h2 className="font-bold text-6xl mt-4 w-full text-center">Skills</h2>

        <motion.div
          className="mt-10 mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {techStackIcons.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="mb-4 rounded-xl flex items-center justify-center">
                <TechIcon model={tech} />
              </div>
              <h3 className="text-lg font-semibold text-center">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <h1 className="text-bold text-2xl">Experince will added soon!!</h1>
    </div>
  );
}

export default Experience;
