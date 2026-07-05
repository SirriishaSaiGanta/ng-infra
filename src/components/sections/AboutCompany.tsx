import SectionHeading from '../ui/SectionHeading'
import { SECTION_IDS } from '../../constants/sectionIds'
import { COMPANY_INFO } from '../../constants/company'
import plantExterior from '../../assets/images/plant-exterior.jpeg'
import founderPhoto from '../../assets/images/founder.jpeg'

const AboutCompany = () => {
  return (
    <section id={SECTION_IDS.about} className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <SectionHeading eyebrow="Who We Are" title="About NG Infra Developers" />
            <p className="about__vision">{COMPANY_INFO.vision}</p>

            <ul className="about__mission">
              {COMPANY_INFO.mission.map((item) => (
                <li key={item} className="about__mission-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about__media">
            <img
              src={plantExterior}
              alt="Industrial plant facility constructed by NG Infra Developers"
              className="about__image"
            />
          </div>
        </div>

        <div className="founder-card">
          <img
            src={founderPhoto}
            alt={COMPANY_INFO.founder.name}
            className="founder-card__photo"
          />
          <div className="founder-card__content">
            <p className="founder-card__quote">
              &ldquo;{COMPANY_INFO.founder.quote}&rdquo;
            </p>
            <p className="founder-card__bio">{COMPANY_INFO.founder.bio}</p>
            <p className="founder-card__name">{COMPANY_INFO.founder.name}</p>
            <p className="founder-card__title">{COMPANY_INFO.founder.title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
