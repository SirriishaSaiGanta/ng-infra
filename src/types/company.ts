export interface CompanyInfo {
  name: string
  tagline: string
  phone: string
  email: string
  address: string
  founder: {
    name: string
    title: string
    bio: string
    quote: string
  }
  vision: string
  mission: string[]
}
