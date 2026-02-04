
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impacts: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  imageUrl: string;
}
