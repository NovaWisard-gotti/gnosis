// Tipos compartidos por todo el contenido editable del sitio.

/** Nombres de iconos disponibles. Se resuelven en `components/icon.tsx`. */
export type IconName =
  | 'Zap'
  | 'Feather'
  | 'IdCard'
  | 'HandHeart'
  | 'Briefcase'
  | 'ClipboardList'
  | 'Calculator'
  | 'Laptop'
  | 'Code'
  | 'UserRound'
  | 'Coffee'
  | 'Egg'
  | 'UtensilsCrossed'
  | 'Building2'
  | 'GraduationCap'
  | 'HeartPulse'
  | 'MessageCircle'
  | 'Mail'
  | 'Globe'
  | 'AtSign'
  | 'ShieldCheck'
  | 'Lightbulb'
  | 'BadgeCheck'
  | 'Heart'
  | 'Handshake'

/**
 * Imagen del sitio. `provisional: true` marca recursos de referencia que deben
 * sustituirse por fotografías propias antes de publicar.
 */
export type ImageAsset = {
  src: string
  alt: string
  credit?: string
  provisional?: boolean
  /** Encuadre cuando la imagen se recorta para llenar un marco (CSS `object-position`, p. ej. `'50% 12%'`). */
  position?: string
  /** Etiqueta visible sobre la imagen, p. ej. «Propuesta conceptual». */
  label?: string
}

/** Imagen con dimensiones conocidas, para mostrarla completa sin recortes. */
export type SizedImage = ImageAsset & { width: number; height: number }

/** Imagen de galería: `src` a tamaño completo (ampliación) y `thumb` reducido para la cuadrícula. */
export type GalleryImage = SizedImage & { title: string; caption: string; thumb?: string }

/** Sección de galería con ampliación. `label` se muestra sobre cada imagen y en la ampliación. */
export type GallerySection = { eyebrow: string; title: string; description: string; note: string; label?: string; items: GalleryImage[] }

/** Paletas propias disponibles para la página de un proyecto (tokens en `app/globals.css`). */
export type ProjectTheme = 'genoveva'

/** Identidad visual propia de un proyecto: paleta de su página, logo y galería de diseño. */
export type ProjectBrand = {
  theme: ProjectTheme
  identity: { eyebrow: string; title: string; text: string; logo: SizedImage }
  gallery: GallerySection
}

export type NavItem = { label: string; href: string }

/** Textos de cabecera de una página interna. */
export type PageIntro = { eyebrow: string; title: string; description: string }

/**
 * Bloque de texto. `label` muestra una etiqueta discreta, por ejemplo
 * «Propuesta institucional» para textos pendientes de aprobación.
 */
export type Statement = { title: string; text: string; label?: string }

export type Value = { name: string; description: string; icon: IconName }

/** Dato breve en formato etiqueta/valor. `note` aclara si es previsto o provisional. */
export type Fact = { label: string; value: string; note?: string }

/** Área de crecimiento futuro, todavía sin empresas definidas. */
export type FutureArea = { name: string; icon: IconName }

export type ProjectStatus = 'En planificación' | 'En evaluación' | 'En operación'

/** Empresa de GNOSIS (en la web, «Nuestras empresas»; la ruta sigue siendo /proyectos). */
export type Project = {
  slug: string
  name: string
  /** Sector económico: la división de GNOSIS a la que pertenece. Se usa como filtro en el catálogo. */
  sector: string
  /** Etapa documentada. No se muestra en tarjetas; solo como dato en la página de la empresa. */
  status: ProjectStatus
  icon: IconName
  summary: string
  /** Propósito principal del proyecto. */
  objective: string
  /** Objetivos específicos, en el apartado «Propósito y objetivos». */
  goals?: string[]
  /** Aclaración visible sobre lo que todavía no está asegurado. */
  statusNote: string
  facts: Fact[]
  /** Detalles en forma de lista. */
  details?: { title: string; items: string[]; note?: string }
  /** Cronograma tentativo. */
  timeline?: { title: string; items: { date: string; label: string }[]; note: string }
  /** Aportes previstos de cada parte, sin porcentajes. */
  parties?: { title: string; items: { name: string; contributions: string[] }[]; note?: string }
  /** Aporte social esperado. No incluir cifras ni resultados no medidos. */
  socialContribution: { items: string[]; note: string }
  /** Imagen del proyecto (tarjeta y portada). Sin imagen se muestra un panel con el icono del sector. */
  image?: ImageAsset
  /** Identidad visual propia. Activa la portada, el bloque de identidad y la galería de su página. */
  brand?: ProjectBrand
  /**
   * Fotografías de referencia de terceros (no son del proyecto). La `note` debe dejarlo claro.
   * Nunca se usan como `image` del proyecto.
   */
  references?: GallerySection
  /** Botón de consulta por WhatsApp con un mensaje predefinido. */
  inquiry?: { label: string; message: string }
}

/**
 * Fotografía de un integrante. `position` ajusta el encuadre dentro del marco 4:5
 * (valor CSS `object-position`, por ejemplo `'50% 20%'`); por defecto prioriza la parte superior.
 */
export type TeamImage = ImageAsset

/** Cargo del equipo. No se publican datos contractuales, remuneraciones ni vínculos laborales. */
export type TeamRole = {
  id: string
  role: string
  description: string
  /** Icono del avatar neutro cuando no hay fotografía. */
  icon: IconName
  /** Nombre real. Déjalo sin definir hasta contar con nombre confirmado y autorización. */
  name?: string
  /** Fotografía real. Sin ella se muestra el avatar neutro. */
  image?: TeamImage
  /** Responsabilidades públicas confirmadas (por ejemplo, proyectos a cargo). */
  responsibilities?: string[]
  /** Slugs de proyectos relacionados. */
  projects?: string[]
}
