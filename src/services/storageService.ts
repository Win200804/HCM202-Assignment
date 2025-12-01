// Service quản lý LocalStorage
import { STORAGE_KEYS } from '../utils/constants';
import type { QuizHistory, QuizAttempt } from '../types/quiz.types';

class StorageService {
  // Generic get method
  private get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
      return null;
    }
  }

  // Generic set method
  private set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing ${key} to localStorage:`, error);
    }
  }

  // Theme
  getTheme(): 'light' | 'dark' {
    return this.get<'light' | 'dark'>(STORAGE_KEYS.THEME) || 'light';
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.set(STORAGE_KEYS.THEME, theme);
  }

  // Quiz History
  getQuizHistory(): QuizHistory {
    const history = this.get<QuizHistory>(STORAGE_KEYS.QUIZ_HISTORY);
    return history || {
      attempts: [],
      bestScore: 0,
      averageScore: 0,
      totalAttempts: 0,
    };
  }

  addQuizAttempt(attempt: QuizAttempt): void {
    const history = this.getQuizHistory();
    history.attempts.push(attempt);
    history.totalAttempts = history.attempts.length;
    
    // Calculate best score
    history.bestScore = Math.max(...history.attempts.map(a => a.score), 0);
    
    // Calculate average score
    const totalScore = history.attempts.reduce((sum, a) => sum + a.score, 0);
    history.averageScore = Math.round(totalScore / history.totalAttempts);
    
    this.set(STORAGE_KEYS.QUIZ_HISTORY, history);
  }

  clearQuizHistory(): void {
    this.set(STORAGE_KEYS.QUIZ_HISTORY, {
      attempts: [],
      bestScore: 0,
      averageScore: 0,
      totalAttempts: 0,
    });
  }

  // Progress tracking
  getProgress(): Record<string, boolean> {
    return this.get<Record<string, boolean>>(STORAGE_KEYS.PROGRESS) || {};
  }

  setProgress(sectionId: string, completed: boolean): void {
    const progress = this.getProgress();
    progress[sectionId] = completed;
    this.set(STORAGE_KEYS.PROGRESS, progress);
  }

  getProgressPercentage(): number {
    const progress = this.getProgress();
    const completed = Object.values(progress).filter(Boolean).length;
    const total = Object.keys(progress).length;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }

  // Voice settings
  getVoiceSettings(): { rate: number; pitch: number; volume: number } {
    return this.get(STORAGE_KEYS.VOICE_SETTINGS) || {
      rate: 1.0,
      pitch: 1.0,
      volume: 1.0,
    };
  }

  setVoiceSettings(settings: { rate: number; pitch: number; volume: number }): void {
    this.set(STORAGE_KEYS.VOICE_SETTINGS, settings);
  }

  // Clear all data
  clearAll(): void {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
}

export const storageService = new StorageService();

