import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Send,
} from 'lucide-react'
import logo from '../assets/Power4IQ_logo.png'
import bkgContact from '../assets/bkg-contact.png'

const projectTypes = [
  'Power4IQ Ready — Diagnóstico de viabilidad EV',
  'Power4IQ Install — Instalación llave en mano',
  'Power4IQ Control — Plataforma y administración',
  'Power4IQ Growth — Monetización y crecimiento',
  'Nexo Site Check — Visita técnica presencial',
  'Nexo Power Score — Diagnóstico online con IA',
  'Nexo EV Ready — Estudio de cargabilidad',
  'Nexo Home Basic — Instalación en casa',
  'Nexo Home Premium — Instalación inteligente en casa',
  'Nexo Real Estate Basic — Instalación en propiedad horizontal',
  'Nexo Real Estate Premium — Instalación avanzada en conjunto',
  'Power4IQ App — Plataforma de administración',
  'Nexo Business — Modelo cero inversión inicial',
  'Nexo Business Plus — Inversión + revenue sharing',
  'Power4IQ Network — Red de puntos de carga',
  'Nexo Partner — Programa de aliados',
  'No sé cuál necesito — Quiero asesoría',
]

const trustItems = [
  { icon: Clock, text: 'Respuesta en menos de 24 h hábiles' },
  { icon: ShieldCheck, text: 'Instalaciones certificadas RETIE' },
  { icon: Zap, text: 'Diagnóstico técnico sin costo inicial' },
]

function FinalCTASection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('No se pudo enviar. Escríbenos a hola@power4iq.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="final-cta" className="section contact-section" style={{ backgroundImage: `url(${bkgContact})` }}>
      <div className="contact-glow-bg" aria-hidden="true" />

      <div className="container contact-container">

        {/* ── LEFT ── */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">Contacto</span>

          <img src={logo} alt="Power4IQ" className="contact-logo" width={200} height={64} loading="lazy" />

          <h2 className="contact-headline">
            Hablemos de<br />
            <span className="gradient-text">tu proyecto EV.</span>
          </h2>

          <p className="contact-lead">
            Cuéntanos tu caso y un ingeniero Power4IQ te responde con una propuesta técnica adaptada a tu realidad.
          </p>

          <ul className="contact-trust">
            {trustItems.map((it) => {
              const Icon = it.icon
              return (
                <li key={it.text}>
                  <Icon size={15} />
                  <span>{it.text}</span>
                </li>
              )
            })}
          </ul>

          <div className="contact-direct">
            <a href="mailto:hola@power4iq.com" className="contact-direct-link">
              <Mail size={15} />
              hola@power4iq.com
            </a>
            <a href="tel:+573008592217" className="contact-direct-link">
              <Phone size={15} />
              +57 300 859 2217
            </a>
          </div>

          <p className="contact-legal">
            Power4IQ Charge · Colombia 2026 · Soluciones certificadas RETIE
          </p>
        </motion.div>

        {/* ── RIGHT — FORM ── */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="contact-form-card glass">
            <div className="contact-form-header">
              <h3 className="contact-form-title">Solicitar propuesta técnica</h3>
            </div>

            {sent ? (
              <div className="contact-sent">
                <CheckCircle2 size={40} />
                <p>¡Tu mensaje fue enviado! Te contactamos pronto.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-row">
                  <div className="contact-field">
                    <label htmlFor="cf-name">Nombre completo</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      placeholder="Juan Pérez"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="cf-email">Correo electrónico</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="juan@empresa.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-row">
                  <div className="contact-field">
                    <label htmlFor="cf-phone">Teléfono / WhatsApp</label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      placeholder="+57 300 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="cf-type">Tipo de proyecto</label>
                    <select
                      id="cf-type"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Selecciona…</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="cf-message">Cuéntanos tu caso</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="¿Cuántos vehículos? ¿Tienes parqueadero? ¿Cuándo quieres empezar?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-submit" disabled={loading}>
                  {loading ? 'Enviando…' : 'Enviar solicitud'}
                  {!loading && <Send size={15} />}
                </button>

                {error && <p className="contact-form-error">{error}</p>}

                <p className="contact-form-note">
                  También puedes escribirnos directo a{' '}
                  <a href="mailto:hola@power4iq.com">hola@power4iq.com</a>
                </p>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default FinalCTASection
