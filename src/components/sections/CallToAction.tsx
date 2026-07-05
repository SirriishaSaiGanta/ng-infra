import Button from '../ui/Button'
import { SECTION_IDS } from '../../constants/sectionIds'

interface CallToActionProps {
  onRequestQuote: () => void
}

const CallToAction = ({ onRequestQuote }: CallToActionProps) => {
  return (
    <section id={SECTION_IDS.cta} className="section cta">
      <div className="container cta__inner">
        <h2 className="cta__title">Let&apos;s Build Something Great Together</h2>
        <div className="cta__actions">
          <Button type="button" variant="primary" onClick={onRequestQuote}>
            Request a Quote
          </Button>
          <Button href={`#${SECTION_IDS.contact}`} variant="outline">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
