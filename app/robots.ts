import type { MetadataRoute } from 'next'
import { seo } from '@/content/seo'

/*
 * /robots.txt: todo el sitio es público (no hay API ni zonas privadas), así que se permite el rastreo
 * completo, incluidos los recursos de /_next/ que Google necesita para renderizar las páginas.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  }
}
