import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';

export default function Experience() {
  return (
    <div className="w-full h-full flex flex-col items-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <SkillsSection />
      <ExperienceSection />
      <div className="h-16"></div>
    </div>
  );
}
