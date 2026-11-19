import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreferenceService } from '../../../core/services/preference.service';
import { Preferences, WorkEnvironment, WorkType } from '../../../core/models/preferences.model';

@Component({
  selector: 'app-preferences-form',
  imports: [ReactiveFormsModule],
  templateUrl: './preferences-form.html',
})
export class PreferencesForm {
  private fb = inject(FormBuilder);
  private preferenceService = inject(PreferenceService);

  saved = signal(false);
  preferencesSaved = output<void>();

  availableInterests = [
    'Artificial Intelligence',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Data Science',
    'DevOps',
    'Research',
    'Management',
    'Industry',
  ];

  environments: { value: WorkEnvironment; label: string }[] = [
    { value: 'remote', label: 'Remote' },
    { value: 'onsite', label: 'On-site' },
    { value: 'hybrid', label: 'Hybrid' },
  ];

  workTypes: { value: WorkType; label: string }[] = [
    { value: 'internship', label: 'Internship' },
    { value: 'full-time', label: 'Full-time' },
    { value: 'freelance', label: 'Freelance' },
  ];

  // The selected interests live in a signal (a list of chips, not a classic input)
  interests = signal<string[]>([]);
  interestsTouched = signal(false);

  form = this.fb.nonNullable.group({
    workEnvironment: ['hybrid' as WorkEnvironment, Validators.required],
    workType: ['internship' as WorkType, Validators.required],
    location: ['', [Validators.required, Validators.maxLength(60)]],
  });

  constructor() {
    const saved = this.preferenceService.snapshot;
    this.interests.set([...saved.interests]);
    this.form.patchValue({
      workEnvironment: saved.workEnvironment,
      workType: saved.workType,
      location: saved.location,
    });
  }

  isSelected(interest: string): boolean {
    return this.interests().includes(interest);
  }

  toggleInterest(interest: string): void {
    this.interestsTouched.set(true);
    this.interests.update((list) =>
      list.includes(interest) ? list.filter((i) => i !== interest) : [...list, interest],
    );
  }

  get interestsInvalid(): boolean {
    return this.interestsTouched() && this.interests().length === 0;
  }

  get locationInvalid(): boolean {
    const c = this.form.controls.location;
    return (c.touched || c.dirty) && c.invalid;
  }

  save(): void {
    this.interestsTouched.set(true);
    if (this.form.invalid || this.interests().length === 0) {
      this.form.markAllAsTouched();
      return;
    }
    const prefs: Preferences = { ...this.form.getRawValue(), interests: this.interests() };
    this.preferenceService.updatePreferences(prefs);
    this.saved.set(true);
    setTimeout(() => this.saved.set(false), 3000);
    // Go to the opportunities tab right after saving
    setTimeout(() => this.preferencesSaved.emit(), 1200);
  }
}
