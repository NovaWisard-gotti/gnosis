# GNOSIS · Convenciones del proyecto

Sitio institucional de **GNOSIS Desarrollo Integral E.I.R.L.** (Ayacucho, Perú; constituida en septiembre de 2026). Empresa nacida en Ayacucho que desarrolla empresas sostenibles en distintas áreas («Desde Ayacucho para el mundo»). Sus **divisiones** (el `sector` de cada empresa: hoy Alimentos y bebidas y Producción avícola) agrupan a sus **empresas** (Cafetería Genoveva, Granja de Acosvinchos), que comparten dirección, administración, contabilidad y soporte tecnológico. Propósito: desarrollar empresas sostenibles basadas en la fuerza de la colectividad y el ayni, para contribuir a transformar nuestra sociedad y apoyar a quienes más lo necesitan. Valores (dirección): honestidad, agilidad, simplicidad, apertura de pensamiento, seriedad, bondad y altruismo; **ayni** como principio transversal de reciprocidad; y respeto a la identidad (reconocer a cada persona por su nombre).

Redacción: no usar «en inicio de actividades», «empresa que recién comienza», «emprendimientos» ni «unidad de negocio». La transformación social es propósito y aspiración, nunca un resultado. Sin donaciones, recaudación ni funciones de pago.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript 5.7 (strict)
- Tailwind CSS 4 (configuración en `app/globals.css`, sin `tailwind.config`)
- shadcn/ui (`components/ui/`, estilo `base-nova`, primitivas `@base-ui/react`) · Lucide React
- Gestor: **pnpm** (`pnpm dev`, `pnpm build`, `pnpm start`). No cambies a npm/yarn ni actualices versiones mayores sin motivo.
- Fuentes con `next/font/google` (Cormorant Garamond para títulos, afín a las mayúsculas del logo; Manrope para texto, menú y botones). El build necesita red la primera vez para descargarlas.

## Reglas de contenido

- **Todo el texto editable vive en `content/`**, nunca escrito directamente en componentes ni páginas.
  - `site.ts`: nombre, razón social, ubicación, lema, descripción, propósito (`purpose` y `purposeDetail`), navegación, nota del pie.
  - `contact.ts`: **único lugar del contacto público** (hoy solo WhatsApp +51 986 259 038). Lo usan encabezado, inicio, Contacto y pie. Un canal sin `href` no se muestra.
  - `company.ts`: datos de la empresa, servicios compartidos, valores, `ayni` (con `summary` para el inicio), principio de identidad, misión y visión (textos base de la dirección; sin metas, cifras ni plazos).
  - `work-lines.ts`: áreas previstas a mediano/largo plazo (sin proyectos). Los sectores actuales salen de los proyectos.
  - `projects.ts`: empresas reales (en la web, «Nuestras empresas»; la ruta `/proyectos` se conserva por los enlaces publicados); cada objeto genera `/proyectos/[slug]`. `sector` es su división. `status` (etapa) no se muestra en tarjetas, solo como dato «Etapa» en su página; no lo cambies a «En operación» sin evidencia. `featuredProjectSlugs` define los del inicio. Opcionales: `image` (con `position` y `label`), `goals`, `inquiry` (botón «Consultar sobre el proyecto» con mensaje de WhatsApp), `references` (galería de fotos de terceros usadas como modelo; nunca como `image`) y `brand` (paleta propia, logo y galería; hoy solo Cafetería Genoveva).
  - `team.ts`: cargos con descripción, `image` (derivado `.webp` 4:5; sin ella, avatar neutro) y `name` solo cuando esté confirmado. Lo usan `/equipo` y el resumen del inicio.
  - `pages.ts`: cabeceras de cada página, textos del inicio, `sections` (títulos internos de Nosotros, Líneas de trabajo, Impacto y Contacto), `catalog` (filtro por división, contador y enlace de tarjetas) y `projectPage` (apartados de la página de cada empresa).
  - `media.ts`: marca (`brand`: logo, isotipo, favicons) y fotografías reales (`photos`, hoy vacío).
  - `types.ts`: tipos compartidos.
- **No inventar** información, nombres, fotografías, porcentajes, cifras ni resultados. Lo previsto se etiqueta como tal (`ProvisionalTag` «Previsto», `Fact.note`, `statusNote`, notas de cronograma). Nada de «próximamente», iconos vacíos ni enlaces ficticios.
- No publicar información contractual, remuneraciones, vínculos laborales ni tablas de accionistas o porcentajes.
- Proyectos: no presentar como asegurado lo que está en planificación/evaluación (local, fechas, esquema, escala). Áreas futuras: sin proyectos ficticios; la fundación de ayuda social aún no existe.
- Sin fotografía real, `ProjectVisual` muestra un panel con el icono del sector y «Imagen pendiente». No usar fotos de stock que sugieran personas o lugares reales.

