import type { Metadata } from 'next'
import { PageFrame } from '@/components/layout/page-frame'
import { Reveal } from '@/components/motion/reveal'
import { ScrollText } from '@/components/motion/text-effects'
import { ContactCta, ProvisionalTag } from '@/components/sections/common'
import { PageHero } from '@/components/sections/page-hero'
import { AyniPrinciple, FactList, IdentityPrinciple, SharedServices, ValuesList } from '@/components/sections/purpose'
import { SectionHeading } from '@/components/sections/section-heading'
import { company } from '@/content/company'
import { pages, sections } from '@/content/pages'
import { seo } from '@/content/seo'
import { site } from '@/content/site'
import type { Statement } from '@/content/types'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ ...seo.pages.nosotros, path: '/nosotros' })

export default function NosotrosPage() {
  const text = sections.nosotros
  return (
    <PageFrame>
      <PageHero intro={pages.nosotros} />

      <section className="container-site grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={text.about.eyebrow} title={text.about.title} />
          <Reveal as="p" delay={0.1} className="mt-6 text-lg leading-8 text-pizarra">{site.description}</Reveal>
          <Reveal as="p" className="mt-8 font-semibold text-bosque">{text.services}</Reveal>
          <SharedServices className="mt-4 lg:grid-cols-2" />
        </div>
        <div className="lg:col-span-5">
          <h2 className="eyebrow text-salvia-700">{text.facts}</h2>
          <FactList facts={company.facts} className="mt-4" />
        </div>
      </section>

      <section className="bg-salvia-100">
        <div className="container-site py-20 sm:py-24">
          <Reveal as="p" className="eyebrow text-salvia-700">{text.purpose}</Reveal>
          <ScrollText text={site.purpose} className="mt-4 max-w-4xl font-serif text-2xl leading-snug font-semibold text-bosque sm:text-3xl lg:text-4xl" />
          <Reveal as="p" className="mt-6 max-w-3xl text-lg leading-8 text-pizarra">{site.purposeDetail}</Reveal>
        </div>
      </section>

      <section id="filosofia" className="container-site scroll-mt-24 py-20 sm:py-24">
        <SectionHeading eyebrow={text.philosophy.eyebrow} title={text.philosophy.title} description={text.philosophy.description} />
        <AyniPrinciple className="mt-10" />
        <ValuesList className="mt-6 lg:grid-cols-4" />
        <IdentityPrinciple className="mt-6" />
      </section>

      <section className="border-t border-salvia-200 bg-marfil-50">
        <div className="container-site py-20 sm:py-24">
          <SectionHeading eyebrow={text.statements.eyebrow} title={text.statements.title} />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <StatementBlock statement={company.mission} />
            <StatementBlock statement={company.vision} delay={0.1} />
          </div>
          <Reveal as="p" className="mt-6 text-sm leading-6 text-pizarra">{text.statements.note}</Reveal>
        </div>
      </section>

      <ContactCta />
    </PageFrame>
  )
}

function StatementBlock({ statement, delay }: { statement: Statement; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="rounded-2xl border border-salvia-200 bg-marfil p-7 transition-[translate,box-shadow,border-color] duration-300 lit:-translate-y-0.5 lit:border-arena-300 lit:shadow-lg lit:shadow-bosque/5 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-serif text-2xl font-semibold text-bosque sm:text-3xl">{statement.title}</h3>
        {statement.label && <ProvisionalTag label={statement.label} />}
      </div>
      <p className="mt-4 leading-8 text-pizarra">{statement.text}</p>
    </Reveal>
  )
}
