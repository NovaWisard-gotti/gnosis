'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

/*
 * Fondos decorativos con líneas orgánicas: hilos que fluyen juntos y nodos unidos entre sí,
 * como imagen de colectividad. Las formas se calculan con fórmulas fijas (sin azar), así que el
 * HTML del servidor y el del cliente coinciden. Todo es `aria-hidden` y no recibe eventos.
 */

/** Hilos ondulados que recorren el ancho del lienzo (1200 × 700). */
function threadPaths(count: number, top: number, gap: number) {
  return Array.from({ length: count }, (_, i) => {
    const y = top + i * gap
    const a = 70 + i * 9
    const b = 50 + i * 6
    return `M -50 ${y} C 220 ${y - a}, 420 ${y + b}, 640 ${y - 10} S 980 ${y - a * 0.8}, 1250 ${y + 20}`
  })
}

/** Nodos de la red y sus conexiones (índices de nodo). */
const nodes: [number, number][] = [
  [120, 520], [300, 420], [470, 560], [610, 380], [760, 500], [900, 330], [1060, 450], [220, 640], [690, 640],
]
const links: [number, number][] = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [4, 6], [5, 6], [0, 7], [7, 2], [2, 8], [8, 4]]

function Threads({ className, count = 9, top = 260, gap = 34 }: { className?: string; count?: number; top?: number; gap?: number }) {
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" className={cn('absolute inset-0 size-full', className)} fill="none" aria-hidden="true">
      {threadPaths(count, top, gap).map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth={i % 3 === 0 ? 1.4 : 0.8} strokeLinecap="round" opacity={0.35 + (i % 3) * 0.2} />
      ))}
    </svg>
  )
}

function Network({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" className={cn('absolute inset-0 size-full', className)} fill="none" aria-hidden="true">
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeWidth={0.8} opacity={0.5} />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill="currentColor" className="animate-breathe" style={{ '--d': `${i * 700}ms` } as CSSProperties} />
      ))}
    </svg>
  )
}

/** Versión estática y ligera para las cabeceras internas: solo hilos con deriva lenta. */
export function HeroLines({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="animate-sway-slow absolute -inset-x-[10%] inset-y-0">
        <Threads count={7} top={330} gap={40} />
      </div>
    </div>
  )
}

/**
 * Fondo de la portada en tres capas con profundidad: cada `.depth-layer` responde al puntero (solo con ratón)
 * y al scroll con una intensidad distinta. Sin efectos de puntero ni parallax con movimiento reducido.
 */
export function HomeBackdrop({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const far = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 50])
  const near = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 130])

  useEffect(() => {
    // Las variables --px/--py se fijan en la sección para que cualquier `.depth-layer` dentro de ella responda.
    const section = ref.current?.closest('section')
    if (!section || reduced || !window.matchMedia('(pointer: fine)').matches) return
    let frame = 0
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const box = section.getBoundingClientRect()
        section.style.setProperty('--px', ((event.clientX - box.left) / box.width - 0.5).toFixed(3))
        section.style.setProperty('--py', ((event.clientY - box.top) / box.height - 0.5).toFixed(3))
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      section.style.setProperty('--px', '0')
      section.style.setProperty('--py', '0')
    }
    section.addEventListener('pointermove', onMove)
    section.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      section.removeEventListener('pointermove', onMove)
      section.removeEventListener('pointerleave', onLeave)
      section.style.removeProperty('--px')
      section.style.removeProperty('--py')
    }
  }, [reduced])

  return (
    <div ref={ref} aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {/* Capa lejana: halos de color que dan profundidad. */}
      <m.div style={{ y: far }} className="absolute inset-0">
        <div className="depth-layer absolute inset-0" style={{ '--depth': '-14px' } as CSSProperties}>
          <div className="animate-drift-slow absolute -top-32 left-[8%] size-[26rem] rounded-full bg-salvia-200/40 blur-3xl" />
          <div className="animate-drift absolute -bottom-40 right-[-6rem] size-[30rem] rounded-full bg-arena-300/35 blur-3xl" />
        </div>
      </m.div>
      {/* Capa media: hilos que fluyen juntos. */}
      <m.div style={{ y: far }} className="absolute inset-0">
        <div className="depth-layer absolute inset-0" style={{ '--depth': '18px' } as CSSProperties}>
          <div className="animate-sway absolute -inset-x-[8%] inset-y-0 text-militar/20">
            <Threads />
          </div>
        </div>
      </m.div>
      {/* Capa cercana: red de nodos conectados (oculta en móvil para simplificar). */}
      <m.div style={{ y: near }} className="absolute inset-0 hidden sm:block">
        <div className="depth-layer absolute inset-0" style={{ '--depth': '36px' } as CSSProperties}>
          <div className="animate-sway-slow absolute -inset-x-[6%] inset-y-0 text-cobre/45">
            <Network />
          </div>
        </div>
      </m.div>
      {/* Funde el borde inferior con la sección siguiente. */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-marfil to-transparent" />
    </div>
  )
}
