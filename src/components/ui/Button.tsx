import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import type { ButtonVariant } from '../../types/ui'

interface ButtonOwnProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type ButtonAsButton = ButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsAnchor = ButtonOwnProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const Button = ({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) => {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  if (rest.href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
