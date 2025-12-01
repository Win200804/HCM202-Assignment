// Service quản lý quiz logic
import type { QuizQuestion, UserAnswer, QuizAttempt } from '../types/quiz.types';
import { calculatePercentage, generateId } from '../utils/helpers';

class QuizService {
  // Validate answer
  checkAnswer(question: QuizQuestion, selectedAnswer: number): boolean {
    return question.correctAnswer === selectedAnswer;
  }

  // Calculate quiz score
  calculateScore(answers: UserAnswer[], totalQuestions: number): number {
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    return calculatePercentage(correctAnswers, totalQuestions);
  }

  // Create quiz attempt
  createAttempt(
    answers: UserAnswer[],
    totalQuestions: number,
    timeTaken: number
  ): QuizAttempt {
    const score = this.calculateScore(answers, totalQuestions);
    
    return {
      id: generateId(),
      date: new Date(),
      score,
      totalQuestions,
      answers,
      timeTaken,
    };
  }

  // Get quiz statistics
  getStatistics(answers: UserAnswer[]): {
    correct: number;
    incorrect: number;
    total: number;
    percentage: number;
  } {
    const correct = answers.filter(a => a.isCorrect).length;
    const total = answers.length;
    const incorrect = total - correct;
    const percentage = calculatePercentage(correct, total);

    return { correct, incorrect, total, percentage };
  }

  // Shuffle quiz questions
  shuffleQuestions(questions: QuizQuestion[]): QuizQuestion[] {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Get questions by category
  getQuestionsByCategory(
    questions: QuizQuestion[],
    category: string
  ): QuizQuestion[] {
    return questions.filter(q => q.category === category);
  }

  // Get questions by difficulty
  getQuestionsByDifficulty(
    questions: QuizQuestion[],
    difficulty: 'easy' | 'medium' | 'hard'
  ): QuizQuestion[] {
    return questions.filter(q => q.difficulty === difficulty);
  }
}

export const quizService = new QuizService();

