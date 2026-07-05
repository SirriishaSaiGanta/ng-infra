import type { ProjectItem } from '../types/content'
import aakPlantFormwork from '../assets/images/aak-plant-formwork.jpeg'
import tankFormwork from '../assets/images/tank-formwork.jpeg'
import rebarFoundationWork from '../assets/images/rebar-foundation-work.jpeg'
import siteExcavation from '../assets/images/site-excavation.jpeg'
import plantExterior from '../assets/images/plant-exterior.jpeg'
import retainingWallPour from '../assets/images/retaining-wall-pour.jpeg'

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aak-edible-oil-plant',
    title: 'Edible Oil Plant, ETP & Refinery',
    client: 'AAK India Pvt. Ltd.',
    location: 'Kakinada, Andhra Pradesh',
    description:
      'Construction of an edible oil plant along with effluent treatment and refinery facilities.',
    status: 'ongoing',
    image: aakPlantFormwork,
    icon: 'industrial',
  },
  {
    id: 'renewsys-tanks-transformer-beds',
    title: 'UG Tanks, Chiller Plant & Transformer Beds',
    client: 'Renewsys India Pvt. Ltd.',
    location: 'Hyderabad, Telangana',
    description:
      'Underground tanks, ETP, chiller plant, D.G. foundations, and transformer beds.',
    status: 'ongoing',
    image: tankFormwork,
    icon: 'industrial',
  },
  {
    id: 'bhel-test-facility',
    title: 'Test Facility for Special Purpose Electrical Machines',
    client: 'BHEL',
    location: 'Hyderabad, Telangana',
    description:
      'New block and civil works for setting up a specialized HPEP test facility.',
    status: 'ongoing',
    image: rebarFoundationWork,
    icon: 'commercial',
  },
  {
    id: 'sri-city-pump-foundations',
    title: 'Pump Foundations & Fabrication Works',
    client: 'L.G. Company, Sri City',
    location: 'Tirupathi, Andhra Pradesh',
    description: 'Pump foundations, floorings, and fabrication works at Sri City.',
    status: 'ongoing',
    image: siteExcavation,
    icon: 'industrial',
  },
  {
    id: 'aak-zld-acid-oil-plant',
    title: 'Effluent Recycling cum ZLD & ACID Oil Plant',
    client: 'AAK India Pvt. Ltd.',
    location: 'Kakinada, Andhra Pradesh',
    description: 'Zero liquid discharge effluent recycling plant and an ACID oil plant.',
    status: 'completed',
    image: plantExterior,
    icon: 'industrial',
  },
  {
    id: 'aparna-amber-miran-villas',
    title: 'Miran Villas, Aparna Amber',
    client: 'Aparna',
    location: 'Hyderabad, Telangana',
    description:
      'Villa construction within the Aparna Amber gated community development.',
    status: 'completed',
    icon: 'residential',
  },
  {
    id: 'bengaluru-vijayawada-bridges',
    title: 'Box Culverts, VUPs & Major Bridges',
    client: 'Bengaluru–Vijayawada Express Highway',
    location: 'Kanigiri, Andhra Pradesh',
    description: 'Box culverts, vehicular underpasses, and major bridge structures.',
    status: 'completed',
    icon: 'infrastructure',
  },
  {
    id: 'amaravathi-retaining-walls',
    title: 'Underground Drains & Retaining Walls',
    client: 'Amaravathi Capital',
    location: 'Andhra Pradesh',
    description: 'Underground drainage systems and retaining wall construction.',
    status: 'completed',
    image: retainingWallPour,
    icon: 'infrastructure',
  },
]
