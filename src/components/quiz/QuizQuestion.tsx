// Quiz Question component
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { QuizQuestion as QuizQuestionType } from '../../types/quiz.types';
import { Card } from '../common/Card';
import { cn } from '../../utils/helpers';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onSelectAnswer: (answerIndex: number) => void;
  showResult: boolean;
}

export function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  showResult,
}: QuizQuestionProps) {
  // Difficulty badge color
  const difficultyColors = {
    easy: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    hard: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  };

  const difficultyLabels = {
    easy: 'Dễ',
    medium: 'Trung bình',
    hard: 'Khó',
  };

  return (
    <Card padding="lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Câu hỏi {questionNumber} / {totalQuestions}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className={cn('text-xs px-2 py-1 rounded-full font-medium', difficultyColors[question.difficulty])}>
              {difficultyLabels[question.difficulty]}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {question.category}
            </span>
          </div>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === question.correctAnswer;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;

          return (
            <motion.button
              key={index}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
              whileHover={!showResult ? { scale: 1.02 } : {}}
              whileTap={!showResult ? { scale: 0.98 } : {}}
              className={cn(
                'w-full text-left p-4 rounded-lg border-2 transition-all duration-200',
                'flex items-center gap-3',
                !showResult && !isSelected && 'border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 bg-white dark:bg-gray-800',
                !showResult && isSelected && 'border-primary-600 bg-primary-50 dark:bg-primary-900/20',
                showCorrect && 'border-green-600 bg-green-50 dark:bg-green-900/20',
                showWrong && 'border-red-600 bg-red-50 dark:bg-red-900/20',
                showResult && 'cursor-not-allowed'
              )}
            >
              {/* Option letter */}
              <span
                className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                  !showResult && !isSelected && 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
                  !showResult && isSelected && 'bg-primary-600 text-white',
                  showCorrect && 'bg-green-600 text-white',
                  showWrong && 'bg-red-600 text-white'
                )}
              >
                {String.fromCharCode(65 + index)}
              </span>

              {/* Option text */}
              <span className="flex-1 text-gray-900 dark:text-white">
                {option}
              </span>

              {/* Result icon */}
              {showResult && (
                <>
                  {showCorrect && <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />}
                  {showWrong && <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />}
                </>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-lg"
        >
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            Giải thích:
          </h4>
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
            {question.explanation}
          </p>
        </motion.div>
      )}
    </Card>
  );
}

