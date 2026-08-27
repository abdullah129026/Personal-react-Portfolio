export type NavTab = 'home' | 'projects' | 'experience' | 'skills' | 'education';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'flagship' | 'architecture' | 'micro';
  description: string;
  longDescription?: string;
  highlights?: string[];
  stack: string[];
  imageUrl?: string;
  version?: string;
  icon?: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
  architectureNotes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  statusBadgeColor?: string;
  responsibilities: string[];
  attachments: {
    title: string;
    filename: string;
    imageUrl: string;
    caption?: string;
    altText?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  status: 'ACTIVE' | 'VERIFIED';
  scanPdfImage: string;
  credentialId: string;
  verificationUrl?: string;
  skillsCovered: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  tag: string;
  icon: string;
  items: {
    name: string;
    level?: string;
    percentage?: number;
    description?: string;
    tag?: string;
  }[];
}

export interface CourseworkModule {
  code: string;
  title: string;
  description: string;
  colorClass: string;
  tagBgClass: string;
  icon: string;
  topics: string[];
}

export interface AcademicProfile {
  degreeType: string;
  major: string;
  status: string;
  completion: string;
  university: string;
  location: string;
  years: string;
  gpa: string;
  mapImageUrl: string;
  coursework: CourseworkModule[];
}
