'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'motion/react';
import TransitionEffect from '@/components/ui/transistionEffect';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return children; // Return children without transition on initial load
  }

  return (
    <AnimatePresence mode="wait">
      <TransitionEffect key={pathname} />
      {children}
    </AnimatePresence>
  );
}
