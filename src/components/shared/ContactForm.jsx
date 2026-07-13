import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Send, Loader2 } from 'lucide-react'
import { projects } from '../../data/projects'

export default function ContactForm({ preselectedProject = '' }) {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    project: preselectedProject,
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Store in localStorage for now
    const inquiries = JSON.parse(localStorage.getItem('mrjb_inquiries') || '[]')
    inquiries.push({
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'contact_form',
    })
    localStorage.setItem('mrjb_inquiries', JSON.stringify(inquiries))

    setIsSubmitting(false)
    navigate('/contact-success')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-1">Current City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
            minLength={2}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark-700 mb-1">Interested Project</label>
        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm bg-white"
        >
          <option value="">Select a project</option>
          {projects.map(p => (
            <option key={p.slug} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark-700 mb-1">Message (Optional)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific requirements?"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-400 hover:bg-gold-500 disabled:bg-gold-300 text-dark-900 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  )
}
