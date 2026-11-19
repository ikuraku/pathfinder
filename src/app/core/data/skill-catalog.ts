import { CatalogSkill, SkillCategory } from '../models/skill.model';

// Technology with a logo (Devicon). The logo defaults to the id.
const t = (
  id: string,
  name: string,
  logo: string = id,
  category: SkillCategory = 'technical',
  variant?: string,
): CatalogSkill => ({ id, name, category, logo, variant });

// Skill with an emoji instead of a logo
const e = (id: string, name: string, emoji: string, category: SkillCategory): CatalogSkill => ({
  id,
  name,
  category,
  emoji,
});

export const SKILL_CATALOG: CatalogSkill[] = [
  // Programming languages
  t('python', 'Python'),
  t('javascript', 'JavaScript'),
  t('typescript', 'TypeScript'),
  t('java', 'Java'),
  t('c', 'C'),
  t('cplusplus', 'C++'),
  t('csharp', 'C#'),
  t('php', 'PHP'),
  t('kotlin', 'Kotlin'),
  t('go', 'Go'),
  t('rust', 'Rust'),
  t('bash', 'Bash'),

  // Frameworks & web
  t('angular', 'Angular'),
  t('react', 'React'),
  t('vuejs', 'Vue.js'),
  t('nodejs', 'Node.js'),
  t('spring', 'Spring Boot'),
  t('django', 'Django'),
  t('fastapi', 'FastAPI'),
  t('flutter', 'Flutter'),
  t('html', 'HTML', 'html5'),
  t('css', 'CSS', 'css3'),
  t('tailwindcss', 'Tailwind CSS'),
  t('bootstrap', 'Bootstrap'),

  // Data & AI
  t('sql', 'SQL', 'mysql'),
  t('postgresql', 'PostgreSQL'),
  t('mongodb', 'MongoDB'),
  t('tensorflow', 'TensorFlow'),
  t('pytorch', 'PyTorch'),
  t('pandas', 'Pandas'),

  // Cloud, DevOps & security
  t('git', 'Git', 'git', 'tools'),
  t('github', 'GitHub', 'github', 'tools'),
  t('docker', 'Docker', 'docker', 'tools'),
  t('kubernetes', 'Kubernetes', 'kubernetes', 'tools'),
  t('linux', 'Linux', 'linux', 'tools'),
  t('aws', 'AWS', 'amazonwebservices', 'tools', 'original-wordmark'),
  t('azure', 'Microsoft Azure', 'azure', 'tools'),
  t('googlecloud', 'Google Cloud', 'googlecloud', 'tools'),
  t('jenkins', 'Jenkins', 'jenkins', 'tools'),
  t('terraform', 'Terraform', 'terraform', 'tools'),
  t('ansible', 'Ansible', 'ansible', 'tools'),
  e('cloud-computing', 'Cloud Computing', '☁️', 'technical'),
  e('cybersecurity', 'Cybersecurity', '🔐', 'technical'),
  e('networking', 'Networking', '🌐', 'technical'),

  // Tools
  t('vscode', 'VS Code', 'vscode', 'tools'),
  t('intellij', 'IntelliJ IDEA', 'intellij', 'tools'),
  t('figma', 'Figma', 'figma', 'tools'),
  t('jira', 'Jira', 'jira', 'tools'),
  t('postman', 'Postman', 'postman', 'tools'),

  // Soft skills
  e('teamwork', 'Teamwork', '🤝', 'soft'),
  e('communication', 'Communication', '💬', 'soft'),
  e('problem-solving', 'Problem Solving', '🧩', 'soft'),
  e('leadership', 'Leadership', '🚀', 'soft'),
  e('time-management', 'Time Management', '⏱️', 'soft'),
  e('creativity', 'Creativity', '💡', 'soft'),
  e('critical-thinking', 'Critical Thinking', '🧠', 'soft'),
  e('adaptability', 'Adaptability', '🔄', 'soft'),

  // Languages
  e('english', 'English', '🇬🇧', 'languages'),
  e('french', 'French', '🇫🇷', 'languages'),
  e('arabic', 'Arabic', '🇸🇦', 'languages'),
  e('german', 'German', '🇩🇪', 'languages'),
  e('spanish', 'Spanish', '🇪🇸', 'languages'),
];
