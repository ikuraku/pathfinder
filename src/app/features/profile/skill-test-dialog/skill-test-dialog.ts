import { Component, HostListener, computed, input, output, signal } from '@angular/core';
import { CatalogSkill, SkillLevel } from '../../../core/models/skill.model';
import { SKILL_QUIZZES } from '../../../core/data/skill-quizzes';
import { PreparedQuestion, levelFromScore, prepareQuiz } from '../../../core/utils/quiz.util';
import { SkillLogo } from '../../../shared/components/skill-logo/skill-logo';

export interface TestOutcome {
  level: SkillLevel;
  verified: boolean; // true = level comes from the test
  score?: number; // percent
}

type Step = 'intro' | 'quiz' | 'manual' | 'result';

@Component({
  selector: 'app-skill-test-dialog',
  imports: [SkillLogo],
  templateUrl: './skill-test-dialog.html',
})
export class SkillTestDialog {
  skill = input.required<CatalogSkill>();
  completed = output<TestOutcome>();
  closed = output<void>();

  private step = signal<Step>('intro');
  questions = signal<PreparedQuestion[]>([]);
  answers = signal<(number | null)[]>([]);
  current = signal(0);
  manualLevel = signal<SkillLevel>(2);

  readonly letters = ['A', 'B', 'C', 'D'];
  readonly difficultyLabels = { 1: 'Easy', 2: 'Medium', 3: 'Hard' } as const;

  levels: { value: SkillLevel; label: string; hint: string }[] = [
    { value: 1, label: 'Beginner', hint: 'I know the basics' },
    { value: 2, label: 'Intermediate', hint: 'I can work with it on my own' },
    { value: 3, label: 'Advanced', hint: 'I use it confidently on real projects' },
    { value: 4, label: 'Expert', hint: 'I could teach it to others' },
  ];

  hasQuiz = computed(() => !!SKILL_QUIZZES[this.skill().id]);
  quizLength = computed(() => SKILL_QUIZZES[this.skill().id]?.length ?? 0);

  // Skills without a test go straight to the manual choice
  view = computed<Step>(() =>
    this.step() === 'intro' && !this.hasQuiz() ? 'manual' : this.step(),
  );

  question = computed(() => this.questions()[this.current()]);
  isLast = computed(() => this.current() === this.questions().length - 1);
  hasAnswered = computed(() => this.answers()[this.current()] != null);
  progress = computed(() => ((this.current() + 1) / Math.max(this.questions().length, 1)) * 100);

  maxPoints = computed(() => this.questions().reduce((sum, q) => sum + q.difficulty, 0));
  points = computed(() =>
    this.questions().reduce((sum, q, i) => (this.isCorrect(i) ? sum + q.difficulty : sum), 0),
  );
  correctCount = computed(() => this.questions().filter((_, i) => this.isCorrect(i)).length);
  percent = computed(() => Math.round((this.points() / Math.max(this.maxPoints(), 1)) * 100));
  resultLevel = computed(() => levelFromScore(this.points(), this.maxPoints()));

  levelLabel(level: SkillLevel): string {
    return this.levels.find((l) => l.value === level)?.label ?? '';
  }

  isCorrect(index: number): boolean {
    const chosen = this.answers()[index];
    return chosen != null && this.questions()[index].options[chosen].correct;
  }

  chosenText(index: number): string {
    const chosen = this.answers()[index];
    return chosen != null ? this.questions()[index].options[chosen].text : '—';
  }

  correctText(index: number): string {
    return this.questions()[index].options.find((o) => o.correct)?.text ?? '';
  }

  start(): void {
    const prepared = prepareQuiz(SKILL_QUIZZES[this.skill().id]);
    this.questions.set(prepared);
    this.answers.set(prepared.map(() => null));
    this.current.set(0);
    this.step.set('quiz');
  }

  choose(optionIndex: number): void {
    this.answers.update((list) => list.map((a, i) => (i === this.current() ? optionIndex : a)));
  }

  next(): void {
    if (this.isLast()) {
      this.step.set('result');
    } else {
      this.current.update((c) => c + 1);
    }
  }

  chooseManually(): void {
    this.step.set('manual');
  }

  backToIntro(): void {
    this.step.set('intro');
  }

  saveResult(): void {
    this.completed.emit({ level: this.resultLevel(), verified: true, score: this.percent() });
  }

  saveManual(): void {
    this.completed.emit({ level: this.manualLevel(), verified: false });
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.closed.emit();
  }
}
