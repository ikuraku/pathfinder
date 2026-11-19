import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '../models/preferences.model';
import { StorageService } from './storage.service';

const KEY = 'pf_preferences';

const DEFAULT_PREFERENCES: Preferences = {
  interests: [],
  workEnvironment: 'hybrid',
  workType: 'internship',
  location: '',
};

@Injectable({ providedIn: 'root' })
export class PreferenceService {
  private storage = inject(StorageService);

  private prefsSubject = new BehaviorSubject<Preferences>(
    this.storage.get<Preferences>(KEY) ?? DEFAULT_PREFERENCES,
  );
  preferences$ = this.prefsSubject.asObservable();

  get snapshot(): Preferences {
    return this.prefsSubject.value;
  }

  updatePreferences(prefs: Preferences): void {
    this.storage.set(KEY, prefs);
    this.prefsSubject.next(prefs);
  }
}
