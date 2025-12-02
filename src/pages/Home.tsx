// Home page
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, BookOpen, Clock, Target, CheckCircle2, Users, Award, Lightbulb, GraduationCap } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ROUTES } from '../utils/constants';

export function Home() {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden text-white min-h-[600px] flex items-center">
        {/* Background Image with Overlay - Full cover */}
        <div className="absolute inset-0">
          <img 
            src="/assets/images/hcm2.jpg" 
            alt="Chủ tịch Hồ Chí Minh"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Tư tưởng Hồ Chí Minh
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-yellow-100">
              Độc lập Dân tộc và Chủ nghĩa Xã hội
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Nền tảng học tập tương tác hiện đại giúp sinh viên hiểu sâu sắc về tư tưởng độc lập dân tộc của Chủ tịch Hồ Chí Minh
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.CONTENT}>
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 gap-2 w-full sm:w-auto">
                  Bắt đầu học
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to={ROUTES.QUIZ}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 gap-2 w-full sm:w-auto">
                  <Trophy className="w-5 h-5" />
                  Làm Quiz
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
            {/* Quote Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card padding="lg" className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-800 border-l-4 border-primary-600">
              <blockquote className="text-2xl md:text-3xl font-display text-gray-900 dark:text-white text-center italic mb-4">
                "Không có gì quý hơn độc lập, tự do"
              </blockquote>
              <p className="text-center text-gray-600 dark:text-gray-400 font-medium">
                — Chủ tịch Hồ Chí Minh
              </p>
            </Card>
          </motion.div>
        </div>
      </section>


      {/* Learning Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">
              Lợi ích Học tập
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Những giá trị bạn nhận được khi học cùng chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: 'Nắm vững Kiến thức',
                description: 'Hiểu sâu sắc về tư tưởng Hồ Chí Minh, đạt điểm cao trong các kỳ thi',
              },
              {
                icon: Target,
                title: 'Học tập Mục tiêu',
                description: 'Nội dung được tổ chức khoa học, dễ theo dõi và ghi nhớ',
              },
              {
                icon: Award,
                title: 'Kiểm tra Năng lực',
                description: 'Hệ thống quiz đa dạng giúp đánh giá và củng cố kiến thức',
              },
              {
                icon: Users,
                title: 'Hỗ trợ Tối đa',
                description: 'Chatbot AI và tài liệu phong phú luôn sẵn sàng hỗ trợ',
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Khám phá tư tưởng Hồ Chí Minh về độc lập dân tộc ngay hôm nay
            </p>
            <Link to={ROUTES.CONTENT}>
              <Button size="lg" className="gap-2">
                Khám phá ngay
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

