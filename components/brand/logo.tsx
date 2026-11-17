import Image from 'next/image'
import type { CSSProperties } from 'react'
import { brand } from '@/content/media'
import { cn } from '@/lib/utils'

/*
 * Marca GNOSIS. Usa siempre estos componentes para mostrar el logo.
 * El logo es una imagen con fondo de papel marfil (sin transparencia): colócalo
 * sobre `bg-marfil`. La clase `brand-feather` desvanece solo los bordes de papel
 * (máscara de opacidad, no altera colores) para que no parezca una tarjeta pegada.
 */

/** Versión compacta para el encabezado: isotipo + nombre en texto. */
export function BrandCompact({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Image
        src={brand.isotype.src}
        alt=""
        width={brand.isotype.width}
        height={brand.isotype.height}
        priority
        className="brand-feather h-9 w-auto lg:h-10"
        // El isotipo tiene poco margen inferior: la palabra GNOSIS empieza justo debajo.
        style={{ '--feather-bottom': '1%' } as CSSProperties}
      />
      <span className="font-serif text-[1.35rem] leading-none font-semibold tracking-[0.08em] text-militar lg:text-2xl">{brand.name}</span>
    </span>
  )
}

/*
 * Piezas del armado del símbolo, en % de la imagen completa (1000 × 989): centro y radios de la
 * máscara elíptica y punto de partida. Son zonas del archivo original, no formas redibujadas.
 */
const pieces = [
  { at: '30% 38%', r: '21% 31%', from: '-6% 1.5%', d: 0 }, // ala izquierda (cobre y oro)
  { at: '70% 38%', r: '21% 31%', from: '6% 1.5%', d: 120 }, // ala derecha
  { at: '50% 33%', r: '13% 24%', from: '0 -5%', d: 260 }, // hojas verdes centrales
  { at: '51% 52%', r: '28% 9%', from: '0 5%', d: 380 }, // base donde convergen
]

/**
 * Logo completo (símbolo, GNOSIS y «Desarrollo integral»). Con `assemble` (solo la portada), el
 * símbolo se arma por zonas, un brillo lo recorre y se descubre el nombre (CSS en `globals.css`,
 * «Armado del logo»); termina en la imagen oficial intacta. Las capas son decorativas: el único
 * nombre accesible es el `alt` del logo final.
 */
export function BrandLogo({ className, priority = false, sizes, assemble = false }: { className?: string; priority?: boolean; sizes?: string; assemble?: boolean }) {
  const image = { src: brand.full.src, width: brand.full.width, height: brand.full.height, sizes }
  return (
    <span className={cn('relative isolate block', className)}>
      {/* Halo con el tono claro del papel: suaviza la transición entre el logo y el fondo. */}
      <span aria-hidden="true" className="absolute -inset-[10%] -z-10 bg-[radial-gradient(closest-side,var(--color-marfil-papel)_55%,transparent)]" />
      {/* Con armado, la máscara de bordes va en el contenedor para aplicarse a todas las capas por igual. */}
      <span className={cn('relative block', assemble && 'logo-build brand-feather')}>
        <Image {...image} alt={brand.full.alt} priority={priority} className={cn('logo-final h-auto w-full', !assemble && 'brand-feather')} />
        {assemble && (
          <span aria-hidden="true">
            {pieces.map(piece => (
              <Image
                key={piece.at}
                {...image}
                alt=""
                loading="eager"
                className="logo-layer logo-piece"
                style={{ '--at': piece.at, '--r': piece.r, '--from': piece.from, '--d': `${piece.d}ms` } as CSSProperties}
              />
            ))}
            <Image {...image} alt="" loading="eager" className="logo-layer logo-symbol" />
            <Image {...image} alt="" loading="eager" className="logo-layer logo-sheen" />
            <Image {...image} alt="" loading="eager" className="logo-layer logo-name" />
          </span>
        )}
      </span>
    </span>
  )
}
