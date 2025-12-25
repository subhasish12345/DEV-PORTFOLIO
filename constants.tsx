
import React from 'react';
import { Skill, Experience, Project, Education } from './types';

export const PERSONAL_INFO = {
  name: "Debadatta Swain",
  title: "Software Engineer | AI/ML & Data Analytics",
  summary: "Detail-oriented final-year Computer Science student with strong skills in data analytics and cloud technologies. Passionate about applying AI/ML principles to build scalable and secure solutions.",
  email: "devadattaswain7@gmail.com",
  phone: "7894243481",
  linkedin: "https://linkedin.com/in/debadatta-swain",
  github: "https://github.com/DEBADATTA2004",
  location: "Bhubaneswar, Odisha"
};

export const SKILLS: Skill[] = [
  { name: "Python", category: "Language", level: 90 },
  { name: "HTML/CSS", category: "Language", level: 85 },
  { name: "Pandas/NumPy", category: "Domain", level: 95 },
  { name: "Matplotlib/Seaborn", category: "Domain", level: 90 },
  { name: "GCP", category: "Cloud", level: 75 },
  { name: "IBM Cloud", category: "Cloud", level: 70 },
  { name: "Tableau/PowerBI", category: "Tool", level: 88 },
  { name: "Git/GitHub", category: "Tool", level: 85 },
  { name: "Security Fundamentals", category: "Domain", level: 80 }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "CTTC Bhubaneswar",
    role: "Data Analytics Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Bhubaneswar, Odisha",
    points: [
      "Performed data cleaning, analysis, and visualization using Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn.",
      "Extracted insights from structured datasets to support decision-making processes.",
      "Collaborated with team members to create interactive dashboards in Tableau and PowerBI."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "2nd Hand Car Sales Analytics",
    description: "End-to-end data analysis of Kaggle used car sales data. Involved heavy data cleaning, EDA, and predictive modeling visualization.",
    tags: ["Python", "Jupyter", "Pandas", "Matplotlib", "Tableau"],
    image: "https://picsum.photos/seed/cars/800/450"
  },
  {
    title: "Cloud Security & Networking",
    description: "Implementation of basic secure networking principles on IBM and GCP cloud environments.",
    tags: ["GCP", "IBM Cloud", "Networking"],
    image: "https://picsum.photos/seed/cloud/800/450"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Gandhi Engineering College",
    degree: "B.Tech in Computer Science & Engineering (AI/ML)",
    period: "Sep 2022 – May 2026"
  }
];

export const SYSTEM_PROMPT = `
You are the AI Assistant for Debadatta Swain. Debadatta is a final-year B.Tech student in CSE (AI/ML) at Gandhi Engineering College.
Technical Skills: Python, HTML/CSS, Git, GCP, IBM Cloud, Data Analytics, Cloud Computing, Pandas, NumPy, Matplotlib, Tableau, PowerBI.
Experience: Data Analytics Intern at CTTC Bhubaneswar.
Education: Gandhi Engineering College (Graduating 2026).
Contact: 7894243481, devadattaswain7@gmail.com.
Respond professionally as Debadatta's digital representative. Be concise and helpful.
`;
