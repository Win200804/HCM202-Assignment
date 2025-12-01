// Footer component
import { Heart, Github, Mail } from 'lucide-react';
import { APP_NAME } from '../../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white font-display mb-3">
              {APP_NAME}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nền tảng học tập tương tác về tư tưởng Hồ Chí Minh - giúp sinh viên hiểu sâu sắc về độc lập dân tộc và chủ nghĩa xã hội.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Tài liệu tham khảo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
              Liên hệ
            </h4>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} {APP_NAME}. Dành cho sinh viên Việt Nam
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}

