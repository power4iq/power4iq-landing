import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SearchCode, Wrench, LayoutDashboard, TrendingUp,
  ArrowRight, ChevronLeft, ChevronRight,
} from 'lucide-react'
import imgReady from '../assets/power4iq-ready.png'
import imgInstall from '../assets/power4iq-install.png'
import imgControl from '../assets/power4iq-control.png'
import imgGrowth from '../assets/power4iq-growth.png'

const SERVICES = [
  {
    num: '01', verb: 'Evaluar',
    name: 'Power4IQ Ready',
    shortName: 'Ready',
    category: 'Diagnóstico de viabilidad EV',
    accent: '#28D7F7',
    icon: SearchCode,
    image: imgReady,
    desc: 'Antes de invertir, descubre si tu ubicación está lista para una solución de carga segura, rentable y escalable.',
    items: [
      { name: 'Nexo Site Check', tagline: 'Validamos en campo si tu ubicación está lista para instalar un cargador eléctrico de forma segura.' },
      { name: 'Nexo Power Score', tagline: 'Descubre en minutos si tu ubicación tiene potencial para convertirse en un punto de carga rentable.' },
      { name: 'Nexo EV Ready', tagline: 'Estudio de cargabilidad eléctrica para determinar la viabilidad técnica de tu proyecto de carga.' },
    ],
    cta: 'Evaluar mi proyecto',
    href: '#final-cta',
  },
  {
    num: '02', verb: 'Instalar',
    name: 'Power4IQ Install',
    shortName: 'Install',
    category: 'Instalación llave en mano',
    accent: '#0077FF',
    icon: Wrench,
    image: imgInstall,
    desc: 'Diseñamos, suministramos e instalamos cargadores con circuito dedicado, protecciones y certificación RETIE.',
    items: [
      { name: 'Nexo Home Basic', tagline: 'Instalación segura y funcional para cargar tu vehículo eléctrico en casa.' },
      { name: 'Nexo Home Premium', tagline: 'Carga inteligente en casa con mayor control, conectividad y comodidad.' },
      { name: 'Nexo Real Estate Basic', tagline: 'Instalamos tu cargador en edificio o conjunto con soporte técnico para la administración.' },
      { name: 'Nexo Real Estate Premium', tagline: 'Solución premium para cargar en propiedad horizontal con mayor control, documentación y respaldo técnico.' },
    ],
    cta: 'Solicitar instalación',
    href: '#final-cta',
  },
  {
    num: '03', verb: 'Administrar',
    name: 'Power4IQ Control',
    shortName: 'Control',
    category: 'Plataforma y administración',
    accent: '#7C5CFC',
    icon: LayoutDashboard,
    image: imgControl,
    desc: 'Administra cargadores, usuarios, pagos, consumos y reportes desde una sola plataforma en tiempo real.',
    items: [
      { name: 'Power4IQ App', tagline: 'Administra cargadores, usuarios, pagos y reportes desde una plataforma inteligente.' },
    ],
    cta: 'Activar plataforma',
    href: '#final-cta',
  },
  {
    num: '04', verb: 'Monetizar',
    name: 'Power4IQ Growth',
    shortName: 'Growth',
    category: 'Monetización y crecimiento',
    accent: '#22C55E',
    icon: TrendingUp,
    image: imgGrowth,
    desc: 'Convierte espacios de parqueo en ingresos recurrentes mediante revenue sharing, alianzas y red de carga.',
    items: [
      { name: 'Nexo Business', tagline: 'Tú pones el espacio. Power4IQ instala, opera y comparte los ingresos generados.' },
      { name: 'Nexo Business Plus', tagline: 'Tú inviertes en la infraestructura. Power4IQ la diseña, opera y monetiza contigo.' },
      { name: 'Power4IQ Network', tagline: 'Conecta tu ubicación a una red inteligente de carga con usuarios, pagos y operación centralizada.' },
      { name: 'Nexo Partner', tagline: 'Conviértete en aliado Power4IQ y lleva soluciones de carga inteligente a tus clientes.' },
    ],
    cta: 'Monetizar mi ubicación',
    href: '#final-cta',
  },
]

const RING_R = 25
const RING_C = 2 * Math.PI * RING_R          // ≈ 157.08
const TICK_MS = 80
const TOTAL_TICKS = Math.round(5000 / TICK_MS) // 5 s

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 56 : -56, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -56 : 56, opacity: 0, scale: 0.98 }),
}

