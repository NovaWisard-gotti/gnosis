import {
  AtSign,
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  ClipboardList,
  Code,
  Coffee,
  Egg,
  Feather,
  Globe,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  HeartPulse,
  IdCard,
  Laptop,
  Lightbulb,
  Mail,
  MessageCircle,
  ShieldCheck,
  UserRound,
  UtensilsCrossed,
  Zap,
  type LucideProps,
} from 'lucide-react'
import type { IconName } from '@/content/types'

const icons: Record<IconName, typeof Zap> = {
  AtSign, BadgeCheck, Briefcase, Building2, Calculator, ClipboardList, Code, Coffee, Egg, Feather, Globe, GraduationCap,
  HandHeart, Handshake, Heart, HeartPulse, IdCard, Laptop, Lightbulb, Mail, MessageCircle, ShieldCheck, UserRound,
  UtensilsCrossed, Zap,
}

/** Resuelve un icono por el nombre usado en `content/`. */
export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name]
  return <Component aria-hidden="true" {...props} />
}
