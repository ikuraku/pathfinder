import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { Opportunity } from '../models/opportunity.model';
import { DEMO_OPPORTUNITIES } from '../data/demo-opportunities';
import { detectType, safeUrl, stripHtml, truncate } from '../utils/opportunity.util';
import { StorageService } from './storage.service';

export interface FeedResult {
  items: Opportunity[];
  live: boolean; // false = demo data (the live APIs did not answer)
}

interface RemotiveJob {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo?: string;
  tags?: string[];
  job_type?: string;
  publication_date: string;
  candidate_required_location?: string;
  description?: string;
}

interface ArbeitnowJob {
  slug: string;
  company_name: string;
  title: string;
  description?: string;
  remote: boolean;
  url: string;
  tags?: string[];
  job_types?: string[];
  location?: string;
  created_at: number; // unix seconds
}

const CACHE_KEY = 'pf_opportunities_cache';
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours: these free APIs ask for few calls

@Injectable({ providedIn: 'root' })
export class OpportunityService {
  private http = inject(HttpClient);
  private storage = inject(StorageService);

  load(forceRefresh = false): Observable<FeedResult> {
    const cached = this.storage.get<{ time: number; items: Opportunity[] }>(CACHE_KEY);
    if (!forceRefresh && cached?.items?.length && Date.now() - cached.time < CACHE_TTL) {
      return of({ items: cached.items, live: true });
    }

    return forkJoin([
      this.fromRemotive('software-dev'),
      this.fromRemotive('devops'),
      this.fromRemotive('data'),
      this.fromArbeitnow(),
    ]).pipe(
      map((lists) => {
        const unique = new Map<string, Opportunity>();
        lists.flat().forEach((job) => unique.set(job.id, job));
        const items = [...unique.values()].sort(
          (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
        );

        if (items.length === 0) {
          return { items: DEMO_OPPORTUNITIES, live: false };
        }
        this.storage.set(CACHE_KEY, { time: Date.now(), items });
        return { items, live: true };
      }),
    );
  }

  private fromRemotive(category: string): Observable<Opportunity[]> {
    return this.http
      .get<{ jobs: RemotiveJob[] }>('https://remotive.com/api/remote-jobs', {
        params: { category, limit: '60' },
      })
      .pipe(
        map((res) =>
          (res.jobs ?? []).map((job): Opportunity => ({
            id: `remotive-${job.id}`,
            title: job.title,
            company: job.company_name,
            location: job.candidate_required_location || 'Worldwide',
            remote: true,
            type: detectType(job.title, [job.job_type ?? '']),
            tags: (job.tags ?? []).slice(0, 6),
            url: safeUrl(job.url),
            postedAt: job.publication_date,
            source: 'Remotive',
            logo: safeUrl(job.company_logo ?? '') || undefined,
            summary: truncate(stripHtml(job.description ?? '')),
          })),
        ),
        catchError(() => of([] as Opportunity[])),
      );
  }

  private fromArbeitnow(): Observable<Opportunity[]> {
    return this.http
      .get<{ data: ArbeitnowJob[] }>('https://www.arbeitnow.com/api/job-board-api')
      .pipe(
        map((res) =>
          (res.data ?? []).map((job): Opportunity => ({
            id: `arbeitnow-${job.slug}`,
            title: job.title,
            company: job.company_name,
            location: job.location || 'Europe',
            remote: !!job.remote,
            type: detectType(job.title, job.job_types ?? []),
            tags: (job.tags ?? []).slice(0, 6),
            url: safeUrl(job.url),
            postedAt: new Date(job.created_at * 1000).toISOString(),
            source: 'Arbeitnow',
            summary: truncate(stripHtml(job.description ?? '')),
          })),
        ),
        catchError(() => of([] as Opportunity[])),
      );
  }
}
