import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { SECTION_IDS } from '../../constants/sectionIds'
import { SERVICES } from '../../data/services'

const OurServices = () => {
  return (
    <section id={SECTION_IDS.services} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="Building excellence across every sector — industrial, commercial, residential, and infrastructure."
        />
        <div className="cards-grid">
          {SERVICES.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
