import Button from '../ui/Button'
import { SECTION_IDS } from '../../constants/sectionIds'
import { COMPANY_INFO } from '../../constants/company'

const Hero = () => {
  return (
    <section id={SECTION_IDS.hero} className="hero">
      <div className="container hero__inner">
        <span className="hero__eyebrow">{COMPANY_INFO.tagline}</span>
        <h1 className="hero__title">
          Engineering Excellence in Civil, MEPF, Interiors &amp; EPCC
        </h1>
        <p className="hero__description">
          NG Infra Developers delivers residential, commercial, industrial, and
          infrastructure projects across India — built on quality, safety, and a
          client-first approach.
        </p>
        <div className="hero__actions">
          <Button href={`#${SECTION_IDS.services}`} variant="primary">
            Explore Our Services
          </Button>
          <Button href={`#${SECTION_IDS.contact}`} variant="outline">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
