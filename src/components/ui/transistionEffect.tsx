'use client';
import React from 'react';
import { motion } from 'motion/react'; // ✅ fix this line

function TransitionEffect() {
  return (
    <>
      <motion.div
        className="fixed top-0 right-full w-screen h-screen z-300 bg-[#B63E96]"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 right-full w-screen h-screen z-200 bg-yellow-100"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 right-full w-screen h-screen z-100 bg-cyan-500 "
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
}

export default TransitionEffect;
