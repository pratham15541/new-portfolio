'use client';
import React from 'react';
import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText';

function HeroLeft() {
  const words = ['scalable', 'responsive', 'flexible', 'delightful'];

  return (
    <div className="w-full h-4/5 px-2 sm:px-8 md:px-16 py-2">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-left">
          <div>{"Hi, I'm"}</div>
          <div className="text-blue-600 dark:text-blue-400">Pratham Parikh</div>
        </h1>

        {/* Subheading */}
        <p className="text-2xl sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-left">
          Aspiring full-stack software engineer focused on crafting magical web and mobile
          experiences, scaling systems, and building reliable, delightful applications.
        </p>

        {/* Rotating Text */}
        <div className="text-lg sm:text-xl md:text-2xl font-medium text-left mt-6 flex items-center  ">
          Creating apps that are{' '}
          <span className="ml-2  text-blue-600 dark:text-blue-400 font-semibold ">
            <RotatingText
              texts={words}
              mainClassName="px-2 sm:px-2 md:px-3 bg-gray-50 dark:bg-gray-800 lg:w- overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center items-center rounded-lg"
              staggerFrom={'last'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
