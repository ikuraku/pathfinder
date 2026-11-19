import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PreferenceService } from '../../../core/services/preference.service';
import { OpportunityFinder } from '../opportunity-finder/opportunity-finder';
import { PreferencesForm } from '../preferences-form/preferences-form';

@Component({
  selector: 'app-preferences-page',
  imports: [OpportunityFinder, PreferencesForm],
  templateUrl: './preferences-page.html',
})
export class PreferencesPage {
  private preferenceService = inject(PreferenceService);

  preferences = toSignal(this.preferenceService.preferences$, {
    initialValue: this.preferenceService.snapshot,
  });

  // Preferences are complete when there is at least one interest and a location
  isComplete = computed(() => {
    const p = this.preferences();
    return p.interests.length > 0 && !!p.location;
  });

  // First visit: the form is open. Afterwards: a short summary.
  editing = signal(!this.isComplete());

  environmentLabels = { remote: 'Remote', onsite: 'On-site', hybrid: 'Hybrid' };
  typeLabels = { internship: 'Internship', 'full-time': 'Full-time', freelance: 'Freelance' };
}
