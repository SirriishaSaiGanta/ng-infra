import { useState } from 'react'
import { NAV_LINKS } from '../../constants/navLinks'
import { SECTION_IDS } from '../../constants/sectionIds'
import company_logo from '../../assets/images/company_logo.png'

interface NavbarProps {
  onRequestQuote: () => void
}

const Navbar = ({ onRequestQuote }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  const handleRequestQuote = () => {
    closeMenu()
    onRequestQuote()
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href={`#${SECTION_IDS.hero}`} className="navbar__brand" onClick={closeMenu}>
          <img src={company_logo} alt="NG Infra Developers" className="navbar__logo" />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav className={`navbar__nav${isOpen ? ' navbar__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <button type="button" className="navbar__cta" onClick={handleRequestQuote}>
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
