import emergency from './assets/photos/emergency-tanker-dusk.webp'
import bulk from './assets/photos/bulk-tanker-mountains.webp'
import doorToDoor from './assets/photos/door-to-door-trailer.webp'
import generator from './assets/photos/generator-refill.webp'
import plant from './assets/photos/plant-machinery-bakkie.webp'

export type Contact = { name: string; phone: string }

// The 24/7 emergency filling numbers, as supplied by the client (13 Oct changes).
// All five appear in the proof strip and the call pop-up; other places show a subset, below.
export const contacts: Contact[] = [
  { name: 'Micheal', phone: '079 525 9116' },
  { name: 'Joseph', phone: '065 741 6172' },
  { name: 'Henko', phone: '066 227 5515' },
  { name: 'Zuhardt', phone: '064 682 4882' },
  { name: 'Leighton', phone: '071 717 3180' },
]

const pick = (...names: string[]) => names.map((n) => contacts.find((c) => c.name === n)!)
// Which numbers each block shows, and in what order, as the client set them.
export const menuContacts = pick('Micheal', 'Joseph', 'Henko')
export const contactSectionContacts = pick('Henko', 'Zuhardt', 'Micheal')
export const footerContacts = pick('Henko', 'Zuhardt', 'Joseph', 'Micheal')

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
  /** Heading on the detail block */
  title: string
  /** Short name used in the honeycomb overview — the brief's wording */
  label: string
  body: string
  tagline?: string
  image: string
  alt: string
  emergency?: boolean
}

// Wording and order fixed by the brief — 24/7 emergency is always first.
export const services: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency diesel deliveries — day or night',
    label: '24/7 emergency fuel fillings',
    body: 'Run out of diesel after hours, overnight, during a weekend or in the middle of a shift? M&A Diesel provides emergency refuelling availability beyond normal business hours, including weekends, to help get your generators, plant and fleet back up and running when you need us most.',
    image: emergency,
    alt: 'M&A Diesel tanker at the depot at dusk',
    emergency: true,
  },
  {
    id: 'bulk',
    title: 'Bulk diesel deliveries',
    label: 'Bulk diesel deliveries',
    body: 'From 1,500-litre deliveries to full 40,000-litre tanker loads, M&A Diesel delivers dependable bulk diesel solutions tailored to your operational needs — where and when you need it.',
    image: bulk,
    alt: 'M&A Diesel tanker truck with mountains behind',
  },
  {
    id: 'door-to-door',
    title: 'Door-to-door filling services',
    label: 'Door-to-door filling services',
    body: 'Delivered directly to your operation or site, keeping your equipment running, minimising downtime and helping you avoid costly operational delays.',
    image: doorToDoor,
    alt: 'M&A Diesel bakkie and fuel trailer on a residential lane',
  },
  {
    id: 'generator',
    title: 'Generator refilling',
    label: 'Generator refilling',
    body: 'Keep your business running and your operations powered with reliable generator refuelling, day or night. M&A Diesel specialises in on-site generator refuelling, with emergency service availability after hours and over weekends to help minimise downtime and keep your business operational when it matters most.',
    tagline: 'Your power. Your business. Our priority.',
    image: generator,
    alt: 'M&A Diesel bakkie refilling a containerised generator',
  },
  {
    id: 'plant',
    title: 'Plant and machinery refilling',
    label: 'Plant and machinery refilling',
    body: 'From excavators, TLBs and forklifts to heavy earthmoving machinery, M&A Diesel delivers diesel directly to your equipment on-site, helping minimise downtime and keep your operation moving.',
    tagline: 'We bring the diesel to you — so your work never stops for fuel.',
    image: plant,
    alt: 'M&A Diesel bakkie beside a yellow TLB',
  },
]

// Add `photo` (an imported 4:5 portrait) per person; once all have one, Team switches to the portrait grid.
export type TeamMember = { name: string; role: string; phone?: string; photo?: string }

// Order as supplied by M&A Diesel.
export const team: TeamMember[] = [
  { name: 'Micheal Erasmus', role: 'CEO', phone: '079 525 9116' },
  { name: 'Alet Erasmus', role: 'CEO' },
  { name: 'Suzette Venter', role: 'Accounts' },
  { name: 'Joseph Higgins', role: 'Depot Manager & Transport Co\u2011ordinator', phone: '065 741 6172' },
  { name: 'Henko Steenkamp', role: 'Sales Representative & Driver', phone: '066 227 5515' },
  { name: 'Zuhardt Erasmus', role: 'Driver', phone: '064 682 4882' },
  { name: 'Leighton Diedricks', role: 'Driver' },
  { name: 'Jessica Neethling', role: 'Fuel \u2013 Attendant' },
  { name: 'Renier Kachelhoffer', role: 'Maintenance' },
]

export type Page = 'home' | 'gallery'
export type NavLink = { id: string; label: string; /** Set for links to another page rather than a home section */ href?: string }

export const navLinks: NavLink[] = [
  { id: 'services', label: 'Services' },
  // { id: 'team', label: 'Our Team' }, // hidden until team portraits arrive
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery', href: '/gallery/' },
  { id: 'contact', label: 'Contact' },
]

// Home-section anchors work from any page: '#about' at home, '/#about' elsewhere.
export const navHref = (link: NavLink, page: Page) => link.href ?? (page === 'home' ? `#${link.id}` : `/#${link.id}`)