## Páginas

El inicio (`app/page.tsx`) solo muestra **resúmenes** con enlace a cada página (los valores, solo como síntesis de nombres + el ayni breve; las descripciones van en `/nosotros#filosofia`). El contenido completo permanece en su página: `/nosotros`, `/lineas-de-trabajo`, `/proyectos`, `/proyectos/[slug]`, `/equipo`, `/impacto-social`, `/contacto`. Si añades una página, agrégala a `site.nav`.

## Componentes

- `components/layout/`: `PageFrame` (envuelve toda página), `SiteHeader` (cliente: menú móvil, enlace activo), `SiteFooter`.
- `components/sections/`: `PageHero` (cabecera interna con migas de pan), `SectionHeading`, `common.tsx` (`TextLink`, `ProvisionalTag`, `Notice`, `ContactCta`), `purpose.tsx` (`SharedServices`, `ValuesSummary`, `ValuesList`, `AyniPrinciple`, `IdentityPrinciple`, `FactList`).
- `components/home/home-sections.tsx`: secciones del inicio.
- `components/projects/`: `ProjectCard`, `ProjectVisual`, `ProjectsExplorer` (cliente, filtro por división). Para proyectos con `brand`: `project-brand.tsx` (`BrandHero`, `BrandIdentity`), `project-gallery.tsx` (cliente: galería y ampliación con `Dialog` de Base UI; `tone` `gnosis` o `genoveva`; con ≤3 imágenes, anchos proporcionales a su formato) y `project-theme.ts` (clases por paleta).
- `components/team/team-card.tsx`: `TeamCard` y `TeamPortrait` (foto 4:5 o avatar neutro con el icono del cargo).
- `components/contact/whatsapp-button.tsx`: botón «Escríbenos por WhatsApp» (datos de `content/contact.ts`). En el encabezado aparece desde `xl`; por debajo, en el menú móvil.
- `components/brand/logo.tsx`: **único punto para mostrar la marca**. `BrandCompact` (isotipo + nombre, encabezado) y `BrandLogo` (logo completo: portada y pie). No insertes el logo con `<img>` sueltos.
- `components/icon.tsx`: iconos por nombre (`IconName`). Para un icono nuevo, añádelo al tipo y al mapa.
- `components/motion/`: animaciones con **Motion** (`motion/react`; no se usa GSAP ni otra biblioteca). Lo sencillo va en CSS (`app/globals.css`).
  - `MotionProvider` (en `app/layout.tsx`): `LazyMotion` (`domAnimation`, usa `m.*`, nunca `motion.*`) y `reducedMotion="user"`. Marca `<html>` con `data-motion` (las animaciones arrancaron) y `data-navigated` (tras navegar dentro del sitio: activa la transición breve `page-in` de `#contenido`; la primera carga no la tiene).
  - Cabeceras (portada, `PageHero`, `BrandHero`): entrada en **CSS** con `animate-rise` y `style={rise(ms)}` de `timing.ts`, y `SplitWords` de `entrance.tsx`. Parte de opacidad 0,35 y no espera a JavaScript: el mensaje se ve desde el primer momento. No uses `Reveal` en la primera vista.
  - `Reveal`: aparición al entrar en pantalla (`up`, `fade`, `scale`, `delay`; desplazamientos cortos). En cuadrículas, `delay={stagger(i, columnas)}`.
  - `backdrop.tsx`: `HomeBackdrop` (portada: halos, hilos y red de nodos en tres capas `.depth-layer` que responden al puntero con ratón y al scroll) y `HeroLines` (hilos con deriva lenta en las cabeceras internas). Formas calculadas sin azar, para que servidor y cliente coincidan.
  - Armado del logo de portada (`BrandLogo assemble`, CSS «Armado del logo» en `globals.css`, ~2,6 s): no hay logo vectorial, así que son copias del mismo archivo con máscaras difusas (cuatro zonas del símbolo que llegan desde distintas direcciones, cierre, brillo y nombre descubierto de izquierda a derecha) y termina en la imagen oficial intacta. Se arma en cada carga o recarga de la pestaña; `HeroLogo` marca `<html data-logo-seen>` al terminar o al salir de Inicio, así que al volver navegando por el sitio aparece terminado. Sin armado con movimiento reducido. Si llega el logo en SVG con piezas separadas, sustituir las máscaras por sus grupos.
  - `interactive.tsx`: `HeroLogo` (solo desplazamiento con puntero y scroll; **el logo nunca se inclina, escala ni deforma**), `Parallax` (solo elementos decorativos) y `Spotlight` (brillo que sigue al puntero; su padre debe ser `group relative`).
  - `text-effects.tsx`: `ScrollText` (el propósito se ilumina con el scroll).
  - Interacción unificada: variantes `lit:` (la propia tarjeta) y `group-lit:` (sus hijos) de `globals.css` = hover con ratón + foco de teclado dentro. Úsalas en vez de `hover:` en tarjetas y filas enlazadas, y añade `active:` para respuesta táctil. Los iconos `data-icon` de los botones se mueven solos (CSS). En fondos oscuros, la clase `on-dark` vuelve dorado el foco.
  - Encabezado: fondo y sombra al bajar, se oculta al seguir bajando (sin cambiar de altura) y vuelve al subir o al recibir foco; línea dorada de progreso. Menú móvil: foco al primer enlace, Tab atrapado en el encabezado, Escape cierra y devuelve el foco, resto de la página `inert`.
  - Respaldos: el `<noscript>` del layout y la clase `motion-off` (si a los 4 s no hay `data-motion`) muestran todo `[data-reveal]`.
  - Movimiento reducido: sin retardos, deriva, parallax ni respuesta al puntero; el texto con scroll se ve completo.
  - Mantén las animaciones sobrias: `opacity`, `transform`/`translate`/`scale`, breves (< 1 s); lo ambiental, lento y sutil. Sin pantallas de carga, audio ni vídeo de fondo.
