// Simple storage system using localStorage
// In production, use a database

import { Service, AboutContent, ContactInfo } from '@/types/content'

const SERVICES_KEY = 'cms_services'
const ABOUT_KEY = 'cms_about'
const CONTACT_KEY = 'cms_contact'

// Default data
const defaultServices: Service[] = [
  {
    id: '1',
    title: 'Digital Transformation Leadership',
    description: 'Successfully implemented Odoo ERP, enhanced e-platforms, and streamlined business operations.',
    icon: '🚀'
  },
  {
    id: '2',
    title: 'Strategic Marketing & Sales Growth',
    description: 'Developed and executed high-impact digital and traditional campaigns, significantly increasing revenue and market share.',
    icon: '📈'
  },
  {
    id: '3',
    title: 'Team Leadership & Development',
    description: 'Built, trained, and led multiple sales and marketing teams to achieve ambitious targets.',
    icon: '👥'
  },
  {
    id: '4',
    title: 'Business Optimization',
    description: 'Improved operational efficiency across diverse departments, from manufacturing to distribution.',
    icon: '⚙️'
  },
  {
    id: '5',
    title: 'Market Analysis & Innovation',
    description: 'Identified new market opportunities and delivered innovative solutions for competitive advantage.',
    icon: '💡'
  },
  {
    id: '6',
    title: 'Budget & Project Management',
    description: 'Proven success in cost reduction, budget management, and delivering complex projects on deadline.',
    icon: '📊'
  }
]

const defaultAbout: AboutContent = {
  bio: 'I am a results-driven Marketing Manager with 14 years of experience in digital transformation, strategic marketing, sales growth, and business development. I have successfully implemented Odoo ERP, enhanced e-platforms, and led high-impact campaigns that significantly increased revenue and market share. My expertise spans team leadership, business optimization, market analysis, and project management across diverse industries in Saudi Arabia.',
  experience: '14+ Years of Professional Experience',
  education: 'Information Technology (2004-2008) | Programming (2002-2004)',
  specializations: [
    'Digital Transformation Leadership',
    'Strategic Marketing & Sales Growth',
    'Team Leadership & Development',
    'Business Optimization',
    'Market Analysis & Innovation',
    'Budget & Project Management',
    'Relationship Building'
  ]
}

const defaultContact: ContactInfo = {
  phone: '+966 557149990',
  email: 'engwabel@gmail.com',
  address: 'Saudia - Riyadh - Exit 9',
  workingHours: 'Available for consultation - Contact via email or phone'
}

// Services
export function getServices(): Service[] {
  if (typeof window === 'undefined') return defaultServices

  const stored = localStorage.getItem(SERVICES_KEY)
  return stored ? JSON.parse(stored) : defaultServices
}

export function saveServices(services: Service[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(services))
  }
}

export function addService(service: Omit<Service, 'id'>): Service {
  const services = getServices()
  const newService = {
    ...service,
    id: Date.now().toString()
  }
  saveServices([...services, newService])
  return newService
}

export function updateService(id: string, service: Partial<Service>): void {
  const services = getServices()
  const updated = services.map(s => s.id === id ? { ...s, ...service } : s)
  saveServices(updated)
}

export function deleteService(id: string): void {
  const services = getServices()
  saveServices(services.filter(s => s.id !== id))
}

// About
export function getAbout(): AboutContent {
  if (typeof window === 'undefined') return defaultAbout

  const stored = localStorage.getItem(ABOUT_KEY)
  return stored ? JSON.parse(stored) : defaultAbout
}

export function saveAbout(about: AboutContent): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ABOUT_KEY, JSON.stringify(about))
  }
}

// Contact
export function getContact(): ContactInfo {
  if (typeof window === 'undefined') return defaultContact

  const stored = localStorage.getItem(CONTACT_KEY)
  return stored ? JSON.parse(stored) : defaultContact
}

export function saveContact(contact: ContactInfo): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contact))
  }
}
