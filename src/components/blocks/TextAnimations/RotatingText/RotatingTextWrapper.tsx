'use client';

import dynamic from 'next/dynamic';

const RotatingText = dynamic(
  () => import('@/components/blocks/TextAnimations/RotatingText/RotatingText'),
  {
    ssr: false,
    loading: () => <span className="text-gray-400 dark:text-gray-600">loading...</span>,
  }
);

export default RotatingText;
