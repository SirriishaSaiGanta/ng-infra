import type { SectionAlign } from '../../types/ui'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: SectionAlign
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}

export default SectionHeading
