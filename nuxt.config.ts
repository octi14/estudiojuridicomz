import { fileURLToPath } from 'node:url'
import { productionSiteOrigin, seoSite } from './seo.constants'

// Tras `nuxt build`, Vite puede fallar al resolver `#app-manifest` en `manifest.js` (import en rama muerta).
// Mismo stub que usa Nuxt para el cliente (@nuxt/vite-builder → mocked-exports/empty).
const appManifestStub = fileURLToPath(
  new URL('./node_modules/mocked-exports/lib/empty.mjs', import.meta.url)
)

const trimTrailingSlash = (u: string) => u.replace(/\/$/, '')
const fromEnv = trimTrailingSlash(process.env.NUXT_PUBLIC_SITE_URL || '')
const publicSiteUrl =
  fromEnv ||
  (process.env.NODE_ENV === 'production' ? trimTrailingSlash(productionSiteOrigin) : '')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: publicSiteUrl || 'http://localhost:3000',
  },
  runtimeConfig: {
    public: {
      siteUrl: publicSiteUrl,
    },
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  robots: {
    allow: ['/'],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es-AR',
      },
      title: seoSite.documentTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: seoSite.description },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    resolve: {
      alias: {
        '#app-manifest': appManifestStub,
      },
    },
  },
})
