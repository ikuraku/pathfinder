export type StudyLevel = 'bac' | 'licence' | 'master' | 'ingenieur' | 'doctorat';
export type StudyYear = 1 | 2 | 3 | 4 | 5;

export interface UserProfile {
  fullName: string;
  email: string;
  university: string;
  studyField: string;
  studyLevel: StudyLevel;
  studyYear: StudyYear;
  experienceYears: number;
  goal: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  photo?: string;
}
