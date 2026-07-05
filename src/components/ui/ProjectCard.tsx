import Icon from './Icon'
import type { ProjectItem } from '../../types/content'

type ProjectCardProps = ProjectItem

const STATUS_LABEL: Record<ProjectItem['status'], string> = {
  ongoing: 'Ongoing',
  completed: 'Completed',
}

const ProjectCard = ({
  title,
  client,
  location,
  description,
  status,
  image,
  icon,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-card__media">
        {image ? (
          <img src={image} alt={title} className="project-card__image" />
        ) : (
          <div className="project-card__placeholder">
            <Icon name={icon} className="project-card__placeholder-icon" />
          </div>
        )}
        <span className={`project-card__badge project-card__badge--${status}`}>
          {STATUS_LABEL[status]}
        </span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__meta">
          {client} — {location}
        </p>
        <p className="project-card__description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
