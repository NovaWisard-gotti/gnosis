import Image from 'next/image'
import { Images } from 'lucide-react'
import { WhatsAppButton } from '@/components/contact/whatsapp-button'
import { Reveal } from '@/components/motion/reveal'
import { SplitWords } from '@/components/motion/entrance'
import { rise } from '@/components/motion/timing'
import { ImageLabel } from '@/components/projects/project-card'
import { Breadcrumbs } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/sections/section-heading'
import { Button } from '@/components/ui/button'
import { projectPage } from '@/content/pages'
import type { Project, ProjectBrand } from '@/content/types'

/** Ancla de la galería, usada por el botón de la portada. */
export const galleryId = 'propuesta-visual'

/** Portada de una empresa con identidad propia: nombre, división, resumen e imagen principal. */
export function BrandHero({ project }: { project: Project }) {
  const { image, inquiry, brand } = project
  return (
    <section className="relative overflow-hidden bg-crema">
      <div aria-hidden="true" className="animate-drift pointer-events-none absolute -top-40 -right-40 size-[30rem] rounded-full bg-madera/15 blur-3xl" />
      <div className="container-site relative pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pb-20">
        <div className="animate-rise">
          <Breadcrumbs tone="warm" crumbs={[{ label: 'Inicio', href: '/' }, { label: projectPage.breadcrumb, href: '/proyectos' }, { label: project.name }]} />
        </div>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="eyebrow animate-rise text-militar" style={rise(40)}>{project.sector}</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] font-semibold text-cafe sm:text-5xl lg:text-6xl">
              <SplitWords text={project.name} delay={40} />
            </h1>
            <p className="animate-rise mt-6 max-w-2xl text-lg leading-8 text-cafe-700" style={rise(140)}>{project.summary}</p>
            <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row" style={rise(200)}>
              {inquiry && <WhatsAppButton label={inquiry.label} message={inquiry.message} className="w-full sm:w-auto" />}
              {brand && (
                <Button asChild variant="outline-brand" size="pill" className="h-12 w-full sm:w-auto">
                  <a href={`#${galleryId}`}>
                    <Images data-icon="inline-start" aria-hidden="true" />
                    Ver propuesta visual
                  </a>
                </Button>
              )}
            </div>
          </div>
          {image && (
            <div className="animate-rise group relative lg:col-span-5" style={rise(160)}>
              <div aria-hidden="true" className="absolute -right-3 -bottom-3 hidden size-full rounded-3xl bg-madera/35 transition-[translate] duration-500 group-lit:translate-x-1 group-lit:translate-y-1 sm:block" />
              {/* En móvil se recorta a 4:3 conservando el mural; desde lg se muestra completa (4:5). */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-madera-200 bg-crema-50 sm:aspect-[16/11] lg:aspect-[4/5]">
                <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover transition-transform duration-1000 ease-out group-lit:scale-[1.03]" style={{ objectPosition: image.position }} />
                {image.label && <ImageLabel label={image.label} className="absolute bottom-4 left-4" />}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/** Bloque de identidad: logo completo, con su proporción y fondo originales. */
export function BrandIdentity({ identity }: { identity: ProjectBrand['identity'] }) {
  const { logo } = identity
  return (
    <section className="on-dark bg-cafe text-crema">
      <div className="container-site grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal effect="scale" className="mx-auto w-full max-w-sm sm:max-w-md lg:order-2">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="(min-width: 640px) 28rem, 90vw" className="h-auto w-full rounded-2xl shadow-2xl shadow-cafe-950/40 ring-1 ring-madera/40" />
        </Reveal>
        <div className="lg:order-1">
          <SectionHeading eyebrow={identity.eyebrow} title={identity.title} description={identity.text} tone="light" />
          <Reveal as="span" effect="fade" delay={0.3} className="mt-8 block h-1 w-16 rounded-full bg-arena" />
        </div>
      </div>
    </section>
  )
}
