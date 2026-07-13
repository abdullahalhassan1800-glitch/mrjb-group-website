import { motion } from 'framer-motion'
import HeroSection from '../sections/HeroSection'
import StatsSection from '../sections/StatsSection'
import AboutPreview from '../sections/AboutPreview'
import FeaturedProjects from '../sections/FeaturedProjects'
import AmenitiesSection from '../sections/AmenitiesSection'
import GallerySection from '../sections/GallerySection'
import LocationSection from '../sections/LocationSection'
import InvestmentSection from '../sections/InvestmentSection'
import ReasonsSection from '../sections/ReasonsSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import CTASection from '../sections/CTASection'
import FAQAccordion from '../shared/FAQAccordion'
import SectionHeading from '../shared/SectionHeading'
import { faq } from '../../data/faq'

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FeaturedProjects />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <InvestmentSection />
      <ReasonsSection />
      <TestimonialsSection />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Got questions? We've got answers. Find everything you need to know about our projects."
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faq} />
          </div>
        </div>
      </section>

      <CTASection />
    </motion.main>
  )
}
