'use client';
import HeroLeft from '@/components/HeroExperience/heroLeft';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
const HeroExperience = dynamic(() => import('@/components/HeroExperience/heroExperience'), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-full bg-gray-200 animate-pulse rounded-xl" />,
});
export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">

      <div className="w-full h-full mt-6 flex flex-col lg:w-2/3 xl:w-full xl:flex-row gap-2 ">
        {/* Left Segment */}
        <section className="w-full h-full xl:w-[calc(2.5/6 * 100%)] xl:mt-6 sm:mb-3 md:mb-3 lg:mb-2  p-1 rounded-xl relative">
          <HeroLeft />
        </section>

        {/* Right Segment */}
        <section className="w-full h-full min-w-1/2 min-h-1/3  xl:w-[calc(3.5/6 * 100%)]  p-1  rounded-xl">
          <figure className="w-full h-full p-2 bg-gray-400 dark:bg-gray-950 rounded-xl">
            <Suspense
            >
              <HeroExperience />
            </Suspense>
          </figure>
        </section>
      </div>
    </div>
  );
}
