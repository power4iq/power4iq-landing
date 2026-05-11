import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import logo from '../assets/Power4IQ_logo.png'

const navItems = [
  { label: 'Por qué Power4IQ', href: '#pilares' },
  { label: 'Servicios', href: '#portafolio' },
  { label: 'Plataforma', href: '#platform' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#final-cta' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const close = () => window.innerWidth >= 920 && setOpen(false)
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('resize', close)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1))

    const updateActive = () => {
      const trigger = window.innerHeight * 0.35
      let active = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= trigger) active = id
      }
      setActiveSection(active)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>

      <div className="container header-inner">
        <a
          href="#hero"
          className="brand"
          aria-label="Power4IQ inicio"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <img src={logo} alt="Power4IQ" className="brand-logo" />
        </a>

        <nav className="header-nav" aria-label="Navegación principal">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? 'nav-active' : ''}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <a
            href="#final-cta"
            className="btn btn-primary btn-sm header-cta"
            onClick={(e) => handleNavClick(e, '#final-cta')}
          >
            Calcular potencial
            <ArrowRight size={16} />
          </a>

          <button
            className="burger-btn"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Navegación móvil">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? 'nav-active' : ''}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href="#final-cta"
            className="btn btn-primary mobile-cta"
            onClick={(e) => handleNavClick(e, '#final-cta')}
          >
            Calcular potencial
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
