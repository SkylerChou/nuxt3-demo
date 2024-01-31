<template>
  <h1>user</h1>
</template>

<script setup>
definePageMeta({
  // 匿名的 middleware
  middleware: (to, from) => {
    console.log("address=>", { to, from });
  },
});
</script>

<style>

</style>