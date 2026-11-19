export type OpportunityType = 'internship' | 'full-time' | 'part-time' | 'freelance' | 'other';

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  type: OpportunityType;
  tags: string[];
  url: string;
  postedAt: string; // ISO date
  source: 'Remotive' | 'Arbeitnow' | 'Demo';
  logo?: string;
  summary: string; // short plain-text description
}
