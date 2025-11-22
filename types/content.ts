export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface AboutContent {
  bio: string
  experience: string
  education: string
  specializations: string[]
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  workingHours: string
}
