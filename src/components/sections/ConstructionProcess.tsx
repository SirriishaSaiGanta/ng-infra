import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import { SECTION_IDS } from '../../constants/sectionIds'
import { CONSTRUCTION_PROCESS } from '../../data/process'

const ConstructionProcess = () => {
  return (
    <section id={SECTION_IDS.process} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Construction Process"
          align="center"
        />
        <ol className="process">
          {CONSTRUCTION_PROCESS.map((step, index) => (
            <li key={step.id} className="process__step">
              <span className="process__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="process__icon">
                <Icon name={step.icon} />
              </span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ConstructionProcess
