<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const route = useRoute();

const { data } = await useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.courses}`
);
</script>

<style></style>
