// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const config: object = {
  /** 翻新舊專案，使用 vite 的設定來帶入 process.env */
  vite: {
    define: {
      'process.env': process.env
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: '[dir]/[name]',
        customDomId: '__svg__icons__dom__'
      })
    ]
  },
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: false },
  // 全域的 meta tag 設定，可參照 https://nuxt.com/docs/api/nuxt-config#head
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt3 高效入門全攻略',
      meta: [
        { name: 'description', content: '這是 Mike 的 Nuxt3 高效入門全攻略課程' },
        { property: 'og:title', content: 'Nuxt3 高效入門全攻略' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        { property: 'og:description', content: '這是 Mike 的 Nuxt3 高效入門全攻略課程' }
      ],
      // global 引入外部資源
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
          async: true
        }
      ]
    }
  },

  // 設定只有在 global 下才自動引入
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true
      }
    ]
  },
  // 可以自己新增其他自己想 auto import 的資料夾 (原本預設就有 composables 跟 utils 這兩個資料夾，所以寫不寫都可以)
  imports: {
    dirs: ['stores']
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate']
      }
    ]
  ],
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    components: fileURLToPath(new URL('./components', import.meta.url))
  }
};

export default defineNuxtConfig(config);
