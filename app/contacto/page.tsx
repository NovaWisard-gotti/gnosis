import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppButton } from '@/components/contact/whatsapp-button'
import { Icon } from '@/components/icon'
import { PageFrame } from '@/components/layout/page-frame'
import { Spotlight } from '@/components/motion/interactive'
import { Reveal } from '@/components/motion/reveal'
import { PageHero } from '@/components/sections/page-hero'
import { contactChannels, whatsapp } from '@/content/contact'
import { pages, sections } from '@/content/pages'
import { seo } from '@/content/seo'
import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ ...seo.pages.contacto, path: '/contacto' })

export default function ContactoPage() {
  return (
    <PageFrame>
      <PageHero intro={pages.contacto} />
      <section className="container-site grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal effect="scale" className="group relative overflow-hidden rounded-3xl border border-salvia-200 bg-marfil-50 p-7 sm:p-10">
            <Spotlight />
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-militar text-marfil transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-105">
              <Icon name="MessageCircle" className="size-7" />
            </span>
            <h2 className="mt-6 font-serif text-3xl font-semibold text-bosque sm:text-4xl">WhatsApp</h2>
            <p className="mt-2 text-2xl font-semibold tracking-wide text-militar">{whatsapp.display}</p>
            <p className="mt-4 max-w-md leading-7 text-pizarra">{sections.contacto.text}</p>
            <WhatsAppButton className="relative z-[2] mt-8 w-full sm:w-auto" />
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-5">
          {/* Otros canales aparecen automáticamente al completarse en content/contact.ts. */}
          {contactChannels.length > 1 && (
            <ul className="mb-8 flex flex-col gap-3">
              {contactChannels.filter(channel => channel.id !== 'whatsapp').map(channel => (
                <li key={channel.id}>
                  <a href={channel.href} target={channel.external ? '_blank' : undefined} rel={channel.external ? 'noopener noreferrer' : undefined} className="flex items-center justify-between gap-4 rounded-2xl border border-salvia-200 bg-marfil-50 p-5 hover:bg-salvia-100">
                    <span className="flex items-center gap-3">
                      <Icon name={channel.icon} className="size-5 text-militar" />
                      <span><span className="block text-xs text-pizarra">{channel.label}</span><span className="font-semibold text-bosque">{channel.value}</span></span>
                    </span>
                    <ArrowUpRight className="size-4 text-militar" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <h2 className="eyebrow text-salvia-700">Datos de la empresa</h2>
          <p className="mt-4 font-serif text-2xl font-semibold text-bosque">{site.legalName}</p>
          <p className="mt-1 text-pizarra">{site.location}</p>
        </Reveal>
      </section>
    </PageFrame>
  )
}
