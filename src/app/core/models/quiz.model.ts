export type Difficulty = 1 | 2 | 3; // 1 = easy, 2 = medium, 3 = hard (also the points)

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // index of the correct option
  difficulty: Difficulty;
}
