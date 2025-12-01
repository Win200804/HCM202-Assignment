// Header component
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '../common/ThemeToggle';
import { ROUTES, APP_NAME, APP_SUBTITLE } from '../../utils/constants';
import { cn } from '../../utils/helpers';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: 'Trang chủ', path: ROUTES.HOME },
    { label: 'Nội dung', path: ROUTES.CONTENT },
    { label: 'Quiz', path: ROUTES.QUIZ },
    { label: 'Phân tích', path: ROUTES.ANALYSIS },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900 dark:text-white font-display">
                {APP_NAME}
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {APP_SUBTITLE}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                  'text-gray-700 dark:text-gray-300',
                  'hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Theme toggle & Mobile menu button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                  'text-gray-700 dark:text-gray-300',
                  'hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

