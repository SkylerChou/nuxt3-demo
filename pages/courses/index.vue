<template>
  <div>
    <h1>course list</h1>
    <CardList :courses="data" />
  </div>
</template>

<script setup>
import CardList from 'components/CardList.vue';
const { data } = await useFetch('https://vue-lessons-api.vercel.app/courses/list');
</script>

<style></style>
