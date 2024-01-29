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
  }, 
  // 可以自己新增其他自己想 auto import 的資料夾 (原本預設就有 composables 跟 utils 這兩個資料夾，所以寫不寫都可以)
  "imports": {
    "dirs": ['stores']
  }


})
