// Content Section component
import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';
import type { ContentSection as ContentSectionType } from '../../types/content.types';
import { Card } from '../common/Card';
import { parseMarkdown } from '../../utils/markdownParser';

interface ContentSectionProps {
  section: ContentSectionType;
}

export function ContentSection({ section }: ContentSectionProps) {
  return (
    <div id={section.id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card padding="lg" className="mb-8">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display mb-6 pb-4 border-b-2 border-primary-600">
            {section.title}
          </h2>

          {/* Section content */}
          {section.content && (
            <div 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(section.content) }}
            />
          )}

          {/* Subsections */}
          {section.subsections && (
            <div className="space-y-8 mt-8">
              {section.subsections.map((subsection) => (
                <div key={subsection.id} id={subsection.id} className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-4">
                    {subsection.title}
                  </h3>

                  {subsection.content && (
                    <div 
                      className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(subsection.content) }}
                    />
                  )}

                  {/* Quotes */}
                  {subsection.quotes && subsection.quotes.length > 0 && (
                    <div className="space-y-4 mt-6">
                      {subsection.quotes.map((quote, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="relative pl-6 pr-4 py-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border-l-4 border-primary-600"
                        >
                          <QuoteIcon className="absolute top-4 left-2 w-4 h-4 text-primary-600 dark:text-primary-400" />
                          <blockquote className="text-gray-800 dark:text-gray-200 italic leading-relaxed">
                            "{quote.text}"
                          </blockquote>
                          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            {quote.author && (
                              <span className="font-medium">— {quote.author}</span>
                            )}
                            {quote.year && (
                              <span className="text-xs">({quote.year})</span>
                            )}
                            {quote.source && (
                              <span className="text-xs italic">- {quote.source}</span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
}

