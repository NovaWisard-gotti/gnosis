import type { ReactNode } from 'react'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

/** Estructura común de todas las páginas: encabezado, contenido y pie. */
export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-marfil text-tinta">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-bosque focus:px-4 focus:py-2 focus:text-sm focus:text-marfil">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
