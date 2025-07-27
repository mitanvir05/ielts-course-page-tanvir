export interface Media {
  resource_type: 'video' | 'image';
  resource_value: string;
}

export interface ChecklistItem {
  text: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: 'instructor' | 'features' | 'pointers' | 'about' | string;
  name: string; 
  values: any[]; 
}

export interface Seo {
    title: string;
    description: string;
}

export interface CourseData {
  title: string;
  description: string;
  media: Media[]; 
  checklist: ChecklistItem[];
  cta_text: CtaText;
  sections: Section[];
  seo: Seo;
}