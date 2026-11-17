import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { MotionProvider } from '@/components/motion/motion-provider'
import { brand } from '@/content/media'
import { seo } from '@/content/seo'
import { site } from '@/content/site'
import { ogImage } from '@/lib/seo'
import './globals.css'

// Serif clásica, afín a las mayúsculas romanas del logo; sans legible para texto, menú y botones.
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-cormorant', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

function iconSet(urls: Record<number, string>, media: string) {
  return Object.entries(urls).map(([size, url]) => ({ url, media, sizes: `${size}x${size}`, type: 'image/png' }))
}

/*
 * Metadatos comunes (textos en content/seo.ts). Cada página define los suyos con `pageMetadata`
 * (lib/seo.ts): título, descripción, URL canónica, Open Graph y Twitter. Lo de aquí es el respaldo
 * (por ejemplo, para la página 404, que Next marca como `noindex`).
 */
export const metadata: Metadata = {
  // URLs absolutas (canónicas, Open Graph) siempre con el dominio oficial, también en la copia de vercel.app.
  metadataBase: new URL(seo.siteUrl),
  // Inicio: título propio. Páginas internas: «Nuestras empresas en Ayacucho | GNOSIS Desarrollo Integral».
  title: { default: seo.home.title, template: `%s | ${seo.brandName}` },
  description: seo.home.description,
  applicationName: seo.brandName,
  authors: [{ name: site.legalName, url: seo.siteUrl }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: { type: 'website', siteName: seo.brandName, locale: seo.locale, title: seo.home.title, description: seo.home.description, images: [ogImage] },
  twitter: { card: 'summary_large_image', title: seo.home.title, description: seo.home.description, images: [ogImage] },  /*
   * Favicons por tema. El orden importa: los navegadores que ignoran `media`
   * suelen usar el último enlace, así que el símbolo oscuro (tema claro) va al final.
   * public/favicon.ico queda como respaldo sin enlace, para clientes que lo piden directamente.
   */
  icons: {
    icon: [
      ...iconSet(brand.icons.dark, '(prefers-color-scheme: dark)'),
      ...iconSet(brand.icons.light, '(prefers-color-scheme: light)'),
    ],
    apple: brand.icons.apple,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2eae3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // `suppressHydrationWarning`: el respaldo de abajo, HeroLogo y MotionProvider añaden atributos a <html>.
    <html lang={seo.language} className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {/* Sin JavaScript, el contenido animado se muestra en su estado final. */}
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}'}</style>
        </noscript>
        {/* Respaldo: si a los 4 s las animaciones no arrancaron (error de JavaScript), se muestra todo. */}
        <script dangerouslySetInnerHTML={{ __html: "setTimeout(function(){var d=document.documentElement;if(!d.hasAttribute('data-motion'))d.classList.add('motion-off')},4000)" }} />        <MotionProvider>{children}</MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
