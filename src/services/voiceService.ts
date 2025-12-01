// Service Text-to-Speech sử dụng Web Speech API
import { VOICE_SETTINGS } from '../utils/constants';
import { storageService } from './storageService';

class VoiceService {
  private synthesis: SpeechSynthesis;
  private utterance: SpeechSynthesisUtterance | null = null;
  private isInitialized = false;

  constructor() {
    this.synthesis = window.speechSynthesis;
  }

  // Initialize với settings từ localStorage
  initialize(): void {
    if (this.isInitialized) return;
    
    const settings = storageService.getVoiceSettings();
    this.utterance = new SpeechSynthesisUtterance();
    this.utterance.lang = VOICE_SETTINGS.LANGUAGE;
    this.utterance.rate = settings.rate;
    this.utterance.pitch = settings.pitch;
    this.utterance.volume = settings.volume;
    
    this.isInitialized = true;
  }

  // Đọc text
  speak(text: string, onEnd?: () => void): void {
    this.initialize();
    
    // Stop current speech if any
    this.stop();
    
    if (this.utterance) {
      this.utterance.text = text;
      
      if (onEnd) {
        this.utterance.onend = onEnd;
      }
      
      this.synthesis.speak(this.utterance);
    }
  }

  // Dừng đọc
  stop(): void {
    this.synthesis.cancel();
  }

  // Pause
  pause(): void {
    this.synthesis.pause();
  }

  // Resume
  resume(): void {
    this.synthesis.resume();
  }

  // Check if speaking
  isSpeaking(): boolean {
    return this.synthesis.speaking;
  }

  // Check if paused
  isPaused(): boolean {
    return this.synthesis.paused;
  }

  // Set rate (0.1 - 10)
  setRate(rate: number): void {
    this.initialize();
    if (this.utterance) {
      this.utterance.rate = rate;
      const settings = storageService.getVoiceSettings();
      storageService.setVoiceSettings({ ...settings, rate });
    }
  }

  // Set pitch (0 - 2)
  setPitch(pitch: number): void {
    this.initialize();
    if (this.utterance) {
      this.utterance.pitch = pitch;
      const settings = storageService.getVoiceSettings();
      storageService.setVoiceSettings({ ...settings, pitch });
    }
  }

  // Set volume (0 - 1)
  setVolume(volume: number): void {
    this.initialize();
    if (this.utterance) {
      this.utterance.volume = volume;
      const settings = storageService.getVoiceSettings();
      storageService.setVoiceSettings({ ...settings, volume });
    }
  }

  // Get available voices
  getVoices(): SpeechSynthesisVoice[] {
    return this.synthesis.getVoices();
  }

  // Set voice
  setVoice(voice: SpeechSynthesisVoice): void {
    this.initialize();
    if (this.utterance) {
      this.utterance.voice = voice;
    }
  }

  // Get Vietnamese voices
  getVietnameseVoices(): SpeechSynthesisVoice[] {
    return this.getVoices().filter(voice => voice.lang.startsWith('vi'));
  }
}

export const voiceService = new VoiceService();

