import axios from 'axios'
import type { ContactFormValues } from '../types/forms'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export const submitContactForm = (values: ContactFormValues) => {
  return axios.post(
    FORMSPREE_ENDPOINT,
    { ...values, _subject: 'New Contact Inquiry — NG Infra Website' },
    { headers: { Accept: 'application/json' } },
  )
}
