import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'
import ProjectCard from '../shared/ProjectCard'
import { projects } from '../../data/projects'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label="Our Projects"
          title="Featured Developments"
          description="Explore our premium residential plotted townships near Vrindavan, designed for divine living and smart investment."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-dark-800 hover:bg-dark-900 text-white px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
