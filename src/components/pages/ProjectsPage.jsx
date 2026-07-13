import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../shared/SectionHeading'
import ProjectCard from '../shared/ProjectCard'
import { projects } from '../../data/projects'

const filters = ['All', 'Ready to Registry', 'Upcoming']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.status === activeFilter)

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
            Our Projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif font-bold text-4xl md:text-5xl text-white mt-3 mb-4"
          >
            Residential Plots Near Vrindavan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-dark-300 max-w-2xl mx-auto"
          >
            Explore our premium plotted townships — designed for divine living and smart investment.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gold-400 text-dark-900'
                    : 'bg-dark-100 text-dark-500 hover:bg-dark-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-dark-400 py-12">No projects found for this filter.</p>
          )}
        </div>
      </section>
    </motion.main>
  )
}
