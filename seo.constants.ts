/** URL pública del sitio en producción (fallback si no está `NUXT_PUBLIC_SITE_URL`). Sin barra final. */
export const productionSiteOrigin = 'https://estudiojuridicomz.com.ar' as const

/** Metadatos SEO compartidos (config/head; no alteran el copy visible de las páginas). */
export const seoSite = {
  /** Título de la pestaña del navegador (el que había antes del trabajo SEO). */
  documentTitle: 'Estudio Jurídico MZ & ASOC.',
  /** Título para Open Graph / Twitter y alineado con la meta description SEO. */
  title: 'Abogada Sucesiones Villa Gesell | Herencias y Contratos | Estudio Jurídico MZ',
  description:
    'Asesoramiento en sucesiones e herencias en Villa Gesell y Provincia de Buenos Aires. Contratos, derecho civil y derecho digital. Atención con turno previo.',
  serviceType: ['Sucesiones e herencias', 'Contratos', 'Derecho civil', 'Derecho digital'] as const,
  knowsAbout: ['Sucesiones', 'Herencias', 'Derecho sucesorio', 'Contratos', 'Derecho civil'] as const,
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
