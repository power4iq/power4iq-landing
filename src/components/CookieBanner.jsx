import { useState, useEffect } from 'react'

const CONSENT_KEY = 'p4iq_cookie_consent'
const GA_ID = 'G-MMRL6G8LYV'

function loadGA4() {
  if (window.__ga4Loaded) return
  window.__ga4Loaded = true
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script.async = true
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') {
      loadGA4()
    } else if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    loadGA4()
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p className="cookie-banner-text">
        Usamos <strong>Google Analytics</strong> para entender cómo se usa el sitio y mejorarlo.
        Tu visita no se registra hasta que aceptes.{' '}
        <a href="#" className="cookie-banner-link">Política de privacidad</a>
      </p>
      <div className="cookie-banner-actions">
        <button className="cookie-btn cookie-btn--reject" onClick={reject}>
          Rechazar
        </button>
        <button className="cookie-btn cookie-btn--accept" onClick={accept}>
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
