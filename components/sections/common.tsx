import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Info } from 'lucide-react'
import { WhatsAppButton } from '@/components/contact/whatsapp-button'
import { Parallax, Spotlight } from '@/components/motion/interactive'
import { Reveal } from '@/components/motion/reveal'
import { home } from '@/content/pages'
import { cn } from '@/lib/utils'

/** Enlace de texto con flecha, usado para "ver más". */
export function TextLink({ href, children, tone = 'dark', className }: { href: string; children: ReactNode; tone?: 'dark' | 'light'; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:underline',
        tone === 'light' ? 'text-arena-300' : 'text-militar',
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
    </Link>
  )
}

/** Etiqueta para textos aún no confirmados. */
export function ProvisionalTag({ label = 'Provisional', className }: { label?: string; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-full border border-arena-300 bg-arena-100 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-militar-700 uppercase', className)}>
      {label}
    </span>
  )
}

/** Aviso discreto sobre contenido provisional. */
export function Notice({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-start gap-2.5 rounded-xl border border-arena-300/70 bg-arena-100/60 px-4 py-3 text-sm leading-6 text-militar-700', className)}>
      <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

type ContactCtaProps = {
  /** Por defecto, los textos institucionales de `home.contact`. */
  title?: string
  description?: string
  /** Botón de WhatsApp con texto y mensaje propios (p. ej. consulta sobre un proyecto). */
  inquiry?: { label: string; message: string }
  id?: string
}

/** Banda final de contacto por WhatsApp, compartida por el inicio y las páginas internas. */
export function ContactCta({ title = home.contact.title, description = home.contact.description, inquiry, id }: ContactCtaProps) {
  return (
    <section id={id} className="container-site scroll-mt-24 py-16 sm:py-20">
      <Reveal effect="scale" className="on-dark group relative overflow-hidden rounded-3xl bg-militar px-6 py-12 text-marfil sm:px-12 sm:py-14">
        <Parallax distance={-60} className="pointer-events-none absolute -right-20 -top-24">
          <div aria-hidden="true" className="animate-drift size-72 rounded-full bg-arena/20 blur-3xl" />
        </Parallax>
        <Spotlight className="[--spot-color:color-mix(in_oklab,var(--color-arena)_22%,transparent)]" />
        <div className="relative z-[2] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-salvia-200">{description}</p>
          </div>
          <WhatsAppButton variant="sand" label={inquiry?.label} message={inquiry?.message} className="w-full sm:w-auto" />
        </div>
      </Reveal>
    </section>
  )
}
