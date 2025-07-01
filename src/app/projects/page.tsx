import TransitionEffect from '@/components/ui/transistionEffect';
import { githubLink } from '@/constants/constant';
import React from 'react';

function page() {
  return (
    <>
      <TransitionEffect />
      <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="text-center space-y-6 max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            🚧 This page is under construction
          </h1>

          <div className="text-base sm:text-lg">
            <span className="font-medium">Meanwhile, checkout Github </span>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Github ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
