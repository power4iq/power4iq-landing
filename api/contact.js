import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, type, message } = req.body

  if (!name || !email || !type) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

  try {
    await resend.emails.send({
      from: 'Power4IQ Web <noreply@power4iq.com>',
      to: 'hola@power4iq.com',
      replyTo: email,
      subject: `Contacto Power4IQ — ${type}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0a0e1a;color:#e2e8f0;padding:32px;border-radius:12px;">
          <h2 style="color:#28D7F7;margin-top:0">Nueva solicitud desde power4iq.com</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#a0aec0;width:140px">Nombre</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#a0aec0">Correo</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#28D7F7">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#a0aec0">Teléfono</td><td style="padding:8px 0">${phone || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#a0aec0">Servicio</td><td style="padding:8px 0">${type}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:20px 0"/>
          <p style="color:#a0aec0;margin:0 0 8px">Mensaje:</p>
          <p style="margin:0;white-space:pre-wrap">${message || '—'}</p>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'No se pudo enviar el mensaje' })
  }
}
