import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Download, Shield, Route, Droplets, Zap, Lock, TreePine } from 'lucide-react'
import BrochureModal from '../shared/BrochureModal'

const features = [
  { icon: Shield, label: 'Gated Township' },
  { icon: Route, label: 'Wide Roads' },
  { icon: Droplets, label: 'Water Line' },
  { icon: Zap, label: 'Electricity' },
  { icon: Lock, label: 'Security' },
  { icon: TreePine, label: 'Green Park' },
]

export default function HeroSection() {
  const [showBrochure, setShowBrochure] = useState(false)
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-BzCPA9qb.png"
          alt="Kunj Bihari Enclave"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
      </div>

      {/* Content */}
      <div className="relative container-custom py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - Text */}
          <div>
            {/* Supratitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold-400 text-sm tracking-[0.3em] uppercase mb-4"
            >
              MRJB Group Presents
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-2"
            >
              Kunj Bihari Enclave
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif italic text-gold-400 text-2xl md:text-3xl mb-4"
            >
              Phase 1
            </motion.p>

            {/* Taglines */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark-200 text-lg md:text-xl mb-2"
            >
              Premium Residential Plots Near Vrindavan
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gold-400/80 text-sm md:text-base italic mb-8"
            >
              Where Divinity Meets Investment
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                to="/contact"
                className="bg-gold-400 hover:bg-gold-500 text-dark-900 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
              >
                Book Site Visit
                <ChevronRight size={18} />
              </Link>
              <button
                onClick={() => setShowBrochure(true)}
                className="border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download Brochure
              </button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                >
                  <feature.icon size={14} className="text-gold-400" />
                  <span className="text-dark-200 text-xs font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - 3 Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {/* Large Image */}
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="/assets/hero-BzCPA9qb.png"
                alt="Kunj Bihari Enclave Township"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Top Right */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src="/assets/hero-building-2.png"
                alt="Premium Residential Plot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Bottom Right */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 relative">
              <img
                src="/assets/hero-building-3.png"
                alt="Modern Township Infrastructure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-gold-400 text-dark-900 text-xs font-bold px-3 py-1 rounded-full">Phase 1</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-dark-400 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Brochure Modal */}
      <BrochureModal isOpen={showBrochure} onClose={() => setShowBrochure(false)} />
    </section>
  )
}
