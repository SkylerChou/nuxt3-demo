<template>
  <div>
    <!-- <h1>多個 API 請求</h1>
    <div>{{ orgsData }}</div>
    <div>------------------</div>
    <div>{{ reposData }}</div> -->
    <h1>Axios</h1>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
import axios from 'axios';
/**
 * API 少的時候使用此方式，還不會有什麼問題
 */
// const { data: orgsData } = await useFetch(`https://api.github.com/orgs/nuxt`);
// const { data: repoData } = await useFetch(`https://api.github.com/orgs/nuxt/repos`);

/**
 * 串接多支 API 建議使用的方法
 */
// const [{ data: orgsData }, { data: reposData }] = await Promise.all([
//   useFetch('https://api.github.com/orgs/nuxt'),
//   useFetch('https://api.github.com/orgs/nuxt/repos')
// ]);

/**
 * 通常用在舊專案更新，沒有特需的需求建議使用內建的 fetch 就好
 *
 * ※ 注意
 * 使用 axios 的話，最後要回傳 response data 的資料，如果回傳整個 axios.get 會直接壞掉
 */
const { data } = await useAsyncData('axiostest', async () => {
  const res = await axios.get('https://api.github.com/orgs/nuxt');
  return res.data;
});
</script>

<style scoped></style>
