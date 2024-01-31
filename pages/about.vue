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

// Nuxt 的新方法，可以直接用駝峰命名設定
useSeoMeta({
  title: "About - Nuxt3 高效入門全攻略",
  description: "關於我們 - 最棒的Nuxt3的線上課程",
  ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
  ogTitle: "About - Nuxt3 高效入門全攻略",
});

</script>

<style scoped></style>
