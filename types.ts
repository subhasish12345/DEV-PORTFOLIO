
export interface Skill {
  name: string;
  category: 'Language' | 'Tool' | 'Cloud' | 'Domain';
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
