// Quiz page
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { QuizContainer } from '../components/quiz/QuizContainer';
import { QuizHistory } from '../components/quiz/QuizHistory';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Brain, History, Play, Info } from 'lucide-react';

export function Quiz() {
  const [isStarted, setIsStarted] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setShowHistory(false);
  };

  const handleShowHistory = () => {
    setShowHistory(true);
    setIsStarted(false);
  };

  const handleComplete = () => {
    setShowHistory(true);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display mb-4">
            Quiz Kiểm tra Kiến thức
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            30 câu hỏi trắc nghiệm về Tư tưởng Hồ Chí Minh - Độc lập dân tộc
          </p>
        </motion.div>

        {/* Content */}
        {!isStarted && !showHistory && (
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card padding="lg">
                {/* Quiz info */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-4">
                    Thông tin Quiz
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Số câu hỏi: 30 câu</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Bao gồm cả 2 phần nội dung chính</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Thời gian: Không giới hạn</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Làm bài thoải mái, không bị giới hạn thời gian</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Điểm đạt: 70%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Cần trả lời đúng ít nhất 21/30 câu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Giải thích chi tiết</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Mỗi câu có đáp án và giải thích rõ ràng</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleStart} size="lg" className="flex-1 gap-2">
                    <Play className="w-5 h-5" />
                    Bắt đầu làm Quiz
                  </Button>
                  <Button onClick={handleShowHistory} variant="outline" size="lg" className="flex-1 gap-2">
                    <History className="w-5 h-5" />
                    Xem lịch sử
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        )}

        {/* Quiz container */}
        {isStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <QuizContainer onComplete={handleComplete} />
          </motion.div>
        )}

        {/* History */}
        {showHistory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                Lịch sử làm bài
              </h2>
              <Button onClick={handleStart} className="gap-2">
                <Play className="w-5 h-5" />
                Làm Quiz mới
              </Button>
            </div>
            <QuizHistory />
          </motion.div>
        )}
      </div>
    </Layout>
  );
}

