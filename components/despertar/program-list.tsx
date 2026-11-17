'use client'

import { useEffect, type ReactNode } from 'react'
import { ChevronDown, Mail } from 'lucide-react'
import { WhatsAppButton } from '@/components/contact/whatsapp-button'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/motion/reveal'
import { mailtoLink, programEmail } from '@/content/contact'
import { despertar, getProgram, programs } from '@/content/despertar'
import type { Program } from '@/content/types'
import { cn } from '@/lib/utils'
import { useProgramSelection } from './program-selection'

const labels = despertar.programs.labels
const detailsId = (slug: string) => `detalle-${slug}`

/** Accesos rápidos a cada programa (anclas `#slug`: la lista abre el programa al llegar). */
export function ProgramJump({ className }: { className?: string }) {
  return (
    <nav aria-label={despertar.programs.jumpLabel} className={className}>
      <ul className="flex flex-wrap gap-2">
        {programs.map(program => (
          <li key={program.slug}>
            <a href={`#${program.slug}`} className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-salvia-200 bg-marfil-50 py-2 pr-4 pl-2 text-sm font-semibold text-bosque transition-colors duration-300 active:bg-salvia-200 lit:border-militar/40 lit:bg-salvia-100">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-militar text-marfil transition-transform duration-300 group-lit:-rotate-6">
                <Icon name={program.icon} className="size-3.5" />
              </span>
              {program.name}
              <span className="font-medium text-salvia-700">{program.badge}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * Los cinco programas, comparables de un vistazo (para quién, qué se trabaja, duración y modalidad)
 * y con su detalle desplegable en la misma página. Usa `<details>`: funciona sin JavaScript y la
 * búsqueda del navegador encuentra el texto aunque esté plegado.
 */
export function ProgramList() {
  const { select } = useProgramSelection()

  // Llegar con `#jovenes` (desde el inicio o los accesos rápidos) abre ese programa y lo elige para el contacto.
  useEffect(() => {
    const openFromHash = () => {
      const program = getProgram(decodeURIComponent(window.location.hash.slice(1)))
      if (!program) return
      const details = document.getElementById(detailsId(program.slug)) as HTMLDetailsElement | null
      if (details) details.open = true
      select(program.slug)
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [select])

  return (
    <ol className="flex flex-col gap-6">
      {programs.map((program, i) => (
        <Reveal as="li" key={program.slug} delay={Math.min(i, 2) * 0.06}>
          <ProgramItem program={program} index={i} onOpen={() => select(program.slug)} />
        </Reveal>
      ))}
    </ol>
  )
}

function ProgramItem({ program, index, onOpen }: { program: Program; index: number; onOpen: () => void }) {
  return (
    <article id={program.slug} aria-labelledby={`${program.slug}-titulo`} className="scroll-mt-24 overflow-hidden rounded-3xl border border-salvia-200 bg-marfil-50 transition-[border-color,box-shadow] duration-300 lit:border-arena-300 lit:shadow-xl lit:shadow-bosque/10">
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
        <header className="lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-militar text-marfil">
              <Icon name={program.icon} className="size-6" />
            </span>
            <span className="font-serif text-2xl font-semibold text-cobre-700 lining-nums" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3 id={`${program.slug}-titulo`} className="mt-4 font-serif text-3xl leading-tight font-semibold text-bosque">{program.name}</h3>
          <p className="mt-2 inline-flex rounded-full bg-arena-100 px-3 py-1 text-xs font-semibold tracking-wide text-militar-700 uppercase">{program.badge}</p>
        </header>

        <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <Fact label={labels.forWhom}>{program.forWhom}</Fact>
          <Fact label={labels.topics}>{program.topics}</Fact>
          <Fact label={labels.duration}>
            <span className="block font-serif text-2xl leading-tight font-semibold text-bosque lining-nums">{program.duration}</span>
            {program.durationNote && <span className="mt-1 block text-sm leading-6 text-pizarra">{program.durationNote}</span>}
          </Fact>
          <Fact label={labels.format}>{program.format}</Fact>
        </dl>
      </div>

      <div className="mx-6 border-t border-salvia-200 py-5 sm:mx-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <p className="eyebrow text-salvia-700 lg:col-span-3 lg:pt-1">{labels.goal}</p>
        <p className="mt-2 font-serif text-xl leading-snug font-semibold text-militar lg:col-span-9 lg:mt-0">{program.goal}</p>
      </div>

      <details id={detailsId(program.slug)} className="program-details group/details border-t border-salvia-200" onToggle={event => event.currentTarget.open && onOpen()}>
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 text-sm font-semibold text-militar transition-colors duration-300 select-none hover:bg-salvia-100 focus-visible:bg-salvia-100 active:bg-salvia-200 sm:px-8 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="group-open/details:hidden">{labels.open}</span>
            <span className="hidden group-open/details:inline">{labels.close}</span>
            <span className="sr-only">: {program.name}</span>
          </span>
          <ChevronDown className="size-5 transition-transform duration-300 group-open/details:rotate-180" aria-hidden="true" />
        </summary>
        <ProgramDetail program={program} />
      </details>
    </article>
  )
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="eyebrow text-salvia-700">{label}</dt>
      <dd className="mt-2 leading-7 text-tinta">{children}</dd>
    </div>
  )
}

function ProgramDetail({ program }: { program: Program }) {
  const { inquiry } = program
  return (
    <div className="grid gap-10 border-t border-salvia-200 bg-marfil px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <p className="font-serif text-2xl leading-snug font-semibold text-bosque">{program.lead}</p>
        <h4 className="eyebrow mt-8 text-salvia-700">{program.journey.title}</h4>
        <ol className="mt-5 flex flex-col">
          {program.journey.steps.map((step, i) => (
            <li key={step.name} className="relative flex gap-4 pb-6 last:pb-0">
              {/* Hilo que une las etapas. */}
              {i < program.journey.steps.length - 1 && <span aria-hidden="true" className="absolute top-10 bottom-0 left-[1.1875rem] w-px bg-arena-300" />}
              <span className="relative inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-arena-300 bg-marfil-50 text-sm font-semibold text-cobre-700">{i + 1}</span>
              <div className="pt-1.5">
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-serif text-xl font-semibold text-bosque">{step.name}</span>
                  <span className="text-sm font-semibold text-militar">{step.when}</span>
                </p>
                <p className="mt-1 leading-7 text-pizarra">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        {program.journey.note && <p className="mt-6 rounded-xl border-l-4 border-arena bg-salvia-100 px-4 py-3 text-sm leading-6 font-medium text-bosque">{program.journey.note}</p>}
      </div>

      <div className="flex flex-col gap-8 lg:col-span-5">
        <DetailList title={labels.rhythm} items={program.rhythm} />
        <DetailList title={labels.tracking} items={program.tracking} />
        <DetailList title={labels.care} items={program.care} />
        <div className="rounded-2xl border border-salvia-200 bg-marfil-50 p-5">
          {inquiry.audience && <p className="text-sm leading-6 font-semibold text-bosque">{inquiry.audience}</p>}
          <WhatsAppButton label={inquiry.label} message={inquiry.message} className={cn('w-full', inquiry.audience && 'mt-4')} />
          <a href={mailtoLink(programEmail, inquiry.subject, inquiry.message)} className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold text-militar underline-offset-4 hover:underline focus-visible:underline">
            <Mail className="size-4" aria-hidden="true" />
            {labels.email}
            <span className="sr-only">({programEmail})</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="eyebrow text-salvia-700">{title}</h4>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map(item => (
          <li key={item} className="flex gap-2.5 leading-7 text-tinta">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-cobre" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
