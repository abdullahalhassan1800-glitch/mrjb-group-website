import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import { landmarks } from '../../data/location'

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          label="Connectivity"
          title="Landmarks & Connectivity"
          description="Kunj Bihari Enclave places you moments away from the holiest sites of Vrindavan — where spiritual legacy meets strategic living."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {landmarks.map((landmark, i) => (
            <motion.div
              key={landmark.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-5 rounded-xl shadow-md shadow-black/5 border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-dark-900 text-base mb-1">{landmark.name}</h3>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gold-400 text-sm font-bold">{landmark.distance}</span>
                    <span className="flex items-center gap-1 text-dark-400 text-xs">
                      <Clock size={12} />
                      {landmark.driveTime} drive
                    </span>
                  </div>
                  <p className="text-dark-500 text-sm leading-relaxed">{landmark.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
