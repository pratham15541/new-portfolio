import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-gray-300 dark:border-gray-700 py-6 px-4 mt-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-sm sm:text-base text-gray-700 dark:text-gray-300">
        <span>© {new Date().getFullYear()} All rights reserved</span>

        <div className="flex items-center gap-1">
          Built with <span className="text-red-600 text-xl">&#9825;</span> by
          <Link
            href="/"
            className="underline underline-offset-2 ml-1 text-blue-600 dark:text-blue-400"
          >
            Pratham Parikh
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
