import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react'
import { navLinks, contactInfo, socialLinks } from '../../data/config'
import { amenities } from '../../data/amenities'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-dark-200">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gold-400 flex items-center justify-center">
                <span className="text-dark-900 font-serif font-bold text-lg">M</span>
              </div>
              <div>
                <p className="text-white font-serif font-bold text-lg leading-tight">MRJB Group</p>
                <p className="text-gold-400 text-[10px] tracking-widest uppercase">Where Divinity Meets Investment</p>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed">
              Premium gated residential plotted townships near Vrindavan. Building dreams with transparency, trust, and timeless value since 1985.
            </p>
            <div className="flex gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-gold-400 hover:text-dark-900 transition-all">
                <Facebook size={16} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-gold-400 hover:text-dark-900 transition-all">
                <Instagram size={16} />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-gold-400 hover:text-dark-900 transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-dark-400 hover:text-gold-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-dark-400 hover:text-gold-400 transition-colors flex items-center gap-1 group"
                >
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  All Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Amenities */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Key Amenities</h3>
            <ul className="space-y-2">
              {amenities.slice(0, 6).map((amenity) => (
                <li key={amenity.id} className="flex items-center gap-2 text-sm text-dark-400">
                  <amenity.icon size={14} className="text-gold-400 flex-shrink-0" />
                  {amenity.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href={contactInfo.phoneLink} className="flex items-start gap-3 text-sm text-dark-400 hover:text-gold-400 transition-colors">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-gold-400" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={contactInfo.emailLink} className="flex items-start gap-3 text-sm text-dark-400 hover:text-gold-400 transition-colors">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-gold-400" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-dark-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-dark-800">
              <p className="text-xs text-dark-500">{contactInfo.hours.weekdays}</p>
              <p className="text-xs text-dark-500">{contactInfo.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-dark-500">
            &copy; {currentYear} MRJB Group | All Rights Reserved.
          </p>
          <p className="text-xs text-dark-500 italic">
            "Where Divinity Meets Investment"
          </p>
        </div>
      </div>
    </footer>
  )
}
