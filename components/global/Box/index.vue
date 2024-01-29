
<template>
  <h1>Box</h1>
  <!-- 方式一 : 自動引入的方式 -->
  <!-- <BoxBtn /> -->

  <!-- 方式二 : 用來管理小元件，讓它跟外層的元件分開 -->
  <Btn />
</template>

<script setup>
import Btn from "@/components/global/Box/Btn.vue";

</script>

<style>

</style>