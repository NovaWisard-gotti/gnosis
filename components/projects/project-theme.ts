import type { ProjectTheme } from '@/content/types'

/** Clases de las superficies de la página de un proyecto. */
export type ThemeClasses = {
  /** Fondo general de la página. */
  page: string
  /** Banda secundaria (cronograma, alianza). */
  band: string
  /** Tarjetas sobre la banda secundaria. */
  card: string
  /** Banda oscura (impacto social). */
  dark: string
  /** Tono de `SectionHeading` sobre fondos claros. */
  heading: 'dark' | 'warm'
  title: string
  text: string
}

/** Identidad GNOSIS: la usan los proyectos sin paleta propia. */
export const gnosisTheme: ThemeClasses = {
  page: '',
  band: 'bg-salvia-100',
  card: 'border-salvia-200 bg-marfil-50',
  dark: 'bg-bosque',
  heading: 'dark',
  title: 'text-bosque',
  text: 'text-pizarra',
}

/** Paletas propias de proyectos (tokens en `app/globals.css`). Detalles en verde oliva para enlazar con GNOSIS. */
const projectThemes: Record<ProjectTheme, ThemeClasses> = {
  genoveva: {
    page: 'bg-crema',
    band: 'bg-madera-200/60',
    card: 'border-madera-200 bg-crema-50',
    dark: 'bg-cafe',
    heading: 'warm',
    title: 'text-cafe',
    text: 'text-cafe-700',
  },
}

export function getProjectTheme(theme?: ProjectTheme) {
  return theme ? projectThemes[theme] : gnosisTheme
}
