import type { Metadata } from 'next'
import Link from 'next/link'
import { PageFrame } from '@/components/layout/page-frame'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = { title: 'Página no encontrada' }

export default function NotFound() {
  return (
    <PageFrame>
      <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="eyebrow text-salvia-700">Error 404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-bosque sm:text-5xl">No encontramos esta página</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-pizarra">Es posible que la dirección haya cambiado o que el contenido aún no esté publicado.</p>
        <Button asChild variant="brand" size="pill" className="mt-8 h-12">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </section>
    </PageFrame>
  )
}
