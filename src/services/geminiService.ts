// Service để gọi Gemini API từ frontend
import { GoogleGenerativeAI } from '@google/generative-ai';

// Lấy API key từ environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// Khởi tạo Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);

// Model name - sử dụng gemini-1.5-flash-latest cho tốc độ và ổn định
// Endpoint: /v1beta/models/gemini-1.5-flash-latest:generateContent
const MODEL_NAME = 'gemini-2.5-flash';

// System instruction để định hướng AI về chủ đề Tư tưởng Hồ Chí Minh
const SYSTEM_INSTRUCTION = `Bạn là một trợ lý AI chuyên về Tư tưởng Hồ Chí Minh, đặc biệt là về Độc lập Dân tộc và Chủ nghĩa Xã hội. 
Hãy trả lời các câu hỏi một cách chính xác, có trích dẫn nguồn khi có thể, và giữ thái độ tôn trọng, nghiêm túc.
Trả lời bằng tiếng Việt, ngắn gọn nhưng đầy đủ thông tin.
Nếu câu hỏi không liên quan đến Tư tưởng Hồ Chí Minh, hãy lịch sự hướng người dùng về chủ đề chính.`;

/**
 * Gửi message đến Gemini và nhận response
 * @param message - Tin nhắn từ user
 * @param conversationHistory - Lịch sử cuộc trò chuyện (optional)
 * @returns Promise<string> - Response từ Gemini
 */
export async function sendMessageToGemini(
  message: string,
  conversationHistory: Array<{ role: 'user' | 'model'; parts: string }> = []
): Promise<string> {
  try {
    // Kiểm tra API key
    if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
      throw new Error('Vui lòng cấu hình VITE_GEMINI_API_KEY trong file .env');
    }

    // Lấy model với system instruction
    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME,
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    // Chuẩn bị chat history
    const chat = model.startChat({
      history: conversationHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.parts }],
      })),
      generationConfig: {
        temperature: 0.7, // Độ sáng tạo vừa phải
        topK: 40, // Giới hạn token pool
        topP: 0.95, // Nucleus sampling
        maxOutputTokens: 1024, // Giới hạn độ dài response
      },
    });

    // Gửi message và nhận response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    
    // Xử lý các loại lỗi cụ thể
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw new Error('API key không hợp lệ. Vui lòng kiểm tra lại cấu hình.');
      }
      if (error.message.includes('quota')) {
        throw new Error('Đã vượt quá giới hạn API. Vui lòng thử lại sau.');
      }
      throw new Error(error.message);
    }
    
    throw new Error('Không thể kết nối với AI. Vui lòng thử lại sau.');
  }
}

/**
 * Gửi message với streaming response
 * @param message - Tin nhắn từ user
 * @param onChunk - Callback khi nhận được chunk mới
 * @param conversationHistory - Lịch sử cuộc trò chuyện
 * @returns Promise<string> - Full response text
 */
export async function sendMessageWithStreaming(
  message: string,
  onChunk: (chunk: string) => void,
  conversationHistory: Array<{ role: 'user' | 'model'; parts: string }> = []
): Promise<string> {
  try {
    // Kiểm tra API key
    if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
      throw new Error('Vui lòng cấu hình VITE_GEMINI_API_KEY trong file .env');
    }

    // Lấy model với system instruction
    const model = genAI.getGenerativeModel({ 
      model: MODEL_NAME,
      systemInstruction: SYSTEM_INSTRUCTION,
    });
    
    // Chuẩn bị chat với history
    const chat = model.startChat({
      history: conversationHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.parts }],
      })),
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    // Gửi message với streaming
    let fullResponse = '';
    const result = await chat.sendMessageStream(message);
    
    // Xử lý từng chunk
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullResponse += chunkText;
      onChunk(chunkText); // Callback để update UI
    }

    return fullResponse;
  } catch (error) {
    console.error('Error calling Gemini API with streaming:', error);
    
    // Xử lý các loại lỗi cụ thể
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw new Error('API key không hợp lệ. Vui lòng kiểm tra lại cấu hình.');
      }
      if (error.message.includes('quota')) {
        throw new Error('Đã vượt quá giới hạn API. Vui lòng thử lại sau.');
      }
      throw new Error(error.message);
    }
    
    throw new Error('Không thể kết nối với AI. Vui lòng thử lại sau.');
  }
}

