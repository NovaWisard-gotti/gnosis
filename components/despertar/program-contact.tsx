'use client'

import { Mail } from 'lucide-react'
import { WhatsAppButton } from '@/components/contact/whatsapp-button'
import { Icon } from '@/components/icon'
import { Parallax, Spotlight } from '@/components/motion/interactive'
import { Reveal } from '@/components/motion/reveal'
import { mailtoLink, programEmail } from '@/content/contact'
import { despertar, getProgram, programs } from '@/content/despertar'
import { cn } from '@/lib/utils'
import { useProgramSelection } from './program-selection'

/**
 * Contacto de Despertar al Ser. Recuerda el programa elegido en la página (o el que se marque aquí)
 * y precarga con él el mensaje de WhatsApp y el asunto del correo.
 */
export function ProgramContact({ id }: { id?: string }) {
  const text = despertar.contact
  const { selected, select } = useProgramSelection()
  const program = getProgram(selected)
  const inquiry = program?.inquiry ?? { ...text.general, audience: undefined }

  return (
    <section id={id} aria-labelledby="solicitar-titulo" className="container-site scroll-mt-24 py-16 sm:py-20">
      <Reveal effect="scale" className="on-dark group relative overflow-hidden rounded-3xl bg-militar px-6 py-12 text-marfil sm:px-12 sm:py-14">
        <Parallax distance={-60} className="pointer-events-none absolute -right-20 -top-24">
          <div aria-hidden="true" className="animate-drift size-72 rounded-full bg-arena/20 blur-3xl" />
        </Parallax>
        <Spotlight className="[--spot-color:color-mix(in_oklab,var(--color-arena)_22%,transparent)]" />
        <div className="relative z-[2] grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-arena">{text.eyebrow}</p>
            <h2 id="solicitar-titulo" className="mt-3 font-serif text-3xl leading-tight font-semibold sm:text-4xl">{text.title}</h2>
            <p className="mt-4 text-lg leading-8 text-salvia-200">{text.description}</p>
            <p className="mt-6 text-sm leading-6 text-salvia-200/90">{text.credit}</p>
          </div>

          <div className="lg:col-span-7">
            <fieldset>
              <legend className="font-semibold text-marfil">{text.legend}</legend>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {programs.map(item => {
                  const checked = item.slug === selected
                  return (
                    <label
                      key={item.slug}
                      className={cn(
                        'flex min-h-12 cursor-pointer items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-sm font-semibold transition-colors duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-arena',
                        checked ? 'border-arena bg-marfil text-bosque' : 'border-marfil/25 text-marfil hover:border-marfil/50 hover:bg-marfil/10',
                      )}
                    >
                      <input type="radio" name="programa" value={item.slug} checked={checked} onChange={() => select(item.slug)} className="sr-only" />
                      <Icon name={item.icon} className={cn('size-4 shrink-0', checked ? 'text-militar' : 'text-arena')} />
                      <span className="leading-tight">{item.name}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-6 rounded-2xl bg-bosque/40 p-5" aria-live="polite">
              <p className="eyebrow text-arena">{program ? text.selected : text.hint}</p>
              <p className="mt-2 leading-7 text-marfil">«{inquiry.message}»</p>
              {inquiry.audience && <p className="mt-2 text-sm leading-6 text-salvia-200">{inquiry.audience}</p>}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <WhatsAppButton variant="sand" label={inquiry.label} message={inquiry.message} className="w-full sm:w-auto" />
              <a href={mailtoLink(programEmail, inquiry.subject, inquiry.message)} className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-arena-300 underline-offset-4 hover:underline focus-visible:underline">
                <Mail className="size-4" aria-hidden="true" />
                <span>{text.emailLabel}: {programEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
