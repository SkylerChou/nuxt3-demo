<template>
  <div>
    <h1>useAsyncData</h1>
    <!-- 方法一 -->
    <!-- <button @click="refresh">refresh</button> -->
    <!-- 方法二 -->
    <button @click="refreshGetData">refresh</button>
    <div>{{ data }}</div>
  </div>
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

/**
 * ----- 方式一 -----
 * 提供四種狀態
 * data：回傳的資料。
 * pending：一個 Boolean，跟你說非同步是否完成了。
 * refresh：可用於刷新函數返回的資料的 function。
 * error：如果非同步失敗，回傳錯誤相關的資料
 */
// const { data, refresh } = await useAsyncData('nuxt3test', () => {
//   return $fetch('https://vue-lessons-api.vercel.app/seo/user')
// })

/**
 * ----- 方式二 -----
 * 使用 refreshNuxtData
 * 我們就可以透過這個唯一的key使用 refreshNuxtData
 * 去重新觸發抓取資料，更新頁面的顯示，而且在其他組件也都可以調用。
 */
const { data } = await useAsyncData('nuxt3test', () =>
  $fetch('https://vue-lessons-api.vercel.app/seo/user')
)

const refreshGetData = () => {
  refreshNuxtData('nuxt3test')
  console.log('refreshGetData')
}

// 這是會重複在 server 跟 client 觸發，所以不推薦這麼做
// const data = await $fetch("https://vue-lessons-api.vercel.app/seo/user");
</script>

<style scoped></style>