function PortafolioSection() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const [tick, setTick] = useState(0)
  const pausedRef = useRef(false)
  const svc = SERVICES[active]

  // Looping navigation
  const go = useCallback((d) => {
    const next = (active + d + SERVICES.length) % SERVICES.length
    setDir(d)
    setActive(next)
  }, [active])

  const goTo = useCallback((i) => {
    setDir(i > active ? 1 : -1)
    setActive(i)
  }, [active])

  // Auto-advance timer — restarts whenever active changes
  useEffect(() => {
    setTick(0)
    const id = setInterval(() => {
      if (!pausedRef.current) setTick(t => t + 1)
    }, TICK_MS)
    return () => clearInterval(id)
  }, [active])

  // When timer completes, advance slide
  useEffect(() => {
    if (tick >= TOTAL_TICKS) go(1)
  }, [tick, go])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  // Touch swipe
  const touchStartX = useRef(null)
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1)
    touchStartX.current = null
  }

  const progress = Math.min(tick / TOTAL_TICKS, 1)
  const ringOffset = RING_C * (1 - progress)

  return (
    <section id="portafolio" className="section sv-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Servicios Power4IQ</span>
          <h2 className="section-title">
            Evaluamos, instalamos,{' '}
            <span className="gradient-text">administramos y monetizamos.</span>
          </h2>
          <p className="section-subtitle">
            Infraestructura de carga para vehículos eléctricos — desde hogares y conjuntos hasta comercios, empresas y redes.
          </p>
        </motion.div>

        {/* ── STAGE ─────────────────────────────────────────── */}
        <motion.div
          className="sv-stage"
          style={{ '--sv-accent': svc.accent }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Giant ghost number */}
          <span className="sv-stage-ghost" aria-hidden="true">{svc.num}</span>

          {/* Background image with Ken Burns */}
          <AnimatePresence mode="sync">
            {svc.image && (
              <motion.img
                key={svc.num + '-bg'}
                src={svc.image}
                alt=""
                aria-hidden="true"
                className="sv-stage-bg"
                loading="lazy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>

          {/* Frosted glass panel + gradient overlay */}
          <div className="sv-stage-panel" />
          <div className="sv-stage-bg-overlay" />

          {/* Navigation pair — bottom right */}
          <div className="sv-stage-nav">
            <span className="sv-stage-counter">{active + 1} / {SERVICES.length}</span>
            <button
              className="sv-stage-arrow sv-stage-arrow--prev"
              onClick={() => go(-1)}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="sv-stage-arrow sv-stage-arrow--next"
              onClick={() => go(1)}
              aria-label="Siguiente"
            >
              <svg className="sv-timer-ring" viewBox="0 0 54 54" aria-hidden="true">
                <circle cx="27" cy="27" r={RING_R} className="sv-timer-ring-track" />
                <circle
                  cx="27" cy="27" r={RING_R}
                  className="sv-timer-ring-fill"
                  style={{ strokeDashoffset: ringOffset }}
                />
              </svg>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Animated content */}
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              className="sv-stage-content"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.32, 0, 0.32, 1] }}
            >
              <span className="sv-stage-category">{svc.category}</span>
              <h3 className="sv-stage-name">{svc.name}</h3>
              <p className="sv-stage-desc">{svc.desc}</p>

              <div className="sv-product-cards">
                {svc.items.map((item) => (
                  <div key={item.name} className="sv-product-card" style={{ '--sv-accent': svc.accent }}>
                    <span className="sv-product-card-name">{item.name}</span>
                    <span className="sv-product-card-tagline">{item.tagline}</span>
                  </div>
                ))}
              </div>

              <div className="sv-stage-footer">
                <a href={svc.href} className="sv-stage-cta">
                  {svc.cta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── POWER RAIL NAV ────────────────────────────────── */}
        <div className="sv-rail">
          <div className="sv-rail-steps">
            {SERVICES.map((s, i) => {
              const StepIcon = s.icon
              return (
                <button
                  key={s.num}
                  className={`sv-rail-step${i === active ? ' sv-rail-step--active' : ''}`}
                  style={{ '--sv-accent': s.accent }}
                  onClick={() => goTo(i)}
                >
                  <span className="sv-rail-verb">{s.verb}</span>
                  <StepIcon size={20} strokeWidth={1.4} className="sv-rail-icon" />
                  <span className="sv-rail-name">{s.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="sv-bottom-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p>¿No sabes por dónde empezar? Un asesor Power4IQ te ayuda a encontrar la solución ideal para tu caso.</p>
          <a href="#final-cta" className="btn btn-primary">
            Hablar con un asesor <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default PortafolioSection
