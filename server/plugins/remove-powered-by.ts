export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:response', (response: { headers?: Record<string, string> }) => {
    if (response.headers && 'x-powered-by' in response.headers) {
      delete response.headers['x-powered-by']
    }
  })
})
