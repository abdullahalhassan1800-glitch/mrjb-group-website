import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Eye, Shield, MapPin, Award, Users, Handshake, Heart, ChevronRight } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import TestimonialCard from '../shared/TestimonialCard'
import { team, stats, trustPillars } from '../../data/team'
import { testimonials } from '../../data/testimonials'

const trustIcons = [Shield, MapPin, Award, Target, Users, Handshake]

export default function AboutPage() {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-bold text-4xl md:text-5xl text-white mt-3 mb-4"
          >
            Building Trust, One Plot at a Time
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark-300 max-w-2xl mx-auto"
          >
            Since 1985, MRJB Group has been making land ownership in the holy city of Vrindavan accessible, transparent, and rewarding for every Indian family.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cream p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-dark-900 mb-3">Our Mission</h3>
              <p className="text-dark-500 leading-relaxed">
                Our mission is simple — to help families and investors invest confidently in Vrindavan's sacred land while ensuring legal safety, prime connectivity, and long-term value growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-800 p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-3">Our Vision</h3>
              <p className="text-dark-300 leading-relaxed">
                MRJB Group was founded with a singular vision — to make land ownership in the holy city of Vrindavan accessible, transparent, and rewarding for every Indian family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-sm"
              >
                <p className="text-3xl md:text-4xl font-serif font-bold text-gold-400">{stat.value}</p>
                <p className="text-dark-900 font-semibold text-sm mt-1">{stat.title}</p>
                <p className="text-dark-400 text-xs mt-0.5">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Why Choose Us"
            title="Six Pillars of Trust"
            description="Six pillars of trust that make us Vrindavan's most preferred real estate partner."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPillars.map((pillar, i) => {
              const Icon = trustIcons[i]
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-gold-400/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-dark-900 mb-1">{pillar.title}</h3>
                    <p className="text-dark-500 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeading
            label="Our Team"
            title="Meet the Leaders"
            description="A dedicated team committed to your vision — working tirelessly to bring your dreams to life."
            light
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center">
                    <span className="text-gold-400 font-serif font-bold text-xl">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-white text-lg">{member.name}</h3>
                    <p className="text-gold-400 text-sm">{member.role}</p>
                    <p className="text-dark-400 text-xs">{member.experience}</p>
                  </div>
                </div>
                <p className="text-dark-300 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            label="Testimonials"
            title="What Our Investors Say"
            description="Hear from families and investors who have trusted MRJB Group."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 text-center">
        <div className="container-custom">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Own Your Dream Plot in Vrindavan?
          </h2>
          <p className="text-dark-300 mb-8 max-w-xl mx-auto">
            Where faith meets financial wisdom — start your investment journey with MRJB Group today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-dark-900 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
          >
            Get Started
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </motion.main>
  )
}
