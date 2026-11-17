import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsapp, whatsappLink } from '@/content/contact'
import { cn } from '@/lib/utils'

type Props = {
  variant?: 'brand' | 'sand' | 'outline-brand'
  className?: string
  onClick?: () => void
  /** Texto del botón; por defecto `whatsapp.ctaLabel`. */
  label?: string
  /** Mensaje inicial de la conversación. */
  message?: string
}

/** Botón de WhatsApp. Número y texto en `content/contact.ts`. */
export function WhatsAppButton({ variant = 'brand', className, onClick, label = whatsapp.ctaLabel, message }: Props) {
  return (
    <Button asChild variant={variant} size="pill" className={cn('h-12', className)}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" onClick={onClick} aria-label={`${label}${label.includes('WhatsApp') ? '' : ' por WhatsApp'} (${whatsapp.display}, se abre en una nueva pestaña)`}>
        <MessageCircle data-icon="inline-start" />
        {label}
      </a>
    </Button>
  )
}
