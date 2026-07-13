import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Loader2, CheckCircle } from 'lucide-react'
import { projects } from '../../data/projects'

export default function BrochureModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    project: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Store in localStorage
    const inquiries = JSON.parse(localStorage.getItem('mrjb_brochure_requests') || '[]')
    inquiries.push({
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'brochure_download',
    })
    localStorage.setItem('mrjb_brochure_requests', JSON.stringify(inquiries))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Auto download brochure after 1.5s
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/Kunj Bihari Enclave Phase-1 New Brochure.pdf'
      link.download = 'Kunj Bihari Enclave Phase-1 Brochure.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1500)
  }

  const handleClose = () => {
    setIsSuccess(false)
    setFormData({ fullName: '', mobile: '', email: '', city: '', project: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-dark-800 px-6 py-5 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-dark-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center">
                  <Download size={20} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-lg">Download Brochure</h3>
                  <p className="text-dark-400 text-xs">Fill the form to get instant access</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h4 className="font-serif font-bold text-dark-900 text-xl mb-2">Thank You!</h4>
                  <p className="text-dark-500 text-sm mb-1">Your brochure is downloading now.</p>
                  <p className="text-dark-400 text-xs">Check your downloads folder.</p>
                  <button
                    onClick={handleClose}
                    className="mt-6 bg-gold-400 hover:bg-gold-500 text-dark-900 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      minLength={2}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      required
                      minLength={10}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-1">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        required
                        minLength={2}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-1">Interested In</label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select project</option>
                        {projects.map(p => (
                          <option key={p.slug} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-400 hover:bg-gold-500 disabled:bg-gold-300 text-dark-900 px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download size={18} />
                        Get Free Brochure
                      </>
                    )}
                  </button>

                  <p className="text-center text-dark-400 text-xs">
                    By submitting, you agree to receive property updates from MRJB Group.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
