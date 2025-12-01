// Voice Reader component with controls
import { Play, Pause, Square, Volume2, Settings } from 'lucide-react';
import { useState } from 'react';
import { useVoiceReader } from '../../hooks/useVoiceReader';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface VoiceReaderProps {
  text: string;
}

export function VoiceReader({ text }: VoiceReaderProps) {
  const {
    isReading,
    isPaused,
    rate,
    speak,
    stop,
    pause,
    resume,
    setRate,
  } = useVoiceReader();
  
  const [showSettings, setShowSettings] = useState(false);

  // Handle play/pause
  const handlePlayPause = () => {
    if (!isReading) {
      speak(text);
    } else if (isPaused) {
      resume();
    } else {
      pause();
    }
  };

  return (
    <Card padding="md" className="sticky top-20 z-10">
      <div className="flex items-center justify-between">
        {/* Left side - Controls */}
        <div className="flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Đọc nội dung
          </span>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePlayPause}
            className="w-24"
          >
            {!isReading || isPaused ? (
              <>
                <Play className="w-4 h-4 mr-1" />
                {isPaused ? 'Tiếp tục' : 'Phát'}
              </>
            ) : (
              <>
                <Pause className="w-4 h-4 mr-1" />
                Dừng
              </>
            )}
          </Button>

          {isReading && (
            <Button
              variant="ghost"
              size="sm"
              onClick={stop}
            >
              <Square className="w-4 h-4" />
            </Button>
          )}

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Settings panel */}
      {showSettings && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tốc độ đọc: {rate.toFixed(1)}x
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Chậm</span>
            <span>Nhanh</span>
          </div>
        </div>
      )}
    </Card>
  );
}

