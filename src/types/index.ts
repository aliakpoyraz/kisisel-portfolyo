export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  content?: string;
}

export interface NavLink {
  title: string;
  path: string;
}

export interface SiteSettings {
  title: string;
  description: string;
  keywords: string[];
  favicon: string;
  logo: string;
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}
