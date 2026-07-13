import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Phone } from 'lucide-react'
import { contactInfo } from '../../data/config'

export default function CTASection() {
  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">Get Started</span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-4">
            Ready to Own Your Dream Plot?
          </h2>
          <p className="text-dark-300 text-base md:text-lg mb-8">
            Book a free site visit today and discover the perfect investment near Vrindavan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-dark-900 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
            >
              Book Site Visit
              <ChevronRight size={18} />
            </Link>
            <a
              href={contactInfo.phoneLink}
              className="border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
