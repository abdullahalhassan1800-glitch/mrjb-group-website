import { motion } from 'framer-motion'
import SectionHeading from '../shared/SectionHeading'
import TestimonialCard from '../shared/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          label="Testimonials"
          title="What Our Investors Say"
          description="Hear from families and investors who have trusted MRJB Group with their dream of owning land near Vrindavan."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
