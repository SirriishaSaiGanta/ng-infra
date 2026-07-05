import { SECTION_IDS } from './sectionIds'

export interface NavLink {
  label: string
  sectionId: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', sectionId: SECTION_IDS.about },
  { label: 'Why Us', sectionId: SECTION_IDS.whyChooseUs },
  { label: 'Services', sectionId: SECTION_IDS.services },
  { label: 'Projects', sectionId: SECTION_IDS.projects },
  { label: 'Testimonials', sectionId: SECTION_IDS.testimonials },
  { label: 'Contact', sectionId: SECTION_IDS.contact },
]
