export default defineNuxtPlugin((nuxtApp) => {

  return {
    // 注入方法到 Nuxt
    provide:{
      hello:(msg)=>`Hello ${msg}`
    }
  }
})
