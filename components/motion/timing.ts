// Tiempos compartidos por las animaciones. Módulo sin 'use client' para usarlo también en el servidor.
import type { CSSProperties } from 'react'

/** Curva de salida suave, común a todas las animaciones del sitio. */
export const ease = [0.22, 1, 0.36, 1] as const

/** Retardo escalonado para elementos de una cuadrícula: se reinicia en cada fila. */
export const stagger = (index: number, columns = 3) => (index % columns) * 0.08

/**
 * Retardo de la entrada en CSS (`animate-rise`) de las cabeceras, en milisegundos.
 * Uso: `className="animate-rise" style={rise(120)}`.
 */
export const rise = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/** Duración del armado del logo (ms): después, `<html data-logo-seen>` lo deja terminado hasta recargar. */
export const logoAssemblyMs = 2800
