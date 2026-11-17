'use client'

import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'

/**
 * Configuración global de animaciones. `LazyMotion` carga solo las funciones de animación
 * del DOM (sin layout), y `reducedMotion="user"` desactiva desplazamientos y escalados
 * cuando el sistema pide movimiento reducido (se conservan fundidos breves).
 *
 * También marca el documento:
 * - `data-motion`: las animaciones arrancaron (el respaldo de `app/layout.tsx` no actúa).
 * - `data-navigated`: hubo una navegación interna; activa la transición breve entre páginas
 *   (`#contenido` en `globals.css`). En la primera carga no hay transición.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const first = useRef(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-motion', '')
  }, [])

  // Antes de pintar la página nueva, para que la transición empiece en el primer fotograma.
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    document.documentElement.setAttribute('data-navigated', '')
  }, [pathname])

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
