<template>
  <h1>首頁 : {{ store.count }}</h1>

  <div>{{ data }}</div>
  
  <button @click="store.addCount">Add</button>
  <!-- 
    如果只要在客戶端渲染，要加上 ClientOnly，不然伺服器會報錯
    ClientOnly 是可以讓你指定你的DOM只在 Clinet 渲染，不在 Server 端渲染
  -->
  <ClientOnly>
    <h2>{{ $hello("Skyler") }}</h2>
  </ClientOnly>

  <NuxtLink to="/user">User</NuxtLink> | <NuxtLink to="/about">About</NuxtLink> | <NuxtLink to="/async-data">Async-data</NuxtLink>

  <h2 v-timeformat="1680574081915"></h2>
  <VDatePicker v-model='selectedDate' />

  <!-- Nuxt 自動 import -->
  <Home />
  <Box />
</template>

<script setup>
// const {count, addCount}=useAddCount()

// 取 plugin 方法前面都要加 $
const { $hello } = useNuxtApp();

const store = useHomeStore();

const selectedDate = ref(new Date());

const { data } = await useFetch("https://vue-lessons-api.vercel.app/seo/user",{
  onRequest({request,options}){
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization=`Bearer 1234567890`

    console.log(options.headers.authorization);
  },
  onResponse({request,response,options}){
    // 處理回傳資料
    return response._data;
  }
});


</script>

<style>

</style>