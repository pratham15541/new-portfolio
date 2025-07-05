'use client';
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the Lottie component with no SSR
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-40 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg mt-10" />
    ),
  }
);

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
