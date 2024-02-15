<template>
  <div>
    {{ data }}
    <br />
    <br />
    -----------------------------
    <br />
    <NuxtLink :to="`/courses/${route.params.courses}/`">內頁介紹</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/A`">A</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/B`">B</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/C`">C</NuxtLink>
    <br />
    -----------------------------
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.courses}`
);
</script>

<style scoped>
a {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
