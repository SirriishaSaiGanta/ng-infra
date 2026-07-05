import type { ChangeEvent } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface FormFieldProps {
  label: string
  name: string
  idPrefix: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  value: string
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  required?: boolean
  options?: SelectOption[]
  rows?: number
}

const FormField = ({
  label,
  name,
  idPrefix,
  type = 'text',
  value,
  onChange,
  required,
  options,
  rows = 4,
}: FormFieldProps) => {
  const fieldId = `${idPrefix}-${name}`

  return (
    <div className="form-field">
      <label htmlFor={fieldId} className="form-field__label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={fieldId}
          name={name}
          className="form-field__control"
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
        />
      ) : type === 'select' ? (
        <select
          id={fieldId}
          name={name}
          className="form-field__control"
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          className="form-field__control"
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  )
}

export default FormField
