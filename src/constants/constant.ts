export const siteUrl = 'https://pratham-parikh.vercel.app';

export const logoImage = '/logo/logo.png';
export const glbLocation = '/assets/3d/optimized-room.glb';
export const matTextureLocation = '/assets/textures/mat1.png';
export const resumePdfLocation = '/pdfs/(Pratham Parikh) - resume.pdf';
export const lottieAnimationLocation = '/assets/lottie/404.lottie';
export const leetCodeLink = 'https://leetcode.com/u/pratham15541';
export const githubLink = 'https://github.com/pratham15541';
export const linkedInLink = 'https://www.linkedin.com/in/pratham-parikh';
export const hashnodeLink = 'https://pratham15541.hashnode.dev';
export const twitterLink = 'https://x.com/pratham15541';
export const instagramLink = 'https://www.instagram.com/pratham15541';
export const emailLink = 'mailto:prathamparikh94@gmail.com';
import { TechStackIcon, Project, Experience } from '@/interfaces/constant';

export const techStackIcons: TechStackIcon[] = [
  {
    name: 'React Developer',
    modelPath: '/assets/3d/react-logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
    src: '/images/techIcons/react.png',
  },
  {
    name: 'Backend Developer',
    modelPath: '/assets/3d/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
    src: '/images/techIcons/node.png',
  },
  {
    name: 'Project Manager',
    modelPath: '/assets/3d/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
    src: '/images/techIcons/git.svg',
  },
  // {
  //   name: 'PReact',
  //   src: '/images/techIcons/react.png',
  // },
];

// export const techStackImages = [
//   {
//     name: 'React',
//     src: '/images/techIcons/react.png',
//   },
// ];

export const projects: Project[] = [
  {
    name: 'ShellMind',
    description: 'AI CLI tool.',
    image: '/images/projects/shellmind.png',
    githubLink: 'https://github.com/pratham15541/shellmind',
    techStack: ['Nodejs', 'Gemini'],
  },
  {
    name: 'Codebox',
    description: 'A online code editor and compiler.',
    image: '/images/projects/codebox.png',
    githubLink: 'https://github.com/pratham15541/codebox-client',
    techStack: ['Nodejs', 'React', 'Webcontainer', 'Express', 'MongoDB'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'SEPL',
    duration: 'April 2024 - June 2024',
    description: `Improved the performance of the existing codebase by 30% by refactoring and optimizing the code.
    Fixed critical bugs in the applications.
    `,
    techStack: ['PHP', 'Jquery', 'MSSQL'],
  },
];
