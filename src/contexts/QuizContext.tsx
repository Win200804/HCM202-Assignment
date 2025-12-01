// Quiz Context để quản lý state quiz toàn cục
import React, { createContext, useContext, useState } from 'react';
import type { QuizHistory } from '../types/quiz.types';
import { storageService } from '../services/storageService';

interface QuizContextType {
  quizHistory: QuizHistory;
  refreshHistory: () => void;
  clearHistory: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [quizHistory, setQuizHistory] = useState<QuizHistory>(() => {
    return storageService.getQuizHistory();
  });

  const refreshHistory = () => {
    setQuizHistory(storageService.getQuizHistory());
  };

  const clearHistory = () => {
    storageService.clearQuizHistory();
    refreshHistory();
  };

  return (
    <QuizContext.Provider value={{ quizHistory, refreshHistory, clearHistory }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
}

