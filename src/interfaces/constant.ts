export interface TechStackIcon {
  name: string;
  modelPath?: string;
  scale?: number;
  rotation?: [number, number, number];
  src: string; // Optional image source for fallback or display
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
