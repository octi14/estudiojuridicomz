/** Resolución Node del virtual `#internal/nuxt/paths` (p. ej. si se ejecuta `.nuxt/dist/server/server.mjs`). */
import { joinRelativeURL } from 'ufo'

const getAppConfig = () => ({
  baseURL: '/',
  buildAssetsDir: '/_nuxt/',
  cdnURL: ''
})

export const baseURL = () => getAppConfig().baseURL
export const buildAssetsDir = () => getAppConfig().buildAssetsDir
export const buildAssetsURL = (...path) =>
  joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path)
export const publicAssetsURL = (...path) => {
  const appConfig = getAppConfig()
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase
}
