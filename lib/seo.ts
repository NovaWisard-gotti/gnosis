import type { Metadata } from 'next'
import { brand } from '@/content/media'
import { seo } from '@/content/seo'

/** Imagen compartida por Open Graph y Twitter (logo oficial). */
export const ogImage = { url: brand.og.src, width: brand.og.width, height: brand.og.height, alt: seo.ogImageAlt }

/**
 * Metadatos de una página: título, descripción, URL canónica, Open Graph y Twitter coherentes entre sí.
 * `path` es la ruta pública ("/", "/nosotros"…); `metadataBase` (layout) la convierte en URL absoluta.
 * Next combina los objetos `openGraph`/`twitter` del layout y de la página de forma superficial, por eso
 * cada página los define completos aquí.
 */
export function pageMetadata({ title, description, path, absoluteTitle = false }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${seo.brandName}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: seo.brandName, locale: seo.locale, url: path, title: fullTitle, description, images: [ogImage] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [ogImage] },
  }
}
