// Infographic component with visualization
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Card } from '../common/Card';
import { Network, Target, Users, Lightbulb } from 'lucide-react';

// Data cho biểu đồ
const revolutionStages = [
  { name: 'Cách mạng tư sản', impact: 60 },
  { name: 'Cách mạng vô sản', impact: 95 },
  { name: 'Cách mạng thuộc địa', impact: 90 },
];

const unityData = [
  { name: 'Công nhân', value: 35, color: '#DC2626' },
  { name: 'Nông dân', value: 40, color: '#FFC107' },
  { name: 'Trí thức', value: 15, color: '#3B82F6' },
  { name: 'Tư sản yêu nước', value: 10, color: '#10B981' },
];

export function Infographic() {
  return (
    <div className="space-y-8">
      {/* Mind Map - Tư tưởng độc lập dân tộc */}
      <Card padding="lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6 text-center">
          Sơ đồ tư duy: Tư tưởng Độc lập Dân tộc
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Central concept */}
          <div className="md:col-span-2 flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-64 h-32 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <h4 className="text-xl font-bold text-white text-center px-4">
                  Độc lập Dân tộc
                </h4>
              </div>
            </motion.div>
          </div>

          {/* Branches */}
          {[
            { icon: Target, title: 'Quyền thiêng liêng', desc: 'Không ai có thể xâm phạm', color: 'from-red-500 to-red-600' },
            { icon: Lightbulb, title: 'Gắn tự do hạnh phúc', desc: 'Độc lập phải mang lại hạnh phúc', color: 'from-yellow-500 to-yellow-600' },
            { icon: Network, title: 'Thật sự, hoàn toàn', desc: 'Độc lập trên mọi lĩnh vực', color: 'from-blue-500 to-blue-600' },
            { icon: Users, title: 'Gắn thống nhất', desc: 'Toàn vẹn lãnh thổ', color: 'from-green-500 to-green-600' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Chart 1: So sánh hiệu quả các con đường cách mạng */}
      <Card padding="lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
          So sánh Hiệu quả các Con đường Cách mạng
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revolutionStages}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
              labelStyle={{ color: '#F9FAFB' }}
            />
            <Bar dataKey="impact" fill="#DC2626" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
          * Đánh giá mức độ hiệu quả giải phóng dân tộc (%)
        </p>
      </Card>

      {/* Chart 2: Cơ cấu lực lượng cách mạng */}
      <Card padding="lg">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-6">
          Cơ cấu Lực lượng Đại đoàn kết Dân tộc
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={unityData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {unityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
          Vai trò của các giai cấp trong cách mạng giải phóng dân tộc
        </p>
      </Card>
    </div>
  );
}

