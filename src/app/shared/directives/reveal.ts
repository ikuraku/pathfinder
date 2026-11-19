import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
  numberAttribute,
} from '@angular/core';

@Directive({ selector: '[appReveal]' })
export class Reveal implements OnInit, OnDestroy {
  private element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  // Optional delay in milliseconds: appReveal="150"
  delay = input(0, {
    alias: 'appReveal',
    transform: (value: unknown) => numberAttribute(value, 0),
  });

  ngOnInit(): void {
    this.element.style.opacity = '0';

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        this.element.style.animationDelay = `${this.delay()}ms`;
        this.element.classList.add('pf-fade-up');
        this.element.style.opacity = '';
        this.observer?.disconnect();
      },
      { threshold: 0.15 },
    );
    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
