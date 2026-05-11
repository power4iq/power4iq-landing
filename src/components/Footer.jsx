import { useState } from 'react'
import logo from '../assets/Power4IQ_logo.png'
import PrivacyPolicyModal from './PrivacyPolicyModal'
import TermsModal from './TermsModal'

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.997 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5.108-1.324A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.52 2 11.997 2z"/>
  </svg>
)

const navServices = [
  { label: 'Portafolio de servicios', href: '#portafolio' },
  { label: 'Plataforma', href: '#platform' },
  { label: 'Por qué Power4IQ', href: '#pilares' },
]

const navCompany = [
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#final-cta' },
]

const socials = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/116002167/' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/power4iq/' },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/573008592217' },
]

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  return (
    <footer className="site-footer">
      <div className="container footer-layout">

        <div className="footer-brand">
          <img src={logo} alt="Power4IQ" className="footer-logo" width={200} height={64} loading="lazy" />
          <p>
            Carga inteligente para conjuntos, comercios, hoteles y flotas que avanzan hacia la
            movilidad eléctrica con datos, operación y rentabilidad.
          </p>
          <div className="footer-socials">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-cols">
          <nav className="footer-col" aria-label="Servicios">
            <h4>Servicios</h4>
            <ul>
              {navServices.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Compañía">
            <h4>Compañía</h4>
            <ul>
              {navCompany.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
              <li>
                <button className="footer-legal-btn" onClick={() => setShowPrivacy(true)}>
                  Política de privacidad
                </button>
              </li>
              <li>
                <button className="footer-legal-btn" onClick={() => setShowTerms(true)}>
                  Términos y condiciones
                </button>
              </li>
            </ul>
          </nav>

          <nav className="footer-col footer-col--contact" aria-label="Contacto">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:hola@power4iq.com">hola@power4iq.com</a></li>
              <li><span>Bogotá · Colombia</span></li>
            </ul>
          </nav>
        </div>

      </div>

      <div className="container legal-row">
        <p>© {new Date().getFullYear()} Power4IQ. Todos los derechos reservados.</p>
        <div>
          <button className="footer-legal-btn" onClick={() => setShowPrivacy(true)}>Política de privacidad</button>
          <button className="footer-legal-btn" onClick={() => setShowTerms(true)}>Términos y condiciones</button>
        </div>
      </div>

      {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
    </footer>
  )
}

export default Footer
