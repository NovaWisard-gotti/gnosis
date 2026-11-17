import type { Metadata } from 'next'
import { PageFrame } from '@/components/layout/page-frame'
import { ProjectsExplorer } from '@/components/projects/projects-explorer'
import { ContactCta } from '@/components/sections/common'
import { PageHero } from '@/components/sections/page-hero'
import { pages } from '@/content/pages'
import { seo } from '@/content/seo'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ ...seo.pages.proyectos, path: '/proyectos' })

export default function ProyectosPage() {
  return (
    <PageFrame>
      <PageHero intro={pages.proyectos} />
      <section className="container-site py-16 sm:py-20">
        <ProjectsExplorer />
      </section>
      <ContactCta />
    </PageFrame>
  )
}
