// app/experience/page.tsx
import { Metadata } from 'next';
import Experience from '@/components/Experience/Experience';

export const metadata: Metadata = {
  title: 'Experience | Pratham Parikh',
  description:
    'Professional work history, internships, and projects by Pratham Parikh in web development and software engineering.',
  keywords: ['experience', 'Pratham Parikh', 'work history', 'developer', 'internships'],
};

export default function ExperiencePage() {
  return <Experience />;
}
