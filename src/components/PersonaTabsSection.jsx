import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import imgHome       from '../assets/para quien es/home.png'
import imgPH         from '../assets/para quien es/ph.png'
import imgCommercial from '../assets/para quien es/commercial.png'
import imgHotels     from '../assets/para quien es/hotels.png'
import imgBus        from '../assets/para quien es/bus.png'
import {
  Building2, BriefcaseBusiness, Hotel, Truck, House, Zap,
  ShieldCheck, Gauge, Settings2, Leaf, Clock, BarChart3,
  Users, Star, TrendingUp, TrendingDown, Layers, Wifi,
  CreditCard, Lightbulb, ChevronLeft, ChevronRight,
} from 'lucide-react'

const profiles = [
  {
    id: 'casas',
    label: 'Casas',
    shortLabel: 'Casas',
    icon: House,
    image: imgHome,
    title: 'Carga segura\ndesde el día 1',
    tag: 'Residencial',
    kpis: [
      { value: '7.4 kW',  label: 'Potencia', color: '#28D7F7' },
      { value: '100%',    label: 'RETIE',     color: '#28D7F7' },
      { value: '−40%',    label: 'Costo valle', color: '#22C55E' },
    ],
    benefits: [
      { icon: ShieldCheck, text: 'Certificación RETIE incluida' },
      { icon: Zap,         text: 'Circuito dedicado sin sobrecargar la red' },
      { icon: Gauge,       text: 'Carga nocturna en tarifa valle' },
      { icon: Wifi,        text: 'Monitoreo 24/7 desde tu celular' },
    ],
    callout: 'Un wallbox bien instalado protege tu vehículo, tu casa y tu bolsillo desde la primera noche.',
  },
  {
    id: 'conjuntos',
    label: 'Conjuntos',
    shortLabel: 'Conjuntos',
    icon: Building2,
    image: imgPH,
    title: 'EV Ready sin\ncolapsar el común',
    tag: 'Propiedad horizontal',
    kpis: [
      { value: '−90%',    label: 'Sobrecostos', color: '#22C55E' },
      { value: '100+',    label: 'Cupos',        color: '#28D7F7' },
      { value: '49–69%',  label: 'Margen estudio', color: '#28D7F7' },
    ],
    benefits: [
      { icon: Layers,     text: 'Escalable de 1 a 100+ puntos sin obra nueva' },
      { icon: BarChart3,  text: 'Medición individual por cupo' },
      { icon: ShieldCheck,text: 'Tablero EV dedicado sin afectar el común' },
      { icon: TrendingUp, text: 'Mayor valor de venta e inmueble EV Ready' },
    ],
    callout: 'Los conjuntos que planifican hoy evitan obras correctivas costosas mañana.',
  },
  {
    id: 'comercios',
    label: 'Comercios',
    shortLabel: 'Comercios',
    icon: BriefcaseBusiness,
    image: imgCommercial,
    title: 'El cargador\ntambién vende',
    tag: 'Retail · Plazas',
    kpis: [
      { value: '+25%',    label: 'Más tráfico',   color: '#28D7F7' },
      { value: '+60 min', label: 'Permanencia',   color: '#28D7F7' },
      { value: '~51%',    label: 'Ingreso para ti', color: '#22C55E' },
    ],
    benefits: [
      { icon: Clock,      text: 'Clientes que cargan permanecen 60+ minutos' },
      { icon: CreditCard, text: 'Revenue share mensual sin inversión inicial' },
      { icon: BarChart3,  text: 'Reportes de sesiones, kWh e ingresos' },
      { icon: TrendingUp, text: 'Ticket promedio hasta 30 % mayor' },
    ],
    callout: 'Tu parqueadero genera tráfico de calidad, permanencia e ingresos pasivos.',
  },
  {
    id: 'hoteles',
    label: 'Hoteles',
    shortLabel: 'Hoteles',
    icon: Hotel,
    image: imgHotels,
    title: 'Experiencia premium\nque se reserva',
    tag: 'Hotelería',
    kpis: [
      { value: '+32%',    label: 'Prob. de elección', color: '#28D7F7' },
      { value: '62%',     label: 'Huéspedes lo exigen', color: '#28D7F7' },
      { value: '0%',      label: 'Inversión hotel',  color: '#22C55E' },
    ],
    benefits: [
      { icon: Star,       text: 'Zona VIP con acceso controlado y valet' },
      { icon: CreditCard, text: 'Cobro automático al folio del huésped' },
      { icon: Users,      text: 'Mayor fidelización y recomendación' },
      { icon: Leaf,       text: 'Reportes ESG de emisiones evitadas' },
    ],
    callout: 'La carga EV es el nuevo amenity premium que los viajeros de negocio ya esperan.',
  },
  {
    id: 'flotas',
    label: 'Flotas',
    shortLabel: 'Flotas',
    icon: Truck,
    image: imgBus,
    title: 'La rentabilidad\nse carga en la noche',
    tag: 'Corporativas · Last-mile',
    kpis: [
      { value: '−23%',    label: 'Costo energía',  color: '#22C55E' },
      { value: '−30%',    label: 'Pico demanda',   color: '#22C55E' },
      { value: '24/7',    label: 'Monitoreo',      color: '#28D7F7' },
    ],
    benefits: [
      { icon: TrendingDown, text: 'Carga nocturna en tarifa valle' },
      { icon: Gauge,        text: 'Balanceo inteligente entre vehículos' },
      { icon: Settings2,    text: 'Integración API con tu plataforma de flota' },
      { icon: BarChart3,    text: 'Trazabilidad por vehículo, turno y conductor' },
    ],
    callout: 'El error más caro en flotas no es el cargador — es cargar todo al mismo tiempo.',
  },
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 56 : -56, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -56 : 56, opacity: 0, scale: 0.98 }),
}

