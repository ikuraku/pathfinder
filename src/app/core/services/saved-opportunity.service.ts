import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Opportunity } from '../models/opportunity.model';
import { StorageService } from './storage.service';

const KEY = 'pf_saved_opportunities';

@Injectable({ providedIn: 'root' })
export class SavedOpportunityService {
  private storage = inject(StorageService);

  private subject = new BehaviorSubject<Opportunity[]>(this.storage.get<Opportunity[]>(KEY) ?? []);
  saved$ = this.subject.asObservable();

  get snapshot(): Opportunity[] {
    return this.subject.value;
  }

  toggle(job: Opportunity): void {
    const exists = this.snapshot.some((j) => j.id === job.id);
    const next = exists ? this.snapshot.filter((j) => j.id !== job.id) : [job, ...this.snapshot];
    this.storage.set(KEY, next);
    this.subject.next(next);
  }
}
