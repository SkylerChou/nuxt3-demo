<script setup>
import Header from 'components/Utils/Header.vue';
import Footer from 'components/Utils/Footer.vue';

const nuxtApp = useNuxtApp();
const isLoading = ref(false);
nuxtApp.hook('page:start', () => {
  isLoading.value = true;
});
nuxtApp.hook('page:finish', () => {
  isLoading.value = false;
});
</script>

<template>
  <div>
    <!-- <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0" /> -->

    <h1 v-show="isLoading">Loading</h1>

    <Header />
    <!-- slot 可以想像成 router-view 的功能，才能顯示頁面畫面 -->
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
