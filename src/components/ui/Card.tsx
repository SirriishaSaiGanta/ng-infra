import Icon from './Icon'
import type { IconName } from '../../types/ui'

interface CardProps {
  icon: IconName
  title: string
  description: string
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="card">
      <span className="card__icon">
        <Icon name={icon} />
      </span>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  )
}

export default Card
