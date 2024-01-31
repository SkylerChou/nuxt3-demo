<template>
  <h1>首頁 : {{ store.count }}</h1>
  <button @click="store.addCount">Add</button>
  <!-- 
    如果只要在客戶端渲染，要加上 ClientOnly，不然伺服器會報錯
    ClientOnly 是可以讓你指定你的DOM只在 Clinet 渲染，不在 Server 端渲染
  -->
  <ClientOnly>
    <h2>{{$hello("Skyler")}}</h2>
  </ClientOnly>
  <h2 v-timeformat="1680574081915"></h2>
  <VDatePicker v-model='selectedDate' />
  <div></div>

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
</script>

<style>

</style>