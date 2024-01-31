// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 全域的 meta tag 設定，可參照 https://nuxt.com/docs/api/nuxt-config#head
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Nuxt3 高效入門全攻略",
      "meta": [
        { "name": "description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
        { "property": "og:title", "content": "Nuxt3 高效入門全攻略" },
        { "property": "og:url", "content": "http://localhost:3000/" },
        { "property": "og:description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
      ]
    }
  },

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
  },
  "modules": ['@pinia/nuxt'],
})
