import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skill } from '../models/skill.model';
import { StorageService } from './storage.service';

const KEY = 'pf_skills';

@Injectable({ providedIn: 'root' })
export class SkillService {
  private storage = inject(StorageService);

  private skillsSubject = new BehaviorSubject<Skill[]>(this.storage.get<Skill[]>(KEY) ?? []);
  skills$ = this.skillsSubject.asObservable();

  get snapshot(): Skill[] {
    return this.skillsSubject.value;
  }

  addSkill(data: Omit<Skill, 'id'>): void {
    const skill: Skill = { ...data, id: crypto.randomUUID() };
    this.save([...this.snapshot, skill]);
  }
  // Adds the skill, or updates it if a skill with the same name already exists
  upsertSkill(data: Omit<Skill, 'id'>): void {
    const existing = this.snapshot.find((s) => s.name.toLowerCase() === data.name.toLowerCase());
    if (existing) {
      this.updateSkill({ ...existing, ...data });
    } else {
      this.addSkill(data);
    }
  }

  updateSkill(updated: Skill): void {
    this.save(this.snapshot.map((s) => (s.id === updated.id ? updated : s)));
  }

  deleteSkill(id: string): void {
    this.save(this.snapshot.filter((s) => s.id !== id));
  }

  private save(skills: Skill[]): void {
    this.storage.set(KEY, skills);
    this.skillsSubject.next(skills);
  }
}
