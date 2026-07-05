import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { SECTION_IDS } from '../../constants/sectionIds'
import { WHY_CHOOSE_US } from '../../data/whyChooseUs'

const WhyChooseUs = () => {
  return (
    <section id={SECTION_IDS.whyChooseUs} className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Why NG Infra"
          title="Why Choose Us"
          description="We combine technical expertise, industry experience, and a customer-first approach to deliver construction and MEPF solutions that consistently exceed expectations."
          align="center"
        />
        <div className="cards-grid">
          {WHY_CHOOSE_US.map((item) => (
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

export default WhyChooseUs
