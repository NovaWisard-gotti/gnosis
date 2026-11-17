import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  title: string
  description?: string
  /** `light` para fondos oscuros; `warm` para páginas con paleta café (Genoveva). */
  tone?: 'dark' | 'light' | 'warm'
  as?: 'h2' | 'h3'
  className?: string
}

/** Antetítulo, título y descripción de una sección (aparece al entrar en pantalla). `tone="light"` para fondos oscuros. */
export function SectionHeading({ eyebrow, title, description, tone = 'dark', as: Heading = 'h2', className }: Props) {
  const light = tone === 'light'
  const warm = tone === 'warm'
  return (
    <Reveal className={cn('max-w-2xl', className)}>
      <p className={cn('eyebrow', light ? 'text-arena' : warm ? 'text-militar' : 'text-salvia-700')}>{eyebrow}</p>
      <Heading className={cn('mt-3 font-serif text-3xl leading-tight font-semibold sm:text-4xl', light ? 'text-marfil' : warm ? 'text-cafe' : 'text-bosque')}>{title}</Heading>
      {description && <p className={cn('mt-4 text-lg leading-8', light ? 'text-salvia-200/90' : warm ? 'text-cafe-700' : 'text-pizarra')}>{description}</p>}
    </Reveal>
  )
}
