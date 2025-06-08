export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  challenges?: Array<{
    title: string;
    description: string;
  }>;
  featured?: boolean;
} 