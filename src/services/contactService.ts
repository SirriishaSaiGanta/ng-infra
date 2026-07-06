import axios from 'axios'
import { COMPANY_INFO } from '../constants/company'
import type { ContactFormValues } from '../types/forms'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL?.trim() || COMPANY_INFO.email

export const submitContactForm = (values: ContactFormValues) => {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error(
      'Missing VITE_FORMSPREE_ENDPOINT. Set it to your Formspree form endpoint.',
    )
  }

  return axios.post(
    FORMSPREE_ENDPOINT,
    {
      ...values,
      _subject: `New Contact Inquiry — ${COMPANY_INFO.name}`,
      _replyto: values.email,
      recipient_email: CONTACT_EMAIL,
      source_domain: typeof window !== 'undefined' ? window.location.hostname : 'unknown',
    },
    { headers: { Accept: 'application/json' } },
  )
}
