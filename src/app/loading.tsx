'use client';
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-blue-400 border-t-transparent animate-spin"></div>
        <span className="absolute text-blue-500 font-semibold text-sm animate-pulse mt-20">
          Loading...
        </span>
      </div>
    </div>
  );
}
