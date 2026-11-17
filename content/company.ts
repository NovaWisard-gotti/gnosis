import { projectSectors } from './projects'
import type { Fact, IconName, Statement, Value } from './types'

// Información institucional de GNOSIS Desarrollo Integral E.I.R.L.

export const company = {
  facts: [
    { label: 'Razón social', value: 'GNOSIS Desarrollo Integral E.I.R.L.' },
    { label: 'Ubicación', value: 'Ayacucho, Perú' },
    { label: 'Constitución', value: 'Septiembre de 2026' },
    { label: 'Divisiones', value: projectSectors.join(' · ') },
  ] satisfies Fact[],

  /** Servicios que GNOSIS comparte con cada una de sus empresas. */
  sharedServices: [
    { name: 'Dirección', icon: 'Briefcase' },
    { name: 'Administración', icon: 'ClipboardList' },
    { name: 'Contabilidad', icon: 'Calculator' },
    { name: 'Soporte tecnológico', icon: 'Laptop' },
  ] satisfies { name: string; icon: IconName }[],

  /** Filosofía institucional: valores definidos por la dirección. */
  values: [
    { name: 'Honestidad', description: 'Actuar con transparencia y coherencia.', icon: 'ShieldCheck' },
    { name: 'Agilidad', description: 'Responder oportunamente y convertir decisiones en acciones.', icon: 'Zap' },
    { name: 'Simplicidad', description: 'Facilitar los procesos y concentrarnos en lo esencial.', icon: 'Feather' },
    { name: 'Apertura de pensamiento', description: 'Escuchar otras perspectivas y aprender de ellas.', icon: 'Lightbulb' },
    { name: 'Seriedad', description: 'Asumir los compromisos con responsabilidad.', icon: 'BadgeCheck' },
    { name: 'Bondad', description: 'Considerar el bienestar de las personas en nuestras decisiones.', icon: 'Heart' },
    { name: 'Altruismo', description: 'Aportar al bienestar de los demás.', icon: 'HandHeart' },
  ] satisfies Value[],

  /** Principio transversal de reciprocidad. `summary` es la versión breve del inicio. */
  ayni: {
    title: 'Ayni, principio transversal',
    summary: 'Reciprocidad y colaboración: lo que cada persona aporta se reconoce y se devuelve.',
    text: 'El ayni es la práctica andina de ayuda mutua que heredamos de nuestras raíces ayacuchanas: hoy aporto a tu trabajo y mañana tú al mío. Lo aplicamos en el equipo y con quienes colaboran en cada empresa, reconociendo y devolviendo el aporte de cada parte.',
  },

  /** Principio de cultura organizacional confirmado. */
  identityPrinciple: {
    title: 'Respeto a la identidad',
    text: 'Reconocemos a cada persona por su nombre y respetamos su identidad. Este principio guía nuestra relación con el equipo, proveedores y clientes.',
  } satisfies Statement,

  // Textos base entregados por la dirección. Si alguno vuelve a quedar pendiente, añade `label`.
  mission: {
    title: 'Misión',
    text: 'Desarrollar empresas sostenibles que articulen el talento, los conocimientos y los recursos de las personas, guiadas por la honestidad, la reciprocidad y el compromiso de aportar al bienestar de la sociedad.',
  } satisfies Statement,
  vision: {
    title: 'Visión',
    text: 'Contribuir, desde Ayacucho hacia el mundo, a una sociedad más solidaria y con mayores oportunidades, mediante empresas sostenibles y la participación de todas las personas que comparten nuestro propósito.',
  } satisfies Statement,
}
