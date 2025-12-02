// Constants cho ứng dụng
export const APP_NAME = 'Tư tưởng Hồ Chí Minh';
export const APP_SUBTITLE = 'Độc lập Dân tộc và Chủ nghĩa Xã hội';

// LocalStorage keys
export const STORAGE_KEYS = {
  THEME: 'hcm-theme',
  QUIZ_HISTORY: 'hcm-quiz-history',
  PROGRESS: 'hcm-progress',
  VOICE_SETTINGS: 'hcm-voice-settings',
  CHAT_HISTORY: 'hcm-chat-history', // Lịch sử trò chuyện với AI
} as const;

// Quiz settings
export const QUIZ_SETTINGS = {
  TOTAL_QUESTIONS: 30,
  PASSING_SCORE: 70, // percentage
  TIME_LIMIT: 45 * 60, // 45 minutes in seconds
} as const;

// Voice settings
export const VOICE_SETTINGS = {
  DEFAULT_RATE: 1.0,
  DEFAULT_PITCH: 1.0,
  DEFAULT_VOLUME: 1.0,
  LANGUAGE: 'vi-VN',
} as const;

// Theme colors
export const THEME_COLORS = {
  primary: '#DC2626',
  secondary: '#FFC107',
  backgroundLight: '#F9FAFB',
  backgroundDark: '#1F2937',
} as const;

// Navigation routes
export const ROUTES = {
  HOME: '/',
  CONTENT: '/noi-dung',
  QUIZ: '/quiz',
} as const;

