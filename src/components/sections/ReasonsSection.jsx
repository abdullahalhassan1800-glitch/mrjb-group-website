import { motion } from 'framer-motion'
import SectionHeading from '../shared/SectionHeading'
import { reasons } from '../../data/location'

export default function ReasonsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label="Advantages"
          title="6 Reasons Smart Investors Choose Kunj Bihari Enclave"
          description="Discover why leading investors and families are choosing our townships for their future."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="text-7xl font-serif font-bold text-dark-100 absolute -top-4 -left-2 select-none group-hover:text-gold-400/20 transition-colors">
                {reason.number}
              </div>
              <div className="relative pt-10">
                <h3 className="font-serif font-semibold text-dark-900 text-lg mb-2">{reason.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
