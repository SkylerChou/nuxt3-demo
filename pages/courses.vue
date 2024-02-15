<template>
  <div>
    <h1>courses</h1>

    <NuxtLink to="/courses/nuxt3">nuxt3</NuxtLink>
    <NuxtLink to="/courses/vite">vite</NuxtLink>
    <NuxtLink to="/courses/vue test">vue test</NuxtLink>

    <NuxtPage />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
