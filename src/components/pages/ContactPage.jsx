import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '../shared/ContactForm'
import { contactInfo } from '../../data/config'

export default function ContactPage() {
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
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-bold text-4xl md:text-5xl text-white mt-3 mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark-300 max-w-2xl mx-auto"
          >
            Ready to invest in your dream plot? Fill the form below or reach out to us directly.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif font-bold text-2xl text-dark-900 mb-2">Send Us an Inquiry</h2>
              <p className="text-dark-500 text-sm mb-6">Fill the form below and our team will get back to you within 30 minutes during working hours.</p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-serif font-semibold text-lg text-dark-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href={contactInfo.phoneLink} className="flex items-start gap-3 text-sm text-dark-600 hover:text-gold-400 transition-colors">
                    <Phone size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{contactInfo.phone}</p>
                      <p className="text-dark-400 text-xs">Call or WhatsApp</p>
                    </div>
                  </a>
                  <a href={contactInfo.emailLink} className="flex items-start gap-3 text-sm text-dark-600 hover:text-gold-400 transition-colors">
                    <Mail size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{contactInfo.email}</p>
                      <p className="text-dark-400 text-xs">Email us anytime</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-dark-600">
                    <MapPin size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{contactInfo.address}</p>
                      <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer" className="text-gold-400 text-xs hover:underline">Open in Google Maps</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-dark-600">
                    <Clock size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{contactInfo.hours.weekdays}</p>
                      <p className="text-dark-400 text-xs">{contactInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 text-center transition-all"
              >
                <MessageCircle size={32} className="mx-auto mb-2" />
                <p className="font-semibold">Chat on WhatsApp</p>
                <p className="text-white/80 text-sm mt-1">Quick response guaranteed</p>
              </a>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14191.175235767986!2d77.6810846!3d27.5651774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ced0986c92f%3A0x804a6c8c3d5c6b0e!2sVrindavan%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="MRJB Group Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
