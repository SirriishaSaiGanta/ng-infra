export interface ContactFormValues {
  name: string
  email: string
  phone: string
  message: string
}

export interface QuoteFormValues {
  name: string
  email: string
  phone: string
  service: string
  location: string
  budget: string
  details: string
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'
