// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 設定只有在 global 下才自動引入
  "components": {
  "dirs": [
    {
        "path": "~/components/global",
        "global": true
    }
  ]
}

})
