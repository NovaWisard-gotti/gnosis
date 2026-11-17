import { ArrowDown } from 'lucide-react'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import { ProvisionalTag } from '@/components/sections/common'
import { SectionHeading } from '@/components/sections/section-heading'
import { despertar, programs } from '@/content/despertar'

/** El método común a los cinco programas, con un ejemplo de «hecho e interpretación». */
export function DespertarMethod() {
  const { method } = despertar
  const { example } = method
  return (
    <section id="metodo" className="scroll-mt-24 bg-salvia-100">
      <div className="container-site grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={method.eyebrow} title={method.title} description={method.description} />
          <ol className="mt-10 border-b border-salvia-200">
            {method.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={0.05 * i} className="grid gap-2 border-t border-salvia-200 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
                <span className="font-serif text-3xl leading-none font-semibold text-cobre-700 lining-nums" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight font-semibold text-bosque">{item.title}</h3>
                  <p className="mt-1.5 leading-7 text-pizarra">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* El primer elemento, llevado a una situación cotidiana. */}
        <div className="lg:col-span-5">
          <Reveal effect="scale" delay={0.1} className="rounded-3xl border border-salvia-200 bg-marfil-50 p-6 shadow-xl shadow-bosque/5 sm:p-8 lg:sticky lg:top-28">
            <p className="eyebrow text-cobre-700">{example.eyebrow}</p>
            <p className="mt-2 text-sm leading-6 text-pizarra">{method.items[0].title}</p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="rounded-2xl border border-salvia-200 bg-marfil p-5">
                <p className="inline-flex rounded-full bg-militar px-3 py-1 text-xs font-semibold tracking-wide text-marfil uppercase">{example.fact.label}</p>
                <p className="mt-3 font-serif text-2xl font-semibold text-bosque">{example.fact.text}</p>
                <p className="mt-1 text-sm text-pizarra">{example.fact.note}</p>
              </div>
              <div className="rounded-2xl border border-dashed border-cobre/50 bg-marfil p-5">
                <p className="inline-flex rounded-full border border-cobre-700/40 px-3 py-1 text-xs font-semibold tracking-wide text-cobre-700 uppercase">{example.interpretation.label}</p>
                <p className="mt-3 font-serif text-2xl font-semibold text-bosque">{example.interpretation.text}</p>
                <p className="mt-1 text-sm text-pizarra">{example.interpretation.note}</p>
              </div>
              <ArrowDown className="mx-auto size-5 text-cobre-700" aria-hidden="true" />
              <div className="rounded-2xl bg-bosque p-5 text-marfil">
                <p className="eyebrow text-arena">{example.check.label}</p>
                <p className="mt-2 leading-7">{example.check.text}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Seguimiento previsto: tres momentos, ejemplos por público y alcance del acompañamiento. */
export function DespertarProgress() {
  const { progress } = despertar
  return (
    <section id="avance" className="container-site scroll-mt-24 py-20 sm:py-24">
      <div className="flex flex-wrap items-end gap-3">
        <SectionHeading eyebrow={progress.eyebrow} title={progress.title} description={progress.description} />
        <ProvisionalTag label={progress.tag} className="mb-2" />
      </div>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {progress.moments.map((moment, i) => (
          <Reveal as="li" key={moment.name} delay={stagger(i)} className="relative rounded-2xl border border-salvia-200 bg-marfil-50 p-6 sm:p-7">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-militar text-sm font-semibold text-marfil" aria-hidden="true">{i + 1}</span>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-bosque">{moment.name}</h3>
            <p className="mt-2 leading-7 text-pizarra">{moment.text}</p>
          </Reveal>
        ))}
      </ol>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <h3 className="eyebrow text-salvia-700">{progress.examplesTitle}</h3>
          <dl className="mt-4 divide-y divide-salvia-200 border-y border-salvia-200">
            {programs.map(program => (
              <div key={program.slug} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="flex items-center gap-2.5 font-semibold text-bosque">
                  <Icon name={program.icon} className="size-4 shrink-0 text-militar" />
                  {program.name}
                </dt>
                <dd className="leading-7 text-pizarra">{program.progressExample}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-6 font-semibold text-militar-700">{progress.honesty}</p>
        </Reveal>
        <Reveal as="aside" delay={0.1} className="self-start rounded-2xl border-l-4 border-arena bg-salvia-100 p-6 sm:p-7 lg:col-span-5">
          <h3 className="font-serif text-2xl font-semibold text-bosque">{progress.scope.title}</h3>
          <p className="mt-3 leading-7 text-pizarra">{progress.scope.text}</p>
        </Reveal>
      </div>
    </section>
  )
}
