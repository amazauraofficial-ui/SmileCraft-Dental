export type PageRoute =
  | 'home'
  | 'services'
  | 'dental-implants'
  | 'cosmetic-dentistry'
  | 'invisalign'
  | 'emergency-dentistry'
  | 'doctors'
  | 'about'
  | 'reviews'
  | 'faq'
  | 'contact'
  | 'book-appointment'
  | 'privacy-policy'
  | '404';

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  headline: string;
  shortDesc: string;
  fullDesc: string;
  route?: PageRoute;
  category: 'Restorative' | 'Cosmetic' | 'Orthodontics' | 'Preventive' | 'Urgent';
  keyBenefits: string[];
  idealFor: string[];
  steps?: { title: string; desc: string }[];
  durationEstimate?: string;
  iconName: string;
}

export interface Doctor {
  id: string;
  name: string;
  credentials: string;
  role: string;
  bio: string;
  fullBio: string;
  education: string[];
  specialties: string[];
  memberships: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  treatment: string;
  quote: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'implants' | 'cosmetic' | 'invisalign' | 'emergency' | 'billing';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: 'morning' | 'afternoon' | 'evening';
  patientType: 'new' | 'existing';
  notes: string;
}
