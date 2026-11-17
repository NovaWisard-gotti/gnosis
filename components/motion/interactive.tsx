'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'
import { logoAssemblyMs } from './timing'

// Marca pendiente al desmontar (navegar fuera de Inicio). El doble montaje de React en desarrollo la cancela.
let pendingMark: number | undefined

/**
 * Logo de portada: lo arma `BrandLogo assemble` (CSS, sin esperar a JavaScript), se desplaza unos
 * píxeles con el puntero (capa `.depth-layer`) y algo más despacio que la página al hacer scroll.
 * Nunca se inclina ni se escala: el logo no se deforma. Sin parallax con movimiento reducido.
 * Al terminar el armado o al salir de Inicio marca `<html data-logo-seen>`: al volver a Inicio
 * navegando por el sitio, el logo aparece terminado. Cada carga o recarga de la pestaña lo vuelve a armar.
 */
export function HeroLogo({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60])

  useEffect(() => {
    window.clearTimeout(pendingMark)
    const root = document.documentElement
    if (root.hasAttribute('data-logo-seen')) return
    const markSeen = () => root.setAttribute('data-logo-seen', '')
    const timer = window.setTimeout(markSeen, logoAssemblyMs)
    return () => {
      window.clearTimeout(timer)
      pendingMark = window.setTimeout(markSeen, 0)
    }
  }, [])

  return (
    <m.div ref={ref} className={cn('relative', className)} style={{ y }}>
      <div className="depth-layer relative" style={{ '--depth': '-12px' } as CSSProperties}>
        {/* Claro de papel tras el logo: los hilos del fondo se desvanecen antes de tocar sus bordes. */}
        <div aria-hidden="true" className="absolute -inset-[22%] rounded-full bg-marfil-papel blur-3xl" />
        <div className="relative">{children}</div>
      </div>
    </m.div>
  )
}

/** Imagen que se desplaza un poco más lento que la página (parallax sutil). */
export function Parallax({ children, className, distance = 40 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Empieza en 0 para que el HTML del servidor y el primer render del cliente coincidan.
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : distance])
  return (
    <m.div ref={ref} className={className} style={{ y }}>
      {children}
    </m.div>
  )
}

/**
 * Brillo que sigue al puntero dentro de su contenedor (que debe ser `relative` y `group`).
 * Solo decorativo: no recibe eventos ni aparece en pantallas táctiles.
 */
export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const parent = ref.current?.parentElement
    if (!parent || !window.matchMedia('(pointer: fine)').matches) return
    const onMove = (event: PointerEvent) => {
      const box = parent.getBoundingClientRect()
      parent.style.setProperty('--spot-x', `${event.clientX - box.left}px`)
      parent.style.setProperty('--spot-y', `${event.clientY - box.top}px`)
    }
    parent.addEventListener('pointermove', onMove)
    return () => parent.removeEventListener('pointermove', onMove)
  }, [])

  return <span ref={ref} aria-hidden="true" className={cn('spotlight', className)} />
}
