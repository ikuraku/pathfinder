import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../shared/components/icon/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterLink, Icon],
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  private profile = toSignal(inject(ProfileService).profile$);
  userName = computed(() => this.profile()?.fullName.split(' ')[0] || 'Guest');
  // Données d'exemple (les vraies viendront des services)
  profileMatch = 87;

  skills = [
    { name: 'Programming', value: 90, color: '#1d5fd1' },
    { name: 'Data Science', value: 80, color: '#3aa743' },
    { name: 'Problem Solving', value: 85, color: '#f7c948' },
    { name: 'Communication', value: 75, color: '#f26b38' },
    { name: 'Creativity', value: 70, color: '#8b5cf6' },
  ];

  careers = [
    {
      title: 'AI Engineer',
      label: 'Forte compatibilité',
      tags: 'Python · Machine Learning · Deep Learning',
      score: 92,
      icon: 'chart',
      bg: 'bg-pf-blue-light text-pf-blue',
      badge: 'bg-pf-green-light text-pf-green',
    },
    {
      title: 'Data Scientist',
      label: 'Bonne compatibilité',
      tags: 'Python · Statistiques · SQL',
      score: 88,
      icon: 'grid',
      bg: 'bg-pf-green-light text-pf-green',
      badge: 'bg-pf-green-light text-pf-green',
    },
    {
      title: 'AI Application Developer',
      label: 'Bonne compatibilité',
      tags: 'Angular · Python · FastAPI',
      score: 85,
      icon: 'search',
      bg: 'bg-pf-orange-light text-pf-orange',
      badge: 'bg-pf-yellow-light text-pf-orange',
    },
  ];

  roadmap = [
    { title: '1. Strengthen Your Skills', sub: 'Learn Machine Learning', state: 'done' },
    { title: '2. Build Projects', sub: 'Create an AI project', state: 'current' },
    { title: '3. Get Certified', sub: 'AWS / Google Cloud', state: 'locked' },
    { title: '4. Reach Your Goal', sub: 'Become an AI Engineer', state: 'locked' },
  ];

  progress = 72;
  checklist = [
    { label: 'Profile Complete', done: true },
    { label: 'Skills Added', done: true },
    { label: 'Preferences Set', done: false, current: true },
    { label: 'Roadmap Generated', done: false },
  ];

  gaps = [
    { name: 'Deep Learning', value: 60, color: 'bg-pf-blue' },
    { name: 'MLOps', value: 40, color: 'bg-pf-green' },
    { name: 'System Design', value: 30, color: 'bg-pf-orange' },
  ];

  // --- Calculs pour les graphiques SVG ---
  readonly radarCenter = 100;
  readonly radarRadius = 70;

  private radarPoint(index: number, ratio: number): [number, number] {
    const angle = (Math.PI * 2 * index) / this.skills.length - Math.PI / 2;
    return [
      this.radarCenter + Math.cos(angle) * this.radarRadius * ratio,
      this.radarCenter + Math.sin(angle) * this.radarRadius * ratio,
    ];
  }

  radarPolygon(ratio = 1, useValues = false): string {
    return this.skills
      .map((s, i) => this.radarPoint(i, useValues ? s.value / 100 : ratio).join(','))
      .join(' ');
  }

  radarLabel(index: number): { x: number; y: number } {
    const [x, y] = this.radarPoint(index, 1.28);
    return { x, y };
  }

  // Cercle (donut) : circonférence pour r = 45
  readonly circumference = 2 * Math.PI * 45;

  dash(percent: number): string {
    const filled = (this.circumference * percent) / 100;
    return `${filled} ${this.circumference - filled}`;
  }
}
