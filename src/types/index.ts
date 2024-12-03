export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  subject: string;
  level: string;
  videoUrl: string;
  thumbnail: string;
  date: string;
  objectives: string[];
  competencies: string[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
}

export interface MenuItem {
  path: string;
  label: string;
  icon: any;
}