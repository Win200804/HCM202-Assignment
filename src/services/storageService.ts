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
    
    // All subsections in the learning content
    const allItems = [
      'subsection-1-1',   // 1. Vấn đề dân tộc
      'subsection-1-a',   // A. Độc lập, tự do là quyền thiêng liêng...
      'subsection-1-a1',  // A.1. Cơ sở lý luận
      'subsection-1-a2',  // A.2. Những mốc son lịch sử
      'subsection-1-b',   // B. Độc lập dân tộc phải gắn liền...
      'subsection-1-b1',  // B.1. Mục đích tối thượng
      'subsection-1-b2',  // B.2. Những yêu cầu cụ thể
      'subsection-1-c',   // C. Độc lập dân tộc phải là nền độc lập thật sự...
      'subsection-1-c1',  // C.1. Tiêu chí của nền độc lập thật sự
      'subsection-1-d',   // D. Độc lập dân tộc gắn liền với thống nhất...
      'subsection-1-d1',  // D.1. Lập trường kiên quyết
      'subsection-1-d2',  // D.2. Niềm tin bất diệt
    ];
    
    // Count completed items
    const completedCount = allItems.filter(id => progress[id]).length;
    
    // Calculate percentage: each item ≈ 8.33%
    return Math.round((completedCount / allItems.length) * 100);
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

