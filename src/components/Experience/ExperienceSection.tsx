'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';
import { experiences } from '@/constants/constant';
import Image from 'next/image';

export default function ExperienceSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const memoizedExperiences = useMemo(() => experiences || [], []);

  return (
    <div className="w-full max-w-6xl mx-4 px-4 sm:px-8 mt-2">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4">Experience</h2>
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
                          <Image src={exp.image} alt={exp.company} fill className="object-cover" />
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </h4>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>

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
                              <path d="M12 0c-6.626 0-12 5.373-12 12..." />
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
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6..."
                              />
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
            <h3 className="text-xl font-semibold mb-2">Experience Coming Soon!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {`I'm currently building my professional experience. Stay tuned for updates!`}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
