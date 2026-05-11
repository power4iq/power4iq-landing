import { useEffect } from 'react'
import { X } from 'lucide-react'

function PrivacyPolicyModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Política de privacidad">
      <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal-header">
          <h2>Política de Privacidad</h2>
          <button className="legal-modal-close" onClick={onClose} aria-label="Cerrar"><X size={20} /></button>
        </div>
        <div className="legal-modal-body">
          <p className="legal-updated">Última actualización: mayo 2026</p>

          <h3>1. Responsable del tratamiento</h3>
          <p>Power4IQ Charge, con correo <a href="mailto:hola@power4iq.com">hola@power4iq.com</a>, es el responsable del tratamiento de los datos personales recolectados a través de este sitio web, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.</p>

          <h3>2. Datos que recolectamos</h3>
          <ul>
            <li><strong>Formulario de contacto:</strong> nombre, correo electrónico, teléfono, tipo de proyecto y mensaje.</li>
            <li><strong>Cookies analíticas:</strong> datos de navegación anónimos a través de Google Analytics (solo si das tu consentimiento explícito).</li>
          </ul>

          <h3>3. Finalidad del tratamiento</h3>
          <p>Usamos tus datos para:</p>
          <ul>
            <li>Responder solicitudes comerciales y técnicas.</li>
            <li>Enviar propuestas o información relacionada con nuestros servicios.</li>
            <li>Mejorar el sitio web mediante análisis de uso (con consentimiento).</li>
          </ul>

          <h3>4. Compartición de datos</h3>
          <p>No vendemos ni cedemos tus datos a terceros. Únicamente los compartimos con proveedores de servicios estrictamente necesarios (plataforma de correo, análisis web), quienes están obligados a tratarlos de forma confidencial.</p>

          <h3>5. Derechos del titular</h3>
          <p>Tienes derecho a conocer, actualizar, rectificar y suprimir tus datos, así como a revocar tu consentimiento en cualquier momento. Ejerce estos derechos escribiendo a <a href="mailto:hola@power4iq.com">hola@power4iq.com</a>.</p>

          <h3>6. Conservación</h3>
          <p>Los datos se conservan durante el tiempo necesario para cumplir la finalidad para la que fueron recolectados, y posteriormente se eliminan o anonimizán.</p>

          <h3>7. Seguridad</h3>
          <p>Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o divulgación.</p>

          <h3>8. Cookies</h3>
          <p>Este sitio usa cookies analíticas de Google Analytics únicamente con tu consentimiento previo. Puedes retirar ese consentimiento en cualquier momento borrando los datos del sitio en tu navegador.</p>

          <h3>9. Contacto</h3>
          <p>Para cualquier consulta sobre privacidad: <a href="mailto:hola@power4iq.com">hola@power4iq.com</a> · +57 300 859 2217</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyModal
