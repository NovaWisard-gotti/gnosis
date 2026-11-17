import type { TeamRole } from './types'

/*
 * Equipo por cargos. Lo usan la página Equipo y el resumen del inicio.
 * No se publican información contractual, remuneraciones ni vínculos laborales.
 *
 * Fotografías (public/imagenes/equipo/): los originales `.JPG` no se modifican.
 * El sitio usa derivados `.webp` de 720×900 (4:5), recortados de cabeza a cintura con sharp.
 * Para añadir una foto: genera el derivado 4:5 y define `image` en el cargo; sin `image`
 * se muestra el avatar neutro con `icon`. `name` solo cuando el nombre esté confirmado.
 */

export const team: TeamRole[] = [
  {
    id: 'titular',
    role: 'Titular y Gerente General',
    description: 'Orienta el crecimiento de GNOSIS y promueve iniciativas alineadas con su propósito.',
    icon: 'Briefcase',
    image: { src: '/imagenes/equipo/gerente-general.webp', alt: 'Titular y Gerente General de GNOSIS' },
  },
  {
    id: 'administracion',
    role: 'Administrador General',
    description: 'Coordina el trabajo de la organización y acompaña el desarrollo de sus empresas.',
    icon: 'ClipboardList',
    responsibilities: ['Responsable de Cafetería Genoveva.'],
    projects: ['cafeteria-genoveva'],
  },
  {
    id: 'tecnologia',
    role: 'Responsable de Tecnología',
    description: 'Impulsa las soluciones tecnológicas que apoyan el funcionamiento y desarrollo de GNOSIS.',
    icon: 'Code',
    image: { src: '/imagenes/equipo/responsable-tecnologia.webp', alt: 'Responsable de Tecnología de GNOSIS' },
  },
  {
    id: 'contabilidad',
    role: 'Contador',
    description: 'Contribuye al orden financiero y contable de la organización.',
    icon: 'Calculator',
  },
  {
    id: 'asistencia',
    role: 'Asistente de Administración',
    description: 'Apoya la organización de las actividades y la coordinación diaria del equipo.',
    icon: 'UserRound',
  },
]
