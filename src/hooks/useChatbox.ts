// Custom hook để quản lý chatbox state và logic
import { useState, useCallback, useEffect } from 'react';
import { sendMessageToGemini, sendMessageWithStreaming } from '../services/geminiService';
import { STORAGE_KEYS } from '../utils/constants';
import type { ChatMessage } from '../types/chatbox.types';

// Load messages từ localStorage
function loadMessagesFromStorage(): ChatMessage[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CHAT_HISTORY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert timestamp strings back to Date objects
      return parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    }
  } catch (error) {
    console.error('Error loading chat history:', error);
  }
  return [];
}

// Save messages to localStorage
function saveMessagesToStorage(messages: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEYS.CHAT_HISTORY, JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving chat history:', error);
  }
}

export function useChatbox() {
  // State cho messages - load từ localStorage
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadMessagesFromStorage());
  // State cho loading
  const [isLoading, setIsLoading] = useState(false);
  // State cho error
  const [error, setError] = useState<string | null>(null);

  // Auto-save messages to localStorage khi thay đổi
  useEffect(() => {
    if (messages.length > 0) {
      saveMessagesToStorage(messages);
    }
  }, [messages]);

  // Gửi message với streaming support
  // Tắt streaming mặc định để dùng generateContent endpoint
  const sendMessage = useCallback(async (content: string, useStreaming = false) => {
    // Validate input
    if (!content.trim() || isLoading) return;

    // Tạo user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    // Thêm user message vào danh sách
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    // Tạo placeholder cho assistant message
    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, assistantMessage]);

    try {
      // Chuẩn bị conversation history cho context
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'model' as const,
        parts: msg.content,
      }));

      if (useStreaming) {
        // Streaming response - update từng chunk
        let fullResponse = '';
        await sendMessageWithStreaming(
          content.trim(),
          (chunk) => {
            fullResponse += chunk;
            // Update message content với chunk mới
            setMessages(prev =>
              prev.map(msg =>
                msg.id === assistantMessageId
                  ? { ...msg, content: fullResponse }
                  : msg
              )
            );
          },
          history
        );
      } else {
        // Non-streaming response - đợi full response
        const response = await sendMessageToGemini(content.trim(), history);
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantMessageId
              ? { ...msg, content: response }
              : msg
          )
        );
      }
    } catch (err) {
      // Xử lý error
      const errorMessage = err instanceof Error ? err.message : 'Có lỗi xảy ra';
      setError(errorMessage);
      // Xóa placeholder message nếu có lỗi
      setMessages(prev => prev.filter(msg => msg.id !== assistantMessageId));
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  // Xóa tất cả messages
  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
    // Xóa cả localStorage
    try {
      localStorage.removeItem(STORAGE_KEYS.CHAT_HISTORY);
    } catch (error) {
      console.error('Error clearing chat history:', error);
    }
  }, []);

  // Retry last message nếu có lỗi
  const retryLastMessage = useCallback(() => {
    if (messages.length === 0) return;
    
    // Tìm user message cuối cùng
    const lastUserMessage = [...messages].reverse().find(msg => msg.role === 'user');
    if (lastUserMessage) {
      // Xóa messages sau user message cuối
      const lastUserMessageIndex = messages.findIndex(msg => msg.id === lastUserMessage.id);
      setMessages(messages.slice(0, lastUserMessageIndex + 1));
      setError(null);
      // Gửi lại message
      sendMessage(lastUserMessage.content);
    }
  }, [messages, sendMessage]);

  return {
    messages, // Danh sách messages
    isLoading, // Trạng thái loading
    error, // Error message
    sendMessage, // Function gửi message
    clearMessages, // Function xóa messages
    retryLastMessage, // Function retry message cuối
  };
}

