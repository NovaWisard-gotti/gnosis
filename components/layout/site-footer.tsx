import Link from 'next/link'
import { BrandLogo } from '@/components/brand/logo'
import { Icon } from '@/components/icon'
import { company } from '@/content/company'
import { site } from '@/content/site'
import { contactChannels } from '@/content/contact'

export function SiteFooter() {
  return (
    <footer className="border-t border-arena-300/50 bg-marfil text-tinta">
      <div className="container-site grid gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-5">
          {/* Logo completo sobre marfil, a un tamaño que mantiene legible «Desarrollo integral». */}
          <Link href="/" aria-label={`${site.name}, ir al inicio`} className="block w-64 rounded-md sm:w-72">
            <BrandLogo sizes="288px" />
          </Link>
          <p className="mt-6 max-w-sm leading-7 text-pizarra">{site.purpose}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Valores">
            {company.values.map(value => (
              <li key={value.name} className="inline-flex items-center gap-1.5 rounded-full bg-salvia-100 px-3 py-1 text-xs font-semibold text-militar">
                <Icon name={value.icon} className="size-3.5" />
                {value.name}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Pie de página" className="lg:col-span-3 lg:pt-6">
          <h2 className="eyebrow text-cobre-700">Navegación</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-1">
            {site.nav.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="text-pizarra transition-colors hover:text-militar">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4 lg:pt-6">
          <h2 className="eyebrow text-cobre-700">Contacto</h2>
          <ul className="mt-5 grid gap-3 text-sm">
            {contactChannels.map(channel => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-3"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-salvia-100 text-militar">
                    <Icon name={channel.icon} className="size-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-pizarra">{channel.label}</span>
                    <span className="block font-semibold text-militar group-hover:underline">{channel.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-pizarra">
            {site.legalName}
            <br />
            {site.location}
          </p>
        </div>
      </div>

      <div className="bg-salvia-100">
        <div className="container-site flex flex-col gap-2 py-5 text-xs leading-5 text-pizarra sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <p className="max-w-md sm:text-right">{site.footerNote}</p>
        </div>
      </div>
    </footer>
  )
}
