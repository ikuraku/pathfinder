export type WorkEnvironment = 'remote' | 'onsite' | 'hybrid';
export type WorkType = 'internship' | 'full-time' | 'freelance';

export interface Preferences {
  interests: string[];
  workEnvironment: WorkEnvironment;
  workType: WorkType;
  location: string;
}
