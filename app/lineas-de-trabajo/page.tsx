import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Icon } from '@/components/icon'
import { PageFrame } from '@/components/layout/page-frame'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import { ContactCta, Notice } from '@/components/sections/common'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/sections/section-heading'
import { pages, sections } from '@/content/pages'
import { projectSectors, projects } from '@/content/projects'
import { seo } from '@/content/seo'
import { futureAreas, futureAreasNote } from '@/content/work-lines'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ ...seo.pages.lineas, path: '/lineas-de-trabajo' })

export default function LineasPage() {
  const text = sections.lineas
  return (
    <PageFrame>
      <PageHero intro={pages.lineas} />

      <section className="container-site py-20 sm:py-24">
        <SectionHeading eyebrow={text.current.eyebrow} title={text.current.title} description={text.current.description} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projectSectors.map((sector, i) => {
            const related = projects.filter(project => project.sector === sector)
            return (
              <Reveal as="article" key={sector} delay={stagger(i, 2)} className="group flex flex-col rounded-2xl border border-salvia-200 bg-marfil-50 p-7 transition-[translate,box-shadow,border-color] duration-300 lit:-translate-y-1 lit:border-arena-300 lit:shadow-xl lit:shadow-bosque/10 sm:p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-militar text-marfil transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-105">
                  <Icon name={related[0].icon} className="size-6" />
                </span>
                <p className="eyebrow mt-6 text-salvia-700">{text.division}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-bosque sm:text-3xl">{sector}</h3>
                <ul className="mt-6 flex flex-col border-t border-salvia-200 pt-4">
                  {related.map(project => {
                    const responsible = project.facts.find(fact => fact.label === text.responsible)
                    return (
                      <li key={project.slug}>
                        <Link href={`/proyectos/${project.slug}`} className="group/link flex min-h-11 items-center justify-between gap-3 py-1 font-semibold text-militar hover:text-bosque">
                          <span>{project.name}</span>
                          <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5" aria-hidden="true" />
                        </Link>
                        {responsible && <p className="text-sm text-pizarra">{responsible.label}: {responsible.value}</p>}
                      </li>
                    )
                  })}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="border-t border-salvia-200 bg-marfil-50">
        <div className="container-site py-20 sm:py-24">
          <SectionHeading eyebrow={text.future.eyebrow} title={text.future.title} description={text.future.description} />
          <Reveal delay={0.1}>
            <Notice className="mt-8">{futureAreasNote}</Notice>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {futureAreas.map((area, i) => (
              <Reveal as="li" key={area.name} delay={stagger(i)} className="group flex items-center gap-4 rounded-2xl border border-dashed border-input bg-marfil p-5 transition-[translate,border-color] duration-300 lit:-translate-y-0.5 lit:border-arena">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-salvia-200 text-militar transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-105">
                  <Icon name={area.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-bosque">{area.name}</h3>
                  <p className="text-sm text-pizarra">{text.noCompanies}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </PageFrame>
  )
}
