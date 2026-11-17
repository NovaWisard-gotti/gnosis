import type { Project } from './types'

/*
 * Empresas de GNOSIS («Nuestras empresas»). Cada objeto genera su página en /proyectos/[slug]
 * (la ruta se conserva para no romper enlaces publicados). `sector` es la división a la que pertenece.
 * Presenta fechas, esquemas y escalas como previstos mientras no estén confirmados.
 * No incluyas porcentajes, cantidades ni resultados que no estén documentados.
 */

export const projects: Project[] = [
  {
    slug: 'cafeteria-genoveva',
    name: 'Cafetería Genoveva',
    sector: 'Alimentos y bebidas',
    status: 'En planificación',
    icon: 'Coffee',
    // El resumen es también la descripción en buscadores: incluye la etapa para no leerse como cafetería abierta.
    summary: 'Cafetería ayacuchana en planificación, cuya propuesta integra el café cultivado por productores familiares del VRAEM. Su local está previsto en un centro cultural de la ciudad de Ayacucho.',
    objective: 'Abrir en Ayacucho una cafetería que acerque a sus clientes el café de productores familiares del VRAEM.',
    statusNote: 'Genoveva está en planificación: el local aún no está asegurado y la cafetería todavía no atiende al público.',
    facts: [
      { label: 'División', value: 'Alimentos y bebidas' },
      { label: 'Ubicación prevista', value: 'Local de un centro cultural, ciudad de Ayacucho' },
      { label: 'Financiamiento', value: 'Aporte del Titular' },
      { label: 'Responsable', value: 'Administración General' },
    ],
    details: {
      title: 'Propuesta de Genoveva',
      items: [
        'Acceso al local previsto mediante convocatoria de alquiler.',
        'Atención en horario de cena durante la etapa inicial.',
        'Oferta con café cultivado por productores familiares del VRAEM.',
      ],
    },
    timeline: {
      title: 'Cronograma tentativo',
      items: [
        { date: 'Febrero de 2027', label: 'Ingreso al local' },
        { date: '30 de marzo de 2027', label: 'Inicio de operaciones' },
      ],
      note: 'Fechas previstas y sujetas a confirmación.',
    },
    socialContribution: {
      items: ['Vinculación comercial con productores familiares del VRAEM.', 'Oportunidades de empleo.'],
      note: 'Aporte social esperado. Publicaremos resultados cuando existan y estén documentados.',
    },
    // Imágenes en public/imagenes/proyectos/genoveva/: los .png son los originales entregados;
    // el sitio usa derivados .webp (tamaño completo y -640 para miniaturas), sin recortes.
    image: {
      src: '/imagenes/proyectos/genoveva/interior.webp',
      alt: 'Propuesta de diseño interior de Cafetería Genoveva: mural de madera con el logo sobre la barra de café y mesas de madera',
      position: '50% 10%',
      label: 'Propuesta conceptual',
    },
    inquiry: { label: 'Consultar sobre Genoveva', message: 'Hola, quisiera información sobre Cafetería Genoveva.' },
    brand: {
      theme: 'genoveva',
      identity: {
        eyebrow: 'Identidad',
        title: 'Logo de Genoveva',
        text: 'Logo oficial de Genoveva. La ilustración grabada sobre madera y la tipografía con serifas expresan café artesanal, tradición y calidez.',
        logo: { src: '/imagenes/proyectos/genoveva/logo-genoveva.webp', alt: 'Logo de Cafetería Genoveva: retrato ilustrado de una mujer con sombrero sobre fondo de madera, con el nombre Genoveva y la palabra Cafetería', width: 1254, height: 1254 },
      },
      gallery: {
        eyebrow: 'Diseño',
        title: 'Propuesta visual de Genoveva',
        description: 'Composiciones referenciales que orientan el ambiente y las aplicaciones de la marca.',
        note: 'Imágenes conceptuales de diseño. No son fotografías de un local en funcionamiento ni de productos a la venta.',
        label: 'Propuesta conceptual',
        items: [
          {
            src: '/imagenes/proyectos/genoveva/interior.webp',
            thumb: '/imagenes/proyectos/genoveva/interior-640.webp',
            width: 1122,
            height: 1402,
            alt: 'Propuesta de interior: mural de madera con el logo de Genoveva sobre una barra de café, plantas y mesas de madera',
            title: 'Diseño interior',
            caption: 'Muestra cómo la marca podría aplicarse en el ambiente: mural de madera, barra y mobiliario cálido.',
          },
          {
            src: '/imagenes/proyectos/genoveva/presentacion.webp',
            thumb: '/imagenes/proyectos/genoveva/presentacion-640.webp',
            width: 1122,
            height: 1402,
            alt: 'Letrero de madera con el logo de Genoveva junto a granos de café y una taza humeante',
            title: 'Presentación de marca',
            caption: 'Reúne el letrero y el café para transmitir el carácter artesanal de la marca.',
          },
          {
            src: '/imagenes/proyectos/genoveva/productos-marca.webp',
            thumb: '/imagenes/proyectos/genoveva/productos-marca-640.webp',
            width: 1122,
            height: 1402,
            alt: 'Vaso, taza, bolsa de tela, empaques y servilleta con el logo de Genoveva',
            title: 'Aplicaciones de marca',
            caption: 'Propuesta de vasos, tazas, bolsas y empaques; ilustra el uso del logo, no productos confirmados.',
          },
          {
            src: '/imagenes/proyectos/genoveva/concepto.webp',
            thumb: '/imagenes/proyectos/genoveva/concepto-640.webp',
            width: 1122,
            height: 1402,
            alt: 'Composición con un retrato ilustrativo, el logo de Genoveva y una taza de café entre granos y hojas de café',
            title: 'Concepto visual',
            caption: 'Combina un retrato ilustrativo, la marca y el café para expresar tradición y calidez.',
          },
        ],
      },
    },
  },
  {
    slug: 'granja-acosvinchos',
    name: 'Granja de Gallinas Ponedoras – Acosvinchos',
    sector: 'Producción avícola',
    status: 'En evaluación',
    icon: 'Egg',
    // También es la descripción en buscadores: la etapa evita que se lea como granja en producción.
    summary: 'Granja de gallinas ponedoras en evaluación, planteada para producir y distribuir huevos en colaboración con un productor local de Acosvinchos, Huamanga, Ayacucho.',
    objective: 'Producir y distribuir huevos en colaboración con un productor local.',
    goals: [
      'Asegurar un abastecimiento propio de huevos para su distribución comercial.',
      'Iniciar con una inversión inicial reducida.',
      'Trabajar junto a un productor de Acosvinchos que aporte su terreno, galpón y experiencia de crianza.',
    ],
    statusNote: 'La granja está en evaluación: el modelo de colaboración y la escala inicial son proyecciones y pueden cambiar. La granja todavía no está en producción.',
    facts: [
      { label: 'División', value: 'Producción avícola' },
      { label: 'Ubicación prevista', value: 'Acosvinchos, Huamanga, Ayacucho' },
      { label: 'Modalidad', value: 'Colaboración con un productor local' },
      { label: 'Escala inicial', value: '500 gallinas ponedoras', note: 'Proyección' },
    ],
    parties: {
      title: 'Aportes previstos de cada parte',
      items: [
        { name: 'GNOSIS', contributions: ['Aporta las gallinas ponedoras y el alimento.', 'Compra la producción y gestiona su distribución.'] },
        { name: 'Productor local', contributions: ['Aporta el terreno, el galpón y el trabajo de crianza.', 'Recibe un pago por cada huevo producido.'] },
      ],
      note: 'Modelo previsto, sujeto a evaluación. No se asignan porcentajes de participación.',
    },
    socialContribution: {
      items: ['Generar oportunidades de colaboración e ingresos para un productor local.', 'Fortalecer el abastecimiento regional de huevos.'],
      note: 'Aporte social esperado. Publicaremos resultados cuando existan y estén documentados.',
    },
    // Fotos de terceros (granja en Pichari), solo como referencia: no son `image` del proyecto.
    // Originales .jpeg en public/imagenes/proyectos/acosvinchos/; miniaturas -640.webp.
    references: {
      eyebrow: 'Referencias',
      title: 'Referencias para la planificación',
      description: 'Una granja que tomamos como modelo para planificar la infraestructura y la organización del espacio.',
      note: 'Fotografías de una granja ubicada en Pichari, utilizada como referencia para la planificación. Estas instalaciones no pertenecen a GNOSIS ni corresponden a la granja de Acosvinchos.',
      label: 'Referencia',
      items: [
        {
          src: '/imagenes/proyectos/acosvinchos/referencia-galpon-pichari.jpeg',
          thumb: '/imagenes/proyectos/acosvinchos/referencia-galpon-pichari-640.webp',
          width: 1600,
          height: 1200,
          alt: 'Galpón de una granja en Pichari: techo de calamina, cerramiento de malla sobre un muro bajo y comederos rojos en el interior',
          title: 'Referencia de infraestructura en Pichari',
          caption: 'Galpón de la granja de referencia, útil para planificar la infraestructura.',
        },
        {
          src: '/imagenes/proyectos/acosvinchos/referencia-crianza-pichari.jpeg',
          thumb: '/imagenes/proyectos/acosvinchos/referencia-crianza-pichari-640.webp',
          width: 1200,
          height: 1600,
          alt: 'Espacio de crianza bajo techo de plástico: cerco circular con pollitos sobre viruta, comederos amarillos y bebederos',
          title: 'Referencia de distribución del espacio y equipos',
          caption: 'Área de crianza de la misma granja, útil para organizar el espacio y los equipos.',
        },
      ],
    },
    inquiry: { label: 'Consultar sobre la granja', message: 'Hola, quisiera información sobre la granja de Acosvinchos.' },
  },
]

/** Slugs de las empresas que aparecen en el inicio (en este orden). */
export const featuredProjectSlugs = ['cafeteria-genoveva', 'granja-acosvinchos']

/** Divisiones actuales (sector de cada empresa), sin repetir. */
export const projectSectors = [...new Set(projects.map(project => project.sector))]

export function getProject(slug: string) {
  return projects.find(project => project.slug === slug)
}
