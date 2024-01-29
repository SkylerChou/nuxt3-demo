<script lang="ts" setup></script>

<template>
  <div>
    <UtilsHeader />
    <!-- slot 可以想像成 router-view 的功能，才能顯示頁面畫面 -->
    <slot />
    <UtilsFooter />
  </div>
</template>

<style scoped></style>
