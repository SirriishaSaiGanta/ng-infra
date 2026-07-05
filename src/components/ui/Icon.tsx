import type { ReactNode } from 'react'
import type { IconName } from '../../types/ui'

interface IconProps {
  name: IconName
  className?: string
}

const ICON_PATHS: Record<IconName, ReactNode> = {
  leadership: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M15 15.2c2.6.2 4.5 2 4.5 4.8" />
    </>
  ),
  quality: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  delivery: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  safety: (
    <>
      <path d="M4 15a8 8 0 0116 0" />
      <path d="M2 15h20" />
      <path d="M12 5.5v3" />
    </>
  ),
  client: (
    <>
      <path d="M4 5h16v10H9l-4 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  innovation: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 00-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0012 3z" />
    </>
  ),
  industrial: (
    <>
      <path d="M3 21V11l5 3v-3l5 3V8l6 3v10H3z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  commercial: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </>
  ),
  residential: (
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  infrastructure: (
    <>
      <path d="M9 3L4 21" />
      <path d="M15 3l5 18" />
      <path d="M12 7v2M12 12v2M12 17v2" />
    </>
  ),
  renovation: (
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.6 2.6-2-2 2.6-2.6z" />
  ),
}

const Icon = ({ name, className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}

export default Icon
