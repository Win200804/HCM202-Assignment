// Quiz History component
import { motion } from 'framer-motion';
import { Calendar, Trophy, Clock, TrendingUp } from 'lucide-react';
import { useQuizContext } from '../../contexts/QuizContext';
import { Card } from '../common/Card';
import { formatDate, formatTime } from '../../utils/helpers';

export function QuizHistory() {
  const { quizHistory } = useQuizContext();

  if (quizHistory.totalAttempts === 0) {
    return (
      <Card padding="lg">
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">
            Chưa có lịch sử làm quiz. Hãy bắt đầu làm quiz đầu tiên!
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card padding="md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {(quizHistory.bestScore / 10).toFixed(1)}/10
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Điểm cao nhất</div>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {(quizHistory.averageScore / 10).toFixed(1)}/10
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Điểm trung bình</div>
            </div>
          </div>
        </Card>

        <Card padding="md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {quizHistory.totalAttempts}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Lần làm quiz</div>
            </div>
          </div>
        </Card>
      </div>

      {/* History list */}
      <Card padding="lg">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-4">
          Lịch sử làm bài
        </h3>
        <div className="space-y-3">
          {quizHistory.attempts
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((attempt, index) => (
              <motion.div
                key={attempt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(new Date(attempt.date))}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-primary-600" />
                        <span className="font-bold text-gray-900 dark:text-white">
                          {(attempt.score / 10).toFixed(1)}/10
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {formatTime(attempt.timeTaken)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      attempt.score >= 90
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : attempt.score >= 70
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}
                  >
                    {attempt.score >= 90 ? 'Xuất sắc' : attempt.score >= 70 ? 'Đạt' : 'Cần cố gắng'}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </Card>
    </div>
  );
}

