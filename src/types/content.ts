export type NavigationItem = {
  label: string;
  href: string;
};

export type HighlightItem = {
  label: string;
  value: string;
};

export type Profile = {
  initials: string;
  name: string;
  title: string;
  location: string;
  availability: string;
  heroHeadline: string;
  heroSummary: string;
  about: string;
  currentFocus: string;
  contactBlurb: string;
  email: string;
  phone: string;
  githubUrl?: string;
  linkedinUrl: string;
  resumeUrl: string;
  coverLetterUrl: string;
  navigation: NavigationItem[];
  strengths: string[];
  highlights: HighlightItem[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  techStack: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  techStack: string[];
  category: string;
  status: string;
  repositoryUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlights: string[];
  year: string;
  heroImage?: string;
  projectUrl?: string;
  overview?: string;
  featureBullets?: string[];
  architectureBullets?: string[];
  codeLinks?: {
    label: string;
    path: string;
    url: string;
    description: string;
  }[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};
