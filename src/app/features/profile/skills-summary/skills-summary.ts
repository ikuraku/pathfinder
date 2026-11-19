import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SkillService } from '../../../core/services/skill.service';
import { CatalogSkill, Skill, SkillLevel } from '../../../core/models/skill.model';
import { SKILL_CATALOG } from '../../../core/data/skill-catalog';
import { Icon } from '../../../shared/components/icon/icon';
import { SkillLogo } from '../../../shared/components/skill-logo/skill-logo';

@Component({
  selector: 'app-skills-summary',
  imports: [RouterLink, Icon, SkillLogo],
  templateUrl: './skills-summary.html',
})
export class SkillsSummary {
  private skillService = inject(SkillService);

  skills = toSignal(this.skillService.skills$, { initialValue: [] as Skill[] });

  // The first 6 skills, with their catalog entry (for the logo)
  visible = computed(() =>
    this.skills()
      .slice(0, 6)
      .map((skill) => ({ skill, catalog: this.findCatalog(skill) })),
  );

  private findCatalog(skill: Skill): CatalogSkill | undefined {
    return (
      SKILL_CATALOG.find((c) => c.id === skill.catalogId) ??
      SKILL_CATALOG.find((c) => c.name.toLowerCase() === skill.name.toLowerCase())
    );
  }

  percent(level: SkillLevel): number {
    return level * 25;
  }

  barColor(level: SkillLevel): string {
    return level >= 3 ? 'bg-pf-green' : level === 2 ? 'bg-pf-yellow' : 'bg-pf-orange';
  }

  remove(skill: Skill): void {
    if (confirm(`Delete "${skill.name}"?`)) {
      this.skillService.deleteSkill(skill.id);
    }
  }
}
