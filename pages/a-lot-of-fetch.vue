<template>
  <div>
    <h1>多個 API 請求</h1>
    <div>{{ orgsData }}</div>
    <div>------------------</div>
    <div>{{ reposData }}</div>
  </div>
</template>

<script setup>
/**
 * API 少的時候使用此方式，還不會有什麼問題
 */
// const { data: orgsData } = await useFetch(`https://api.github.com/orgs/nuxt`);
// const { data: repoData } = await useFetch(`https://api.github.com/orgs/nuxt/repos`);

/**
 * 串接多支 API 建議使用的方法
 */
const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  useFetch('https://api.github.com/orgs/nuxt'),
  useFetch('https://api.github.com/orgs/nuxt/repos')
])
</script>

<style scoped></style>
