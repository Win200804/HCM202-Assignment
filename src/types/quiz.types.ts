// Định nghĩa types cho quiz
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizAttempt {
  id: string;
  date: Date;
  score: number;
  totalQuestions: number;
  answers: UserAnswer[];
  timeTaken: number; // in seconds
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: UserAnswer[];
  isCompleted: boolean;
  startTime: Date | null;
}

export interface QuizHistory {
  attempts: QuizAttempt[];
  bestScore: number;
  averageScore: number;
  totalAttempts: number;
}

