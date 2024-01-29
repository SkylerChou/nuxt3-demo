<template>
  <h1>首頁 : {{ count }}</h1>
  <button @click="addCount">Add</button>

  <!-- Nuxt 自動 import -->
  <Home />
  <Box />
</template>

<script setup>
const {count, addCount}=useAddCount()
</script>

<style>

</style>