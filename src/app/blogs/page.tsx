import { hashnodeLink } from '@/constants/constant';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blogs | Pratham Parikh',
  description:
    'Blogs by Pratham Parikh, a software engineer and developer specializing in full-stack web development and performance-focused design.',
  keywords: ['blogs', 'articles', 'Pratham Parikh', 'software engineer'],
};

export default function Page() {
  return (
    <>
      <main className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="text-center space-y-6 max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            🚧 This page is under construction
          </h1>

          <div className="text-base sm:text-lg">
            <span className="font-medium">Meanwhile, read my blogs on </span>
            <a
              href={hashnodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Hashnode ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
