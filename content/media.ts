import type { ImageAsset } from './types'

/*
 * Marca oficial. Original: public/imagenes/marca/logo-gnosis.png (1254×1254, no se modifica).
 * Los demás archivos son derivados por recorte y redimensión, sin filtros de color:
 *   logo-gnosis-completo.webp  logo completo con margen de papel (1000×989)
 *   gnosis-isotipo.webp        solo el símbolo vegetal, sin la palabra (308×240)
 *   gnosis-apple-icon.png      símbolo sobre papel, para accesos directos en iOS (requiere fondo opaco)
 *
 * Favicon (public/imagenes/marca/favicon/): derivados del isotipo superior de
 * black.png (símbolo negro) y white.png (símbolo blanco), originales sin modificar.
 * Fondo transparente, símbolo centrado en lienzo cuadrado con margen del 6 %.
 *   icono-negro-*.png   pestaña con tema claro
 *   icono-blanco-*.png  pestaña con tema oscuro
 *   public/favicon.ico  respaldo 16/32/48 px: símbolo negro sobre placa marfil (se ve en ambos temas)
 * Si recibes una versión nueva del logo, reemplaza estos archivos manteniendo
 * nombres, o cambia aquí las rutas y dimensiones.
 */
export const brand = {
  name: 'GNOSIS',
  descriptor: 'Desarrollo integral',
  original: '/imagenes/marca/logo-gnosis.png',
  full: { src: '/imagenes/marca/logo-gnosis-completo.webp', width: 1000, height: 989, alt: 'GNOSIS · Desarrollo integral' },
  isotype: { src: '/imagenes/marca/gnosis-isotipo.webp', width: 308, height: 240 },
  /** Imagen para redes sociales y buscadores (Open Graph): logo completo sobre marfil, 1200 × 630. */
  og: { src: '/imagenes/marca/gnosis-og.jpg', width: 1200, height: 630 },
  icons: {
    /** Símbolo oscuro para navegadores con tema claro. */
    light: { 16: '/imagenes/marca/favicon/icono-negro-16.png', 32: '/imagenes/marca/favicon/icono-negro-32.png', 192: '/imagenes/marca/favicon/icono-negro-192.png' },
    /** Símbolo blanco para navegadores con tema oscuro. */
    dark: { 16: '/imagenes/marca/favicon/icono-blanco-16.png', 32: '/imagenes/marca/favicon/icono-blanco-32.png', 192: '/imagenes/marca/favicon/icono-blanco-192.png' },
    apple: '/imagenes/marca/gnosis-apple-icon.png',
  },
}

/*
 * Fotografías reales de GNOSIS y sus proyectos. Por ahora no hay ninguna: el sitio
 * muestra paneles con iconos en su lugar. Para añadir una, copia el archivo en
 * public/imagenes/fotos/ y regístrala aquí, por ejemplo:
 *   cafeteria: { src: '/imagenes/fotos/cafeteria-genoveva.jpg', alt: 'Fachada de Cafetería Genoveva' },
 * Luego asígnala en content/projects.ts con `image: photos.cafeteria`.
 */
export const photos: Record<string, ImageAsset> = {}
