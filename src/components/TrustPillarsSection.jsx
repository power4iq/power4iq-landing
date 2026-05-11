import { motion } from 'framer-motion'
import { Wrench, BrainCircuit, ShieldCheck, Leaf, CircleCheck } from 'lucide-react'
import bkgWhy from '../assets/bkg-why.png'

const pillars = [
  {
    id: 'operators',
    num: '01',
    icon: Wrench,
    tag: 'Modelo operativo',
    title: 'Somos operadores,\nno vendedores de cajas',
    body: 'La mayoría vende el cargador y desaparece. Power4IQ diseña, instala, certifica, opera y mantiene la red — con un solo contrato y responsabilidad total de principio a fin.',
    proofs: [
      'Un interlocutor para todo el ciclo',
      'Mantenimiento preventivo incluido',
      'Garantía operativa, no solo de producto',
      'SLA documentado por instalación',
    ],
    accent: '#28D7F7',
    grad: 'linear-gradient(160deg, rgba(40,215,247,0.10) 0%, rgba(40,215,247,0.02) 100%)',
    border: 'rgba(40,215,247,0.22)',
    glow: 'rgba(40,215,247,0.18)',
  },
  {
    id: 'platform',
    num: '02',
    icon: BrainCircuit,
    tag: 'Tecnología propia',
    title: 'Plataforma inteligente\nhecha en Colombia',
    body: 'No revendemos software extranjero. Power4IQ es nuestro propio sistema de gestión: monitoreo en tiempo real, cobro automático, balanceo de carga con IA y reportes ESG — todo desde una consola.',
    proofs: [
      'Monitoreo en tiempo real · cada segundo',
      'Smart Charging AI · hasta −30 % costo',
      'Facturación y reparto 100 % automático',
      'App para usuarios iOS + Android',
    ],
    accent: '#0077FF',
    grad: 'linear-gradient(160deg, rgba(0,119,255,0.12) 0%, rgba(0,119,255,0.02) 100%)',
    border: 'rgba(0,119,255,0.28)',
    glow: 'rgba(0,119,255,0.20)',
  },
  {
    id: 'sustainability',
    num: '03',
    icon: Leaf,
    tag: 'Sostenibilidad & ESG',
    title: 'Cada carga es un\nimpacto positivo',
    body: 'Cada sesión de carga evita emisiones, genera trazabilidad ambiental y suma a los reportes ESG de tu organización. La infraestructura EV no es solo tecnología — es una declaración de compromiso con el futuro.',
    proofs: [
      '~0.18 kg CO₂ evitados por kWh cargado',
      'Reportes ESG automáticos por sede',
      'Trazabilidad energética sesión a sesión',
      'Compatible con metas de carbono cero',
    ],
    accent: '#22C55E',
    grad: 'linear-gradient(160deg, rgba(34,197,94,0.10) 0%, rgba(34,197,94,0.02) 100%)',
    border: 'rgba(34,197,94,0.22)',
    glow: 'rgba(34,197,94,0.16)',
  },
  {
    id: 'mobility',
    num: '04',
    icon: ShieldCheck,
    tag: 'Movilidad eléctrica',
    title: 'La ola eléctrica\nya llegó a Colombia',
    body: 'Los VE crecen más del 60 % anual en Colombia. Quien instala infraestructura hoy captura la demanda de mañana — y quien espera, paga el doble por ponerse al día. Power4IQ te posiciona antes que tu competencia.',
    proofs: [
      '+60 % crecimiento anual de VE en Colombia',
      'Infraestructura EV Ready desde el primer día',
      'Escalable de 1 a 100+ puntos sin rehacer obra',
      'Compatible con energía solar fotovoltaica',
    ],
    accent: '#7C5CFC',
    grad: 'linear-gradient(160deg, rgba(124,92,252,0.12) 0%, rgba(124,92,252,0.02) 100%)',
    border: 'rgba(124,92,252,0.28)',
    glow: 'rgba(124,92,252,0.20)',
  },
]

function PillarCard({ data, index }) {
  const Icon = data.icon
  return (
    <motion.article
      className="tp-card"
      style={{
        '--tp-accent': data.accent,
        '--tp-grad': data.grad,
        '--tp-border': data.border,
        '--tp-glow': data.glow,
      }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
    >
      <span className="tp-num" aria-hidden="true">{data.num}</span>

      <div className="tp-header">
        <span className="tp-tag">{data.tag}</span>
        <div className="tp-icon">
          <Icon size={22} strokeWidth={1.6} />
        </div>
      </div>

      <h3 className="tp-title">
        {data.title.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </h3>

      <p className="tp-body">{data.body}</p>

      <div className="tp-divider" />

      <ul className="tp-proofs">
        {data.proofs.map((p) => (
          <li key={p}>
            <CircleCheck size={12} />
            {p}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function TrustPillarsSection() {
  return (
    <section id="pilares" className="section tp-section" style={{ backgroundImage: `url(${bkgWhy})` }}>
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Por qué Power4IQ</span>
          <h2 className="section-title">
            Lo que nos hace{' '}
            <span className="gradient-text">diferentes de verdad.</span>
          </h2>
          <p className="section-subtitle">
            No somos un importador con catálogo. Somos el único operador EV en Colombia
            que combina ingeniería certificada, plataforma propia, impacto ambiental real
            y visión de movilidad en un solo contrato.
          </p>
        </motion.div>

        <div className="tp-grid">
          {pillars.map((p, i) => (
            <PillarCard key={p.id} data={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustPillarsSection

