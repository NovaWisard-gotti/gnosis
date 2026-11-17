import { projectSectors, projects } from './projects'
import { site } from './site'

/** «a, b y c». */
const listOf = (items: string[]) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} y ${items.at(-1)}` : (items[0] ?? ''))

/*
 * Posicionamiento en buscadores: dominio oficial, títulos y descripciones de cada página.
 * Los textos describen solo lo que la web contiene (sin cifras, plazos ni resultados inventados).
 * Descripciones de ~120–160 caracteres: es lo que Google suele mostrar completo.
 */

export const seo = {
  /** Dominio canónico. gnosis.com.pe (sin www) redirige aquí desde Vercel. */
  siteUrl: 'https://www.gnosis.com.pe',
  /** Idioma y región del contenido (Open Graph usa `es_PE`; HTML y JSON-LD, `es-PE`). */
  locale: 'es_PE',
  language: 'es-PE',
  /** Nombre de marca completo, para la plantilla de títulos y los datos estructurados. */
  brandName: 'GNOSIS Desarrollo Integral',

  /** Inicio: búsquedas de marca (GNOSIS, GNOSIS Ayacucho, razón social) y propuesta. */
  home: {
    title: 'GNOSIS Desarrollo Integral | Empresas sostenibles en Ayacucho, Perú',
    description: `${site.legalName}: empresa nacida en Ayacucho, Perú, que desarrolla empresas sostenibles basadas en la colectividad y el ayni. Desde Ayacucho para el mundo.`,
  },

  /** Páginas internas. El título se completa con la plantilla «… | GNOSIS Desarrollo Integral». */
  pages: {
    nosotros: {
      title: 'Nosotros: propósito, valores y ayni',
      description: 'Conoce a GNOSIS Desarrollo Integral: empresa ayacuchana con propósito social, su misión, visión, siete valores y el ayni como principio de reciprocidad.',
    },
    lineas: {
      title: 'Líneas de trabajo y divisiones',
      description: `Divisiones de GNOSIS en Ayacucho (${projectSectors.map(sector => sector.toLowerCase()).join(', ')}), las empresas que agrupan y las áreas en las que proyectamos crecer.`,
    },
    proyectos: {
      title: 'Nuestras empresas en Ayacucho',
      description: `Empresas de GNOSIS Desarrollo Integral en Ayacucho: ${listOf(projects.map(project => project.name))}. Identidad, propuesta y etapa de cada una.`,
    },
    equipo: {
      title: 'Equipo',
      description: 'Roles que sostienen las empresas de GNOSIS Desarrollo Integral: dirección, administración, contabilidad y soporte tecnológico compartidos desde Ayacucho.',
    },
    impacto: {
      title: 'Impacto social',
      description: 'Cómo GNOSIS aspira a contribuir al bienestar común en Ayacucho: el aporte social que se propone cada empresa, distinguido de resultados aún no documentados.',
    },
    contacto: {
      title: 'Contacto',
      description: `Contacta con ${site.legalName} en Ayacucho, Perú. Atendemos consultas por WhatsApp.`,
    },
  },

  // Páginas de cada empresa: el título es su nombre y la descripción, su resumen (content/projects.ts).

  /** Texto alternativo de la imagen para redes sociales (logo oficial). */
  ogImageAlt: 'Logo de GNOSIS Desarrollo Integral',
}
