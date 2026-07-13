import { motion } from 'framer-motion'
import SectionHeading from '../shared/SectionHeading'
import { amenities } from '../../data/amenities'

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="section-padding bg-dark-800">
      <div className="container-custom">
        <SectionHeading
          label="Amenities"
          title="World-Class Facilities"
          description="Every detail has been thoughtfully designed to provide a comfortable, secure, and spiritually enriching living experience."
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, i) => (
            <motion.div
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-xl p-5 hover:border-gold-400/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4 group-hover:bg-gold-400/20 transition-colors">
                <amenity.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-semibold text-white text-base mb-2">{amenity.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
