import { seoSite } from '../seo.constants'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const route = useRoute()

  const fromEnv = (config.public.siteUrl as string | undefined)?.replace(/\/$/, '') ?? ''
  let base = fromEnv
  if (!base) {
    if (import.meta.server) {
      try {
        const u = useRequestURL()
        base = `${u.protocol}//${u.host}`.replace(/\/$/, '')
      } catch {
        base = ''
      }
    } else {
      base = `${window.location.protocol}//${window.location.host}`.replace(/\/$/, '')
    }
  }

  if (!base) return

  const path = route.path || '/'
  const canonical =
    path === '/' ? `${base}/` : `${base}${path.startsWith('/') ? path : `/${path}`}`

  const ogImage = `${base}/og-default.jpg`

  const graph = [
    {
      '@type': 'LegalService',
      '@id': `${base}/#legal`,
      name: seoSite.organizationName,
      url: `${base}/`,
      email: seoSite.email,
      telephone: seoSite.telephoneE164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: seoSite.streetAddress,
        addressLocality: seoSite.addressLocality,
        addressRegion: seoSite.addressRegion,
        addressCountry: seoSite.addressCountry,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Provincia de Buenos Aires',
      },
    },
    {
      '@type': 'Attorney',
      '@id': `${base}/#attorney`,
      name: seoSite.attorneyName,
      worksFor: { '@id': `${base}/#legal` },
      email: seoSite.email,
      telephone: seoSite.telephoneE164,
      sameAs: [seoSite.instagramUrl],
    },
  ]

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
    script: [
      {
        key: 'site-jsonld',
        type: 'application/ld+json',
        textContent: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      },
    ],
  })

  useSeoMeta({
    ogTitle: seoSite.title,
    ogDescription: seoSite.description,
    ogSiteName: seoSite.organizationName,
    ogType: 'website',
    ogUrl: canonical,
    ogLocale: 'es_AR',
    ogImage,
    ogImageSecureUrl: ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: seoSite.organizationName,
    twitterCard: 'summary_large_image',
    twitterTitle: seoSite.title,
    twitterDescription: seoSite.description,
    twitterImage: ogImage,
  })
})
