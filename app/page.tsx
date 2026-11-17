import type { Metadata } from 'next'
import { HomeAbout, HomeHero, HomeImpactAndTeam, HomeProjects, HomePurpose, HomeWorkLines } from '@/components/home/home-sections'
import { PageFrame } from '@/components/layout/page-frame'
import { ContactCta } from '@/components/sections/common'
import { seo } from '@/content/seo'
import { pageMetadata } from '@/lib/seo'
import { homeStructuredData, toJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({ ...seo.home, path: '/', absoluteTitle: true })

export default function Page() {
  return (
    <PageFrame>
      {/* Datos estructurados de la organización y el sitio (solo en el inicio, para no duplicarlos). */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(homeStructuredData) }} />
      <HomeHero />
      <HomePurpose />
      <HomeAbout />
      <HomeWorkLines />
      <HomeProjects />
      <HomeImpactAndTeam />
      <ContactCta />
    </PageFrame>
  )
}
