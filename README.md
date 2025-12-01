# Tư tưởng Hồ Chí Minh - Độc lập Dân tộc

Nền tảng học tập tương tác hiện đại về Tư tưởng Hồ Chí Minh - Chương 3: Độc lập dân tộc và Chủ nghĩa xã hội.

## ✨ Tính năng

### 🎯 Mới lạ
- **Interactive Timeline**: Dòng thời gian lịch sử với animations mượt mà
- **Infographics**: Biểu đồ và trực quan hóa dữ liệu tương tác
- **Text-to-Speech**: Đọc nội dung bằng giọng nói tiếng Việt
- **Dark Mode**: Chế độ sáng/tối với transition mượt mà

### 💡 Lợi ích
- **Nội dung Chi tiết**: Trình bày đầy đủ với trích dẫn nguồn chính xác
- **Quiz System**: 30 câu hỏi với đáp án và giải thích chi tiết
- **Progress Tracking**: Theo dõi tiến độ học tập và lịch sử làm quiz
- **Responsive Design**: Hoạt động tốt trên mọi thiết bị

## 🛠 Công nghệ

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data Visualization
- **Lucide React** - Icons
- **React Router** - Navigation
- **Vite** - Build Tool

## 📦 Cài đặt

### Yêu cầu
- Node.js 16+ 
- npm hoặc yarn

### Các bước

1. Clone repository:
```bash
git clone <repository-url>
cd HCM_Web_FE
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở browser tại `http://localhost:3000`

## 🚀 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint

## 📁 Cấu trúc Dự án

```
HCM_Web_FE/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── common/       # Common components (Button, Card, etc.)
│   │   ├── content/      # Content components (Timeline, Infographic, etc.)
│   │   ├── layout/       # Layout components (Header, Footer, Sidebar)
│   │   ├── quiz/         # Quiz components
│   │   └── chatbox/      # Chatbox placeholder
│   ├── contexts/         # React contexts (Theme, Quiz)
│   ├── data/             # Data files (content, quiz, timeline)
│   ├── hooks/            # Custom hooks
│   ├── pages/            # Page components
│   ├── services/         # Services (storage, voice, quiz)
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Tính năng Chi tiết

### 1. Nội dung Học tập
- Trình bày 2 phần chính về tư tưởng độc lập dân tộc
- Trích dẫn chính xác từ các tác phẩm của Hồ Chí Minh
- Sidebar navigation với progress tracking
- Voice reader hỗ trợ nghe nội dung

### 2. Timeline Lịch sử
- 10 sự kiện quan trọng từ 1919-1975
- Animations khi scroll
- Phân loại theo category (historical, revolutionary, declaration)
- Hover effects và interactions

### 3. Infographics
- Sơ đồ tư duy về độc lập dân tộc
- Biểu đồ so sánh các con đường cách mạng
- Pie chart về cơ cấu lực lượng cách mạng

### 4. Quiz System
- 30 câu hỏi trắc nghiệm 4 đáp án
- Phân loại theo độ khó (Dễ, Trung bình, Khó)
- Giải thích chi tiết cho mỗi câu hỏi
- Lưu lịch sử làm bài vào LocalStorage
- Thống kê điểm cao nhất, trung bình

### 5. Dark Mode
- Toggle giữa light/dark theme
- Lưu preference vào LocalStorage
- Smooth transitions

## 📱 Responsive Design

Website được tối ưu cho:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔮 Tính năng Tương lai

- [ ] AI Chatbox với OpenAI/Gemini API
- [ ] Export quiz results to PDF
- [ ] Share progress on social media
- [ ] More interactive visualizations
- [ ] Audio lectures
- [ ] Flashcards system

## 📄 License

Dự án này là sản phẩm sáng tạo cho môn học HCM202 - Tư tưởng Hồ Chí Minh.

## 👨‍💻 Tác giả

Sinh viên - Học kỳ Spring 2026

---

**Được tạo với ❤️ bằng React + TypeScript + Tailwind CSS**

