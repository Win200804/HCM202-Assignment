// Interactive Timeline component
import { motion } from 'framer-motion';
import { 
  FileText, Star, Flag, Users, Sparkles, Swords, 
  Trophy, Heart, Scroll, CheckCircle2, LucideIcon 
} from 'lucide-react';
import { timelineData } from '../../data/timelineData';
import { Card } from '../common/Card';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  FileText,
  Star,
  Flag,
  Users,
  Sparkles,
  Swords,
  Trophy,
  Heart,
  Scroll,
  CheckCircle2,
};

// Category colors
const categoryColors = {
  historical: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
  revolutionary: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
  declaration: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300',
};

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-secondary-500 to-primary-600" />

      <div className="space-y-12">
        {timelineData.map((event, index) => {
          const Icon = event.icon ? iconMap[event.icon] : Star;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                    categoryColors[event.category]
                  }`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                <Card hover padding="md" className="relative">
                  {/* Year badge */}
                  <div className="absolute -top-3 -left-3 z-10">
                    <span className="inline-flex items-center justify-center w-16 h-16 text-xl font-bold text-white bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full shadow-lg">
                      {event.year}
                    </span>
                  </div>

                  {/* Historical image */}
                  {event.image && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={event.image} 
                        alt={`${event.title} - ${event.year}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

