import TestimonialCard from '../ui/TestimonialCard'
import SectionHeading from '../ui/SectionHeading'
import { SECTION_IDS } from '../../constants/sectionIds'
import { TESTIMONIALS } from '../../data/testimonials'

const Testimonials = () => {
  return (
    <section id={SECTION_IDS.testimonials} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Our Clients Say"
          align="center"
        />
        <div className="cards-grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              client={testimonial.client}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
