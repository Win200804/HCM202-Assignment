# Hướng dẫn Bắt đầu Nhanh

## 🚀 Khởi chạy Dự án

### 1. Cài đặt Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Chạy Development Server

```bash
npm run dev
```

Mở browser tại: `http://localhost:3000`

### 3. Build cho Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📖 Cấu trúc Trang

### Trang chủ (`/`)
- Hero section với giới thiệu dự án
- Tính năng nổi bật
- Quote nổi tiếng của Chủ tịch Hồ Chí Minh
- Call-to-action buttons

### Nội dung (`/noi-dung`)
- **Phần I**: Tư tưởng về Độc lập Dân tộc
  - 4 mục chính với quotes và giải thích chi tiết
- **Phần II**: Cách mạng Giải phóng Dân tộc
  - 5 mục chính về con đường cách mạng
- **Timeline**: Dòng thời gian lịch sử 1919-1975
- **Infographic**: Biểu đồ và trực quan hóa
- **Voice Reader**: Đọc nội dung bằng tiếng Việt
- **Sidebar**: Navigation và progress tracking

### Quiz (`/quiz`)
- 30 câu hỏi trắc nghiệm
- Phân loại theo độ khó: Dễ, Trung bình, Khó
- Giải thích chi tiết cho mỗi câu
- Lưu lịch sử làm bài
- Thống kê điểm số

### Phân tích (`/phan-tich`)
- Phân tích câu hỏi về tư tưởng HCM
- Bối cảnh lịch sử
- Ý nghĩa sâu sắc
- Liên hệ với tư tưởng độc lập dân tộc
- Giá trị hiện thời

## ✨ Tính năng Chính

### 🌙 Dark Mode
- Click vào icon mặt trăng/mặt trời ở header
- Preference được lưu vào LocalStorage

### 📖 Voice Reader
- Click nút "Phát" để nghe nội dung
- Điều chỉnh tốc độ đọc trong Settings
- Hỗ trợ pause/resume

### 🎯 Progress Tracking
- Tự động lưu khi hoàn thành section
- Click vào icon checkmark ở sidebar
- Xem progress bar ở sidebar

### 🏆 Quiz System
- Làm quiz không giới hạn thời gian
- Xem đáp án và giải thích ngay
- Lịch sử được lưu vào LocalStorage
- Xem thống kê điểm cao nhất, trung bình

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#DC2626', // Đỏ cách mạng
    // ... các shade khác
  },
  secondary: {
    DEFAULT: '#FFC107', // Vàng sao
    // ... các shade khác
  }
}
```

### Thêm nội dung
- Chỉnh sửa `src/data/content.ts` để thay đổi nội dung chính
- Chỉnh sửa `src/data/quizData.ts` để thêm/sửa câu hỏi
- Chỉnh sửa `src/data/timelineData.ts` để thêm sự kiện

## 🔧 Scripts Có sẵn

- `npm run dev` - Development server với hot reload
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Check linting errors

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

Tất cả components đều được tối ưu cho mọi kích thước màn hình!

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Tips

1. **Text-to-Speech** chỉ hoạt động trên browsers hỗ trợ Web Speech API
2. **Dark mode** tự động save preference
3. **LocalStorage** lưu quiz history và progress - xóa cache browser sẽ mất dữ liệu
4. **Animations** có thể bị giảm nếu browser không hỗ trợ

## 🐛 Troubleshooting

### Lỗi dependencies
```bash
npm install --legacy-peer-deps --force
```

### Port 3000 đã được sử dụng
Chỉnh sửa `vite.config.ts`:
```ts
server: {
  port: 3001 // hoặc port khác
}
```

### Build lỗi
```bash
# Clear cache và rebuild
rm -rf node_modules dist
npm install --legacy-peer-deps
npm run build
```

## 📞 Support

Nếu gặp vấn đề, vui lòng:
1. Check console log trong browser DevTools
2. Check terminal output
3. Đọc lại documentation

---

**Happy Learning! 🎓**

