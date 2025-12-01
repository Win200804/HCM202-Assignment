// Quiz Review component - Xem lại tất cả câu hỏi sau khi nộp bài
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { QuizQuestion, UserAnswer } from '../../types/quiz.types';
import { Card } from '../common/Card';
import { cn } from '../../utils/helpers';

interface QuizReviewProps {
  questions: QuizQuestion[];
  answers: UserAnswer[];
}

export function QuizReview({ questions, answers }: QuizReviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
        Xem lại đáp án
      </h2>

      {questions.map((question, index) => {
        const userAnswer = answers.find(a => a.questionId === question.id);
        const isCorrect = userAnswer?.isCorrect ?? false;

        return (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card padding="lg">
              {/* Question header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Câu {index + 1}
                    </span>
                    <span className={cn(
                      'text-xs px-2 py-1 rounded-full font-medium',
                      question.difficulty === 'easy' && 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
                      question.difficulty === 'medium' && 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
                      question.difficulty === 'hard' && 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    )}>
                      {question.difficulty === 'easy' ? 'Dễ' : question.difficulty === 'medium' ? 'TB' : 'Khó'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {question.question}
                  </h3>
                </div>
                
                {/* Result icon */}
                {isCorrect ? (
                  <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                )}
              </div>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {question.options.map((option, optionIndex) => {
                  const isUserAnswer = userAnswer?.selectedAnswer === optionIndex;
                  const isCorrectAnswer = question.correctAnswer === optionIndex;

                  return (
                    <div
                      key={optionIndex}
                      className={cn(
                        'p-3 rounded-lg border-2 flex items-center gap-3',
                        isCorrectAnswer && 'border-green-600 bg-green-50 dark:bg-green-900/20',
                        isUserAnswer && !isCorrectAnswer && 'border-red-600 bg-red-50 dark:bg-red-900/20',
                        !isUserAnswer && !isCorrectAnswer && 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                      )}
                    >
                      <span className={cn(
                        'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold',
                        isCorrectAnswer && 'bg-green-600 text-white',
                        isUserAnswer && !isCorrectAnswer && 'bg-red-600 text-white',
                        !isUserAnswer && !isCorrectAnswer && 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      )}>
                        {String.fromCharCode(65 + optionIndex)}
                      </span>
                      <span className="flex-1 text-gray-900 dark:text-white">
                        {option}
                      </span>
                      {isCorrectAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                      {isUserAnswer && !isCorrectAnswer && (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-r-lg">
                <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
                  Giải thích:
                </h4>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

