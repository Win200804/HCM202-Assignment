// Analysis page - Phân tích câu hỏi
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { Card } from '../components/common/Card';
import { Quote, BookOpen, Lightbulb, Target, TrendingUp } from 'lucide-react';

export function Analysis() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <img 
              src="/assets/images/hcm.jpg" 
              alt="Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card padding="lg" className="bg-gradient-to-br from-red-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 border-l-4 border-primary-600">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-4">
                  Câu hỏi:
                </h2>
                <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed italic mb-4">
                  "Tại sao chủ tịch Hồ Chí Minh lại khẳng định: 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ'?"
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Card padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-2">
                  1. Bối cảnh Lịch sử
                </h3>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Câu nói này được Hồ Chí Minh khẳng định trong <strong>Lời kêu gọi toàn quốc kháng chiến</strong> ngày <strong>19/12/1946</strong>, khi thực dân Pháp tiến hành xâm lược Việt Nam lần thứ hai.
              </p>
              
              <p className="leading-relaxed">
                Sau Cách mạng Tháng Tám năm 1945, nhân dân Việt Nam mới giành được nền độc lập dân tộc. Tuy nhiên, thực dân Pháp không chịu từ bỏ tham vọng xâm lược, chúng âm mưu tái chiếm Việt Nam, biến nước ta thành thuộc địa lần nữa.
              </p>

              <p className="leading-relaxed">
                Trước tình hình nghiêm trọng đó, Chủ tịch Hồ Chí Minh đã ra lời kêu gọi toàn dân tộc đứng lên kháng chiến, bảo vệ nền độc lập mới giành được.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-2">
                  2. Phân tích Ý nghĩa
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  a) Độc lập dân tộc là giá trị thiêng liêng, không thể đánh đổi
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                  Câu nói thể hiện quan điểm kiên định của Hồ Chí Minh: <strong>độc lập dân tộc là giá trị cao quý nhất</strong>, không có gì có thể so sánh hay thay thế được. Người sẵn sàng "hy sinh tất cả" - tức là mọi thứ khác đều có thể đánh đổi, nhưng độc lập thì không bao giờ.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  b) Quyết tâm bảo vệ nền độc lập vừa giành được
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                  Nhân dân ta mới vừa giành được độc lập sau 80 năm làm thuộc địa. Nếu để mất đi lần này, có nghĩa là <strong>phụ bội công lao của biết bao thế hệ đi trước</strong>, phụ bội niềm khao khát độc lập của dân tộc.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  c) "Làm nô lệ" - kiếp sống không đáng sống
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                  Hồ Chí Minh đã trải qua và chứng kiến <strong>cảnh khổ cực của đồng bào trong chế độ thực dân</strong>: bị bóc lột, áp bức, không có quyền làm người. Cuộc sống "làm nô lệ" là cuộc sống <strong>mất hết nhân phẩm, mất tự do</strong>. Cho nên dù phải hy sinh đến đâu, cũng không thể chấp nhận quay lại kiếp sống đó.
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  d) Tinh thần "Tất cả cho độc lập, tự do"
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                  Câu nói là lời khẳng định mạnh mẽ rằng: <strong>"Không có gì quý hơn độc lập, tự do"</strong>. Cả dân tộc sẵn sàng đem tất cả tinh thần, lực lượng, tính mạng và của cải để bảo vệ nền độc lập.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Card padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-2">
                  3. Liên hệ với Tư tưởng Độc lập Dân tộc
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Câu nói này là <strong>sự cụ thể hóa sinh động</strong> các quan điểm trong tư tưởng Hồ Chí Minh về độc lập dân tộc:
              </p>

              <div className="ml-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <p>
                    <strong>Độc lập, tự do là quyền thiêng liêng:</strong> Khẳng định độc lập là quyền bất khả xâm phạm, không ai có thể tước đoạt.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <p>
                    <strong>Độc lập phải thật sự, hoàn toàn:</strong> Không chấp nhận độc lập giả hiệu, độc lập nửa vời.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold">•</span>
                  <p>
                    <strong>Quyết tâm bảo vệ độc lập:</strong> Sẵn sàng hy sinh tất cả để giữ vững nền độc lập.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-600 rounded-r-lg">
                <p className="text-gray-800 dark:text-gray-200 italic">
                  Như Người đã từng nói: "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì. Song nếu không có độc lập thì dân ta không bao giờ có tự do, hạnh phúc."
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Modern Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <Card padding="lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-2">
                  4. Giá trị Hiện thời
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Ngày nay, trong thời kỳ hội nhập và phát triển, câu nói của Hồ Chí Minh vẫn có ý nghĩa to lớn:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                    Bảo vệ chủ quyền quốc gia
                  </h5>
                  <p className="text-sm">
                    Kiên quyết bảo vệ chủ quyền, toàn vẹn lãnh thổ trước mọi âm mưu, thủ đoạn của các thế lực thù địch.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                    Độc lập tự chủ
                  </h5>
                  <p className="text-sm">
                    Giữ vững độc lập, tự chủ trong hội nhập quốc tế, không phụ thuộc vào bất kỳ thế lực nào.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                    Tinh thần yêu nước
                  </h5>
                  <p className="text-sm">
                    Giáo dục lòng yêu nước, ý thức trách nhiệm bảo vệ Tổ quốc cho thế hệ trẻ.
                  </p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">
                    Đoàn kết dân tộc
                  </h5>
                  <p className="text-sm">
                    Tăng cường đại đoàn kết toàn dân, xây dựng khối đoàn kết vững chắc bảo vệ Tổ quốc.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card padding="lg" className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-4 text-center">
              Kết luận
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed text-center text-lg">
                Câu nói <strong className="text-primary-600 dark:text-primary-400">"Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ"</strong> của Chủ tịch Hồ Chí Minh là:
              </p>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-2xl">✓</span>
                  <p>Lời tuyên bố <strong>quyết tâm sắt đá</strong> của dân tộc Việt Nam trong việc bảo vệ nền độc lập.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-2xl">✓</span>
                  <p>Khẳng định <strong>giá trị thiêng liêng</strong> của độc lập dân tộc - giá trị cao quý nhất mà không gì có thể đánh đổi.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-2xl">✓</span>
                  <p>Thể hiện <strong>tinh thần yêu nước, tự hào dân tộc</strong> và ý chí kiên cường của nhân dân Việt Nam.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-2xl">✓</span>
                  <p>Là <strong>nguồn cổ vũ, động viên to lớn</strong> cho toàn dân tộc trong cuộc kháng chiến chống thực dân Pháp và sau này là đế quốc Mỹ.</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white dark:bg-gray-900 rounded-lg text-center">
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 italic">
                  "Không có gì quý hơn độc lập, tự do"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  - Chủ tịch Hồ Chí Minh
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}

