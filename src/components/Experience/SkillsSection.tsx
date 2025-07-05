'use client';

import { motion } from 'motion/react';
import { useMemo, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { techStackIcons } from '@/constants/constant';
import { Skeleton } from '@/components/ui/skeleton';

const TechIcon = dynamic(() => import('@/components/Experience/TechIcon'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function SkillsSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const memoizedTechIcons = useMemo(() => techStackIcons, []);

  return (
    <div className="w-full flex flex-col mx-4 tech-card mb-16">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mt-8 w-full text-center mb-4">
        Skills
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Technologies and tools I work with
      </p>

      <motion.div
        className="mt-10 mx-4 sm:mx-8 md:mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {memoizedTechIcons.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-4 rounded-xl flex items-center justify-center h-32">
              <Suspense fallback={<Skeleton className="w-24 h-24 rounded-full" />}>
                <TechIcon model={tech} />
              </Suspense>
            </div>
            <h3 className="text-lg font-semibold text-center">{tech.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
