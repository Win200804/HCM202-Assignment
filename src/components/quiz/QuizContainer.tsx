// Quiz Container component
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Send } from 'lucide-react';
import { useQuiz } from '../../hooks/useQuiz';
import { useQuizContext } from '../../contexts/QuizContext';
import { quizData } from '../../data/quizData';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { QuizReview } from './QuizReview';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface QuizContainerProps {
  onComplete?: () => void;
}

export function QuizContainer({ onComplete: _ }: QuizContainerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { refreshHistory } = useQuizContext();
  
  const {
    quizState,
    currentQuestion,
    statistics,
    isCurrentQuestionAnswered,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeQuiz,
  } = useQuiz(quizData);

  // Start quiz on mount
  useEffect(() => {
    if (!quizState.startTime) {
      startQuiz();
    }
  }, []);

  // Handle answer selection
  const handleSelectAnswer = (answerIndex: number) => {
    if (!currentQuestion || isCurrentQuestionAnswered || isSubmitted) return;
    answerQuestion(currentQuestion.id, answerIndex);
  };

  // Handle next question
  const handleNext = () => {
    if (quizState.currentQuestionIndex < quizData.length - 1) {
      nextQuestion();
    }
  };

  // Handle previous question
  const handlePrevious = () => {
    previousQuestion();
  };

  // Handle submit quiz
  const handleSubmit = () => {
    if (quizState.answers.length === quizData.length) {
      completeQuiz();
      refreshHistory();
      setIsSubmitted(true);
    }
  };

  // Handle retry
  const handleRetry = () => {
    startQuiz();
    setIsSubmitted(false);
  };

  // Get current answer
  const currentAnswer = quizState.answers.find(a => a.questionId === currentQuestion?.id);

  // Show results after submission
  if (isSubmitted && statistics) {
    return (
      <div className="space-y-8">
        <QuizResults
          correctAnswers={statistics.correct}
          totalQuestions={statistics.total}
          onRetry={handleRetry}
          onGoHome={() => window.location.href = '/'}
        />
        
        {/* Review all questions */}
        <QuizReview 
          questions={quizData}
          answers={quizState.answers}
        />
      </div>
    );
  }

  if (!currentQuestion) return null;

  // Check if all questions are answered
  const allAnswered = quizState.answers.length === quizData.length;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      <Card padding="md" className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tiến độ
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Câu {quizState.currentQuestionIndex + 1} / {quizData.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${(quizState.answers.length / quizData.length) * 100}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Đã trả lời: {quizState.answers.length} / {quizData.length} câu
        </p>
      </Card>

      {/* Question - không show explanation khi chưa submit */}
      <QuizQuestion
        question={currentQuestion}
        questionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={quizData.length}
        selectedAnswer={currentAnswer?.selectedAnswer ?? null}
        onSelectAnswer={handleSelectAnswer}
        showResult={false}
      />

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={quizState.currentQuestionIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Câu trước
        </Button>

        <div className="flex items-center gap-4">
          {allAnswered && (
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="gap-2"
            >
              <Send className="w-5 h-5" />
              Nộp bài
            </Button>
          )}
          
          {quizState.currentQuestionIndex < quizData.length - 1 && (
            <Button
              variant="outline"
              onClick={handleNext}
              className="gap-2"
            >
              Câu tiếp
              <ChevronRight className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Submit reminder */}
      {allAnswered && (
        <Card padding="md" className="mt-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-medium text-green-900 dark:text-green-100">
                  Đã hoàn thành tất cả câu hỏi!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Bạn có thể xem lại hoặc nộp bài ngay
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

