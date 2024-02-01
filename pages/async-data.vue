<template>
  <h1>useAsyncData</h1>
  {{ data }}
</template>

<script setup>

/** 
 * 如果只是一般的取資料 使用 useFetch
 * 但如果要客製化 key 值、或其他非同步操作要使用 useAsyncData
 */

/**
 * useAsyncData 第一個參數為 Key
 * key ：唯一的值，防止在 server 端和 client 端觸發兩次資料獲取，可帶可不帶，
 * 不帶的話會為自動幫你生成一個對應檔案名和編號的唯一 key，但是會建議都要帶。
 */
const { data } = await useAsyncData('nuxt3test', () => {
  return $fetch('https://vue-lessons-api.vercel.app/seo/user')
})

</script>

<style scoped>

</style>