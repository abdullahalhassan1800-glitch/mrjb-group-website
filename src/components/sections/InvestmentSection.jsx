import { motion } from 'framer-motion'
import { Plane, Route, Factory, TrendingUp } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import { growthDrivers } from '../../data/location'

const icons = [Plane, Route, Factory, TrendingUp]

export default function InvestmentSection() {
  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <SectionHeading
          label="Investment Potential"
          title="Future Growth Around Your Investment"
          description="The land around Vrindavan is at the centre of one of India's most ambitious development corridors — driven by infrastructure, industry, and spiritual tourism."
          light
        />

        <div className="grid md:grid-cols-2 gap-6">
          {growthDrivers.map((driver, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={driver.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-xl p-6 hover:border-gold-400/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-white text-lg mb-2">{driver.title}</h3>
                    <p className="text-dark-400 text-sm leading-relaxed">{driver.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
