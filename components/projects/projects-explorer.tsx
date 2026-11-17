'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from '@/components/ui/empty'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { catalog } from '@/content/pages'
import { projectSectors, projects } from '@/content/projects'
import { ProjectCard } from './project-card'

/** Catálogo de empresas con filtro por división. */
export function ProjectsExplorer() {
  const [division, setDivision] = useState(catalog.allDivisions)
  const filtered = useMemo(
    () => projects.filter(project => division === catalog.allDivisions || project.sector === division),
    [division],
  )
  const isFiltered = division !== catalog.allDivisions

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Select value={division} onValueChange={value => value && setDivision(value)}>
          <SelectTrigger aria-label={catalog.filterLabel} className="h-11 w-full rounded-full border-input bg-marfil-50 px-4 data-[size=default]:h-11 sm:w-64">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={catalog.allDivisions}>{catalog.allDivisions}</SelectItem>
            {projectSectors.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
          </SelectContent>
        </Select>
        {isFiltered && (
          <Button type="button" variant="ghost" className="h-11 rounded-full px-4 text-militar" onClick={() => setDivision(catalog.allDivisions)}>
            {catalog.clear}
          </Button>
        )}
        <p className="text-sm text-pizarra sm:ml-auto" aria-live="polite">
          {catalog.count(filtered.length)}
        </p>
      </div>

      {filtered.length ? (
        // La clave reinicia la cuadrícula al cambiar el filtro, para que las tarjetas vuelvan a entrar.
        <div key={division} className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => <ProjectCard key={project.slug} project={project} headingLevel="h2" index={i} />)}
        </div>
      ) : (
        <Empty className="mt-8 border border-input py-14">
          <EmptyHeader>
            <EmptyTitle className="font-serif text-2xl text-bosque">{catalog.empty.title}</EmptyTitle>
            <EmptyDescription>{catalog.empty.description}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  )
}
