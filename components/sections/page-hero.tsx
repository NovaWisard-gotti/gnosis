import Link from 'next/link'
import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { HeroLines } from '@/components/motion/backdrop'
import { SplitWords } from '@/components/motion/entrance'
import { Parallax } from '@/components/motion/interactive'
import { rise } from '@/components/motion/timing'
import type { PageIntro } from '@/content/types'
import { cn } from '@/lib/utils'

export type Crumb = { label: string; href?: string }

/** Cabecera de las páginas internas, con migas de pan. Entra de forma escalonada; los halos derivan lentamente. */
export function PageHero({ intro, breadcrumbs, children }: { intro: PageIntro; breadcrumbs?: Crumb[]; children?: ReactNode }) {
  const crumbs: Crumb[] = [{ label: 'Inicio', href: '/' }, ...(breadcrumbs ?? [{ label: intro.eyebrow }])]
  return (
    <section className="on-dark relative overflow-hidden bg-bosque text-marfil">
      {/* Halos decorativos: derivan lentamente y se desplazan con el scroll a distinta velocidad. */}
      <Parallax distance={90} className="pointer-events-none absolute -right-32 -top-40" >
        <div aria-hidden="true" className="animate-drift size-[32rem] rounded-full bg-militar/40 blur-3xl" />
      </Parallax>
      <Parallax distance={-50} className="pointer-events-none absolute -bottom-48 left-1/3">
        <div aria-hidden="true" className="animate-drift-slow size-[28rem] rounded-full bg-arena/10 blur-3xl" />
      </Parallax>
      <HeroLines className="text-arena/25" />
      <div className="container-site relative py-14 sm:py-20 lg:py-24">
        <div className="animate-rise">
          <Breadcrumbs crumbs={crumbs} />
        </div>
        <p className="eyebrow animate-rise mt-10 text-arena sm:mt-12" style={rise(40)}>{intro.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
          <SplitWords text={intro.title} delay={40} />
        </h1>
        <p className="animate-rise mt-6 max-w-2xl text-lg leading-8 text-salvia-200/90" style={rise(140)}>{intro.description}</p>
        {children && <div className="animate-rise" style={rise(200)}>{children}</div>}
      </div>
    </section>
  )
}

/** Migas de pan. `tone="warm"` para cabeceras claras con paleta café (Genoveva). */
export function Breadcrumbs({ crumbs, tone = 'light' }: { crumbs: Crumb[]; tone?: 'light' | 'warm' }) {
  const warm = tone === 'warm'
  return (
    <nav aria-label="Migas de pan">
      <ol className={cn('flex flex-wrap items-center gap-1 text-sm', warm ? 'text-cafe-700' : 'text-salvia-200/70')}>
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1
          return (
            <li key={crumb.label} className="flex items-center gap-1">
              {crumb.href && !last ? (
                <Link href={crumb.href} className={cn('-my-3 inline-flex min-h-11 items-center', warm ? 'underline-offset-4 hover:text-cafe hover:underline' : 'hover:text-marfil')}>{crumb.label}</Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? (warm ? 'font-semibold text-cafe' : 'text-salvia-200') : undefined}>{crumb.label}</span>
              )}
              {!last && <ChevronRight className="size-3.5" aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
