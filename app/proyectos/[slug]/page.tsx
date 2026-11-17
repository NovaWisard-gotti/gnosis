import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarClock, Check } from 'lucide-react'
import { WhatsAppButton } from '@/components/contact/whatsapp-button'
import { PageFrame } from '@/components/layout/page-frame'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import { BrandHero, BrandIdentity, galleryId } from '@/components/projects/project-brand'
import { ProjectVisual } from '@/components/projects/project-card'
import { ProjectGallery } from '@/components/projects/project-gallery'
import { getProjectTheme } from '@/components/projects/project-theme'
import { ContactCta, Notice, ProvisionalTag } from '@/components/sections/common'
import { PageHero } from '@/components/sections/page-hero'
import { FactList } from '@/components/sections/purpose'
import { SectionHeading } from '@/components/sections/section-heading'
import { projectPage } from '@/content/pages'
import { getProject, projects } from '@/content/projects'
import { pageMetadata } from '@/lib/seo'
import { cn } from '@/lib/utils'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: projectPage.notFound }
  // Imagen social: el logo de GNOSIS (las imágenes de las empresas son propuestas o referencias y
  // perderían su aclaración al compartirse).
  return pageMetadata({ title: project.name, description: project.summary, path: `/proyectos/${project.slug}` })
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { brand, references, inquiry } = project
  const theme = getProjectTheme(brand?.theme)

  return (
    <PageFrame>
      <div className={theme.page}>
        {brand ? (
          <BrandHero project={project} />
        ) : (
          <PageHero
            intro={{ eyebrow: project.sector, title: project.name, description: project.summary }}
            breadcrumbs={[{ label: projectPage.breadcrumb, href: '/proyectos' }, { label: project.name }]}
          >
            {inquiry && <WhatsAppButton variant="sand" label={inquiry.label} message={inquiry.message} className="mt-8 w-full sm:w-auto" />}
          </PageHero>
        )}

        {/* Presentación (con los datos al costado) y propósito. En móvil, los datos van entre ambos. */}
        <section className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-16">
          <div className="lg:col-span-7">
            <SectionTitle className={theme.title}>{projectPage.presentation}</SectionTitle>
            <Reveal delay={0.1}>
              <Notice className="mt-6">{project.statusNote}</Notice>
            </Reveal>
            {project.details && (
              <Reveal className="mt-10">
                <h3 className={cn('font-serif text-2xl font-semibold', theme.title)}>{project.details.title}</h3>
                <CheckList items={project.details.items} className="mt-5" />
              </Reveal>
            )}
          </div>
          <Reveal as="aside" delay={0.15} className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            {/* Con identidad propia la imagen ya está en la portada; las referencias de terceros no se usan como imagen de la empresa. */}
            {!brand && !references && <ProjectVisual project={project} className="aspect-[16/10] rounded-2xl border border-salvia-200" priority sizes="(max-width: 1024px) 100vw, 40vw" />}
            <FactList facts={[...project.facts, { label: projectPage.stage, value: project.status }]} />
          </Reveal>
          <div className="lg:col-span-7">
            <SectionTitle className={theme.title}>{projectPage.purpose}</SectionTitle>
            <Reveal as="p" delay={0.1} className={cn('mt-6 font-serif text-2xl leading-snug font-semibold sm:text-3xl', theme.title)}>{project.objective}</Reveal>
            {project.goals && <CheckList items={project.goals} className="mt-8" />}
          </div>
        </section>

        {brand && (
          <>
            <BrandIdentity identity={brand.identity} />
            <section id={galleryId} className="scroll-mt-24">
              <div className="container-site py-16 sm:py-20">
                <SectionHeading eyebrow={brand.gallery.eyebrow} title={brand.gallery.title} description={brand.gallery.description} tone={theme.heading} />
                <Reveal delay={0.1}>
                  <Notice className="mt-6 max-w-2xl">{brand.gallery.note}</Notice>
                </Reveal>
                <div className="mt-10">
                  <ProjectGallery items={brand.gallery.items} label={brand.gallery.label} tone={brand.theme} />
                </div>
              </div>
            </section>
          </>
        )}

        {project.timeline && (
          <section className={theme.band}>
            <div className="container-site py-16 sm:py-20">
              <div className="flex flex-wrap items-end gap-3">
                <SectionHeading eyebrow={projectPage.timeline} title={project.timeline.title} tone={theme.heading} />
                <ProvisionalTag label={projectPage.provisional} className="mb-2" />
              </div>
              <ol className="mt-10 grid gap-4 sm:grid-cols-2">
                {project.timeline.items.map((item, i) => (
                  <Reveal as="li" key={item.date} delay={stagger(i, 2)} className={cn('group flex gap-4 rounded-2xl border p-6 transition-[translate,box-shadow] duration-300 lit:-translate-y-0.5 lit:shadow-lg', theme.card)}>
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-militar text-marfil transition-transform duration-300 group-lit:scale-110">
                      <CalendarClock className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className={cn('font-serif text-xl font-semibold', theme.title)}>{item.date}</p>
                      <p className={cn('mt-1', theme.text)}>{item.label}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <p className="mt-6 text-sm font-semibold text-militar-700">{project.timeline.note}</p>
            </div>
          </section>
        )}

        {project.parties && (
          <section className={theme.band}>
            <div className="container-site py-16 sm:py-20">
              <div className="flex flex-wrap items-end gap-3">
                <SectionHeading eyebrow={project.parties.title} title={projectPage.collaboration} tone={theme.heading} />
                <ProvisionalTag label={projectPage.provisional} className="mb-2" />
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {project.parties.items.map((party, i) => (
                  <Reveal as="article" key={party.name} delay={stagger(i, 2)} className={cn('rounded-2xl border p-7 transition-[translate,box-shadow] duration-300 lit:-translate-y-0.5 lit:shadow-lg', theme.card)}>
                    <h3 className={cn('font-serif text-2xl font-semibold', theme.title)}>{party.name}</h3>
                    <CheckList items={party.contributions} className="mt-4" />
                  </Reveal>
                ))}
              </div>
              {project.parties.note && <p className="mt-6 text-sm font-semibold text-militar-700">{project.parties.note}</p>}
            </div>
          </section>
        )}

        <section className={cn('on-dark text-marfil', theme.dark)}>
          <div className="container-site py-16 sm:py-20">
            <SectionHeading eyebrow={projectPage.socialEyebrow} title={projectPage.social} tone="light" />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.socialContribution.items.map((item, i) => (
                <Reveal as="li" key={item} delay={stagger(i, 2)} className="rounded-2xl border border-marfil/15 bg-marfil/5 p-6 leading-7 text-marfil/90 transition-colors duration-300 lit:border-marfil/30 lit:bg-marfil/10">{item}</Reveal>
              ))}
            </ul>
            <p className="mt-6 text-sm text-salvia-200">{project.socialContribution.note}</p>
          </div>
        </section>

        {references && (
          <section>
            <div className="container-site pt-16 sm:pt-20">
              <SectionHeading eyebrow={references.eyebrow} title={references.title} description={references.description} tone={theme.heading} />
              <Reveal delay={0.1}>
                <Notice className="mt-6 max-w-3xl">{references.note}</Notice>
              </Reveal>
              <div className="mt-10">
                <ProjectGallery items={references.items} label={references.label} tone={brand?.theme ?? 'gnosis'} />
              </div>
            </div>
          </section>
        )}

        <div className="container-site pt-12">
          <Link href="/proyectos" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-militar underline-offset-4 hover:underline">
            <ArrowLeft className="size-4 transition-transform duration-300 group-lit:-translate-x-1" aria-hidden="true" /> {projectPage.back}
          </Link>
        </div>

        {inquiry ? <ContactCta title={projectPage.contact.title} description={projectPage.contact.description} inquiry={inquiry} /> : <ContactCta />}
      </div>
    </PageFrame>
  )
}

/** Título de apartado con un acento dorado discreto. */
function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal>
      <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-arena" />
      <h2 className={cn('mt-4 font-serif text-3xl leading-tight font-semibold sm:text-4xl', className)}>{children}</h2>
    </Reveal>
  )
}

function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {items.map((item, i) => (
        <Reveal as="li" key={item} delay={0.05 + i * 0.05} className="flex gap-3 leading-7 text-tinta">
          <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-salvia-200 text-militar">
            <Check className="size-3.5" aria-hidden="true" />
          </span>
          {item}
        </Reveal>
      ))}
    </ul>
  )
}
