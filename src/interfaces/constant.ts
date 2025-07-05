export interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

export interface Project {
  name: string;
  description: string;
  githubLink: string;
  image?: string;
  liveLink?: string;
  techStack?: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  techStack: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
}
