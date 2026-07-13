import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plane, Route, Factory, TrendingUp, ChevronRight } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import FAQAccordion from '../shared/FAQAccordion'
import { growthDrivers, reasons } from '../../data/location'
import { faq } from '../../data/faq'

const icons = [Plane, Route, Factory, TrendingUp]

export default function WhyInvestPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Banner */}
      <section className="bg-dark-800 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase"
          >
            Investment Guide
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-bold text-4xl md:text-5xl text-white mt-3 mb-4"
          >
            Why Invest in Vrindavan?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark-300 max-w-2xl mx-auto"
          >
            One of India's highest ROI corridors — driven by infrastructure, spiritual tourism, and industrial growth.
          </motion.p>
        </div>
      </section>

      {/* Investment Stats */}
      <section className="py-12 bg-cream border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '25-40%', label: 'Annual Appreciation' },
              { value: '50 Lakh+', label: 'Annual Tourists' },
              { value: '3 Crore', label: 'Devotees Yearly' },
              { value: '45 min', label: 'To Jewar Airport' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-2xl md:text-3xl font-serif font-bold text-gold-400">{stat.value}</p>
                <p className="text-dark-600 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Drivers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Growth Corridor"
            title="Future Growth Around Your Investment"
            description="The land around Vrindavan is at the centre of one of India's most ambitious development corridors."
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
                  transition={{ delay: i * 0.1 }}
                  className="bg-cream rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-dark-900 text-lg mb-2">{driver.title}</h3>
                      <p className="text-dark-500 text-sm leading-relaxed">{driver.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6 Reasons */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeading
            label="Advantages"
            title="6 Reasons Smart Investors Choose Kunj Bihari Enclave"
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-7xl font-serif font-bold text-dark-700 absolute -top-4 -left-2 select-none">
                  {reason.number}
                </div>
                <div className="relative pt-10">
                  <h3 className="font-serif font-semibold text-white text-lg mb-2">{reason.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Comparison"
            title="Vrindavan vs Metro Cities"
            description="Why smart money is flowing towards Vrindavan real estate."
          />

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-dark-900">
                  <th className="text-left py-3 px-4 font-serif font-semibold text-dark-900">Factor</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold text-gold-400">Vrindavan</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold text-dark-400">Metro Cities</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price per sq.yd', '₹35,000 - 52,000', '₹1,00,000+'],
                  ['Annual Appreciation', '25-40%', '5-10%'],
                  ['Rental Potential', 'High (Tourism)', 'Moderate'],
                  ['Loan Availability', 'Yes', 'Yes'],
                  ['Registry Status', 'Ready', 'Ready'],
                  ['Connectivity', 'Expressway + NH', 'Metro + Roads'],
                  ['Spiritual Value', 'Unique', 'None'],
                ].map(([factor, vrindavan, metro], i) => (
                  <tr key={factor} className={i % 2 === 0 ? 'bg-cream' : ''}>
                    <td className="py-3 px-4 text-dark-700 font-medium">{factor}</td>
                    <td className="py-3 px-4 text-center text-green-600 font-semibold">{vrindavan}</td>
                    <td className="py-3 px-4 text-center text-dark-400">{metro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            label="FAQ"
            title="Investor Questions"
            description="Common questions about investing in Vrindavan real estate."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 text-center">
        <div className="container-custom">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
            Start Your Investment Journey
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            Don't miss the opportunity to invest in one of India's fastest-growing real estate corridors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-dark-900 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
          >
            Book a Free Consultation
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </motion.main>
  )
}
