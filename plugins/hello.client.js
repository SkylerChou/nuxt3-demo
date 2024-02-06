export default defineNuxtPlugin((nuxtApp) => ({
  // 注入方法到 Nuxt
  provide: {
    hello: (msg) => `Hello ${msg}`
  }
}))
