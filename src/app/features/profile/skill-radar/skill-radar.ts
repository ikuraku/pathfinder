import { Component, computed, input } from '@angular/core';
import { Skill, SkillCategory } from '../../../core/models/skill.model';

const CATEGORIES: { value: SkillCategory; label: string; color: string }[] = [
  { value: 'technical', label: 'Technical', color: '#1d5fd1' },
  { value: 'tools', label: 'Tools', color: '#f7c948' },
  { value: 'soft', label: 'Soft skills', color: '#3aa743' },
  { value: 'languages', label: 'Languages', color: '#f26b38' },
];

@Component({
  selector: 'app-skill-radar',
  templateUrl: './skill-radar.html',
})
export class SkillRadar {
  skills = input.required<Skill[]>();

  readonly center = 100;
  readonly radius = 70;

  // Average level of each category, as a percentage
  axes = computed(() =>
    CATEGORIES.map((category) => {
      const list = this.skills().filter((s) => s.category === category.value);
      const average = list.length ? list.reduce((sum, s) => sum + s.level, 0) / list.length : 0;
      return { ...category, value: Math.round((average / 4) * 100), count: list.length };
    }),
  );

  private angle(index: number): number {
    return (Math.PI * 2 * index) / CATEGORIES.length - Math.PI / 2;
  }

  point(index: number, ratio: number): [number, number] {
    const a = this.angle(index);
    return [
      this.center + Math.cos(a) * this.radius * ratio,
      this.center + Math.sin(a) * this.radius * ratio,
    ];
  }

  polygon(ratio = 1, useValues = false): string {
    return this.axes()
      .map((axis, i) => this.point(i, useValues ? axis.value / 100 : ratio).join(','))
      .join(' ');
  }

  label(index: number): { x: number; y: number; anchor: string } {
    const [x, y] = this.point(index, 1.22);
    const cos = Math.cos(this.angle(index));
    const anchor = Math.abs(cos) < 0.01 ? 'middle' : cos > 0 ? 'start' : 'end';
    return { x, y: y + 3, anchor };
  }
}
