import { Icon } from '@/components/icon'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import { company } from '@/content/company'
import type { Fact } from '@/content/types'
import { cn } from '@/lib/utils'

/** Servicios centrales que GNOSIS comparte con cada empresa. */
export function SharedServices({ className }: { className?: string }) {
  return (
    <ul className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {company.sharedServices.map((service, i) => (
        <Reveal as="li" key={service.name} delay={stagger(i, 2)} className="group flex items-center gap-4 rounded-2xl border border-salvia-200 bg-marfil-50 p-5 transition-[translate,border-color,box-shadow] duration-300 lit:-translate-y-0.5 lit:border-arena-300 lit:shadow-lg lit:shadow-bosque/5">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-militar text-marfil transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-105">
            <Icon name={service.icon} className="size-5" />
          </span>
          <span className="font-serif text-xl font-semibold text-bosque">{service.name}</span>
        </Reveal>
      ))}
    </ul>
  )
}

/** Síntesis de los valores para el inicio: solo nombres, sin tarjetas. */
export function ValuesSummary({ className }: { className?: string }) {
  return (
    <ul className={cn('grid grid-cols-1 gap-x-8 sm:grid-cols-2', className)} aria-label="Valores">
      {company.values.map((value, i) => (
        <Reveal as="li" key={value.name} delay={0.05 + i * 0.04} className="group flex min-h-14 items-center gap-3 border-b border-salvia-200 py-2">
          <Icon name={value.icon} className="size-5 shrink-0 text-cobre-700 transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-110" />
          <span className="font-serif text-xl font-semibold text-bosque">{value.name}</span>
        </Reveal>
      ))}
    </ul>
  )
}

/** Ayni: principio transversal de reciprocidad. `compact` muestra la versión breve del inicio. */
export function AyniPrinciple({ compact, className }: { compact?: boolean; className?: string }) {
  const { title, summary, text } = company.ayni
  return (
    <Reveal as="figure" className={cn('flex gap-4 rounded-2xl bg-bosque p-6 text-marfil sm:p-7', className)}>
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-marfil/10 text-arena">
        <Icon name="Handshake" className="size-5" />
      </span>
      <div>
        <figcaption className="eyebrow text-arena">{title}</figcaption>
        <blockquote className={cn('mt-2 leading-relaxed', compact ? 'font-serif text-xl' : 'text-lg leading-8 text-marfil/90')}>{compact ? summary : text}</blockquote>
      </div>
    </Reveal>
  )
}

/** Valores de GNOSIS con su descripción. */
export function ValuesList({ className }: { className?: string }) {
  return (
    <ul className={cn('grid gap-4 sm:grid-cols-2', className)}>
      {company.values.map((value, i) => (
        <Reveal as="li" key={value.name} delay={stagger(i, 2)} className="group flex gap-4 rounded-2xl border border-salvia-200 bg-marfil-50 p-5 transition-[translate,border-color,box-shadow] duration-300 lit:-translate-y-0.5 lit:border-arena-300 lit:shadow-lg lit:shadow-bosque/5">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-salvia-200 text-militar transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-105">
            <Icon name={value.icon} className="size-5" />
          </span>
          <div>
            <h3 className="font-serif text-xl font-semibold text-bosque">{value.name}</h3>
            <p className="mt-1 text-sm leading-6 text-pizarra">{value.description}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}

/** Principio de cultura organizacional: respeto a la identidad. */
export function IdentityPrinciple({ className }: { className?: string }) {
  const { title, text } = company.identityPrinciple
  return (
    <Reveal as="figure" className={cn('flex gap-4 rounded-2xl border-l-4 border-cobre bg-arena-100/70 p-6 sm:p-7', className)}>
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-marfil-50 text-cobre-700">
        <Icon name="IdCard" className="size-5" />
      </span>
      <div>
        <figcaption className="eyebrow text-cobre-700">{title}</figcaption>
        <blockquote className="mt-2 font-serif text-xl leading-relaxed text-bosque sm:text-2xl">{text}</blockquote>
      </div>
    </Reveal>
  )
}

/** Lista de datos etiqueta/valor (razón social, ubicación, sector…). */
export function FactList({ facts, className }: { facts: Fact[]; className?: string }) {
  return (
    <Reveal as="dl" delay={0.1} className={cn('divide-y divide-salvia-200 rounded-2xl border border-salvia-200 bg-marfil-50', className)}>
      {facts.map(fact => (
        <div key={fact.label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <dt className="text-sm text-pizarra">{fact.label}</dt>
          <dd className="font-semibold text-bosque sm:text-right">
            {fact.value}
            {fact.note && <span className="ml-2 rounded-full bg-arena-100 px-2 py-0.5 text-xs font-semibold text-militar-700">{fact.note}</span>}
          </dd>
        </div>
      ))}
    </Reveal>
  )
}
