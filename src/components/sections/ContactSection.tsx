import SectionHeading from '../ui/SectionHeading'
import ContactForm from '../common/ContactForm'
import { SECTION_IDS } from '../../constants/sectionIds'
import { COMPANY_INFO } from '../../constants/company'

const ContactSection = () => {
  return (
    <section id={SECTION_IDS.contact} className="section section--alt">
      <div className="container contact__grid">
        <div>
          <SectionHeading eyebrow="Get in Touch" title="Contact Us" />
          <ul className="contact__details">
            <li>{COMPANY_INFO.phone}</li>
            <li>{COMPANY_INFO.email}</li>
            <li>{COMPANY_INFO.address}</li>
          </ul>
        </div>

        <div className="contact__form-card">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
