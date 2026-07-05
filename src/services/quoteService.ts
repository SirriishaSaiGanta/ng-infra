import axios from 'axios'
import type { QuoteFormValues } from '../types/forms'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export const submitQuoteRequest = (values: QuoteFormValues) => {
  return axios.post(
    FORMSPREE_ENDPOINT,
    { ...values, _subject: 'New Quote Request — NG Infra Website' },
    { headers: { Accept: 'application/json' } },
  )
}
