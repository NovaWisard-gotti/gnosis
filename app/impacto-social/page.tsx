import type { Metadata } from 'next'
import { Icon } from '@/components/icon'
import { PageFrame } from '@/components/layout/page-frame'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import { ContactCta, Notice, TextLink } from '@/components/sections/common'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/sections/section-heading'
import { pages, sections } from '@/content/pages'
import { projects } from '@/content/projects'
import { seo } from '@/content/seo'
import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ ...seo.pages.impacto, path: '/impacto-social' })

export default function ImpactoPage() {
  const text = sections.impacto
  return (
    <PageFrame>
      <PageHero intro={pages.impacto} />

      <section className="container-site py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <SectionHeading
            eyebrow={text.purpose.eyebrow}
            title={text.purpose.title}
            description={text.purpose.description}
            className="lg:col-span-7"
          />
          <Reveal as="blockquote" delay={0.15} className="rounded-2xl border-l-4 border-arena bg-salvia-100 p-6 font-serif text-xl leading-relaxed text-bosque lg:col-span-5">
            {site.purpose}
            <span className="mt-4 block font-sans text-base leading-7 text-pizarra">{site.purposeDetail}</span>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-salvia-200 bg-marfil-50">
        <div className="container-site py-20 sm:py-24">
          <SectionHeading eyebrow={text.byCompany.eyebrow} title={text.byCompany.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal as="article" key={project.slug} delay={stagger(i, 2)} className="flex flex-col rounded-2xl border border-salvia-200 bg-marfil p-7 transition-[translate,box-shadow,border-color] duration-300 lit:-translate-y-1 lit:border-arena-300 lit:shadow-xl lit:shadow-bosque/10 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-militar text-marfil">
                    <Icon name={project.icon} className="size-5" />
                  </span>
                  <p className="eyebrow text-salvia-700">{project.sector}</p>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-bosque sm:text-3xl">{project.name}</h3>
                <ul className="mt-5 flex flex-1 flex-col gap-2 leading-7 text-pizarra">
                  {project.socialContribution.items.map(item => (
                    <li key={item} className="flex gap-2.5"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-cobre" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-salvia-100 p-4 text-sm leading-6 text-pizarra">{project.socialContribution.note}</p>
                <TextLink href={`/proyectos/${project.slug}`} className="mt-6 self-start">{text.link}</TextLink>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Notice className="mt-8">{text.foundation}</Notice>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </PageFrame>
  )
}
