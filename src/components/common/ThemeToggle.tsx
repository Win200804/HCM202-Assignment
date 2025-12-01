// Theme toggle component
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/helpers';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative inline-flex items-center justify-center w-12 h-12 rounded-lg',
        'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700',
        'transition-all duration-300 focus-ring'
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <Sun
          className={cn(
            'absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300',
            theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          )}
        />
        {/* Moon icon */}
        <Moon
          className={cn(
            'absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300',
            theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          )}
        />
      </div>
    </button>
  );
}

