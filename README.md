# GNOSIS

Sitio institucional provisional construido con Next.js App Router, TypeScript, Tailwind CSS y shadcn/ui.

## Ejecutar

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

## Personalizar

Todo el contenido está en `content/` (ver `CLAUDE.md` para el detalle):

| Qué cambiar | Archivo |
| --- | --- |
| Nombre, razón social, descripción, propósito, menú | `content/site.ts` |
| Contacto público (WhatsApp y futuros canales) | `content/contact.ts` |
| Datos de la empresa, valores, principio de identidad, misión y visión | `content/company.ts` |
| Títulos y textos de cada página y del inicio | `content/pages.ts` |
| Áreas previstas (líneas futuras) | `content/work-lines.ts` |
| Proyectos (cada uno genera `/proyectos/[slug]`) | `content/projects.ts` |
| Equipo por roles | `content/team.ts` |
| Logo y fotografías | `content/media.ts` + archivos en `public/imagenes/` |
| Colores y tipografía | `app/globals.css`, `app/layout.tsx` |

**Logo:** el original está en `public/imagenes/marca/logo-gnosis.png`. El sitio usa derivados recortados en esa misma carpeta (logo completo, isotipo e iconos), configurados en `brand` dentro de `content/media.ts`. Para cambiarlo, reemplaza los archivos manteniendo los nombres o actualiza las rutas y dimensiones.

**Fotografías:** copia los archivos en `public/imagenes/fotos/`, regístralos en `photos` (`content/media.ts`) y asígnalos con `image` en el proyecto correspondiente.

## Antes de publicar

Pendiente: aprobación de misión y visión (hoy «Propuesta institucional»), fotografías reales de los proyectos, perfiles personales del equipo (con autorización), correo y redes sociales, confirmación de fechas y del local de Cafetería Genoveva, resultado de la evaluación de la granja de Acosvinchos y política de privacidad.
