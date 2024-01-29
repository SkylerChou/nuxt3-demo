<template>
  <h1>首頁 : {{ store.count }}</h1>
  <button @click="store.addCount">Add</button>

  <!-- Nuxt 自動 import -->
  <Home />
  <Box />
</template>

<script setup>
// const {count, addCount}=useAddCount()

const store=useHomeStore()
</script>

<style>

</style>