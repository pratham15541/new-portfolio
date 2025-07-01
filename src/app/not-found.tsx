'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function NotFound() {
  return (
    <div className="h-fit w-full flex items-center justify-center px-16">
      {/* <h1 className="text-3xl font-bold text-red-600 dark:text-red-400">404 - Not Found</h1> */}
      <div className="w-full h-full flex items-center justify-center">
        <DotLottieReact
          src="/assets/lottie/404.lottie"
          height={'100%'}
          className="mt-10"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default NotFound;
