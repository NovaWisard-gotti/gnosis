'use client'

import type { ComponentType, CSSProperties, ReactNode } from 'react'
import { m, type HTMLMotionProps, type Variants } from 'motion/react'
import { ease } from './timing'

const variants = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } }),
  },
  fade: {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({ opacity: 1, transition: { duration: 0.9, ease, delay } }),
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    visible: (delay = 0) => ({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease, delay } }),
  },
} satisfies Record<string, Variants>

type Tag = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'p' | 'span' | 'figure' | 'article' | 'aside' | 'dl' | 'blockquote'

type Props = {
  as?: Tag
  /** Segundos antes de empezar (p. ej. `stagger(i)` en cuadrículas). */
  delay?: number
  effect?: keyof typeof variants
  /** Anima al cargar, sin esperar a entrar en pantalla (cabeceras, primera vista). */
  immediate?: boolean
  className?: string
  style?: CSSProperties
  id?: string
  'aria-label'?: string
  children?: ReactNode
}

/**
 * Revela su contenido al entrar en pantalla (una sola vez). El contenido está en el HTML
 * desde el servidor; sin JavaScript, la regla `[data-reveal]` del `<noscript>` lo muestra.
 */
export function Reveal({ as = 'div', delay = 0, effect = 'up', immediate = false, children, ...rest }: Props) {
  const Component = m[as] as unknown as ComponentType<HTMLMotionProps<'div'> & { 'data-reveal'?: string }>
  return (
    <Component
      data-reveal=""
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: { once: true, margin: '0px 0px -10% 0px' } })}
      variants={variants[effect]}
      custom={delay}
      {...rest}
    >
      {children}
    </Component>
  )
}
