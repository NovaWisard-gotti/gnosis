import type { MetadataRoute } from 'next'
import { projects } from '@/content/projects'
import { seo } from '@/content/seo'
import { site } from '@/content/site'

/*
 * /sitemap.xml: las páginas públicas del menú y la página de cada empresa, con el dominio oficial.
 * Sin `lastModified`: no hay fechas reales de modificación por página y Google descarta las que no
 * son fiables. Sin `changeFrequency` ni `priority`, que Google ignora.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...site.nav.map(item => item.href), ...projects.map(project => `/proyectos/${project.slug}`)]
  // El inicio sin barra final, igual que su URL canónica (Next la genera así a partir de `metadataBase`).
  return [...new Set(paths)].map(path => ({ url: path === '/' ? seo.siteUrl : `${seo.siteUrl}${path}` }))
}
