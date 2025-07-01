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

export interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

export const techStackIcons: TechStackIcon[] = [
  {
    name: 'React Developer',
    modelPath: '/assets/3d/react-logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/assets/3d/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/assets/3d/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
