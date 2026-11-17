import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icon'
import { getProject } from '@/content/projects'
import type { TeamRole } from '@/content/types'
import { cn } from '@/lib/utils'

/** Marco 4:5 con la fotografía del cargo o, si no la hay, un avatar neutro con su icono. */
export function TeamPortrait({ member, className }: { member: TeamRole; className?: string }) {
  return (
    <div className={cn('relative aspect-[4/5] overflow-hidden rounded-xl bg-salvia-100', className)}>
      {member.image ? (
        <Image
          src={member.image.src}
          alt={member.image.alt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out group-lit:scale-[1.04]"
          style={{ objectPosition: member.image.position ?? '50% 20%' }}
        />
      ) : (
        <div aria-hidden="true" className="flex size-full items-end justify-center">
          <svg viewBox="0 0 120 150" className="h-4/5 text-salvia-200">
            <circle cx="60" cy="52" r="26" fill="currentColor" />
            <path d="M8 150c0-34 23-58 52-58s52 24 52 58Z" fill="currentColor" />
          </svg>
          <span className="absolute right-4 bottom-4 inline-flex size-12 items-center justify-center rounded-full border-2 border-arena bg-militar text-marfil">
            <Icon name={member.icon} className="size-5" />
          </span>
        </div>
      )}
    </div>
  )
}

export function TeamCard({ member }: { member: TeamRole }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-salvia-200 bg-marfil-50 p-4 transition-[translate,box-shadow,border-color] duration-300 lit:-translate-y-1 lit:border-arena-300 lit:shadow-xl lit:shadow-bosque/10 sm:p-5">
      <TeamPortrait member={member} />
      <div className="flex flex-1 flex-col px-2 pt-6 pb-2">
        <span aria-hidden="true" className="h-0.5 w-10 origin-left bg-arena transition-transform duration-500 group-lit:scale-x-150" />
        <h2 className="mt-4 font-serif text-2xl font-semibold text-bosque">{member.role}</h2>
        {member.name && <p className="mt-1 font-semibold text-militar">{member.name}</p>}
        <p className="mt-3 leading-7 text-pizarra">{member.description}</p>
        {Boolean(member.responsibilities?.length || member.projects?.length) && (
          <div className="mt-auto pt-5">
            <div className="border-t border-salvia-200 pt-4 text-sm">
              {member.responsibilities?.map(item => <p key={item} className="leading-6 text-tinta">{item}</p>)}
              {member.projects?.map(slug => {
                const project = getProject(slug)
                return project && <Link key={slug} href={`/proyectos/${slug}`} className="mt-1 inline-flex min-h-11 items-center font-semibold text-militar underline-offset-4 hover:underline">Ver {project.name}</Link>
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
