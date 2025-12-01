// Custom hook cho quiz logic
import { useState, useCallback } from 'react';
import type { QuizQuestion, UserAnswer, QuizState } from '../types/quiz.types';
import { quizService } from '../services/quizService';
import { storageService } from '../services/storageService';

export function useQuiz(questions: QuizQuestion[]) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    isCompleted: false,
    startTime: null,
  });

  // Start quiz
  const startQuiz = useCallback(() => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: [],
      isCompleted: false,
      startTime: new Date(),
    });
  }, []);

  // Answer question
  const answerQuestion = useCallback((questionId: string, selectedAnswer: number) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = quizService.checkAnswer(question, selectedAnswer);
    const userAnswer: UserAnswer = {
      questionId,
      selectedAnswer,
      isCorrect,
    };

    setQuizState(prev => ({
      ...prev,
      answers: [...prev.answers, userAnswer],
    }));
  }, [questions]);

  // Go to next question
  const nextQuestion = useCallback(() => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: Math.min(prev.currentQuestionIndex + 1, questions.length - 1),
    }));
  }, [questions.length]);

  // Go to previous question
  const previousQuestion = useCallback(() => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(prev.currentQuestionIndex - 1, 0),
    }));
  }, []);

  // Complete quiz
  const completeQuiz = useCallback(() => {
    if (!quizState.startTime) return;

    const endTime = new Date();
    const timeTaken = Math.floor((endTime.getTime() - quizState.startTime.getTime()) / 1000);

    const attempt = quizService.createAttempt(
      quizState.answers,
      questions.length,
      timeTaken
    );

    storageService.addQuizAttempt(attempt);

    setQuizState(prev => ({
      ...prev,
      isCompleted: true,
    }));
  }, [quizState.startTime, quizState.answers, questions.length]);

  // Get current question
  const currentQuestion = questions[quizState.currentQuestionIndex];

  // Get statistics
  const statistics = quizState.isCompleted
    ? quizService.getStatistics(quizState.answers)
    : null;

  // Check if current question is answered
  const isCurrentQuestionAnswered = quizState.answers.some(
    a => a.questionId === currentQuestion?.id
  );

  return {
    quizState,
    currentQuestion,
    statistics,
    isCurrentQuestionAnswered,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeQuiz,
  };
}

