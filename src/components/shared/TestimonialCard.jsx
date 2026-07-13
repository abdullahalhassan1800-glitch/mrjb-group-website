import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100"
    >
      {/* Quote */}
      <div className="mb-4">
        <span className="text-4xl text-gold-400 font-serif leading-none">"</span>
        <p className="text-dark-600 text-sm leading-relaxed mt-1 italic">
          {testimonial.quote}
        </p>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center">
          <span className="text-gold-400 font-serif font-bold text-sm">{testimonial.initials}</span>
        </div>
        <div>
          <p className="text-dark-900 font-semibold text-sm">{testimonial.name}</p>
          <p className="text-dark-400 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  )
}