function PersonaTabsSection() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const p = profiles[active]
  const Icon = p.icon

  const go = useCallback((d) => {
    const next = active + d
    if (next < 0 || next >= profiles.length) return
    setDir(d)
    setActive(next)
  }, [active])

  const goTo = useCallback((i) => {
    setDir(i > active ? 1 : -1)
    setActive(i)
  }, [active])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  return (
    <section id="personas" className="section pq-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Para quién es</span>
          <h2 className="section-title">
            Tu perfil. Tu solución.{' '}
            <span className="gradient-text">Tu resultado.</span>
          </h2>
          <p className="section-subtitle">
            Cinco escenarios reales con un mismo enfoque — ingeniería, plataforma y operación en un solo contrato.
          </p>
        </motion.div>

        {/* ── STAGE ─────────────────────────────────────────── */}
        <motion.div
          className="pq-stage"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {/* Background image — crossfades independently */}
          <AnimatePresence mode="sync">
            <motion.img
              key={p.id + '-bg'}
              src={p.image}
              alt=""
              aria-hidden="true"
              className="pq-stage-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="pq-stage-overlay" />

          {/* Prev / Next */}
          <button
            className="pq-stage-arrow pq-stage-arrow--prev"
            onClick={() => go(-1)}
            disabled={active === 0}
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="pq-stage-arrow pq-stage-arrow--next"
            onClick={() => go(1)}
            disabled={active === profiles.length - 1}
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>

          {/* Animated content */}
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={p.id}
              className="pq-stage-content"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.32, 0, 0.32, 1] }}
            >
              {/* Tag */}
              <span className="pq-tag">
                <Icon size={12} />
                {p.tag}
              </span>

              {/* Title */}
              <h3 className="pq-title">
                {p.title.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
              </h3>

              {/* KPIs */}
              <div className="pq-kpis">
                {p.kpis.map((k) => (
                  <div className="pq-kpi" key={k.label}>
                    <span className="pq-kpi-val" style={{ color: k.color }}>{k.value}</span>
                    <span className="pq-kpi-lbl">{k.label}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <ul className="pq-benefits">
                {p.benefits.map(({ icon: BIcon, text }) => (
                  <li key={text}>
                    <BIcon size={14} strokeWidth={1.8} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              {/* Callout */}
              <div className="pq-callout">
                <Lightbulb size={13} />
                <p>{p.callout}</p>
              </div>

              {/* Counter */}
              <span className="pq-stage-counter">{active + 1} / {profiles.length}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── POWER RAIL NAV ────────────────────────────────── */}
        <div className="pq-rail">
          {/* Progress bar */}
          <div className="pq-rail-track">
            <motion.div
              className="pq-rail-fill"
              animate={{ width: `${((active + 1) / profiles.length) * 100}%` }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            />
          </div>

          {/* Step buttons */}
          <div className="pq-rail-steps">
            {profiles.map((pr, i) => {
              const StepIcon = pr.icon
              return (
                <button
                  key={pr.id}
                  className={`pq-rail-step${i === active ? ' pq-rail-step--active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  <div className="pq-rail-dot" />
                  <StepIcon size={13} strokeWidth={1.6} className="pq-rail-icon" />
                  <span className="pq-rail-name">{pr.label}</span>
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default PersonaTabsSection
