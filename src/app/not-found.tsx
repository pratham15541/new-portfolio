'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function NotFound() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-3xl flex items-center justify-center">
        <DotLottieReact
          src="/assets/lottie/404.lottie"
          className="w-full h-auto mt-10"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default NotFound;
