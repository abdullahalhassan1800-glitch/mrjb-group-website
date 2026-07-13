import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowLeft, ChevronRight, Phone, MessageCircle, Download, CheckCircle, X, ZoomIn, Clock } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import BrochureModal from '../shared/BrochureModal'
import { getProjectBySlug } from '../../data/projects'
import { landmarks } from '../../data/location'
import { contactInfo } from '../../data/config'

export default function ProjectDetailPage() {
  const [showBrochure, setShowBrochure] = useState(false)
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const [lightbox, setLightbox] = useState(null)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-dark-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-gold-400 hover:text-gold-500 font-semibold">
            View All Projects
          </Link>
        </div>
      </div>
    )
  }

  const statusColors = {
    green: 'bg-green-500 text-white',
    amber: 'bg-amber-500 text-white',
    blue: 'bg-blue-500 text-white',
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Banner */}
      <section className="relative bg-dark-800 pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.images[0]} alt={project.name} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-900/70" />
        </div>
        <div className="container-custom relative">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-dark-300 hover:text-gold-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.statusColor]}`}>
              {project.status}
            </span>
            <span className="text-dark-400 text-sm">{project.type}</span>
          </div>

          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white mb-3">{project.name}</h1>

          <div className="flex items-center gap-2 text-dark-300">
            <MapPin size={16} />
            <span>{project.location}</span>
          </div>
        </div>
      </section>

      {/* Overview & Pricing */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-serif font-bold text-2xl text-dark-900 mb-4">About This Project</h2>
              <p className="text-dark-500 leading-relaxed mb-6">{project.longDescription}</p>

              {/* Features */}
              <h3 className="font-serif font-semibold text-lg text-dark-900 mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-dark-600">
                    <CheckCircle size={16} className="text-gold-400 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-cream rounded-2xl p-6 h-fit sticky top-24">
              <h3 className="font-serif font-semibold text-lg text-dark-900 mb-2">Pricing</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-dark-900">{project.price}</p>
                <p className="text-dark-400 text-sm">{project.priceUnit}</p>
              </div>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between text-dark-600">
                  <span>Plot Sizes</span>
                  <span className="font-medium">{project.plotSizes}</span>
                </div>
                <div className="flex justify-between text-dark-600">
                  <span>Road Width</span>
                  <span className="font-medium">{project.roadWidth}</span>
                </div>
                <div className="flex justify-between text-dark-600">
                  <span>Registry</span>
                  <span className="font-medium text-green-600">Available</span>
                </div>
                <div className="flex justify-between text-dark-600">
                  <span>Loan</span>
                  <span className="font-medium text-green-600">Available</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={contactInfo.phoneLink}
                  className="w-full bg-gold-400 hover:bg-gold-500 text-dark-900 px-5 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <button
                  onClick={() => setShowBrochure(true)}
                  className="w-full border border-dark-200 text-dark-700 hover:bg-dark-50 px-5 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeading
            label="Gallery"
            title="Project Gallery"
            description="Visual tour of the township and its surroundings."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden"
                onClick={() => setLightbox(img)}
              >
                <img src={img} alt={`${project.name} ${i + 1}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setLightbox(null)}
            >
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/80 hover:text-white">
                <X size={32} />
              </button>
              <img src={lightbox} alt="Gallery" className="max-w-4xl max-h-[90vh] w-full object-contain rounded-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="Amenities"
            title="What's Included"
            description="Complete infrastructure and amenities for a comfortable living experience."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {project.amenities.map((amenity) => (
              <div key={amenity} className="flex items-center gap-2 bg-cream px-5 py-3 rounded-xl">
                <CheckCircle size={16} className="text-gold-400" />
                <span className="text-dark-700 text-sm font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeading
            label="Location"
            title="Nearby Landmarks"
            description="Moments away from the holiest sites of Vrindavan."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landmarks.map((landmark) => (
              <div key={landmark.id} className="bg-dark-700/50 border border-dark-600/50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-gold-400" />
                  <h3 className="font-serif font-semibold text-white text-sm">{landmark.name}</h3>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gold-400 font-bold text-sm">{landmark.distance}</span>
                  <span className="flex items-center gap-1 text-dark-400 text-xs">
                    <Clock size={12} /> {landmark.driveTime}
                  </span>
                </div>
                <p className="text-dark-400 text-xs leading-relaxed">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Modal */}
      <BrochureModal isOpen={showBrochure} onClose={() => setShowBrochure(false)} />
    </motion.main>
  )
}
