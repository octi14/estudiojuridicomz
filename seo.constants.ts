/** URL pública del sitio en producción (fallback si no está `NUXT_PUBLIC_SITE_URL`). Sin barra final. */
export const productionSiteOrigin = 'https://estudiojuridicomz.com.ar' as const

/** Metadatos SEO compartidos (config/head; no alteran el copy visible de las páginas). */
export const seoSite = {
  /** Título de la pestaña del navegador (el que había antes del trabajo SEO). */
  documentTitle: 'Estudio Jurídico MZ & ASOC.',
  /** Título para Open Graph / Twitter y alineado con la meta description SEO. */
  title: 'Abogada en Villa Gesell | Sucesiones y Contratos | Estudio Jurídico MZ',
  description:
    'Asesoramiento jurídico en Villa Gesell: sucesiones, contratos, derecho civil, familia y derecho digital. Atención con turno previo.',
  organizationName: 'Estudio Jurídico MZ & ASOC.',
  attorneyName: 'Dra. Micaela Zulkovski',
  email: 'micaelazulkovski@gmail.com',
  telephoneE164: '+5492255507767',
  streetAddress: 'Av. 3 Nro 2467',
  addressLocality: 'Villa Gesell',
  addressRegion: 'Buenos Aires',
  addressCountry: 'AR',
  instagramUrl: 'https://www.instagram.com/estudiojuridicomz',
} as const
