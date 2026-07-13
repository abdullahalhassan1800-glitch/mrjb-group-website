import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}
    >
      {label && (
        <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
          light ? 'text-gold-300' : 'text-gold-400'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${
        light ? 'text-white' : 'text-dark-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-dark-300' : 'text-dark-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
