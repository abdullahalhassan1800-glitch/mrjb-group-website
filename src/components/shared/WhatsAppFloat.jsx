import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { contactInfo } from '../../data/config'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        setIsVisible(footerTop > window.innerHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={contactInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </a>

      {/* Call */}
      <a
        href={contactInfo.phoneLink}
        className="w-14 h-14 bg-gold-400 hover:bg-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-400/30 transition-all hover:scale-110"
        title="Call Us Now"
      >
        <Phone size={24} className="text-dark-900" />
      </a>
    </div>
  )
}
