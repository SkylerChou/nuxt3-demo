<script setup>
import Header from 'components/Utils/Header.vue'
import Footer from 'components/Utils/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <!-- slot 可以想像成 router-view 的功能，才能顯示頁面畫面 -->
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
