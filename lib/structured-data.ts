import { company } from '@/content/company'
import { whatsapp } from '@/content/contact'
import { brand } from '@/content/media'
import { seo } from '@/content/seo'
import { site } from '@/content/site'

/*
 * Datos estructurados (JSON-LD, Schema.org) del inicio: la organización y el sitio web.
 * Solo datos reales de content/: sin dirección física, reseñas, valoraciones ni redes sociales
 * (aún no hay perfiles oficiales; cuando existan, añádelos en `sameAs`).
 */

const organizationId = `${seo.siteUrl}/#organization`
const websiteId = `${seo.siteUrl}/#website`

/** «Septiembre de 2026» (content/company.ts) → «2026-09» (ISO 8601). */
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
function isoMonth(text: string | undefined) {
  const match = text?.toLowerCase().match(/^(\w+) de (\d{4})$/)
  const month = match ? months.indexOf(match[1]) + 1 : 0
  return match && month ? `${match[2]}-${String(month).padStart(2, '0')}` : undefined
}
const founded = isoMonth(company.facts.find(fact => fact.label === 'Constitución')?.value)

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: seo.brandName,
      alternateName: site.name,
      legalName: site.legalName,
      url: seo.siteUrl,
      logo: { '@type': 'ImageObject', url: `${seo.siteUrl}${brand.full.src}`, width: brand.full.width, height: brand.full.height },
      image: `${seo.siteUrl}${brand.og.src}`,
      description: site.description,
      slogan: site.tagline,
      ...(founded && { foundingDate: founded }),
      // Solo ciudad y país (site.location): no hay dirección física publicada.
      address: { '@type': 'PostalAddress', addressLocality: 'Ayacucho', addressCountry: 'PE' },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: `+${whatsapp.href.replace(/\D/g, '')}`,
        url: whatsapp.href,
        availableLanguage: 'es',
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: seo.siteUrl,
      name: seo.brandName,
      alternateName: site.name,
      inLanguage: seo.language,
      publisher: { '@id': organizationId },
    },
  ],
}

/** JSON listo para `<script type="application/ld+json">`, con `<` escapado (evita cerrar la etiqueta). */
export const toJsonLd = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c')