- Usa Server Components por defecto; `'use client'` solo donde hay estado.
- `.respaldo/` guarda los componentes anteriores (no se compilan). Se puede borrar.

## Diseño

- Paleta tomada del logo, como tokens de Tailwind en `app/globals.css` (`@theme`, con contrastes medidos en comentarios):
  - `militar` (#47512C, verde oliva oscuro): botones, navegación, textos destacados. `militar-700` para hover.
  - `bosque` (#2B321F, oliva profundo): títulos y bandas oscuras.
  - `marfil` (#F2EAE3, igual al papel del logo): fondo principal. `marfil-50` tarjetas. `marfil-papel` halo del logo.
  - `salvia` / `salvia-700` / `salvia-200` / `salvia-100`: superficies secundarias y texto secundario (`salvia-700`).
  - `arena` (dorado suave #C9A67A) y `cobre` (#A75F33): **solo acentos** (líneas, iconos, subrayado activo, botón `sand` sobre fondos oscuros).
  - `tinta` y `pizarra`: texto principal y secundario.
  - `crema`, `madera`, `cafe` (y variantes): **solo en la página de Cafetería Genoveva** y sus componentes de marca. Encabezado, pie y el resto del sitio conservan la identidad GNOSIS; los detalles verde oliva (`militar`) enlazan ambas.
- **No uses hexadecimales sueltos** en componentes. Colores planos: nada de degradados metálicos imitando el logo.
- Contraste: texto pequeño sobre marfil solo con `tinta`, `bosque`, `militar`, `pizarra`, `salvia-700` o `cobre-700`. Nunca `arena`, `cobre` ni `salvia` para texto pequeño sobre marfil. Sobre `bosque`/`militar`, `arena` y `salvia-200` son válidos.
- Utilidades propias: `container-site` (ancho máximo + márgenes de 16 px en celulares), `eyebrow` (antetítulo, espaciado moderado) y `brand-feather` (máscara de opacidad que funde los bordes de papel del logo; no altera colores).
- El logo no tiene transparencia: colócalo siempre sobre `bg-marfil`. No le apliques filtros de color, `mix-blend` ni recoloreados.
- La portada no repite «GNOSIS» como título: el logo ya lo contiene. El `h1` es la propuesta de valor (`content/pages.ts → home.hero`).
- Botones: `<Button variant="brand|sand|outline-brand|outline-light" size="pill">`.
- Títulos con `font-serif` + `font-semibold`; texto con la sans por defecto. Solo tema claro.
- Móvil primero: verifica a 390 px de ancho, sin desplazamiento horizontal y con objetivos táctiles ≥ 44 px. En móvil el logo de portada se limita a ~240 px para no ocupar toda la pantalla.

## Imágenes

- Fotografías reales en `public/imagenes/fotos/`, registradas en `photos` (`content/media.ts`) y asignadas con `image` en proyectos. Las del equipo están en `public/imagenes/equipo/`: originales `.JPG` sin modificar y derivados `.webp` 720×900 (recorte de cabeza a cintura) asignados en `content/team.ts`. No hay fotos remotas configuradas.
- Proyectos en `public/imagenes/proyectos/<proyecto>/`: los `.png` entregados son originales (no modificar); el sitio usa derivados `.webp` a tamaño completo y `-640.webp` para miniaturas. Las imágenes de Genoveva son propuestas conceptuales: se etiquetan como tales y no se extraen de ellas precios, cartas ni productos. `acosvinchos/` contiene fotos de una granja de Pichari usada como referencia (originales `.jpeg`, ligeros, servidos tal cual + miniaturas `-640.webp`): no son de GNOSIS ni del proyecto; no deducir capacidad, razas ni condiciones de ellas.
- Marca en `public/imagenes/marca/`: `logo-gnosis.png` es el **original (no modificar)**. Derivados por recorte/redimensión, sin filtros: `logo-gnosis-completo.webp`, `gnosis-isotipo.webp` (recorte del símbolo, y≈73–744 del original; la palabra empieza en y≈752) y `gnosis-apple-icon.png` (símbolo sobre papel, fondo opaco para iOS). Si cambia el logo, regenera los derivados con `sharp` y actualiza `brand` en `content/media.ts`.
- Favicon: originales `marca/black.png` (símbolo negro) y `marca/white.png` (símbolo blanco), con transparencia real; **no modificar**. Derivados en `marca/favicon/`: solo el isotipo superior (sin «GNOSIS», lema ni adornos), centrado en lienzo cuadrado transparente con margen del 6 %: `icono-negro-{16,32,192}.png` → `prefers-color-scheme: light`; `icono-blanco-{16,32,192}.png` → `dark`; `isotipo-{negro,blanco}.png` recortes a tamaño completo y versiones de 512 px. `public/favicon.ico` (16/32/48, símbolo negro sobre placa marfil) es el respaldo sin enlace. Se configuran en `brand.icons` (`content/media.ts`) y `metadata.icons` (`app/layout.tsx`). No añadas `app/favicon.ico` ni `app/icon.*`: Next los enlazaría automáticamente y competirían con los iconos por tema.
- Imagen social: `marca/gnosis-og.jpg` (1200 × 630, logo completo con bordes fundidos sobre marfil, sin filtros), registrada en `brand.og`.

## SEO

- Textos en `content/seo.ts`: dominio canónico `https://www.gnosis.com.pe` (`siteUrl`; gnosis.com.pe sin www redirige desde Vercel), idioma `es-PE`, título y descripción del inicio y de cada página interna. Las empresas usan su `name` y `summary`.
- `lib/seo.ts` → `pageMetadata({ title, description, path })`: úsalo en **cada página nueva** (título, descripción, canónica, Open Graph y Twitter coherentes). Plantilla de títulos: «Nuestras empresas en Ayacucho | GNOSIS Desarrollo Integral». `metadataBase` y `robots` en `app/layout.tsx`; la 404 la marca `noindex` Next.
- `app/sitemap.ts` (todas las rutas de `site.nav` + cada empresa; sin `lastModified` porque no hay fechas reales por página) y `app/robots.ts` (rastreo completo + sitemap). Una página nueva en `site.nav` entra sola en el sitemap.
- El `summary` de cada empresa es también su descripción en Google: empieza nombrando su etapa real («en planificación», «en evaluación») para no leerse, fuera de contexto, como negocio en funcionamiento. Actualízalo si cambia el `status`.
- Redacción SEO: la identidad va antes que las palabras clave. Misión, visión, propósito, valores, ayni y respeto a la identidad no se reescriben para posicionar. No usar «emprendimientos» (regla de redacción) ni presentar a GNOSIS como ONG, fundación o consultora.
- JSON-LD solo en el inicio (`lib/structured-data.ts`): `Organization` + `WebSite` con datos de `content/`. Sin dirección física, reseñas ni redes: cuando existan perfiles oficiales, añádelos en `sameAs`. No marcar empresas «En planificación/evaluación» como negocios en funcionamiento (`LocalBusiness`, horarios, etc.).
- `public/imagenes/logo/` conserva la copia que se entregó inicialmente y el símbolo provisional antiguo (ya no se usan). `public/apple-icon.png`, `public/icon*` y `placeholder-*` son genéricos heredados sin uso.

## Verificación

`npx tsc --noEmit` y `pnpm build` deben pasar (el build verifica tipos: no reactivar `ignoreBuildErrors`). No publicar, desplegar ni conectar dominio sin autorización expresa.

## Despliegue

Vercel, proyecto `gnosis-web` (cuenta Hobby), producción en `https://gnosis-web-omega.vercel.app`. `vercel.json` fija el preset `nextjs` (sin él, Vercel publica un sitio vacío con 404). `.vercelignore` excluye secretos, archivos de trabajo y originales sin uso; si un original pasa a usarse en el sitio, quítalo de esa lista. `.vercel/` y `.env.local` (token OIDC que crea `vercel link`) son locales y no se suben. El dominio `gnosis.com.pe` tiene correo de Google Workspace: no modificar sus DNS (registros MX, SPF, DKIM) al conectarlo.
