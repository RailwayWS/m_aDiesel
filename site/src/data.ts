import emergency from './assets/photos/emergency-tanker-dusk.webp'
import bulk from './assets/photos/bulk-tanker-mountains.webp'
import doorToDoor from './assets/photos/door-to-door-trailer.webp'
import generator from './assets/photos/generator-refill.webp'
import plant from './assets/photos/plant-machinery-bakkie.webp'

export type Contact = { name: string; phone: string }

// Numbers as printed on the fleet livery.
export const contacts: Contact[] = [
  { name: 'Micheal', phone: '079 525 9116' },
  { name: 'Joseph', phone: '065 741 6172' },
  { name: 'Henko', phone: '066 227 5515' },
]

// The 24/7 line is Micheal's. Quote requests still go to the depot (Joseph).
export const primaryPhone = contacts[0].phone
export const depotPhone = contacts[1].phone

export const telHref = (phone: string) => `tel:+27${phone.replace(/\s/g, '').slice(1)}`
export const waHref = (phone: string, text = '') =>
  `https://wa.me/27${phone.replace(/\s/g, '').slice(1)}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const address = {
  street: '49 Beacon Way',
  area: 'Beaconvale Industrial',
  suburb: 'Parow Valley, Cape Town',
}

export type Service = {
  id: string
  title: string
  /** One-line summary used in the honeycomb overview */
  summary: string
  body: string
  image: string
  alt: string
  emergency?: boolean
}

// Wording and order fixed by the brief — 24/7 emergency is always first.
export const services: Service[] = [
  {
    id: 'emergency',
    title: '24/7 emergency fuel fillings',
    summary: 'Any hour, any day — a loaded vehicle comes to you.',
    body: 'Ran dry overnight, on a weekend or mid-shift? Call us any hour and a loaded vehicle is dispatched to get you running again.',
    image: emergency,
    alt: 'M&A Diesel tanker at the depot at dusk',
    emergency: true,
  },
  {
    id: 'bulk',
    title: 'Bulk diesel deliveries',
    summary: 'Bulk loads straight into your storage tanks.',
    body: 'Scheduled or once-off bulk loads straight into your storage tanks, delivered by our own tanker fleet.',
    image: bulk,
    alt: 'M&A Diesel tanker truck with mountains behind',
  },
  {
    id: 'door-to-door',
    title: 'Door-to-door filling services',
    summary: 'We fill your vehicles where they’re parked.',
    body: 'We come to your vehicles, wherever they are parked — no trips to the pump, no downtime for your drivers.',
    image: doorToDoor,
    alt: 'M&A Diesel bakkie and fuel trailer on a residential lane',
  },
  {
    id: 'generator',
    title: 'Generator refilling',
    summary: 'Standby and site generators kept running.',
    body: 'Keep backup power running through load-shedding and outages. We top up standby and site generators on call or on a schedule.',
    image: generator,
    alt: 'M&A Diesel bakkie refilling a containerised generator',
  },
  {
    id: 'plant',
    title: 'Plant and machinery refilling',
    summary: 'On-site fuel for machines on the job.',
    body: 'On-site refuelling for excavators, TLBs, forklifts and earthmoving equipment, so the work never stops for fuel.',
    image: plant,
    alt: 'M&A Diesel bakkie beside a yellow TLB',
  },
]

// Add `photo` (an imported 4:5 portrait) per person; once all have one, Team switches to the portrait grid.
export type TeamMember = { name: string; role: string; phone?: string; photo?: string }

// Order as supplied by M&A Diesel.
export const team: TeamMember[] = [
  { name: 'Joseph Higgins', role: 'Depot Manager & Transport Co\u2011ordinator', phone: '065 741 6172' },
  { name: 'Micheal Erasmus', role: 'CEO', phone: '079 525 9116' },
  { name: 'Alet Erasmus', role: 'CEO' },
  { name: 'Henko Steenkamp', role: 'Sales Representative & Driver', phone: '066 227 5515' },
  { name: 'Zuhardt Erasmus', role: 'Driver', phone: '064 682 4882' },
  { name: 'Leighton Diedricks', role: 'Driver' },
  { name: 'Jessica Neethling', role: 'On-site Assistant' },
  { name: 'Renier Kachelhoffer', role: 'Maintenance Manager' },
  { name: 'Suzette Venter', role: 'Accounts' },
]

export const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'team', label: 'Our Team' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
