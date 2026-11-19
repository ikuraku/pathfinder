import { Component, computed, input, output, signal } from '@angular/core';
import { Opportunity } from '../../../core/models/opportunity.model';
import { MatchInfo } from '../../../core/utils/opportunity.util';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.html',
  host: { class: 'block' },
})
export class OpportunityCard {
  job = input.required<Opportunity>();
  match = input<MatchInfo | null>(null);
  saved = input(false);
  toggleSave = output<void>();

  logoFailed = signal(false);

  isDemo = computed(() => this.job().source === 'Demo');

  postedLabel = computed(() => {
    const time = new Date(this.job().postedAt).getTime();
    if (Number.isNaN(time)) return '';
    const days = Math.floor((Date.now() - time) / 86_400_000);
    if (days <= 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 30) return `${days} days ago`;
    return `${Math.floor(days / 30)} mo ago`;
  });

  // Demo offers have no real link: offer a similar search on LinkedIn instead
  similarUrl = computed(
    () =>
      `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(this.job().title)}&f_JT=I`,
  );

  matchStyle = computed(() => {
    const score = this.match()?.score ?? 0;
    return score >= 70
      ? 'bg-pf-green-light text-pf-green'
      : score >= 40
        ? 'bg-pf-yellow-light text-amber-700'
        : 'bg-slate-100 text-pf-muted';
  });
}
