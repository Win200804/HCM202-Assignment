# Hướng dẫn Cài đặt AI Chatbox với Gemini

## Tổng quan
AI Chatbox đã được tích hợp vào dự án sử dụng Google Gemini API. Chatbox sẽ xuất hiện dưới dạng floating button ở góc dưới bên phải màn hình trên tất cả các trang.

## Các file đã tạo/sửa

### Files mới:
- `src/types/chatbox.types.ts` - TypeScript types cho chatbox
- `src/services/geminiService.ts` - Service để gọi Gemini API
- `src/hooks/useChatbox.ts` - Custom hook quản lý chatbox state
- `src/components/chatbox/Chatbox.tsx` - UI component cho chatbox

### Files đã sửa:
- `src/components/layout/Layout.tsx` - Đã tích hợp Chatbox component
- `.gitignore` - Đã thêm .env files

### Files đã xóa:
- `src/components/chatbox/ChatboxPlaceholder.tsx` - Không còn cần thiết

## Cách cài đặt

### Bước 1: Lấy Gemini API Key

1. Truy cập: https://makersuite.google.com/app/apikey
2. Đăng nhập bằng Google account
3. Click "Create API Key"
4. Copy API key

### Bước 2: Tạo file .env

Tạo file `.env` ở thư mục root của dự án:

```env
# Gemini API Configuration
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

**Lưu ý:** Thay `your_gemini_api_key_here` bằng API key bạn vừa lấy.

### Bước 3: Khởi động lại dev server

```bash
npm run dev
```

## Cách sử dụng

1. **Mở Chatbox:** Click vào icon chat ở góc dưới bên phải
2. **Gửi tin nhắn:** Nhập câu hỏi và nhấn Enter hoặc click nút Send
3. **Xem response:** AI sẽ trả lời với streaming (từng chunk)
4. **Xóa lịch sử:** Click icon thùng rác ở header
5. **Đóng chatbox:** Click icon X ở header

## Tính năng

### Đã có:
- ✅ Streaming response cho trải nghiệm mượt mà
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Animations với Framer Motion
- ✅ Context-aware AI về Tư tưởng Hồ Chí Minh
- ✅ Error handling và retry mechanism
- ✅ Conversation history (trong session)
- ✅ Clear chat history
- ✅ Auto-scroll to latest message
- ✅ Loading states và error messages

### Có thể bổ sung:
- Lưu conversation history vào LocalStorage
- Voice input/output
- File upload support
- Export conversation
- Multiple conversation threads

## Bảo mật

⚠️ **QUAN TRỌNG:** API key được lưu ở frontend nên có rủi ro bị lộ.

### Khuyến nghị:
1. **Sử dụng API Restrictions:**
   - Truy cập: https://console.cloud.google.com/apis/credentials
   - Chọn API key của bạn
   - Thêm "HTTP referrers" restrictions
   - Chỉ cho phép domain của bạn

2. **Thiết lập Quota:**
   - Giới hạn số requests per day/minute
   - Ngăn chặn lạm dụng

3. **Cho Production:**
   - Nên tạo backend proxy để bảo vệ API key
   - API key không nên expose ra frontend

## Troubleshooting

### Lỗi: "Vui lòng cấu hình VITE_GEMINI_API_KEY"
- Kiểm tra file `.env` đã được tạo
- Đảm bảo API key đã được điền đúng
- Khởi động lại dev server

### Lỗi: "API key không hợp lệ"
- Kiểm tra API key có đúng không
- Đảm bảo API key chưa bị revoke
- Thử tạo API key mới

### Lỗi: "Đã vượt quá giới hạn API"
- Đợi một lúc rồi thử lại
- Kiểm tra quota trong Google Cloud Console
- Có thể cần nâng cấp plan

### Chatbox không hiện
- Kiểm tra console log có lỗi không
- Đảm bảo tất cả dependencies đã được cài đặt
- Thử xóa `node_modules` và chạy `npm install` lại

## Customization

### Thay đổi model:
Trong `src/services/geminiService.ts`, đổi `MODEL_NAME`:
```typescript
const MODEL_NAME = 'gemini-1.5-flash'; // hoặc 'gemini-pro'
```

### Thay đổi system instruction:
Trong `src/services/geminiService.ts`, sửa `SYSTEM_INSTRUCTION`:
```typescript
const SYSTEM_INSTRUCTION = `Your custom instruction here...`;
```

### Thay đổi vị trí floating button:
Trong `src/components/chatbox/Chatbox.tsx`, sửa class:
```tsx
className="fixed bottom-6 right-6 ..." // đổi bottom, right, left, top
```

### Thay đổi màu sắc:
Chatbox sử dụng Tailwind CSS với primary/secondary colors từ config. Các màu này đã được định nghĩa trong `tailwind.config.js`.

## Support

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra console log
2. Xem phần Troubleshooting ở trên
3. Kiểm tra documentation của Gemini API: https://ai.google.dev/docs

## Next Steps

Sau khi chatbox hoạt động tốt, bạn có thể:
1. Thêm analytics để track usage
2. Implement rate limiting
3. Thêm more context về content trong app
4. Tối ưu performance
5. A/B testing với different prompts

