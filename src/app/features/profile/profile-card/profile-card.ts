import { Component, computed, input, output, signal } from '@angular/core';
import { StudyLevel, StudyYear, UserProfile } from '../../../core/models/user-profile.model';
import { Icon } from '../../../shared/components/icon/icon';
import { fileToAvatar } from '../../../core/utils/image.util';

const LEVEL_LABELS: Record<StudyLevel, string> = {
  bac: 'High school diploma',
  licence: "Bachelor's degree",
  master: "Master's degree",
  ingenieur: 'Engineering degree',
  doctorat: 'PhD',
};

const YEAR_LABELS: Record<StudyYear, string> = {
  1: '1st year',
  2: '2nd year',
  3: '3rd year',
  4: '4th year',
  5: '5th year',
};

// Adds "https://" when the user typed a link without it
function toUrl(value?: string): string | null {
  const text = value?.trim();
  if (!text) return null;
  return /^https?:\/\//i.test(text) ? text : `https://${text}`;
}

@Component({
  selector: 'app-profile-card',
  imports: [Icon],
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  profile = input.required<UserProfile>();
  edit = output<void>();
  photoChange = output<string | null>(); // new photo, or null to remove it

  menuOpen = signal(false);
  photoError = signal('');

  initials = computed(() =>
    this.profile()
      .fullName.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join(''),
  );

  levelLabel = computed(() => LEVEL_LABELS[this.profile().studyLevel]);
  universityLabel = computed(() => this.profile().university || 'University not set');
  yearLabel = computed(() => YEAR_LABELS[this.profile().studyYear] ?? 'Year not set');

  experienceLabel = computed(() => {
    const years = this.profile().experienceYears;
    return years === 0 ? 'No experience yet' : `${years} ${years === 1 ? 'year' : 'years'}`;
  });

  phoneLabel = computed(() => this.profile().phone?.trim() || null);
  linkedinUrl = computed(() => toUrl(this.profile().linkedin));
  githubUrl = computed(() => toUrl(this.profile().github));

  // --- Photo actions ---
  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  chooseFile(input: HTMLInputElement): void {
    this.closeMenu();
    input.click();
  }

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    try {
      const photo = await fileToAvatar(file);
      this.photoError.set('');
      this.photoChange.emit(photo);
    } catch (error) {
      this.photoError.set(error instanceof Error ? error.message : 'Could not use this image.');
    } finally {
      input.value = ''; // lets the user pick the same file again later
    }
  }

  removePhoto(): void {
    this.closeMenu();
    if (confirm('Remove your profile photo?')) {
      this.photoError.set('');
      this.photoChange.emit(null);
    }
  }
}
