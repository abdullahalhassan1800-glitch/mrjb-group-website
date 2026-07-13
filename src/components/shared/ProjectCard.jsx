import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const statusColors = {
    green: 'bg-green-500/10 text-green-500 border-green-500/20',
    amber: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
            statusColors[project.statusColor]
          }`}>
            {project.status}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-serif font-bold text-xl mb-1">{project.name}</h3>
          <div className="flex items-center gap-1 text-white/80 text-sm">
            <MapPin size={14} />
            <span>{project.shortLocation}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-dark-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Quick Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.amenities.slice(0, 4).map((amenity) => (
            <span key={amenity} className="inline-flex items-center gap-1 text-xs text-dark-500 bg-cream px-2 py-1 rounded-md">
              <CheckCircle size={10} className="text-gold-400" />
              {amenity}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-dark-400">Starting from</p>
            <p className="text-lg font-bold text-dark-900">
              {project.price}
              <span className="text-xs font-normal text-dark-400 ml-1">{project.priceUnit}</span>
            </p>
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-gold-400 hover:text-gold-500 text-sm font-semibold transition-colors group/link"
          >
            View Details
            <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
