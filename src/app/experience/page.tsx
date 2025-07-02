'use client';

import React, { Suspense, useMemo } from 'react';
import { motion } from 'motion/react';
import { techStackIcons, experiences } from '@/constants/constant';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

// Dynamically import TechIcon with better error handling
const TechIcon = dynamic(() => import('@/components/Experience/TechIcon'), { 
  ssr: false,
  loading: () => <div>Loading...</div>,
});

function Experience() {
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

  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // Memoize tech icons to prevent unnecessary re-renders
  const memoizedTechIcons = useMemo(() => techStackIcons, []);
  const memoizedExperiences = useMemo(() => experiences || [], []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      
      {/* Skills Section */}
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

      {/* Experience Section */}
      <div className="w-full max-w-6xl mx-4 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </motion.div>

        {memoizedExperiences.length > 0 ? (
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {memoizedExperiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}-${index}`}
                variants={experienceVariants}
                className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    
                    {/* Left side - Main content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {exp.image && (
                          <div className="w-8 h-8 relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <Image
                              src={exp.image}
                              alt={exp.company}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </h4>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tech Stack */}
                      {exp.techStack && exp.techStack.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Technologies Used:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Links */}
                      {(exp.githubLink || exp.liveLink) && (
                        <div className="flex gap-3 pt-2">
                          {exp.githubLink && (
                            <a
                              href={exp.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub
                            </a>
                          )}
                          
                          {exp.liveLink && (
                            <a
                              href={exp.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Live Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center py-16"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">
                Experience Coming Soon!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {`I'm currently building my professional experience. Stay tuned for updates!`}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom spacing */}
      <div className="h-16"></div>
    </div>
  );
}

export default Experience;