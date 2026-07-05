import ProjectCard from '../ui/ProjectCard'
import SectionHeading from '../ui/SectionHeading'
import { SECTION_IDS } from '../../constants/sectionIds'
import { PROJECTS } from '../../data/projects'

const FeaturedProjects = () => {
  return (
    <section id={SECTION_IDS.projects} className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          description="A selection of projects delivered for clients such as AAK India, Renewsys, BHEL, and Aparna."
        />
        <div className="cards-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
