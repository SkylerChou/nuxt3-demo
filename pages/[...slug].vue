<!-- 
  固定名稱，所有找不到頁面的網址都會進入的這頁
  不要再 page/ 底下建立動態路由，不然會搶走[...slug].vue 的優先權！
-->
<script setup>
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);
</script>

<template>
  <div>
    <h1>404 Not Found</h1>
    <p>{{ route.params.slug }}</p>
  </div>
</template>
