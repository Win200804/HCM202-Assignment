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

  // Set progress for multiple sections at once
  setProgressBatch(updates: Record<string, boolean>): void {
    const progress = this.getProgress();
    Object.assign(progress, updates);
    this.set(STORAGE_KEYS.PROGRESS, progress);
  }

  // Get progress percentage - based on subsections completion
  getProgressPercentage(): number {
    const progress = this.getProgress();
    
    // Section I subsections (including header)
    const section1Items = [
      'subsection-1-1',    // 1. Vấn đề độc lập dân tộc
      'subsection-1-1-a',  // a)
      'subsection-1-1-b',  // b)
      'subsection-1-1-c',  // c)
      'subsection-1-1-d',  // d)
    ];
    
    // Section II subsections
    const section2Items = [
      'subsection-2-1',  // a)
      'subsection-2-2',  // b)
      'subsection-2-3',  // c)
      'subsection-2-4',  // d)
      'subsection-2-5',  // đ)
    ];
    
    // Count completed items in each section
    const section1Completed = section1Items.filter(id => progress[id]).length;
    const section2Completed = section2Items.filter(id => progress[id]).length;
    
    // Calculate percentage: Section I = 50%, Section II = 50%
    const section1Percent = (section1Completed / section1Items.length) * 50;
    const section2Percent = (section2Completed / section2Items.length) * 50;
    
    return Math.round(section1Percent + section2Percent);
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

