export type SkillCategory = 'technical' | 'soft' | 'tools' | 'languages';

// 1 = Beginner, 2 = Intermediate, 3 = Advanced, 4 = Expert
export type SkillLevel = 1 | 2 | 3 | 4;

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  catalogId?: string; // link to the catalog entry (used for the logo)
  verified?: boolean; // true when the level comes from a test
  score?: number; // test score in percent
}

// A skill of the catalog (before the user adds it)
export interface CatalogSkill {
  id: string;
  name: string;
  category: SkillCategory;
  logo?: string; // Devicon slug
  variant?: string; // Devicon variant (default: "original")
  emoji?: string; // used when there is no logo
}
