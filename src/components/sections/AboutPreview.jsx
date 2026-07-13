import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Quote, Shield, MapPin, Route, TrendingUp, ArrowRight } from 'lucide-react'

const highlights = [
  { icon: Shield, title: 'Premium Gated Township', value: 'Fully Secured Perimeter' },
  { icon: MapPin, title: 'Multiple Plot Sizes', value: '100-500 sq. yards' },
  { icon: Route, title: '30ft Wide Roads', value: 'Smooth Internal Roads' },
  { icon: TrendingUp, title: 'High ROI Zone', value: 'Growing Faster Each Year' },
]

export default function AboutPreview() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">Our Project</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-dark-900 mt-2 mb-5">
              About Kunj Bihari Enclave Phase 1
            </h2>
            <p className="text-dark-500 leading-relaxed mb-4">
              Nestled near the sacred bounds of Vrindavan, Kunj Bihari Enclave offers you an opportunity to build your dream home in a divine and developing ecosystem. Designed with meticulous attention to detail, this gated township provides the perfect balance of modern amenities and serene living.
            </p>

            <blockquote className="border-l-4 border-gold-400 pl-4 py-2 my-6">
              <p className="text-dark-600 italic font-serif text-lg">
                "A lifestyle investment where every breath feels blessed and every dream finds a home."
              </p>
            </blockquote>

            <p className="text-dark-500 leading-relaxed mb-6">
              Whether you are looking for a high-return investment in the booming NCR corridor or a peaceful abode close to Lord Krishna's playground, Phase 1 of Kunj Bihari Enclave stands out as a prime real estate choice.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-500 font-semibold text-sm transition-colors group"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right - Building Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Building Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/10">
              <img
                src="/assets/building-project.png"
                alt="Kunj Bihari Enclave - Premium Residential Project"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-gold-400 text-dark-900 text-xs font-bold px-3 py-1 rounded-full mb-2">Featured Project</span>
                <h3 className="font-serif font-bold text-white text-xl">Kunj Bihari Enclave Phase 1</h3>
                <p className="text-white/80 text-sm">Near Vrindavan, Yamuna Expressway</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white p-5 rounded-xl shadow-md shadow-black/5"
                >
                  <item.icon className="w-8 h-8 text-gold-400 mb-3" />
                  <h3 className="font-serif font-semibold text-dark-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-dark-400 text-xs">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
