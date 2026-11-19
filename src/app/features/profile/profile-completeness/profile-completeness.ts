import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface CompletenessItem {
  label: string;
  done: boolean;
  link?: string;
}

@Component({
  selector: 'app-profile-completeness',
  imports: [RouterLink],
  templateUrl: './profile-completeness.html',
})
export class ProfileCompleteness {
  percent = input.required<number>();
  items = input.required<CompletenessItem[]>();

  readonly circumference = 2 * Math.PI * 45;

  dash = computed(() => {
    const filled = (this.circumference * this.percent()) / 100;
    return `${filled} ${this.circumference - filled}`;
  });

  color = computed(() => {
    const p = this.percent();
    return p >= 75 ? '#3aa743' : p >= 50 ? '#f7c948' : '#f26b38';
  });

  message = computed(() => {
    const p = this.percent();
    if (p === 100) return 'Your profile is complete. Great job!';
    if (p >= 50) return "You're almost there, keep going!";
    return "Let's complete your profile.";
  });
}
