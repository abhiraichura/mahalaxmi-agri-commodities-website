export interface Commodity {
  id: string
  name: string
  category: "spices" | "pulses" | "oil-seeds" | "cotton"
  description: string
  origin: string[]
  seasonality: string
  varieties: string[]
  specifications: string
  image: string
  slug: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  slug: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface CaseStudy {
  id: string
  title: string
  client: string
  commodity: string
  challenge: string
  solution: string
  result: string
  slug: string
}

export interface MarketInsight {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  slug: string
  readTime: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface ContactInfo {
  phone: string[]
  email: string
  website: string
  address: {
    marketing: string
    main: string
  }
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}
