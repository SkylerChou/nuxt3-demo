<template>
  <h1>首頁 : {{ store.count }}</h1>
  <button @click="store.addCount">Add</button>
  <h2>{{$hello("Skyler")}}</h2>
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

const selectedDate=ref(new Date());
</script>

<style>

</style>