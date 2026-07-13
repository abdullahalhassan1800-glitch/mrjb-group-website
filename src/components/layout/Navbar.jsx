import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { navLinks, contactInfo } from '../../data/config'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gold-400 flex items-center justify-center">
              <span className="text-dark-900 font-serif font-bold text-lg md:text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-serif font-bold text-lg leading-tight">MRJB</p>
              <p className="text-gold-400 text-[10px] tracking-widest uppercase">Group</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-gold-400'
                    : 'text-dark-200 hover:text-gold-400'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-400 transition-all ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={contactInfo.phoneLink}
              className="flex items-center gap-2 text-dark-200 hover:text-gold-400 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">{contactInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-dark-900 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1"
            >
              Book Site Visit
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-800 border-t border-dark-700"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-gold-400/10 text-gold-400'
                      : 'text-dark-200 hover:bg-dark-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-3">
                <a
                  href={contactInfo.phoneLink}
                  className="flex items-center gap-2 text-dark-200 hover:text-gold-400 transition-colors"
                >
                  <Phone size={16} />
                  <span className="text-sm">{contactInfo.phone}</span>
                </a>
                <Link
                  to="/contact"
                  className="block bg-gold-400 hover:bg-gold-500 text-dark-900 px-5 py-3 rounded-lg text-sm font-semibold text-center transition-all"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
