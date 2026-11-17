import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/icon'
import { Spotlight } from '@/components/motion/interactive'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import { catalog } from '@/content/pages'
import type { Project } from '@/content/types'
import { cn } from '@/lib/utils'

/** Imagen de la empresa o, si aún no hay imagen, un panel con el icono del sector. */
export function ProjectVisual({ project, className, priority, sizes }: { project: Project; className?: string; priority?: boolean; sizes?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-salvia-100', className)}>
      {project.image ? (
        <>
          <Image src={project.image.src} alt={project.image.alt} fill priority={priority} className="object-cover transition-transform duration-700 ease-out-soft group-lit:scale-[1.05]" style={{ objectPosition: project.image.position }} sizes={sizes} />
          {project.image.label && <ImageLabel label={project.image.label} className="absolute bottom-3 left-3 z-[2]" />}
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span aria-hidden="true" className="absolute -bottom-10 -right-6 text-salvia-200"><Icon name={project.icon} className="size-48" strokeWidth={1} /></span>
          <span className="relative inline-flex size-20 items-center justify-center rounded-2xl bg-marfil-50 text-militar shadow-sm">
            <Icon name={project.icon} className="size-9" />
          </span>
          <span className="absolute bottom-3 left-4 text-xs text-pizarra">Imagen pendiente</span>
        </div>
      )}
    </div>
  )
}

/** Etiqueta sobre una imagen, p. ej. «Propuesta conceptual». */
export function ImageLabel({ label, className }: { label: string; className?: string }) {
  return <span className={cn('inline-flex items-center rounded-full bg-marfil-50/95 px-3 py-1 text-xs font-semibold text-militar-700 shadow-sm', className)}>{label}</span>
}

/**
 * Tarjeta resumida de una empresa (sin etapa: se indica solo en su página). Toda la tarjeta enlaza a su página.
 * El realce (`lit:`) es el mismo con puntero y con foco de teclado; en táctil, la tarjeta responde al toque.
 * `index` escalona su aparición en la cuadrícula.
 */
export function ProjectCard({ project, headingLevel: Heading = 'h3', index = 0 }: { project: Project; headingLevel?: 'h2' | 'h3'; index?: number }) {
  return (
    <Reveal
      as="article"
      delay={stagger(index, 2)}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-salvia-200 bg-marfil-50 p-2 transition-[translate,scale,box-shadow,border-color] duration-500 ease-out-soft active:scale-[0.99] lit:-translate-y-1.5 lit:border-arena-300 lit:shadow-2xl lit:shadow-bosque/10 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-militar"
    >
      <Spotlight />
      <div className="relative overflow-hidden rounded-[1.1rem]">
        <ProjectVisual project={project} className="aspect-[4/3] sm:aspect-[16/10]" sizes="(max-width: 768px) 100vw, 50vw" />
        {/* Velo que se aclara al interactuar, para dar profundidad a la imagen. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-bosque/30 via-transparent to-transparent transition-opacity duration-500 group-lit:opacity-40" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-bosque/85 py-1.5 pr-3 pl-2 text-xs font-semibold text-marfil backdrop-blur-sm">
          <Icon name={project.icon} className="size-3.5 text-arena" />
          {project.sector}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-4 pt-6 pb-4 sm:px-5">
        <Heading className="font-serif text-2xl leading-tight font-semibold text-bosque sm:text-[1.75rem]">
          <Link href={`/proyectos/${project.slug}`} className="after:absolute after:inset-0 after:z-[3] focus-visible:outline-none">
            {project.name}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 leading-7 text-pizarra">{project.summary}</p>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-salvia-200 pt-4" aria-hidden="true">
          <span className="text-sm font-semibold text-militar">{catalog.cardLink}</span>
          <span className="inline-flex size-11 items-center justify-center overflow-hidden rounded-full border border-militar/25 text-militar transition-colors duration-300 group-lit:border-militar group-lit:bg-militar group-lit:text-marfil">
            <ArrowRight className="size-4 transition-transform duration-500 ease-out-soft group-lit:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Reveal>
  )
}
