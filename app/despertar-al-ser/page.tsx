import type { Metadata } from 'next'
import { ArrowDown } from 'lucide-react'
import { DespertarMethod, DespertarProgress } from '@/components/despertar/despertar-sections'
import { ProgramContact } from '@/components/despertar/program-contact'
import { ProgramJump, ProgramList } from '@/components/despertar/program-list'
import { ProgramSelectionProvider } from '@/components/despertar/program-selection'
import { PageFrame } from '@/components/layout/page-frame'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/sections/section-heading'
import { Button } from '@/components/ui/button'
import { despertar } from '@/content/despertar'
import { seo } from '@/content/seo'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ ...seo.pages.despertar, path: '/despertar-al-ser' })

export default function DespertarPage() {
  const { hero, programs } = despertar
  return (
    <PageFrame>
      <PageHero intro={hero} lead={hero.tagline} breadcrumbs={[{ label: despertar.name }]}>
        <Button asChild variant="sand" size="pill" className="mt-8 h-12 w-full sm:w-auto">
          <a href={hero.cta.href}>
            {hero.cta.label}
            <ArrowDown data-icon="inline-end" />
          </a>
        </Button>
        <p className="mt-8 max-w-2xl border-l-2 border-arena/60 pl-4 leading-7 text-salvia-200">{hero.about}</p>
      </PageHero>

      {/* El programa elegido (al abrirlo o al llegar con #slug) se recuerda en el contacto final. */}
      <ProgramSelectionProvider>
        <section id="programas" className="container-site scroll-mt-20 py-20 sm:py-24">
          <SectionHeading eyebrow={programs.eyebrow} title={programs.title} description={programs.description} className="max-w-3xl" />
          <ProgramJump className="mt-8" />
          <div className="mt-10">
            <ProgramList />
          </div>
        </section>

        <DespertarMethod />
        <DespertarProgress />
        <ProgramContact id="solicitar" />
      </ProgramSelectionProvider>
    </PageFrame>
  )
}
