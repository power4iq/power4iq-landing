import { useEffect } from 'react'
import { X } from 'lucide-react'

function TermsModal({ onClose }) {
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
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Términos y condiciones">
      <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal-header">
          <h2>Términos y Condiciones</h2>
          <button className="legal-modal-close" onClick={onClose} aria-label="Cerrar"><X size={20} /></button>
        </div>
        <div className="legal-modal-body">
          <p className="legal-updated">Última actualización: mayo 2026</p>

          <h3>1. Aceptación</h3>
          <p>Al acceder y usar este sitio web aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.</p>

          <h3>2. Servicios</h3>
          <p>Power4IQ Charge ofrece servicios de diagnóstico, diseño, instalación, certificación y operación de infraestructura de carga para vehículos eléctricos en Colombia. Los detalles, alcances y precios de cada servicio se definen en propuestas y contratos individuales.</p>

          <h3>3. Uso del sitio</h3>
          <p>Este sitio es exclusivamente informativo y comercial. Está prohibido:</p>
          <ul>
            <li>Usar el sitio para actividades ilegales o fraudulentas.</li>
            <li>Intentar acceder a sistemas o datos no autorizados.</li>
            <li>Reproducir o distribuir el contenido sin autorización escrita.</li>
          </ul>

          <h3>4. Propiedad intelectual</h3>
          <p>Todo el contenido de este sitio (textos, imágenes, marca, código) es propiedad de Power4IQ Charge o sus licenciantes y está protegido por las leyes de propiedad intelectual colombianas.</p>

          <h3>5. Formulario de contacto</h3>
          <p>Al enviar el formulario de contacto autorizas a Power4IQ Charge a responder tu consulta y a contactarte con información relacionada con el servicio solicitado, de acuerdo con nuestra Política de Privacidad.</p>

          <h3>6. Limitación de responsabilidad</h3>
          <p>Power4IQ Charge no se responsabiliza por daños derivados del uso o la imposibilidad de uso de este sitio, incluyendo pérdida de datos o interrupciones de servicio causadas por factores fuera de nuestro control.</p>

          <h3>7. Modificaciones</h3>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios se publican en esta página con la fecha de actualización.</p>

          <h3>8. Ley aplicable</h3>
          <p>Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia se someterá a los tribunales competentes de Bogotá D.C.</p>

          <h3>9. Contacto</h3>
          <p><a href="mailto:hola@power4iq.com">hola@power4iq.com</a> · +57 300 859 2217 · Bogotá, Colombia</p>
        </div>
      </div>
    </div>
  )
}

export default TermsModal
