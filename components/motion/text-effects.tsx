'use client'

import { useRef, type ReactNode } from 'react'
import { m, useScroll, useTransform, type MotionValue } from 'motion/react'

/**
 * Párrafo que se ilumina palabra por palabra mientras se desplaza la página.
 * Con movimiento reducido, la regla `[data-scroll-word]` de `globals.css` lo muestra completo.
 */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
          {i < words.length - 1 && ' '}
        </Word>
      ))}
    </p>
  )
}

function Word({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.3, 1])
  return (
    <m.span data-reveal="" data-scroll-word="" style={{ opacity }}>
      {children}
    </m.span>
  )
}
