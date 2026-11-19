import { Difficulty, QuizQuestion } from '../models/quiz.model';
import { SkillLevel } from '../models/skill.model';

export interface PreparedOption {
  text: string;
  correct: boolean;
}

export interface PreparedQuestion {
  question: string;
  difficulty: Difficulty;
  options: PreparedOption[];
}

function shuffle<T>(list: T[]): T[] {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Questions stay in order (easy to hard), answers are shuffled each time
export function prepareQuiz(questions: QuizQuestion[]): PreparedQuestion[] {
  return questions.map((q) => ({
    question: q.question,
    difficulty: q.difficulty,
    options: shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer }))),
  }));
}

export function levelFromScore(points: number, max: number): SkillLevel {
  const ratio = max ? points / max : 0;
  if (ratio < 0.35) return 1;
  if (ratio < 0.65) return 2;
  if (ratio < 0.85) return 3;
  return 4;
}
