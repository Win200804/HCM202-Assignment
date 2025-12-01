// Quiz Results component
import { motion } from 'framer-motion';
import { Trophy, Target, CheckCircle2, XCircle, RotateCcw, Home } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

interface QuizResultsProps {
  correctAnswers: number;
  totalQuestions: number;
  onRetry: () => void;
  onGoHome: () => void;
}

export function QuizResults({
  correctAnswers,
  totalQuestions,
  onRetry,
  onGoHome,
}: QuizResultsProps) {
  // Calculate score on scale of 10
  const score = (correctAnswers / totalQuestions) * 10;
  const scoreRounded = Math.round(score * 10) / 10; // Round to 1 decimal place
  const incorrectAnswers = totalQuestions - correctAnswers;
  const passed = score >= 7.0;

  // Result message based on score
  const getMessage = () => {
    if (score >= 9.0) return 'Xuất sắc!';
    if (score >= 8.0) return 'Rất tốt!';
    if (score >= 7.0) return 'Tốt!';
    if (score >= 5.0) return 'Khá!';
    return 'Cần cố gắng thêm!';
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card padding="lg">
        {/* Trophy animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
            passed 
              ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' 
              : 'bg-gradient-to-br from-gray-400 to-gray-600'
          }`}>
            <Trophy className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Result title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white font-display mb-2"
        >
          {getMessage()}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8"
        >
          {passed ? 'Bạn đã hoàn thành quiz thành công!' : 'Hãy xem lại nội dung và thử lại nhé!'}
        </motion.p>

        {/* Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-baseline gap-3">
            <span className="text-6xl font-bold text-primary-600 dark:text-primary-400">
              {scoreRounded}
            </span>
            <span className="text-4xl text-gray-600 dark:text-gray-400">/10</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {correctAnswers} / {totalQuestions} câu đúng
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
            <Target className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {totalQuestions}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tổng câu hỏi</div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
            <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {correctAnswers}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Câu đúng</div>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
            <XCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {incorrectAnswers}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Câu sai</div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button onClick={onRetry} variant="primary" size="lg" className="gap-2">
            <RotateCcw className="w-5 h-5" />
            Làm lại
          </Button>
          <Button onClick={onGoHome} variant="outline" size="lg" className="gap-2">
            <Home className="w-5 h-5" />
            Về trang chủ
          </Button>
        </motion.div>
      </Card>
    </div>
  );
}

