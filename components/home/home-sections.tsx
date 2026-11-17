import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BrandLogo } from '@/components/brand/logo'
import { Icon } from '@/components/icon'
import { HeroLogo, Spotlight } from '@/components/motion/interactive'
import { Reveal } from '@/components/motion/reveal'
import { HomeBackdrop } from '@/components/motion/backdrop'
import { SplitWords } from '@/components/motion/entrance'
import { ScrollText } from '@/components/motion/text-effects'
import { rise } from '@/components/motion/timing'
import { ProjectCard } from '@/components/projects/project-card'
import { TextLink } from '@/components/sections/common'
import { AyniPrinciple, SharedServices, ValuesSummary } from '@/components/sections/purpose'
import { SectionHeading } from '@/components/sections/section-heading'
import { Button } from '@/components/ui/button'
import { despertar, programs } from '@/content/despertar'
import { home } from '@/content/pages'
import { featuredProjectSlugs, getProject, projects, projectSectors } from '@/content/projects'
import { site } from '@/content/site'
import { team as teamRoles } from '@/content/team'
import type { Project } from '@/content/types'
import { futureAreas, futureAreasNote } from '@/content/work-lines'

export function HomeHero() {
  const { hero } = home
  return (
    // Fondo marfil igual al papel del logo para que la imagen se funda con la sección.
    <section className="relative isolate overflow-hidden bg-marfil">
      <HomeBackdrop className="-z-10" />
      <div className="container-site grid items-center gap-6 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <HeroLogo className="mx-auto w-full max-w-[15rem] sm:max-w-[18rem] lg:order-2 lg:col-span-5 lg:max-w-[30rem]">
          <BrandLogo assemble priority sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 480px" />
        </HeroLogo>
        <div className="text-center lg:order-1 lg:col-span-7 lg:text-left">
          <p className="eyebrow animate-rise inline-flex items-center gap-3 text-cobre-700">
            <span className="h-px w-8 bg-cobre" aria-hidden="true" />
            {hero.eyebrow}
            <span className="h-px w-8 bg-cobre lg:hidden" aria-hidden="true" />
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl font-serif text-[2.35rem] leading-[1.08] font-semibold text-bosque sm:text-5xl lg:mx-0 lg:text-[3.6rem]">
            <SplitWords text={hero.title} delay={40} />
          </h1>
          <p className="animate-rise mx-auto mt-6 max-w-xl text-lg leading-8 text-pizarra lg:mx-0" style={rise(140)}>{site.description}</p>
          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start" style={rise(200)}>
            <Button asChild variant="brand" size="pill" className="h-12">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline-brand" size="pill" className="h-12 bg-marfil/70 backdrop-blur-sm">
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomePurpose() {
  const { purpose, model } = home
  return (
    <section className="container-site border-t border-arena-300/50 py-20 sm:py-24">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-12">
        <Reveal as="p" className="eyebrow text-salvia-700 lg:col-span-3 lg:pt-3">{purpose.eyebrow}</Reveal>
        {/* El propósito se ilumina palabra por palabra al recorrer la sección. */}
        <div className="lg:col-span-9">
          <ScrollText text={site.purpose} className="font-serif text-2xl leading-snug font-semibold text-bosque sm:text-3xl lg:text-4xl" />
          <Reveal as="p" className="mt-6 max-w-3xl text-lg leading-8 text-pizarra">{site.purposeDetail}</Reveal>
        </div>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-12">
        <SectionHeading eyebrow={model.eyebrow} title={model.title} description={model.description} as="h2" className="lg:col-span-4" />
        <SharedServices className="lg:col-span-8 lg:grid-cols-2" />
      </div>
    </section>
  )
}

export function HomeAbout() {
  const { about } = home
  return (
    <section className="bg-salvia-100">
      <div className="container-site grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.description} />
          <AyniPrinciple compact />
          <Reveal className="hidden lg:block">
            <TextLink href={about.link.href}>{about.link.label}</TextLink>
          </Reveal>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-7 lg:pt-2">
          <ValuesSummary />
          <Reveal className="lg:hidden">
            <TextLink href={about.link.href}>{about.link.label}</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function HomeWorkLines() {
  const section = home.workLines
  return (
    <section className="container-site py-20 sm:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        <TextLink href={section.link.href} className="shrink-0">{section.link.label}</TextLink>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-2xl border border-salvia-200 bg-marfil-50 p-6 sm:p-8">
          <h3 className="eyebrow text-salvia-700">{section.current}</h3>
          <ul className="mt-4 flex flex-col gap-1">
            {projectSectors.map((sector, i) => {
              const project = projects.find(item => item.sector === sector)
              if (!project) return null
              return (
                <Reveal as="li" key={sector} delay={0.15 + i * 0.08}>
                  {/* Toda la fila enlaza a la empresa; el mismo realce con puntero, foco o toque. */}
                  <Link href={`/proyectos/${project.slug}`} className="group -mx-3 flex items-center gap-4 rounded-xl p-3 transition-colors duration-300 active:bg-salvia-200/70 lit:bg-salvia-100">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-militar text-marfil transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-105">
                      <Icon name={project.icon} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-xl font-semibold text-bosque">{sector}</span>
                      <span className="block text-sm font-semibold text-militar">{project.name}</span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-militar transition-transform duration-300 group-lit:translate-x-1" aria-hidden="true" />
                  </Link>
                </Reveal>
              )
            })}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl border border-dashed border-input p-6 sm:p-8">
          <h3 className="eyebrow text-salvia-700">{section.future}</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {futureAreas.map((area, i) => (
              <Reveal as="li" key={area.name} effect="scale" delay={0.2 + i * 0.05} className="inline-flex items-center gap-2 rounded-full bg-salvia-100 px-3.5 py-2 text-sm font-medium text-bosque transition-colors duration-300 hover:bg-salvia-200">
                <Icon name={area.icon} className="size-4 text-salvia-700" />
                {area.name}
              </Reveal>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-6 text-pizarra">{futureAreasNote}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function HomeProjects() {
  const section = home.projects
  const featured = featuredProjectSlugs.map(getProject).filter((project): project is Project => Boolean(project))
  return (
    <section className="border-t border-salvia-200 bg-marfil-50">
      <div className="container-site py-20 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
          <TextLink href={section.link.href} className="shrink-0">{section.link.label}</TextLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}
        </div>
      </div>
    </section>
  )
}

/** Despertar al Ser: presentación breve y acceso directo a cada programa. */
export function HomeDespertar() {
  const section = despertar.home
  return (
    <section className="container-site py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow={section.eyebrow} title={section.title} />
          <Reveal as="p" delay={0.05} className="mt-3 font-serif text-2xl leading-snug font-medium text-cobre-700 sm:text-3xl">{section.tagline}</Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 max-w-xl text-lg leading-8 text-pizarra">{section.description}</Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Button asChild variant="brand" size="pill" className="h-12 w-full sm:w-auto">
              <Link href={section.link.href}>
                {section.link.label}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="rounded-3xl border border-salvia-200 bg-marfil-50 p-4 sm:p-6 lg:col-span-6">
          <h3 className="eyebrow px-3 pt-2 text-salvia-700">{section.listLabel}</h3>
          <ul className="mt-2 flex flex-col">
            {programs.map(program => (
              <li key={program.slug}>
                {/* Cada fila abre su programa en la página de Despertar al Ser. */}
                <Link href={`${section.link.href}#${program.slug}`} className="group flex items-center gap-4 rounded-xl p-3 transition-colors duration-300 active:bg-salvia-200/70 lit:bg-salvia-100">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-militar text-marfil transition-transform duration-300 group-lit:-rotate-6 group-lit:scale-105">
                    <Icon name={program.icon} className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-xl font-semibold text-bosque">{program.name}</span>
                    <span className="block text-sm text-pizarra">{program.topics}</span>
                  </span>
                  <span className="hidden shrink-0 text-xs font-semibold tracking-wide text-militar-700 uppercase sm:block">{program.badge}</span>
                  <ArrowRight className="size-4 shrink-0 text-militar transition-transform duration-300 group-lit:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function HomeImpactAndTeam() {
  const { impact, team } = home
  return (
    <section className="container-site grid gap-6 py-20 sm:py-24 lg:grid-cols-2">
      <Reveal effect="scale" className="on-dark group relative flex flex-col overflow-hidden rounded-3xl bg-bosque p-8 text-marfil sm:p-10">
        <Spotlight className="[--spot-color:color-mix(in_oklab,var(--color-arena)_14%,transparent)]" />
        <SectionHeading eyebrow={impact.eyebrow} title={impact.title} description={impact.description} tone="light" />
        <TextLink href={impact.link.href} tone="light" className="relative z-[2] mt-8 self-start">{impact.link.label}</TextLink>
      </Reveal>
      <Reveal effect="scale" delay={0.1} className="group relative flex flex-col overflow-hidden rounded-3xl bg-arena-100 p-8 sm:p-10">
        <Spotlight className="[--spot-color:color-mix(in_oklab,var(--color-marfil-50)_70%,transparent)]" />
        <SectionHeading eyebrow={team.eyebrow} title={team.title} description={team.description} />
        <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {teamRoles.map((member, i) => (
            <Reveal as="li" key={member.id} delay={0.15 + i * 0.05} className="flex items-baseline gap-3 font-medium text-bosque">
              <span aria-hidden="true" className="size-1.5 shrink-0 translate-y-[-2px] rounded-full bg-cobre" />
              {member.role}
            </Reveal>
          ))}
        </ul>
        <TextLink href={team.link.href} className="relative z-[2] mt-8 self-start">{team.link.label}</TextLink>
      </Reveal>
    </section>
  )
}
