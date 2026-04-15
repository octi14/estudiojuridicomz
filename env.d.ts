/// <reference types="nuxt" />
/// <reference types="vite/client" />

import 'vue'

declare module '*.svg' {
  const src: string
  export default src
}
