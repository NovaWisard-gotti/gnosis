import type { NavItem } from './types'

// Identidad y navegación de GNOSIS. El contacto se configura en `content/contact.ts`.

export const site = {
  name: 'GNOSIS',
  legalName: 'GNOSIS Desarrollo Integral E.I.R.L.',
  location: 'Ayacucho, Perú',
  tagline: 'Desde Ayacucho para el mundo.',
  /** Descripción institucional. Se usa en el inicio, Nosotros y los metadatos. */
  description: 'Somos una empresa nacida en Ayacucho que desarrolla empresas sostenibles en distintas áreas. Nos une un propósito: contribuir a transformar nuestra sociedad mediante la honestidad, la bondad, el altruismo y la fuerza del trabajo colectivo.',
  /** Propósito institucional. */
  purpose: 'Desarrollar empresas sostenibles basadas en la fuerza de la colectividad y el ayni, para contribuir a transformar nuestra sociedad y apoyar a quienes más lo necesitan.',
  /** Texto que acompaña al propósito. */
  purposeDetail: 'Todos tenemos algo para compartir: conocimientos, tiempo, capacidades y recursos. En GNOSIS creemos en el aporte de cada persona para construir bienestar común.',

  // Las rutas /proyectos se conservan para no romper los enlaces publicados.
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Líneas de trabajo', href: '/lineas-de-trabajo' },
    { label: 'Nuestras empresas', href: '/proyectos' },
    { label: 'Equipo', href: '/equipo' },
    { label: 'Impacto', href: '/impacto-social' },
    { label: 'Contacto', href: '/contacto' },
  ] satisfies NavItem[],

  footerNote: 'Desde Ayacucho para el mundo.',
}
