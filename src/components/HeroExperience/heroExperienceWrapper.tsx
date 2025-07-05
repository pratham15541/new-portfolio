'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const HeroExperience = dynamic(() => import('./heroExperience'), {
  ssr: false,
  loading: () => (
    <Skeleton className="w-full h-full bg-gray-400 dark:bg-gray-900 animate-pulse rounded-xl" />
  ),
});

export default function HeroExperienceWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      (
        window.requestIdleCallback ||
        function (cb) {
          setTimeout(cb, 300);
        }
      )(() => setMounted(true));
    } else {
      setTimeout(() => setMounted(true), 300);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`w-full h-full transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <HeroExperience />
    </div>
  );
}
