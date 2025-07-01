import { useEffect, useState } from 'react';

export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) return;

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [threshold]);

  return scrollDirection;
}
