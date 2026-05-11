import { useState } from 'react'

const WA_URL = 'https://wa.me/573008592217?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Power4IQ'

function WhatsAppFAB() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: '#25D366',
        borderRadius: '50px',
        padding: hovered ? '14px 20px 14px 16px' : '14px',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        textDecoration: 'none',
        transition: 'padding 0.25s ease, box-shadow 0.25s ease',
        overflow: 'hidden',
        maxWidth: hovered ? '220px' : '52px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="white"
        style={{ flexShrink: 0 }}
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.031 7.797L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.29-4.997 1.19 1.254-4.87-.316-.5A13.266 13.266 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.875c-.398-.199-2.356-1.162-2.72-1.295-.365-.133-.63-.199-.896.199-.265.398-1.029 1.295-1.261 1.561-.232.265-.465.299-.863.1-.398-.2-1.682-.62-3.204-1.977-1.184-1.057-1.983-2.363-2.215-2.761-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.896-2.161-1.228-2.96-.323-.777-.651-.672-.896-.684l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.362-1.394 3.322s1.428 3.854 1.627 4.12c.199.265 2.81 4.29 6.808 6.018.951.41 1.694.655 2.272.839.954.304 1.823.261 2.51.158.766-.114 2.356-.963 2.688-1.894.332-.93.332-1.728.232-1.894-.099-.166-.365-.265-.763-.464z"/>
      </svg>
      <span
        style={{
          color: 'white',
          fontWeight: 600,
          fontSize: '14px',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        Escríbenos
      </span>
    </a>
  )
}

export default WhatsAppFAB
