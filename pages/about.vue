<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script setup>
// 參考官方文件 - https://nuxt.com/docs/api/composables/use-head#usehead
// useHead({
//   title: "關於我們 About - Nuxt3 高效入門全攻略",
//   meta: [
//     { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
//     { property: "og:url", content: "http://localhost:3000/about" },
//     { property: "og:image", content: "http://localhost:3000/share.jpg" },
//     { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//     { property: "og:description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//   ],
// });

// Nuxt 的新方法，可以直接用駝峰命名設定，參考官方文件 - https://nuxt.com/docs/getting-started/seo-meta#useseometa
// useSeoMeta({
//   title: "About - Nuxt3 高效入門全攻略",
//   description: "關於我們 - 最棒的Nuxt3的線上課程",
//   ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
//   ogTitle: "About - Nuxt3 高效入門全攻略",
// });


const res = await useFetch('https://vue-lessons-api.vercel.app/seo/about');

// useServerSeoMeta 會讓改變初始加載 meta tag，但 client 不會有改變，顯示會是 global meta tag。
useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});

// 單頁面引入外部資源，可參照 https://nuxt.com/docs/getting-started/seo-meta#body-tags
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
    },
  ],
});


</script>

<style scoped></style>
