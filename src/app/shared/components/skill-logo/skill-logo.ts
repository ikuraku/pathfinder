import { Component, computed, input, signal } from '@angular/core';

const SIZES = {
  sm: { img: 'size-6', text: 'text-xl' },
  md: { img: 'size-8', text: 'text-2xl' },
  lg: { img: 'size-11', text: 'text-4xl' },
};

@Component({
  selector: 'app-skill-logo',
  templateUrl: './skill-logo.html',
  host: { class: 'inline-flex items-center justify-center' },
})
export class SkillLogo {
  name = input.required<string>();
  logo = input<string | undefined>();
  variant = input<string | undefined>();
  emoji = input<string | undefined>();
  size = input<'sm' | 'md' | 'lg'>('md');

  failed = signal(false);

  sizes = computed(() => SIZES[this.size()]);

  url = computed(() => {
    const slug = this.logo();
    const variant = this.variant() ?? 'original';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-${variant}.svg`;
  });
}
