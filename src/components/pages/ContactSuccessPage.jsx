import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Home, Phone, MessageCircle } from 'lucide-react'
import { contactInfo } from '../../data/config'

export default function ContactSuccessPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-cream flex items-center justify-center pt-20"
    >
      <div className="container-custom max-w-lg text-center py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={40} className="text-green-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif font-bold text-3xl md:text-4xl text-dark-900 mb-3"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-dark-500 text-lg mb-8"
        >
          Your inquiry has been received successfully. Our team will get back to you within 30 minutes during working hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/"
            className="bg-gold-400 hover:bg-gold-500 text-dark-900 px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <a
            href={contactInfo.phoneLink}
            className="border border-dark-200 text-dark-700 hover:bg-dark-50 px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </motion.main>
  )
}
