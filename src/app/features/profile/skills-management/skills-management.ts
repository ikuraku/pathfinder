import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkillService } from '../../../core/services/skill.service';
import { CatalogSkill, Skill, SkillCategory, SkillLevel } from '../../../core/models/skill.model';
import { SKILL_CATALOG } from '../../../core/data/skill-catalog';
import { SKILL_QUIZZES } from '../../../core/data/skill-quizzes';
import { SkillLogo } from '../../../shared/components/skill-logo/skill-logo';
import { SkillTestDialog, TestOutcome } from '../skill-test-dialog/skill-test-dialog';

@Component({
  selector: 'app-skills-management',
  imports: [SkillLogo, SkillTestDialog],
  templateUrl: './skills-management.html',
})
export class SkillsManagement {
  private skillService = inject(SkillService);

  skills = toSignal(this.skillService.skills$, { initialValue: [] as Skill[] });
  catalog = SKILL_CATALOG;

  query = signal('');
  category = signal<'all' | SkillCategory>('all');
  selected = signal<CatalogSkill | null>(null);

  customName = signal('');
  customCategory = signal<SkillCategory>('technical');
  customError = signal('');

  categories: { value: 'all' | SkillCategory; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'technical', label: 'Technical' },
    { value: 'tools', label: 'Tools & Cloud' },
    { value: 'soft', label: 'Soft skills' },
    { value: 'languages', label: 'Languages' },
  ];

  levelLabels: Record<SkillLevel, string> = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Expert',
  };

  filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    const category = this.category();
    return this.catalog.filter(
      (c) =>
        (category === 'all' || c.category === category) &&
        (!query || c.name.toLowerCase().includes(query)),
    );
  });

  // Skills the user already has, indexed by lowercase name
  owned = computed(() => new Map(this.skills().map((s) => [s.name.toLowerCase(), s])));

  mySkills = computed(() =>
    this.skills().map((skill) => ({ skill, catalog: this.findCatalog(skill) })),
  );

  hasQuiz(skill: CatalogSkill): boolean {
    return !!SKILL_QUIZZES[skill.id];
  }

  ownedSkill(skill: CatalogSkill): Skill | undefined {
    return this.owned().get(skill.name.toLowerCase());
  }

  private findCatalog(skill: Skill): CatalogSkill | undefined {
    return (
      this.catalog.find((c) => c.id === skill.catalogId) ??
      this.catalog.find((c) => c.name.toLowerCase() === skill.name.toLowerCase())
    );
  }

  barColor(level: SkillLevel): string {
    return level >= 3 ? 'bg-pf-green' : level === 2 ? 'bg-pf-yellow' : 'bg-pf-orange';
  }

  // --- Actions ---
  openTest(skill: CatalogSkill): void {
    this.selected.set(skill);
  }

  updateLevel(skill: Skill): void {
    const catalog = this.findCatalog(skill);
    this.selected.set(
      catalog ?? { id: skill.catalogId ?? 'custom', name: skill.name, category: skill.category },
    );
  }

  closeDialog(): void {
    this.selected.set(null);
  }

  onCompleted(outcome: TestOutcome): void {
    const skill = this.selected();
    if (!skill) return;
    this.skillService.upsertSkill({
      name: skill.name,
      category: skill.category,
      level: outcome.level,
      catalogId: skill.id,
      verified: outcome.verified,
      score: outcome.score,
    });
    this.selected.set(null);
  }

  remove(skill: Skill): void {
    if (confirm(`Delete "${skill.name}"?`)) {
      this.skillService.deleteSkill(skill.id);
    }
  }

  // Skill that is not in the catalog
  addCustom(): void {
    const name = this.customName().trim();
    if (name.length < 2 || name.length > 40) {
      this.customError.set('Enter a skill name (2 to 40 characters).');
      return;
    }
    this.customError.set('');

    const inCatalog = this.catalog.find((c) => c.name.toLowerCase() === name.toLowerCase());
    this.selected.set(
      inCatalog ?? {
        id: 'custom-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name,
        category: this.customCategory(),
      },
    );
    this.customName.set('');
  }
}
