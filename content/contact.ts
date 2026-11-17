import type { IconName } from './types'

/*
 * Contacto público de GNOSIS. Es el ÚNICO lugar donde se configura: lo usan el
 * encabezado, el inicio, la página Contacto y el pie de página.
 *
 * Solo se muestran los canales con `href` definido. Para habilitar correo o
 * redes, completa `href` y `value`; mientras estén vacíos no aparecen.
 */

export type ContactChannel = { id: string; label: string; value: string; href: string; icon: IconName; external: boolean }

export const whatsapp = {
  /** Número en formato legible. */
  display: '+51 986 259 038',
  /** Enlace oficial de WhatsApp (solo dígitos, con código de país). */
  href: 'https://wa.me/51986259038',
  /** Texto de los botones de contacto. */
  ctaLabel: 'Escríbenos por WhatsApp',
}

/** Enlace de WhatsApp con un mensaje inicial opcional. */
export function whatsappLink(message?: string) {
  return message ? `${whatsapp.href}?text=${encodeURIComponent(message)}` : whatsapp.href
}

const allChannels: ContactChannel[] = [
  { id: 'whatsapp', label: 'WhatsApp', value: whatsapp.display, href: whatsapp.href, icon: 'MessageCircle', external: true },
  // Pendientes: completa `href` y `value` cuando estén disponibles.
  { id: 'email', label: 'Correo electrónico', value: '', href: '', icon: 'Mail', external: false },
  { id: 'linkedin', label: 'LinkedIn', value: '', href: '', icon: 'Globe', external: true },
  { id: 'instagram', label: 'Instagram', value: '', href: '', icon: 'AtSign', external: true },
]

/** Canales habilitados (con enlace). */
export const contactChannels = allChannels.filter(channel => channel.href)
