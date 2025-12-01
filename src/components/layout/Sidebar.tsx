// Sidebar component for content navigation
import { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { cn, scrollToElement } from '../../utils/helpers';
import { contentData } from '../../data/content';
import { storageService } from '../../services/storageService';

export function Sidebar() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);

  // Load progress from storage
  useEffect(() => {
    setProgress(storageService.getProgress());
  }, []);

  // Handle section click
  const handleSectionClick = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsOpen(false);
  };

  // Toggle section completion
  const toggleCompletion = (sectionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newProgress = { ...progress, [sectionId]: !progress[sectionId] };
    setProgress(newProgress);
    storageService.setProgress(sectionId, !progress[sectionId]);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed top-20 right-4 z-40 md:hidden',
          'w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg',
          'flex items-center justify-center',
          'hover:bg-primary-700 transition-colors'
        )}
        aria-label="Toggle sidebar"
      >
        <ChevronRight className={cn('w-6 h-6 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed md:sticky top-16 right-0 h-[calc(100vh-4rem)] z-40',
          'w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700',
          'overflow-y-auto custom-scrollbar',
          'transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        )}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-4">
            Mục lục
          </h2>

          <div className="space-y-2">
            {contentData.map((section) => (
              <div key={section.id} className="space-y-1">
                {/* Main section */}
                <div
                  className={cn(
                    'flex items-start gap-2 p-3 rounded-lg cursor-pointer transition-colors',
                    'hover:bg-primary-50 dark:hover:bg-gray-700',
                    progress[section.id] && 'bg-green-50 dark:bg-green-900/20'
                  )}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <button
                    onClick={(e) => toggleCompletion(section.id, e)}
                    className="mt-0.5 focus:outline-none"
                  >
                    {progress[section.id] ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  <span className="text-sm font-medium text-gray-900 dark:text-white flex-1">
                    {section.title}
                  </span>
                </div>

                {/* Subsections */}
                {section.subsections && (
                  <div className="ml-7 space-y-1">
                    {section.subsections.map((subsection) => (
                      <div
                        key={subsection.id}
                        className={cn(
                          'flex items-start gap-2 p-2 pl-3 rounded-lg cursor-pointer transition-colors',
                          'hover:bg-primary-50 dark:hover:bg-gray-700 border-l-2 border-gray-200 dark:border-gray-700',
                          progress[subsection.id] && 'border-green-600 bg-green-50 dark:bg-green-900/20'
                        )}
                        onClick={() => handleSectionClick(subsection.id)}
                      >
                        <button
                          onClick={(e) => toggleCompletion(subsection.id, e)}
                          className="mt-0.5 focus:outline-none"
                        >
                          {progress[subsection.id] ? (
                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        <span className="text-xs text-gray-700 dark:text-gray-300 flex-1">
                          {subsection.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress summary */}
          <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-800 rounded-lg">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Tiến độ học tập
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${storageService.getProgressPercentage()}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {storageService.getProgressPercentage()}% hoàn thành
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

