// Custom hook cho text-to-speech
import { useState, useEffect, useCallback } from 'react';
import { voiceService } from '../services/voiceService';

export function useVoiceReader() {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRateState] = useState(1.0);
  const [pitch, setPitchState] = useState(1.0);
  const [volume, setVolumeState] = useState(1.0);

  // Initialize voice service
  useEffect(() => {
    voiceService.initialize();
  }, []);

  // Check speaking status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsReading(voiceService.isSpeaking());
      setIsPaused(voiceService.isPaused());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Speak text
  const speak = useCallback((text: string, onEnd?: () => void) => {
    voiceService.speak(text, () => {
      setIsReading(false);
      setIsPaused(false);
      onEnd?.();
    });
    setIsReading(true);
  }, []);

  // Stop speaking
  const stop = useCallback(() => {
    voiceService.stop();
    setIsReading(false);
    setIsPaused(false);
  }, []);

  // Pause speaking
  const pause = useCallback(() => {
    voiceService.pause();
    setIsPaused(true);
  }, []);

  // Resume speaking
  const resume = useCallback(() => {
    voiceService.resume();
    setIsPaused(false);
  }, []);

  // Set rate
  const setRate = useCallback((newRate: number) => {
    voiceService.setRate(newRate);
    setRateState(newRate);
  }, []);

  // Set pitch
  const setPitch = useCallback((newPitch: number) => {
    voiceService.setPitch(newPitch);
    setPitchState(newPitch);
  }, []);

  // Set volume
  const setVolume = useCallback((newVolume: number) => {
    voiceService.setVolume(newVolume);
    setVolumeState(newVolume);
  }, []);

  return {
    isReading,
    isPaused,
    rate,
    pitch,
    volume,
    speak,
    stop,
    pause,
    resume,
    setRate,
    setPitch,
    setVolume,
  };
}

