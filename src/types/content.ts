import type { IconName } from './ui'

export interface IconContentItem {
  id: string
  icon: IconName
  title: string
  description: string
}

export type ProjectStatus = 'ongoing' | 'completed'

export interface ProjectItem {
  id: string
  title: string
  client: string
  location: string
  description: string
  status: ProjectStatus
  image?: string
  icon: IconName
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface TestimonialItem {
  id: string
  quote: string
  client: string
}
