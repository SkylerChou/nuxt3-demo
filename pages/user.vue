<template>
  <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
  </Head>

  <h1>user</h1>
</template>

<script setup>
definePageMeta({
  // 共用的 middleware
  middleware: ['auth'],
});

// 可參考 https://nuxt.com/docs/getting-started/seo-meta#components
const res = await useFetch("https://vue-lessons-api.vercel.app/seo/user");

const title = computed(() => res.data.value.title);
const description = computed(() => res.data.value.description);

</script>

<style>

</style>