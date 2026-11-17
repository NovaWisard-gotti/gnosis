'use client'

import Image from 'next/image'
import { useRef, useState, type KeyboardEvent } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { stagger } from '@/components/motion/timing'
import type { GalleryImage } from '@/content/types'
import { cn } from '@/lib/utils'

const controlBase = 'inline-flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

/** Colores de la galería: identidad GNOSIS o paleta de Genoveva. */
const tones = {
  gnosis: {
    frame: 'border-salvia-200 bg-marfil-50 lit:shadow-bosque/10',
    chip: 'bg-marfil-50/95 text-militar-700',
    title: 'text-bosque',
    caption: 'text-pizarra',
    backdrop: 'bg-bosque-950/95',
    popup: 'text-marfil',
    muted: 'text-salvia-200',
    control: 'border-marfil/30 bg-bosque-950/60 text-marfil hover:bg-marfil hover:text-bosque focus-visible:outline-arena',
  },
  genoveva: {
    frame: 'border-madera-200 bg-crema-50 lit:shadow-cafe/10',
    chip: 'bg-crema-50/95 text-militar-700',
    title: 'text-cafe',
    caption: 'text-cafe-700',
    backdrop: 'bg-cafe-950/95',
    popup: 'text-crema',
    muted: 'text-madera-200',
    control: 'border-crema/30 bg-cafe-950/60 text-crema hover:bg-crema hover:text-cafe focus-visible:outline-madera',
  },
}

/**
 * Galería de imágenes mostradas completas (sin recortes), con ampliación en un diálogo
 * accesible: Escape o el botón «Cerrar» lo cierran; flechas o botones cambian de imagen.
 * Con hasta tres imágenes, desde `sm` comparten fila con anchos proporcionales a su formato
 * (misma altura, sin recortar horizontales ni verticales).
 */
export function ProjectGallery({ items, label, tone = 'gnosis' }: { items: GalleryImage[]; label?: string; tone?: keyof typeof tones }) {
  const t = tones[tone]
  const controlClass = cn(controlBase, t.control)
  const justified = items.length <= 3
  const [index, setIndex] = useState<number | null>(null)
  const triggers = useRef<(HTMLButtonElement | null)[]>([])
  const lastIndex = useRef(0)

  const open = (i: number) => {
    lastIndex.current = i
    setIndex(i)
  }
  const step = (delta: number) =>
    setIndex(current => {
      if (current === null) return current
      const next = (current + delta + items.length) % items.length
      lastIndex.current = next
      return next
    })
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
  }

  const current = index === null ? null : items[index]

  return (
    <>
      <ul className={justified ? 'flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-6' : 'grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'}>
        {items.map((item, i) => (
          <Reveal as="li" key={item.src} delay={stagger(i, justified ? 3 : 4)} style={justified ? { flex: `${item.width / item.height} 1 0%` } : undefined} className={cn(justified && 'min-w-0')}>
            <figure className="flex h-full flex-col">
              <button
                type="button"
                ref={el => { triggers.current[i] = el }}
                onClick={() => open(i)}
                className={cn('group relative block w-full overflow-hidden rounded-2xl border shadow-sm transition-shadow lit:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-militar', t.frame)}
                aria-label={`Ampliar imagen: ${item.title}`}
              >
                <Image
                  src={item.thumb ?? item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes={justified ? '(min-width: 640px) 60vw, 100vw' : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
                  className="h-auto w-full transition-transform duration-700 ease-out group-lit:scale-[1.04]"
                />
                <span aria-hidden="true" className={cn('absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full text-militar shadow-sm transition-transform duration-300 group-lit:scale-110', t.chip)}>
                  <Maximize2 className="size-4" />
                </span>
                {label && <span className={cn('absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm', t.chip)}>{label}</span>}
              </button>
              <figcaption className="mt-4">
                <span className={cn('block font-serif text-xl font-semibold', t.title)}>{item.title}</span>
                <span className={cn('mt-1 block text-sm leading-6', t.caption)}>{item.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <Dialog.Root open={index !== null} onOpenChange={next => { if (!next) setIndex(null) }}>
        <Dialog.Portal>
          <Dialog.Backdrop className={cn('fixed inset-0 z-[70] backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0', t.backdrop)} />
          <Dialog.Popup
            finalFocus={() => triggers.current[lastIndex.current] ?? true}
            onKeyDown={onKeyDown}
            className={cn('fixed inset-0 z-[80] flex flex-col gap-4 p-4 outline-none transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 sm:p-6', t.popup)}
          >
            {current && index !== null && (
              <>
                <div className="flex items-center justify-between gap-4">
                  <p className={cn('text-sm font-semibold', t.muted)} aria-live="polite">
                    {index + 1} de {items.length}
                  </p>
                  <Dialog.Close className={cn(controlClass, 'w-auto gap-2 px-4 text-sm font-semibold')}>
                    <X className="size-5" aria-hidden="true" />
                    Cerrar
                  </Dialog.Close>
                </div>
                <div className="relative min-h-0 flex-1">
                  <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="animate-in object-contain duration-300 fade-in zoom-in-95" />
                </div>
                <div className="mx-auto flex w-full max-w-3xl items-center gap-3 sm:gap-6">
                  <button type="button" onClick={() => step(-1)} className={controlClass} aria-label="Imagen anterior">
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </button>
                  <div className="min-w-0 flex-1 text-center">
                    <Dialog.Title className="font-serif text-xl font-semibold sm:text-2xl">{current.title}</Dialog.Title>
                    <Dialog.Description className={cn('mt-1 text-sm leading-6', t.muted)}>
                      {label && <span className="font-semibold">{label}. </span>}
                      {current.caption}
                    </Dialog.Description>
                  </div>
                  <button type="button" onClick={() => step(1)} className={controlClass} aria-label="Imagen siguiente">
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </button>
                </div>
              </>
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
