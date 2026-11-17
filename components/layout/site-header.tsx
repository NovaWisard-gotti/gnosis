'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, m, useScroll } from 'motion/react'
import { BrandCompact } from '@/components/brand/logo'
import { WhatsAppButton } from '@/components/contact/whatsapp-button'
import { ease } from '@/components/motion/timing'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

const focusable = 'a[href], button:not([disabled])'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { scrollYProgress } = useScroll()
  // En escritorio el logo ya enlaza al inicio.
  const links = site.nav.filter(item => item.href !== '/')

  /*
   * Al bajar, el encabezado gana fondo y sombra; si se sigue bajando se oculta para dejar sitio al
   * contenido y reaparece en cuanto se sube. No cambia de altura, así que el contenido no salta.
   */
  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    const update = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      if (Math.abs(y - lastY) > 6) {
        const header = headerRef.current
        const focusInside = header?.contains(document.activeElement) ?? false
        setHidden(y > lastY && y > 320 && !focusInside)
        lastY = y
      }
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Cierra el menú al cambiar de página (incluidos atrás y adelante del historial).
  useEffect(() => setOpen(false), [pathname])

  /*
   * Menú móvil abierto: bloquea el scroll, deja inerte el resto de la página, lleva el foco al primer
   * enlace, lo mantiene dentro del encabezado con Tab y cierra con Escape devolviendo el foco al botón.
   */
  useEffect(() => {
    const header = headerRef.current
    if (!open || !header) return
    const siblings = [...(header.parentElement?.children ?? [])].filter(element => element !== header && element.tagName !== 'A')
    siblings.forEach(element => element.setAttribute('inert', ''))
    document.body.style.overflow = 'hidden'
    const frame = requestAnimationFrame(() => header.querySelector<HTMLElement>('#menu-movil a')?.focus())

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = [...header.querySelectorAll<HTMLElement>(focusable)].filter(element => element.getClientRects().length > 0)
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      siblings.forEach(element => element.removeAttribute('inert'))
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      ref={headerRef}
      onFocus={() => setHidden(false)}
      className={cn(
        'sticky top-0 z-50 border-b transition-[translate,border-color,box-shadow] duration-500 ease-out-soft',
        scrolled ? 'border-arena-300/70 shadow-[0_10px_30px_-14px] shadow-bosque/20' : 'border-arena-300/40',
        hidden && !open && '-translate-y-full',
      )}
    >
      {/* El desenfoque va en una capa aparte: en el propio header rompería el menú móvil fijo. */}
      <div aria-hidden="true" className={cn('absolute inset-0 -z-10 backdrop-blur-md transition-colors duration-500', scrolled || open ? 'bg-marfil/95' : 'bg-marfil/80')} />
      {/* Progreso de lectura: una línea dorada que crece con el scroll. */}
      <m.div aria-hidden="true" style={{ scaleX: scrollYProgress }} className={cn('absolute inset-x-0 -bottom-px h-0.5 origin-left bg-arena transition-opacity duration-500', scrolled ? 'opacity-100' : 'opacity-0')} />
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Link href="/" aria-label={`${site.name}, ir al inicio`} onClick={() => setOpen(false)} className="shrink-0 rounded-md transition-opacity hover:opacity-85">
          <BrandCompact />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {links.map(item => {
            const active = isActive(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-2.5 py-2 text-sm font-medium transition-colors xl:px-3',
                  active ? 'text-militar' : 'text-pizarra hover:text-militar focus-visible:text-militar',
                  // Subrayado dorado que crece desde el centro con el puntero o el foco; fijo en la página activa.
                  'after:absolute after:inset-x-2.5 xl:after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-arena after:transition-transform after:duration-300',
                  active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100',
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <WhatsAppButton className="ml-3 hidden h-10 px-5 xl:inline-flex" />
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-militar transition-[background-color,scale] hover:bg-salvia-100 active:scale-95 lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen(value => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.span key={open ? 'x' : 'menu'} initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }} transition={{ duration: 0.18 }}>
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </m.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="menu-movil"
            aria-label="Principal"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2, ease } }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-salvia-200 bg-marfil lg:hidden"
          >
            <ul className="container-site flex flex-col py-4">
              {site.nav.map((item, i) => {
                const active = isActive(pathname, item.href)
                return (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease, delay: 0.05 + i * 0.04 }}
                    className="border-b border-salvia-200/80"
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                      className={cn('group flex items-center justify-between py-4 font-serif text-2xl transition-colors active:text-militar', active ? 'text-militar' : 'text-bosque')}
                    >
                      {item.label}
                      {active ? <span className="size-2 rounded-full bg-militar" aria-hidden="true" /> : <span className="h-px w-4 bg-arena transition-[width] duration-300 group-active:w-8" aria-hidden="true" />}
                    </Link>
                  </m.li>
                )
              })}
            </ul>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.35 }} className="container-site pb-10">
              <WhatsAppButton className="w-full" onClick={() => setOpen(false)} />
            </m.div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
