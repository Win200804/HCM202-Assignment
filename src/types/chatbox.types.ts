// Types cho chatbox component
export interface ChatMessage {
  id: string; // Unique identifier cho message
  role: 'user' | 'assistant'; // Người gửi message
  content: string; // Nội dung message
  timestamp: Date; // Thời gian gửi message
}

export interface ChatboxState {
  messages: ChatMessage[]; // Danh sách messages
  isLoading: boolean; // Trạng thái đang loading
  error: string | null; // Error message nếu có
}

