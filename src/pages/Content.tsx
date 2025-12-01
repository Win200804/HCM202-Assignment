// Content page
import { Layout } from '../components/layout/Layout';
import { Sidebar } from '../components/layout/Sidebar';
import { ContentSection } from '../components/content/ContentSection';
import { Timeline } from '../components/content/Timeline';
import { Infographic } from '../components/content/Infographic';
import { contentData } from '../data/content';
import { Card } from '../components/common/Card';
import { BookOpen, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function Content() {
  return (
    <Layout showSidebar>
      <div className="flex">
        {/* Main content */}
        <div className="flex-1 p-6 max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-display mb-4">
              Nội dung Học tập
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Chương 3: Tư tưởng Hồ Chí Minh về Độc lập dân tộc và Chủ nghĩa xã hội
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card padding="md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Chủ đề</div>
                  <div className="font-bold text-gray-900 dark:text-white">2 phần chính</div>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Thời gian đọc</div>
                  <div className="font-bold text-gray-900 dark:text-white">~30 phút</div>
                </div>
              </div>
            </Card>

            <Card padding="md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Mục tiêu</div>
                  <div className="font-bold text-gray-900 dark:text-white">Hiểu sâu sắc</div>
                </div>
              </div>
          </Card>
        </div>

        {/* Content sections */}
          <div className="space-y-6 mb-12">
            {contentData.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-8 text-center">
                Dòng thời gian Lịch sử
              </h2>
              <Timeline />
            </motion.div>
          </div>

          {/* Infographics */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-8 text-center">
                Phân tích & Trực quan hóa
              </h2>
              <Infographic />
            </motion.div>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </Layout>
  );
}

