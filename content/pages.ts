import type { PageIntro } from './types'

// Textos de cada página: cabeceras, títulos de sección y enlaces.
// Público: «Nuestras empresas». Las rutas siguen siendo /proyectos para conservar los enlaces publicados.

export const home = {
  hero: {
    eyebrow: 'GNOSIS Desarrollo Integral',
    /** Titular. El logo ya muestra el nombre: no repetir «GNOSIS» como título. */
    title: 'Desde Ayacucho para el mundo.',
    primaryCta: { label: 'Conoce nuestras empresas', href: '/proyectos' },
    secondaryCta: { label: 'Conoce GNOSIS', href: '/nosotros' },
  },
  purpose: {
    eyebrow: 'Nuestro propósito',
  },
  model: {
    eyebrow: 'Cómo trabajamos',
    title: 'GNOSIS acompaña a cada empresa',
    description: 'Cada una de nuestras empresas cuenta con la dirección, administración, contabilidad y soporte tecnológico de GNOSIS.',
  },
  about: {
    eyebrow: 'Nuestra filosofía',
    title: 'Valores que guían cada decisión',
    description: 'Siete valores y un principio transversal orientan cómo trabajamos y cómo nos relacionamos.',
    link: { label: 'Conocer nuestra filosofía', href: '/nosotros#filosofia' },
  },
  workLines: {
    eyebrow: 'Líneas de trabajo',
    title: 'Divisiones actuales y áreas previstas',
    current: 'Divisiones actuales',
    future: 'Áreas previstas a mediano y largo plazo',
    link: { label: 'Ver líneas de trabajo', href: '/lineas-de-trabajo' },
  },
  projects: {
    eyebrow: 'Nuestras empresas',
    title: 'Empresas que forman parte de GNOSIS',
    description: 'Iniciativas que impulsamos desde Ayacucho. Cada empresa tiene su propia página con su identidad, su propuesta y su etapa actual.',
    link: { label: 'Ver todas nuestras empresas', href: '/proyectos' },
  },
  impact: {
    eyebrow: 'Impacto social',
    title: 'Bienestar común con el aporte de cada persona',
    description: 'Cada empresa define el aporte social que espera generar. Publicaremos resultados solo cuando existan y estén documentados.',
    link: { label: 'Ver impacto social', href: '/impacto-social' },
  },
  team: {
    eyebrow: 'Equipo',
    title: 'Roles que sostienen nuestras empresas',
    description: 'Cargos que comparten la dirección, administración, contabilidad y soporte tecnológico de cada empresa.',
    link: { label: 'Conocer al equipo', href: '/equipo' },
  },
  contact: {
    title: '¿Quieres conversar con GNOSIS?',
    description: 'Atendemos consultas por WhatsApp.',
  },
}

export const pages = {
  nosotros: {
    eyebrow: 'Nosotros',
    title: 'Una empresa ayacuchana con propósito social',
    description: 'Conoce quiénes somos, nuestro propósito, nuestros valores, el ayni que nos guía y hacia dónde queremos contribuir desde Ayacucho.',
  },
  lineas: {
    eyebrow: 'Líneas de trabajo',
    title: 'Divisiones actuales y áreas previstas',
    description: 'Las divisiones en las que trabajamos hoy, las empresas que forman parte de ellas y las áreas en las que proyectamos crecer.',
  },
  proyectos: {
    eyebrow: 'Nuestras empresas',
    title: 'Empresas de GNOSIS',
    description: 'Empresas que GNOSIS impulsa desde Ayacucho. Cada una conserva su propia identidad y cuenta con nuestra dirección, administración, contabilidad y soporte tecnológico.',
  },
  equipo: {
    eyebrow: 'Equipo',
    title: 'Roles que sostienen nuestras empresas',
    description: 'Los cargos que, desde Ayacucho, sostienen la dirección, administración, contabilidad y soporte tecnológico de nuestras empresas.',
  },
  impacto: {
    eyebrow: 'Impacto social',
    title: 'Bienestar común con el aporte de cada persona',
    description: 'Transformar nuestra sociedad es nuestro propósito y aspiración. Distinguimos el aporte que espera generar cada empresa de los resultados, que publicaremos cuando existan y estén documentados.',
  },
  contacto: {
    eyebrow: 'Contacto',
    title: 'Conversemos',
    description: 'Por ahora atendemos consultas únicamente por WhatsApp.',
  },
} satisfies Record<string, PageIntro>

/** Títulos de las secciones internas de cada página. */
export const sections = {
  nosotros: {
    about: { eyebrow: 'Quiénes somos', title: 'Una empresa nacida en Ayacucho' },
    services: 'Cada una de nuestras empresas cuenta con:',
    facts: 'GNOSIS en breve',
    purpose: 'Propósito',
    philosophy: {
      eyebrow: 'Nuestra filosofía',
      title: 'Valores y cultura',
      description: 'Siete valores, el ayni como principio transversal y el respeto a la identidad de cada persona.',
    },
    statements: {
      eyebrow: 'Hacia dónde vamos',
      title: 'Misión y visión',
      note: 'La transformación social es nuestro propósito y aspiración, no un resultado alcanzado.',
    },
  },
  lineas: {
    current: { eyebrow: 'Hoy', title: 'Divisiones y sus empresas', description: 'Cada división agrupa a las empresas de GNOSIS de un mismo sector.' },
    division: 'División',
    responsible: 'Responsable',
    future: { eyebrow: 'Mediano y largo plazo', title: 'Áreas previstas', description: 'Sectores en los que proyectamos desarrollar nuevas empresas.' },
    noCompanies: 'Sin empresas definidas',
  },
  impacto: {
    purpose: { eyebrow: 'Nuestro propósito', title: 'Lo que esperamos aportar', description: 'Cada empresa define el aporte social que espera generar. Los resultados se publicarán solo cuando existan y estén documentados.' },
    byCompany: { eyebrow: 'Por empresa', title: 'Aporte social esperado' },
    link: 'Ver empresa',
    foundation: 'La fundación de ayuda social es un área prevista a largo plazo; todavía no existe.',
  },
  contacto: {
    text: 'Escríbenos para consultas sobre GNOSIS o nuestras empresas.',
  },
}

/** Catálogo de empresas (/proyectos): filtro, contador y tarjetas. */
export const catalog = {
  allDivisions: 'Todas las divisiones',
  filterLabel: 'Filtrar por división',
  clear: 'Limpiar filtro',
  count: (n: number) => `${n} ${n === 1 ? 'empresa' : 'empresas'}`,
  empty: { title: 'No encontramos empresas', description: 'Prueba con otra división.' },
  cardLink: 'Conocer la empresa',
}

/** Títulos de los apartados de la página de cada empresa (/proyectos/[slug]). */
export const projectPage = {
  presentation: 'Presentación',
  purpose: 'Propósito y objetivos',
  collaboration: 'Modelo de colaboración',
  timeline: 'Cronograma',
  socialEyebrow: 'Impacto social',
  social: 'Aporte social previsto',
  provisional: 'Previsto',
  stage: 'Etapa',
  breadcrumb: 'Nuestras empresas',
  back: 'Todas nuestras empresas',
  notFound: 'Empresa no encontrada',
  contact: {
    title: 'Contacto para consultas',
    description: 'Atendemos consultas sobre esta empresa por WhatsApp.',
  },
}
