import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../core/services/profile.service';
import { StudyLevel, StudyYear, UserProfile } from '../../../core/models/user-profile.model';
import { ProfileOverview } from '../profile-overview/profile-overview';

@Component({
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule, ProfileOverview],
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  private fb = inject(FormBuilder);
  private profileService = inject(ProfileService);

  profile = toSignal(this.profileService.profile$, {
    initialValue: this.profileService.snapshot,
  });

  editing = signal(false);
  saved = signal(false);

  // The form is shown when there is no profile yet, or when the user clicks "Edit"
  showForm = computed(() => !this.profile() || this.editing());

  studyLevels: { value: StudyLevel; label: string }[] = [
    { value: 'bac', label: 'High school diploma' },
    { value: 'licence', label: "Bachelor's degree" },
    { value: 'master', label: "Master's degree" },
    { value: 'ingenieur', label: 'Engineering degree' },
    { value: 'doctorat', label: 'PhD' },
  ];

  studyYears: { value: StudyYear; label: string }[] = [
    { value: 1, label: '1st year' },
    { value: 2, label: '2nd year' },
    { value: 3, label: '3rd year' },
    { value: 4, label: '4th year' },
    { value: 5, label: '5th year' },
  ];

  universities = [
    'ISIMS – Higher Institute of Computer Science and Multimedia of Sfax',
    'ENIS – National School of Engineers of Sfax',
    "ENET'Com – National School of Electronics and Telecommunications of Sfax",
    'FSS – Faculty of Sciences of Sfax',
    'ENIT – National Engineering School of Tunis',
    'ENSI – National School of Computer Science',
    'INSAT – National Institute of Applied Science and Technology',
    "SUP'COM – Higher School of Communications of Tunis",
    'FST – Faculty of Sciences of Tunis',
    'ISI – Higher Institute of Computer Science (Ariana)',
    'ESPRIT – Private Higher School of Engineering and Technology',
    'Tek-Up University',
    'ISSAT Gafsa – Higher Institute of Applied Sciences and Technology of Gafsa',
    'ISSAT Sousse – Higher Institute of Applied Sciences and Technology of Sousse',
    'ENISo – National School of Engineers of Sousse',
    'ENIM – National School of Engineers of Monastir',
    'ISIMM – Higher Institute of Computer Science and Mathematics of Monastir',
    'ENIG – National School of Engineers of Gabès',
    'ISIMG – Higher Institute of Computer Science and Multimedia of Gabès',
  ];

  // Custom dropdown state for the university field
  universityOpen = signal(false);
  universityQuery = signal('');

  filteredUniversities = computed(() => {
    const query = this.universityQuery().trim().toLowerCase();
    return query
      ? this.universities.filter((u) => u.toLowerCase().includes(query))
      : this.universities;
  });

  form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    university: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', Validators.pattern(/^\+?[0-9 ]{8,15}$/)],
    linkedin: ['', Validators.pattern(/^(https?:\/\/)?([\w-]+\.)?linkedin\.com\/.+$/i)],
    github: ['', Validators.pattern(/^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/?$/i)],
    studyField: ['', Validators.required],
    studyLevel: ['licence' as StudyLevel, Validators.required],
    studyYear: [1 as StudyYear, Validators.required],
    experienceYears: [0, [Validators.required, Validators.min(0), Validators.max(40)]],
    goal: ['', [Validators.required, Validators.maxLength(120)]],
  });

  hasError(field: string, error?: string): boolean {
    const control = this.form.get(field);
    if (!control || !(control.touched || control.dirty)) return false;
    return error ? control.hasError(error) : control.invalid;
  }

  // --- University dropdown ---
  openUniversity(): void {
    this.universityQuery.set(''); // show the full list when the field gets focus
    this.universityOpen.set(true);
  }

  closeUniversity(): void {
    this.universityOpen.set(false);
  }

  onUniversityInput(event: Event): void {
    this.universityQuery.set((event.target as HTMLInputElement).value);
    this.universityOpen.set(true);
  }

  selectUniversity(name: string): void {
    this.form.controls.university.setValue(name);
    this.form.controls.university.markAsDirty();
    this.universityOpen.set(false);
  }

  // --- Profile actions ---
  startEdit(): void {
    const current = this.profile();
    if (current) this.form.patchValue(current);
    this.saved.set(false);
    this.editing.set(true);
  }

  cancelEdit(): void {
    this.editing.set(false);
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.profileService.updateProfile({
      ...this.profile(),
      ...this.form.getRawValue(),
    } as UserProfile);

    setTimeout(() => this.saved.set(false), 3000);
  }
  updatePhoto(photo: string | null): void {
    const current = this.profile();
    if (!current) return;
    this.profileService.updateProfile({ ...current, photo: photo ?? undefined });
  }
}
