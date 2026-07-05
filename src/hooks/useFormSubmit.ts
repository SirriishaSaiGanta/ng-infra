import { useState } from 'react'
import type { SubmitStatus } from '../types/forms'

export function useFormSubmit<T>(submitFn: (values: T) => Promise<unknown>) {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const submit = async (values: T) => {
    setStatus('submitting')
    try {
      await submitFn(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')

  return { status, submit, reset }
}
