import type { FutureArea } from './types'

/*
 * Líneas de trabajo.
 * - Las divisiones actuales se obtienen del sector de cada empresa (`content/projects.ts`).
 * - Las áreas previstas son de mediano y largo plazo y todavía no tienen
 *   empresas definidas. No añadas empresas ficticias para completarlas.
 */

export const futureAreas: FutureArea[] = [
  { name: 'Tecnología y consultoría', icon: 'Code' },
  { name: 'Restaurantes', icon: 'UtensilsCrossed' },
  { name: 'Bienes raíces', icon: 'Building2' },
  { name: 'Educación', icon: 'GraduationCap' },
  { name: 'Salud', icon: 'HeartPulse' },
  { name: 'Fundación de ayuda social', icon: 'HandHeart' },
]

export const futureAreasNote = 'Áreas previstas a mediano y largo plazo. Todavía no tienen empresas definidas; la fundación de ayuda social es una intención futura y aún no existe.'
