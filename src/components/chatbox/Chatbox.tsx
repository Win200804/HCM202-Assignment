// Chatbox component với Gemini AI integration
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Loader2, Trash2, RefreshCw } from 'lucide-react';
import { useChatbox } from '../../hooks/useChatbox';
import { Button } from '../common/Button';
import { parseMarkdown } from '../../utils/markdownParser';
import type { ChatMessage } from '../../types/chatbox.types';

interface ChatboxProps {
  isOpen?: boolean; // Controlled open state
  onToggle?: () => void; // Callback khi toggle
}

export function Chatbox({ isOpen: controlledIsOpen, onToggle }: ChatboxProps) {
  // Internal state nếu không dùng controlled mode
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Determine open state - controlled hoặc internal
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const toggle = onToggle || (() => setInternalIsOpen(prev => !prev));

  // Sử dụng chatbox hook
  const { messages, isLoading, error, sendMessage, clearMessages, retryLastMessage } = useChatbox();

  // Auto scroll to bottom khi có message mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input khi mở chatbox
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Handle submit message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue, false); // Tắt streaming - dùng generateContent
      setInputValue('');
    }
  };

  // Handle clear history với confirmation
  const handleClear = () => {
    if (messages.length > 0) {
      if (window.confirm('Bạn có chắc muốn xóa toàn bộ lịch sử chat?')) {
        clearMessages();
      }
    }
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggle}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full shadow-lg flex items-center justify-center text-white z-50 hover:shadow-xl transition-shadow"
          aria-label="Mở chatbox"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chatbox panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-96 h-[600px] z-50 flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-t-lg">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <h3 className="font-bold font-display">AI Trợ lý</h3>
              </div>
              <div className="flex items-center gap-2">
                {/* Clear button */}
                <button
                  onClick={handleClear}
                  disabled={messages.length === 0}
                  className="p-1.5 hover:bg-white/20 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Xóa lịch sử"
                  title="Xóa lịch sử"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                {/* Close button */}
                <button
                  onClick={toggle}
                  className="p-1.5 hover:bg-white/20 rounded transition-colors"
                  aria-label="Đóng chatbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.length === 0 ? (
                // Empty state
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400 px-4">
                  <MessageCircle className="w-12 h-12 mb-4 text-primary-400" />
                  <p className="text-sm font-medium mb-2">
                    Chào bạn! Tôi là trợ lý AI về Tư tưởng Hồ Chí Minh.
                  </p>
                  <p className="text-xs">
                    Hãy hỏi tôi về Độc lập Dân tộc và Chủ nghĩa Xã hội.
                  </p>
                </div>
              ) : (
                // Messages list
                messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))
              )}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Đang suy nghĩ...</span>
                </div>
              )}
              
              {/* Error message */}
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-red-600 dark:text-red-400 text-sm flex-1">
                      {error}
                    </p>
                    <button
                      onClick={retryLastMessage}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                      title="Thử lại"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Nhập câu hỏi của bạn..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Message bubble component
function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? 'bg-primary-600 text-white'
            : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 shadow-sm'
        }`}
      >
        {isUser ? (
          // User message - plain text
          <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
        ) : (
          // AI message - formatted markdown
          <div 
            className="text-sm break-words markdown-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
          />
        )}
        <p
          className={`text-xs mt-2 ${
            isUser ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {new Intl.DateTimeFormat('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
          }).format(message.timestamp)}
        </p>
      </div>
    </motion.div>
  );
}

