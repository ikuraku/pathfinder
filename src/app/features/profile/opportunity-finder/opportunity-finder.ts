import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Opportunity } from '../../../core/models/opportunity.model';
import { OpportunityService } from '../../../core/services/opportunity.service';
import { SavedOpportunityService } from '../../../core/services/saved-opportunity.service';
import { PreferenceService } from '../../../core/services/preference.service';
import { SkillService } from '../../../core/services/skill.service';
import {
  INTEREST_KEYWORDS,
  buildPlatformLinks,
  computeMatch,
  containsWord,
} from '../../../core/utils/opportunity.util';
import { OpportunityCard } from '../opportunity-card/opportunity-card';

@Component({
  selector: 'app-opportunity-finder',
  imports: [OpportunityCard],
  templateUrl: './opportunity-finder.html',
})
export class OpportunityFinder {
  private opportunityService = inject(OpportunityService);
  private savedService = inject(SavedOpportunityService);
  private preferenceService = inject(PreferenceService);

  private initial = this.preferenceService.snapshot;

  preferences = toSignal(this.preferenceService.preferences$, { initialValue: this.initial });
  skills = toSignal(inject(SkillService).skills$, { initialValue: [] });
  saved = toSignal(this.savedService.saved$, { initialValue: this.savedService.snapshot });
  savedIds = computed(() => new Set(this.saved().map((job) => job.id)));

  // Feed state
  loading = signal(true);
  live = signal(true);
  feed = signal<Opportunity[]>([]);
  limit = signal(12);
  view = signal<'all' | 'saved'>('all');

  // Filters (prefilled from the preferences)
  query = signal('');
  activeInterest = signal<string | null>(null);
  type = signal<'internship' | 'all'>(
    this.initial.workType === 'internship' ? 'internship' : 'all',
  );
  remoteOnly = signal(this.initial.workEnvironment === 'remote');
  location = signal(this.initial.location);
  sort = signal<'match' | 'recent'>('match');

  interests = computed(() => this.preferences().interests);

  constructor() {
    // Keep the filters in sync with the preferences each time they are saved
    effect(() => {
      const prefs = this.preferences();
      this.location.set(prefs.location);
      this.type.set(prefs.workType === 'internship' ? 'internship' : 'all');
      this.remoteOnly.set(prefs.workEnvironment === 'remote');
      this.activeInterest.set(null);
    });

    this.fetch();
  }

  // --- Prefilled searches on LinkedIn, Welcome to the Jungle, ... ---
  searchTerm = computed(
    () => this.activeInterest() ?? (this.query().trim() || this.interests()[0] || 'software'),
  );

  platforms = computed(() =>
    buildPlatformLinks({
      query: this.searchTerm(),
      location: this.location(),
      internship: this.type() === 'internship',
      remote: this.remoteOnly(),
    }),
  );

  // --- Results ---
  results = computed(() => {
    const skills = this.skills();
    const interests = this.interests();

    return this.feed()
      .filter(
        (job) =>
          (this.type() === 'all' || job.type === 'internship') &&
          (!this.remoteOnly() || job.remote) &&
          this.matchesLocation(job) &&
          this.matchesText(job),
      )
      .map((job) => ({ job, match: computeMatch(job, skills, interests) }))
      .sort((a, b) => {
        if (this.sort() === 'match') {
          const diff = (b.match?.score ?? 0) - (a.match?.score ?? 0);
          if (diff !== 0) return diff;
        }
        return new Date(b.job.postedAt).getTime() - new Date(a.job.postedAt).getTime();
      });
  });

  visible = computed(() => this.results().slice(0, this.limit()));

  savedWithMatch = computed(() =>
    this.saved().map((job) => ({
      job,
      match: computeMatch(job, this.skills(), this.interests()),
    })),
  );

  private matchesText(job: Opportunity): boolean {
    const haystack = `${job.title} ${job.company} ${job.tags.join(' ')} ${job.summary}`;
    const interest = this.activeInterest();
    if (interest) {
      const keywords = INTEREST_KEYWORDS[interest] ?? [interest.toLowerCase()];
      return keywords.some((keyword) => containsWord(haystack, keyword));
    }
    const terms = this.query().toLowerCase().split(/\s+/).filter(Boolean);
    const lower = haystack.toLowerCase();
    return terms.every((term) => lower.includes(term));
  }

  private matchesLocation(job: Opportunity): boolean {
    const tokens = this.location()
      .toLowerCase()
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    if (tokens.length === 0) return true;

    const place = job.location.toLowerCase();
    // Remote offers open to the whole world are always compatible
    if (job.remote && /worldwide|anywhere|global/.test(place)) return true;
    return tokens.some((token) => place.includes(token) || (job.remote && token === 'remote'));
  }

  // --- Actions ---
  fetch(forceRefresh = false): void {
    this.loading.set(true);
    this.opportunityService.load(forceRefresh).subscribe({
      next: (result) => {
        this.feed.set(result.items);
        this.live.set(result.live);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.live.set(false);
      },
    });
  }

  onSearch(value: string): void {
    this.activeInterest.set(null);
    this.query.set(value);
    this.limit.set(12);
  }

  pickInterest(interest: string): void {
    this.query.set('');
    this.activeInterest.set(this.activeInterest() === interest ? null : interest);
    this.limit.set(12);
  }

  showMore(): void {
    this.limit.update((n) => n + 12);
  }

  toggleSave(job: Opportunity): void {
    this.savedService.toggle(job);
  }
}
