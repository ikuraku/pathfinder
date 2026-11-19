import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from '../models/user-profile.model';
import { StorageService } from './storage.service';

const KEY = 'pf_profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private storage = inject(StorageService);

  private profileSubject = new BehaviorSubject<UserProfile | null>(
    this.storage.get<UserProfile>(KEY),
  );
  profile$ = this.profileSubject.asObservable();

  get snapshot(): UserProfile | null {
    return this.profileSubject.value;
  }

  updateProfile(profile: UserProfile): void {
    this.storage.set(KEY, profile);
    this.profileSubject.next(profile);
  }

  clearProfile(): void {
    this.storage.remove(KEY);
    this.profileSubject.next(null);
  }
}
