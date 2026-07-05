import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import FormField from '../ui/FormField'
import Button from '../ui/Button'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { submitContactForm } from '../../services/contactService'
import type { ContactFormValues } from '../../types/forms'

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES)
  const { status, submit, reset } = useFormSubmit(submitContactForm)

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
        <p>Thank you, {values.name}! Your message has been sent.</p>
        <p>We&apos;ll get back to you shortly.</p>
        <Button type="button" variant="outline" onClick={handleReset}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        idPrefix="contact"
        value={values.name}
        onChange={handleChange}
        required
      />
      <FormField
        label="Email"
        name="email"
        idPrefix="contact"
        type="email"
        value={values.email}
        onChange={handleChange}
        required
      />
      <FormField
        label="Phone"
        name="phone"
        idPrefix="contact"
        type="tel"
        value={values.phone}
        onChange={handleChange}
      />
      <FormField
        label="Message"
        name="message"
        idPrefix="contact"
        type="textarea"
        value={values.message}
        onChange={handleChange}
        required
      />

      {status === 'error' && (
        <p className="form-status form-status--error">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}

export default ContactForm
