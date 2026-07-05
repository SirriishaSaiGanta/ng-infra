import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import FormField from '../ui/FormField'
import Button from '../ui/Button'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { submitQuoteRequest } from '../../services/quoteService'
import { SERVICES } from '../../data/services'
import { BUDGET_OPTIONS } from '../../constants/budgetOptions'
import type { QuoteFormValues } from '../../types/forms'

const INITIAL_VALUES: QuoteFormValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  location: '',
  budget: '',
  details: '',
}

const SERVICE_OPTIONS = SERVICES.map((service) => ({
  value: service.id,
  label: service.title,
}))

const QuoteForm = () => {
  const [values, setValues] = useState<QuoteFormValues>(INITIAL_VALUES)
  const { status, submit, reset } = useFormSubmit(submitQuoteRequest)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await submit(values)
  }

  const handleReset = () => {
    reset()
    setValues(INITIAL_VALUES)
  }

  if (status === 'success') {
    return (
      <div className="form-status form-status--success">
        <p>Thank you, {values.name}! Your quote request has been received.</p>
        <p>Our team will get back to you shortly with next steps.</p>
        <Button type="button" variant="outline" onClick={handleReset}>
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        idPrefix="quote"
        value={values.name}
        onChange={handleChange}
        required
      />
      <FormField
        label="Email"
        name="email"
        idPrefix="quote"
        type="email"
        value={values.email}
        onChange={handleChange}
        required
      />
      <FormField
        label="Phone"
        name="phone"
        idPrefix="quote"
        type="tel"
        value={values.phone}
        onChange={handleChange}
        required
      />
      <FormField
        label="Service Needed"
        name="service"
        idPrefix="quote"
        type="select"
        value={values.service}
        onChange={handleChange}
        options={SERVICE_OPTIONS}
        required
      />
      <FormField
        label="Project Location"
        name="location"
        idPrefix="quote"
        value={values.location}
        onChange={handleChange}
        required
      />
      <FormField
        label="Estimated Budget"
        name="budget"
        idPrefix="quote"
        type="select"
        value={values.budget}
        onChange={handleChange}
        options={BUDGET_OPTIONS}
      />
      <FormField
        label="Project Details"
        name="details"
        idPrefix="quote"
        type="textarea"
        value={values.details}
        onChange={handleChange}
        required
      />

      {status === 'error' && (
        <p className="form-status form-status--error">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : 'Submit Request'}
      </Button>
    </form>
  )
}

export default QuoteForm
