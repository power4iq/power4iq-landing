import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  CirclePlay,
} from 'lucide-react'
import heroVideo from '../assets/hero/nexo-hero.mp4'

// Datos EV Colombia
const statStrip = [
  {
    prefix: '',
    end: 207,
    suffix: '%',
    decimals: 0,
    trend: '↑',
    label: 'Crecimiento de VEs en Colombia',
    sub: 'Ene–abr 2026 vs mismo período 2025',
    source: 'RUNT 2026',
    color: 'cyan',
  },
  {
    prefix: '',
    end: 41,
    suffix: 'K+',
    decimals: 0,
    trend: '→',
    label: 'Matrículas EV + híbridos',
    sub: 'Acumulado a abril 2026 · Colombia',
    source: 'RUNT 2026',
    color: 'star',
  },
  {
    prefix: '',
    end: 600,
    suffix: 'K',
    decimals: 0,
    trend: '★',
    label: 'Meta VEs del gobierno al 2030',
    sub: 'Plan Nacional de Transición Energética',
    source: 'CONPES 4075',
    color: 'energy',
  },
  {
    prefix: '',
    end: 3,
    suffix: 'er lugar',
    decimals: 0,
    trend: '⚡',
    label: 'Colombia en movilidad EV de Latam',
    sub: 'Después de Brasil y México',
    source: 'IEA 2024',
    color: 'iris',
  },
]

function useCountUp(end, decimals, duration, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(parseFloat((end * eased).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, end, decimals, duration])
  return count
}

function CounterStat({ stat, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCountUp(stat.end, stat.decimals, 1600, inView)
  const display = stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count)

  return (
    <motion.div
      ref={ref}
      className={`hero-stat hero-stat--${stat.color}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      <div className="hero-stat-top">
        <span className="hero-stat-trend">{stat.trend}</span>
        <span className="hero-stat-source">{stat.source}</span>
      </div>
      <span className="hero-stat-value">
        {stat.prefix}{display}{stat.suffix}
      </span>
      <span className="hero-stat-label">{stat.label}</span>
      <span className="hero-stat-sub">{stat.sub}</span>
    </motion.div>
  )
}

function HeroSection() {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <section id="hero" className="section hero">
      <div className="hero-bg" aria-hidden="true">
        {!videoError ? (
          <video
            ref={videoRef}
            className="hero-video"
            src={heroVideo}
            autoPlay={!reduceMotion}
            muted
            loop={!reduceMotion}
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
          />
        ) : (
          <div className="hero-video-fallback" />
        )}
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-stage">
          <div className="hero-copy">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Infraestructura EV · Energía Inteligente
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            >
              Convierte tu espacio en una
              <span className="accent"> red de carga inteligente.</span>
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
            >
              Nos encargamos del diagnóstico, diseño eléctrico, instalación, certificación,
              plataforma, soporte y administración de la red de carga. Tú aportas el espacio
              o la necesidad; Power4IQ pone la ingeniería y la operación.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.28 }}
            >
              <a href="#final-cta" className="btn btn-primary">
                Calcular potencial de mi ubicación
                <ArrowRight size={16} />
              </a>
              <a href="#portafolio" className="btn btn-ghost">
                <CirclePlay size={18} />
                Explorar modelos de negocio
              </a>
            </motion.div>

          </div>
        </div>

        {/* Market stats strip */}
        <motion.div
          className="hero-stats-strip"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          {statStrip.map((s, i) => (
            <CounterStat key={s.label} stat={s} delay={0.15 + i * 0.08} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
