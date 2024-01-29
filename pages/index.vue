<template>
  <h1>首頁 : {{ store.count }}</h1>
  <h2>{{$hello("Skyler")}}</h2>
  <button @click="store.addCount">Add</button>

  <!-- Nuxt 自動 import -->
  <Home />
  <Box />
</template>

<script setup>
// const {count, addCount}=useAddCount()

// 取 plugin 方法前面都要加 $
const { $hello } = useNuxtApp()

const store=useHomeStore()
</script>

<style>

</style>