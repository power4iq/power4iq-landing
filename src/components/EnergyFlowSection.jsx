import { motion } from 'framer-motion'
import { Building2, Cpu, BatteryCharging, Coins, ArrowRight } from 'lucide-react'

const flowNodes = [
  {
    id: 'space',
    icon: Building2,
    title: 'Tu espacio',
    sub: 'Parqueadero, comercio, hotel o flota.',
    tag: 'Aporte del anfitrión',
  },
  {
    id: 'p4iq',
    icon: Cpu,
    title: 'Power4IQ',
    sub: 'Instala, opera, optimiza y reporta.',
    tag: 'Plataforma + operación',
  },
  {
    id: 'charging',
    icon: BatteryCharging,
    title: 'Carga eléctrica',
    sub: 'Para conductores y flotas EV.',
    tag: 'Servicio activo 24/7',
  },
  {
    id: 'revenue',
    icon: Coins,
    title: 'Ingreso compartido',
    sub: '~51% para ti · ~49% Power4IQ.',
    tag: 'Liquidación mensual',
  },
]

function EnergyFlowSection() {
  return (
    <section id="flow" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Recorrido del valor</span>
          <h2 className="section-title">
            Cada kilovatio. <span className="gradient-text">Cada peso. Cada decisión.</span>
          </h2>
          <p className="section-subtitle">
            Del espacio que aportas, al ingreso que recibes — sin operación manual ni inversión
            inicial.
          </p>
        </div>

        <div className="flow-stage">
          <svg
            className="flow-paths"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(110,123,255,0.55)" />
                <stop offset="50%" stopColor="rgba(40,215,248,0.85)" />
                <stop offset="100%" stopColor="rgba(110,123,255,0.55)" />
              </linearGradient>
            </defs>
            <line
              x1="6%"
              y1="30"
              x2="94%"
              y2="30"
              stroke="url(#flowGrad)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              className="flow-line"
            />
            <circle r="4" fill="#28D7F8" className="flow-dot flow-dot-1">
              <animate
                attributeName="cx"
                values="6%;94%"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate attributeName="cy" values="30" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#B6FF52" className="flow-dot flow-dot-2">
              <animate
                attributeName="cx"
                values="6%;94%"
                dur="5s"
                begin="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur="5s"
                begin="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values="30"
                dur="5s"
                begin="2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          <div className="flow-nodes">
            {flowNodes.map((n, i) => {
              const Icon = n.icon
              return (
                <motion.div
                  key={n.id}
                  className="flow-node"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.14 }}
                >
                  <span className="flow-tag">{n.tag}</span>
                  <div className="flow-circle">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>
                  <h4>{n.title}</h4>
                  <p>{n.sub}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="flow-summary glass"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="fs-stat host">
            <span className="fs-num">~51%</span>
            <span className="fs-lab">Para el anfitrión</span>
            <span className="fs-sub">Participación neta por sesión</span>
          </div>
          <div className="fs-divider" aria-hidden="true" />
          <div className="fs-stat p4iq">
            <span className="fs-num">~49%</span>
            <span className="fs-lab">Para Power4IQ</span>
            <span className="fs-sub">Tecnología, operación y soporte</span>
          </div>
          <div className="fs-divider" aria-hidden="true" />
          <div className="fs-stat zero">
            <span className="fs-num">0%</span>
            <span className="fs-lab">Inversión inicial</span>
            <span className="fs-sub">Llave en mano para tu ubicación</span>
          </div>

          <a href="#final-cta" className="btn btn-primary fs-cta">
            Estimar mi reparto
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EnergyFlowSection
