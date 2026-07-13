import { motion } from 'framer-motion'
import { Users, Building2, Star, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, value: '100+', label: 'Happy Families', subtitle: 'Satisfied Customers' },
  { icon: Building2, value: '4', label: 'Projects', subtitle: 'Completed & Ongoing' },
  { icon: Star, value: '4.9/5', label: 'Client Rating', subtitle: 'Based on Reviews' },
  { icon: Calendar, value: '35+', label: 'Years of Trust', subtitle: 'Since 1985' },
]

export default function StatsSection() {
  return (
    <section className="bg-dark-800 border-y border-dark-700">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-serif font-bold text-white">{stat.value}</p>
              <p className="text-dark-300 text-sm font-medium">{stat.label}</p>
              <p className="text-dark-500 text-xs mt-0.5">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
