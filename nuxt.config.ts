import { fileURLToPath } from 'node:url'

// Tras `nuxt build`, Vite puede fallar al resolver `#app-manifest` en `manifest.js` (import en rama muerta).
// Mismo stub que usa Nuxt para el cliente (@nuxt/vite-builder → mocked-exports/empty).
const appManifestStub = fileURLToPath(
  new URL('./node_modules/mocked-exports/lib/empty.mjs', import.meta.url)
)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Estudio Jurídico MZ & ASOC.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Gestión integral de sucesiones y contratos. Estudio Jurídico MZ & ASOC. — Dra. Micaela Zulkovski.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    resolve: {
      alias: {
        '#app-manifest': appManifestStub
      }
    }
  }
})
