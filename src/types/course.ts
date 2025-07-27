
export interface MediaItem {
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  text: string;
  icon: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface InstructorItem {
  name: string;
  image: string;
  description: string;
  slug: string;
  has_instructor_page: boolean;
}

export interface FeatureItem {
  title: string;
  subtitle: string;
  icon: string;
}

export interface PointerItem {
  text: string;
}

export interface FeatureExplanationItem {
  title: string;
  checklist: string[];
  file_url: string;
}

export interface AboutItem {
  title: string;
  description: string;
}


export interface Section<T> {
  type: string;
  name: string;
  values: T[];
}

export interface Seo {
  title: string;
  description: string;
}

type AllSectionTypes =
  | Section<InstructorItem>
  | Section<FeatureItem>
  | Section<PointerItem>
  | Section<FeatureExplanationItem>
  | Section<AboutItem>
  | Section<object>; 

export interface CourseData {
  title: string;
  description: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  cta_text: CtaText;
  sections: AllSectionTypes[];
  seo: Seo;
}