import { Component, HostListener, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SKILL_CATALOG } from '../../../core/data/skill-catalog';
import { SKILL_QUIZZES } from '../../../core/data/skill-quizzes';
import { Icon } from '../../../shared/components/icon/icon';
import { Reveal } from '../../../shared/directives/reveal';

// TODO: replace with your real contact details
const CONTACT = {
  email: 'contact@pathfinder.app',
  phone: '+216 00 000 000',
  address: 'Tunisia',
};

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, ReactiveFormsModule, Icon, Reveal],
  templateUrl: './landing-page.html',
})
export class LandingPage {
  private fb = inject(FormBuilder);

  contact = CONTACT;
  year = new Date().getFullYear();

  scrolled = signal(false);
  menuOpen = signal(false);
  sent = signal(false);

  links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About us' },
    { id: 'contact', label: 'Contact' },
  ];

  // Statistics computed from the real data of the app
  stats = [
    { value: `${SKILL_CATALOG.length}+`, label: 'Skills with logos' },
    { value: `${Object.keys(SKILL_QUIZZES).length}`, label: 'Skill tests (QCM)' },
    {
      value: `${Object.values(SKILL_QUIZZES).reduce((sum, list) => sum + list.length, 0)}`,
      label: 'Test questions',
    },
  ];

  services: {
    icon: string;
    title: string;
    text: string;
    link?: string;
    color: string;
  }[] = [
    {
      icon: 'user',
      title: 'Smart Profile',
      text: 'Build your professional profile: university, level, experience, links and career goal, with your own photo.',
      link: '/profile',
      color: 'bg-pf-blue-light text-pf-blue',
    },
    {
      icon: 'grid',
      title: 'Skills & Level Tests',
      text: `Choose among ${SKILL_CATALOG.length}+ skills and take a 10-question test to get a verified level.`,
      link: '/skills',
      color: 'bg-pf-green-light text-pf-green',
    },
    {
      icon: 'search',
      title: 'Internship Finder',
      text: 'Search LinkedIn, Welcome to the Jungle and more with your preferences, and browse live offers with a match score.',
      link: '/preferences',
      color: 'bg-pf-orange-light text-pf-orange',
    },
    {
      icon: 'target',
      title: 'Career Explorer',
      text: 'Discover the careers that fit your profile and see your compatibility for each one.',
      color: 'bg-pf-yellow-light text-amber-600',
    },
    {
      icon: 'chart',
      title: 'Skill Gap Analyzer',
      text: 'Compare your skills with the ones your target career requires and see what to improve.',
      color: 'bg-pf-blue-light text-pf-blue',
    },
    {
      icon: 'map',
      title: 'Learning Roadmap',
      text: 'Follow a step-by-step plan with resources, goals and progress tracking.',
      color: 'bg-pf-green-light text-pf-green',
    },
  ];

  steps = [
    {
      title: 'Create your profile',
      text: 'Tell us who you are, what you study and where you want to go.',
    },
    {
      title: 'Prove your skills',
      text: 'Add skills and pass short tests to get a verified level.',
    },
    {
      title: 'Set your preferences',
      text: 'Choose your interests, type of work and preferred location.',
    },
    {
      title: 'Find opportunities',
      text: 'Get internship offers ranked by how well they match you.',
    },
  ];

  values = [
    { icon: '🎯', title: 'Clarity', text: 'Turn skills and interests into a clear next step.' },
    {
      icon: '✅',
      title: 'Proof, not promises',
      text: 'Levels come from real tests, not just self-assessment.',
    },
    {
      icon: '🤝',
      title: 'Made for students',
      text: 'Designed by students, for students starting their career.',
    },
  ];

  // TODO: replace the names of the team members
  team = [
    { name: 'Ichrak Abdellaoui', role: 'Profile & Skills', color: 'from-pf-blue to-sky-500' },
    {
      name: 'Team member 2',
      role: 'Career Explorer & Matching',
      color: 'from-pf-green to-emerald-400',
    },
    {
      name: 'Team member 3',
      role: 'Learning Roadmap & Progress',
      color: 'from-pf-orange to-pf-yellow',
    },
  ];

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
  });

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 10);
  }

  scrollTo(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  hasError(field: string, error?: string): boolean {
    const control = this.form.get(field);
    if (!control || !(control.touched || control.dirty)) return false;
    return error ? control.hasError(error) : control.invalid;
  }

  initials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join('');
  }

  // There is no backend: the message opens the visitor's email app, already written
  send(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, subject, message } = this.form.getRawValue();
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    this.sent.set(true);
    this.form.reset();
    setTimeout(() => this.sent.set(false), 6000);
  }
}
