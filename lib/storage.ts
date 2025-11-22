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
    title: 'القضايا المدنية',
    description: 'نقدم خدمات متكاملة في القضايا المدنية بما في ذلك النزاعات العقارية والتعويضات',
    icon: '⚖️'
  },
  {
    id: '2',
    title: 'القضايا الجنائية',
    description: 'تمثيل قانوني في القضايا الجنائية والدفاع عن حقوق المتهمين',
    icon: '🔨'
  },
  {
    id: '3',
    title: 'القضايا التجارية',
    description: 'استشارات ومرافعات في النزاعات التجارية والشركات',
    icon: '💼'
  },
  {
    id: '4',
    title: 'قضايا الأسرة',
    description: 'قضايا الأحوال الشخصية والطلاق والحضانة والنفقة',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    id: '5',
    title: 'العقود والاتفاقيات',
    description: 'صياغة ومراجعة العقود والاتفاقيات التجارية والمدنية',
    icon: '📝'
  },
  {
    id: '6',
    title: 'الاستشارات القانونية',
    description: 'تقديم استشارات قانونية شاملة في مختلف المجالات',
    icon: '💡'
  }
]

const defaultAbout: AboutContent = {
  bio: 'المحامي أحمد خبير في القانون السعودي مع أكثر من 15 عامًا من الخبرة في تقديم الخدمات القانونية المتميزة. حاصل على درجة الماجستير في القانون من جامعة الملك سعود، ومتخصص في القضايا المدنية والتجارية والجنائية.',
  experience: 'أكثر من 15 عامًا في ممارسة المحاماة',
  education: 'ماجستير في القانون - جامعة الملك سعود',
  specializations: [
    'القضايا المدنية والتجارية',
    'القضايا الجنائية',
    'قضايا الأسرة والأحوال الشخصية',
    'العقود والاتفاقيات',
    'التحكيم والوساطة'
  ]
}

const defaultContact: ContactInfo = {
  phone: '+966 12 345 6789',
  email: 'ahmed@lawyer.com',
  address: 'الرياض، المملكة العربية السعودية',
  workingHours: 'الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً'
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
