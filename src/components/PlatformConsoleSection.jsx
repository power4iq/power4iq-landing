import { motion } from 'framer-motion'
import { Activity, Zap, TrendingUp, ShieldCheck, Globe, BrainCircuit } from 'lucide-react'
import appPlatformImg from '../assets/app-platform.png'

const features = [
  {
    icon: Activity,
    label: 'Monitoreo en vivo',
    desc: 'Sesiones activas, energía consumida y estado de cada cargador — actualizado cada segundo sin recargar.',
    stat: 'Tiempo real',
  },
  {
    icon: TrendingUp,
    label: 'Ingresos automáticos',
    desc: 'Cobro por kWh, reparto de ganancias y reportes contables generados sin intervención manual.',
    stat: '100 % automático',
  },
  {
    icon: BrainCircuit,
    label: 'Smart Charging AI',
    desc: 'Balance de carga inteligente que reduce el pico de demanda y optimiza el costo energético del edificio.',
    stat: 'Hasta −30 % costo',
  },
  {
    icon: Globe,
    label: 'Multi-sede',
    desc: 'Gestiona 1 o 100 ubicaciones desde una sola consola. Roles, permisos y reportes por sede.',
    stat: 'Escalable',
  },
  {
    icon: ShieldCheck,
    label: '99.6 % uptime',
    desc: 'Red siempre operativa con alertas proactivas, diagnóstico remoto y soporte técnico 24/7.',
    stat: 'SLA garantizado',
  },
  {
    icon: Zap,
    label: 'App para conductores',
    desc: 'Tus usuarios encuentran, reservan y pagan desde el celular. Historial, facturas y soporte integrado.',
    stat: 'iOS + Android',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function PlatformConsoleSection() {
  return (
    <section id="platform" className="section platform-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">Plataforma · Smart Energy OS</span>
          <h2 className="section-title">
            Tu negocio energético,{' '}
            <span className="gradient-text">en una sola consola.</span>
          </h2>
          <p className="section-subtitle">
            Cada cargador, cada sesión, cada peso — Power4IQ centraliza la operación
            completa de tu red en una interfaz que trabaja sola las 24 horas.
          </p>
        </motion.div>

        {/* Main layout: image full + features below */}
        <div className="platform-layout">

          {/* Screenshot showcase — full width, no crop */}
          <motion.div
            className="platform-img-wrap"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="platform-glow platform-glow--left"  aria-hidden="true" />
            <div className="platform-glow platform-glow--right" aria-hidden="true" />
            <div className="platform-img-frame">
              <div className="platform-img-bar" aria-hidden="true">
                <span /><span /><span />
              </div>
              <img
                src={appPlatformImg}
                alt="Power4IQ — dashboard de gestión de carga y app móvil"
                className="platform-img"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* Feature grid — 3 col */}
          <motion.div
            className="platform-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map(({ icon: Icon, label, desc, stat }) => (
              <motion.div key={label} className="platform-feat" variants={itemVariants}>
                <div className="platform-feat-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <div className="platform-feat-body">
                  <div className="platform-feat-top">
                    <p className="platform-feat-label">{label}</p>
                    <span className="platform-feat-stat">{stat}</span>
                  </div>
                  <p className="platform-feat-desc">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default PlatformConsoleSection
