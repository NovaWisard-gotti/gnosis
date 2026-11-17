import type { Metadata } from 'next'
import { PageFrame } from '@/components/layout/page-frame'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import { ContactCta } from '@/components/sections/common'
import { PageHero } from '@/components/sections/page-hero'
import { IdentityPrinciple } from '@/components/sections/purpose'
import { TeamCard } from '@/components/team/team-card'
import { pages } from '@/content/pages'
import { seo } from '@/content/seo'
import { team } from '@/content/team'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({ ...seo.pages.equipo, path: '/equipo' })

export default function EquipoPage() {
  return (
    <PageFrame>
      <PageHero intro={pages.equipo} />
      <section className="container-site py-20 sm:py-24">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal as="li" key={member.id} delay={stagger(i)}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </ul>
        <IdentityPrinciple className="mt-12" />
      </section>
      <ContactCta />
    </PageFrame>
  )
}
