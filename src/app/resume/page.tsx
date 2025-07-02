import { resumePdfLocation } from '@/constants/constant';
import { ExternalLink, Download } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Resume | Pratham Parikh',
  description: 'View the resume of Pratham Parikh including education, skills, experience, and technical expertise.',
  keywords: ['resume', 'CV', 'Pratham Parikh', 'software engineer resume'],
};

function Resume() {
  return (
    <div className="w-full h-full bg-gray-50 dark:bg-neutral-900 py-12 px-4 flex justify-center items-center">
      <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg ring-1 ring-black/10 dark:ring-white/10 bg-white dark:bg-neutral-800">
        {/* Header */}
        <div className="px-6 py-5 text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">📄 Resume</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            You can download or view my resume using the buttons below.
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={resumePdfLocation}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <Download size={16} />
            Download
          </a>
          <a
            href={resumePdfLocation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
          >
            <ExternalLink size={16} />
            View in New Tab
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
