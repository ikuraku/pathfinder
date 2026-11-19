import { Opportunity, OpportunityType } from '../models/opportunity.model';
import { Skill } from '../models/skill.model';

// Words used to recognise each interest inside an offer
export const INTEREST_KEYWORDS: Record<string, string[]> = {
  'Artificial Intelligence': [
    'ai',
    'artificial intelligence',
    'machine learning',
    'deep learning',
    'nlp',
    'llm',
  ],
  'Cloud Computing': ['cloud', 'aws', 'azure', 'gcp', 'google cloud', 'devops', 'sre'],
  Cybersecurity: ['security', 'cyber', 'soc', 'siem', 'pentest', 'infosec'],
  'Web Development': [
    'web',
    'frontend',
    'front-end',
    'backend',
    'back-end',
    'full stack',
    'fullstack',
    'angular',
    'react',
    'vue',
  ],
  'Mobile Development': ['mobile', 'android', 'ios', 'flutter', 'kotlin', 'swift'],
  'Data Science': ['data', 'analytics', 'analyst', 'scientist'],
  DevOps: ['devops', 'docker', 'kubernetes', 'ci/cd', 'sre', 'platform'],
  Research: ['research', 'researcher', 'phd', 'scientist', 'lab'],
  Management: ['manager', 'management', 'project', 'product owner', 'scrum'],
  Industry: ['industrial', 'manufacturing', 'automation', 'iot', 'embedded'],
};

const INTERNSHIP_RE =
  /\b(intern|internship|stage|stagiaire|trainee|praktikum|praktikant|werkstudent|apprentice|alternance|co-op)\b/i;

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Whole-word match, so "C" or "AI" do not match inside other words
export function containsWord(text: string, term: string): boolean {
  const value = term.trim();
  if (!value) return false;
  return new RegExp(`(^|[^a-z0-9+#])${escapeRegExp(value)}($|[^a-z0-9+#])`, 'i').test(text);
}

export function detectType(title: string, jobTypes: string[] = []): OpportunityType {
  const text = `${title} ${jobTypes.join(' ')}`.toLowerCase();
  if (INTERNSHIP_RE.test(text)) return 'internship';
  if (/freelance|contract/.test(text)) return 'freelance';
  if (/part[ _-]?time/.test(text)) return 'part-time';
  if (/full[ _-]?time|vollzeit|permanent/.test(text)) return 'full-time';
  return 'other';
}

// Turns an HTML description into plain text (never inject it as HTML)
export function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html ?? '', 'text/html');
  return (doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
}

export function truncate(text: string, max = 220): string {
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
}

// Only allow normal web links coming from outside APIs
export function safeUrl(url: string): string {
  return /^https?:\/\//i.test(url) ? url : '';
}

// --- Match score between an offer and the user ---
export interface MatchInfo {
  score: number; // 0 to 100
  matched: string[]; // skills found in the offer
}

export function computeMatch(
  job: Opportunity,
  skills: Skill[],
  interests: string[],
): MatchInfo | null {
  if (skills.length === 0 && interests.length === 0) return null;

  const haystack = `${job.title} ${job.tags.join(' ')} ${job.summary}`;
  const matched = skills.filter((s) => containsWord(haystack, s.name)).map((s) => s.name);
  const interestHit = interests.some((i) =>
    (INTEREST_KEYWORDS[i] ?? []).some((keyword) => containsWord(haystack, keyword)),
  );

  const skillPart = skills.length ? Math.min(matched.length / Math.min(skills.length, 4), 1) : 0;
  const interestPart = interestHit ? 1 : 0;

  let score: number;
  if (skills.length && interests.length) score = skillPart * 70 + interestPart * 30;
  else if (skills.length) score = skillPart * 100;
  else score = interestPart * 100;

  return { score: Math.round(score), matched };
}

// --- Prefilled searches on job platforms ---
export interface PlatformLink {
  id: string;
  name: string;
  initials: string;
  bg: string;
  fg: string;
  hint: string;
  url: string;
}

export function buildPlatformLinks(options: {
  query: string;
  location: string;
  internship: boolean;
  remote: boolean;
}): PlatformLink[] {
  const query = options.query.trim() || 'software';
  const location = options.location.split(',')[0].trim(); // first place only
  const q = encodeURIComponent(query);
  const qInternship = encodeURIComponent(options.internship ? `${query} internship` : query);
  const loc = encodeURIComponent(location);

  const linkedin =
    `https://www.linkedin.com/jobs/search/?keywords=${q}` +
    (location ? `&location=${loc}` : '') +
    (options.internship ? '&f_JT=I' : '') +
    (options.remote ? '&f_WT=2' : '');

  const wttj =
    `https://www.welcometothejungle.com/en/jobs?query=${q}` +
    (options.internship ? '&refinementList%5Bcontract_type%5D%5B%5D=internship' : '') +
    (location ? `&aroundQuery=${loc}` : '');

  const indeed = `https://www.indeed.com/jobs?q=${qInternship}` + (location ? `&l=${loc}` : '');

  const glassdoor =
    `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${q}` +
    (options.internship ? '&jobType=internship' : '');

  const google = `https://www.google.com/search?q=${qInternship}${location ? '+' + loc : ''}&ibp=htl%3Bjobs`;

  return [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      initials: 'in',
      bg: '#0a66c2',
      fg: '#ffffff',
      hint: 'Jobs & internships',
      url: linkedin,
    },
    {
      id: 'wttj',
      name: 'Welcome to the Jungle',
      initials: 'W',
      bg: '#ffcd00',
      fg: '#1f2a44',
      hint: 'Companies & culture',
      url: wttj,
    },
    {
      id: 'indeed',
      name: 'Indeed',
      initials: 'i',
      bg: '#2557a7',
      fg: '#ffffff',
      hint: 'Largest job search engine',
      url: indeed,
    },
    {
      id: 'glassdoor',
      name: 'Glassdoor',
      initials: 'G',
      bg: '#0caa41',
      fg: '#ffffff',
      hint: 'Offers & salaries',
      url: glassdoor,
    },
    {
      id: 'google',
      name: 'Google Jobs',
      initials: 'G',
      bg: '#4285f4',
      fg: '#ffffff',
      hint: 'All sources in one place',
      url: google,
    },
  ];
}
