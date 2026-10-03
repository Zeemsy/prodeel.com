export type ServiceCategory = 
  | 'insurance'
  | 'accounting'
  | 'legal'
  | 'business'
  | 'financial'
  | 'consulting';

export interface ServiceItem {
  id: ServiceCategory;
  name: string;
  tagline: string;
  description: string;
  subservices: string[];
  iconName: string;
  startingFrom: string;
  typicalResponseTime: string;
}

export interface Professional {
  id: string;
  name: string;
  title: string;
  firm: string;
  category: ServiceCategory;
  city: 'Nicosia' | 'Limassol' | 'Larnaca' | 'Paphos';
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  licenseBody: string; // e.g. "ICPAC Registered", "Cyprus Bar Association", "ICCS"
  experienceYears: number;
  languages: string[];
  startingRate: string;
  specialties: string[];
  bio: string;
}

export interface ProposalPreview {
  id: string;
  professional: Professional;
  serviceTitle: string;
  summary: string;
  deliverables: string[];
  estimatedTimeline: string;
  pricing: {
    amount: number;
    currency: string;
    model: 'Fixed Fee' | 'Monthly Retainer' | 'Hourly Rate';
  };
  validUntil: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  city: string;
  serviceUsed: string;
  rating: number;
}
