import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../config/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const faqActive = pathname === '/' && hash === '#faq'
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="wrap header-inner">
        <NavLink
          to="/"
          className="brand"
          aria-label={`${site.appName} home`}
          onClick={close}
        >
          <img src="/logo.svg" alt="" width={36} height={36} />
          <span className="brand-name">{site.appName}</span>
        </NavLink>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive && !faqActive ? 'active' : undefined)}
            onClick={close}
          >
            Home
          </NavLink>
          <Link to="/#faq" className={faqActive ? 'active' : undefined} onClick={close}>
            FAQ
          </Link>
          <NavLink to="/privacy-policy" onClick={close}>
            Privacy
          </NavLink>
          <NavLink to="/terms" onClick={close}>
            Terms
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
