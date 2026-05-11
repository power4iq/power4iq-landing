import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight, Sparkles, RefreshCw } from 'lucide-react'

const milestones = [
  {
    cargadores: 20,
    mensual: '$2.4M COP',
    anual: '$28.8M COP',
    mes: 'Mes 6',
    width: 20,
    highlight: false,
  },
  {
    cargadores: 50,
    mensual: '$6M COP',
    anual: '$72M COP',
    mes: 'Mes 12',
    width: 50,
    highlight: false,
  },
  {
    cargadores: 100,
    mensual: '$12M COP',
    anual: '$144M COP',
    mes: 'Mes 18',
    width: 80,
    highlight: true,
  },
  {
    cargadores: 200,
    mensual: '$24M COP',
    anual: '$288M COP',
    mes: 'Mes 24',
    width: 100,
    highlight: false,
  },
]

const planes = [
  {
    name: 'Básico',
    price: '$80.000',
    unit: '/mes por cargador',
    margin: '60–70%',
    features: ['Reporte mensual', 'Soporte remoto básico', 'Dashboard de estado'],
  },
  {
    name: 'Estándar',
    price: '$120.000',
    unit: '/mes por cargador',
    margin: '62–72%',
    features: ['Gestión de usuarios', 'Reportes y alertas', 'Soporte técnico', 'Load management'],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$180.000',
    unit: '/mes por cargador',
    margin: '58–68%',
    features: [
      'Gestión de tarifas avanzada',
      'Mantenimiento incluido',
      'Reportes avanzados',
      'Soporte prioritario 24/7',
    ],
  },
]

function ChargeManagementSection() {
  return (
    <section id="charge-management" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">
            <RefreshCw size={12} />
            Ingresos recurrentes
          </span>
          <h2 className="section-title">
            El motor que no para. <span className="gradient-text">Cada mes. Sin instalar más.</span>
          </h2>
          <p className="section-subtitle">
            Charge Management convierte cada cargador en una fuente de ingreso mensual recurrente con
            márgenes del 62–72%. Sin inversión adicional por parte de Power4IQ.
          </p>
        </div>

        {/* Key insight callout */}
        <motion.div
          className="cm-insight glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="cm-insight-icon">
            <Sparkles size={22} />
          </div>
          <div>
            <p className="cm-insight-headline">
              100 cargadores bajo gestión generan{' '}
              <strong>$12.000.000 COP/mes</strong> de ingresos recurrentes
            </p>
            <p className="cm-insight-sub">
              Margen estimado 62–72% · sin instalar un cargador adicional ese mes
            </p>
          </div>
          <div className="cm-insight-stat">
            <span className="cm-big-num">$12M</span>
            <span className="cm-big-label">COP / mes</span>
          </div>
        </motion.div>

        {/* Growth milestones */}
        <div className="cm-milestones">
          <h3 className="cm-milestones-title">
            <TrendingUp size={18} />
            Proyección de ingresos — Charge Management Estándar ($120K/cargador/mes)
          </h3>

          <div className="cm-milestone-list">
            {milestones.map((m, i) => (
              <motion.div
                key={m.cargadores}
                className={`cm-milestone${m.highlight ? ' cm-milestone--highlight' : ''}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <div className="cm-milestone-meta">
                  <span className="cm-milestone-month">{m.mes}</span>
                  <span className="cm-milestone-n">
                    <strong>{m.cargadores}</strong> cargadores
                  </span>
                </div>

                <div className="cm-bar-wrap">
                  <motion.div
                    className="cm-bar"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${m.width}%` }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.12 + 0.2 }}
                  />
                </div>

                <div className="cm-milestone-income">
                  <span className="cm-income-monthly">{m.mensual}</span>
                  <span className="cm-income-annual">{m.anual}/año</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="cm-planes">
          {planes.map((plan, i) => (
            <motion.article
              key={plan.name}
              className={`cm-plan glass${plan.highlight ? ' cm-plan--highlight' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              {plan.highlight && <span className="cm-plan-badge">Recomendado</span>}
              <h4 className="cm-plan-name">Charge Management {plan.name}</h4>
              <div className="cm-plan-price">
                <span className="cm-plan-amount">{plan.price}</span>
                <span className="cm-plan-unit">{plan.unit}</span>
              </div>
              <span className="cm-plan-margin">Margen {plan.margin}</span>

              <ul className="cm-plan-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="cm-check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#final-cta" className={`btn btn-sm${plan.highlight ? ' btn-primary' : ' btn-ghost'}`}>
                Activar {plan.name}
                <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChargeManagementSection
