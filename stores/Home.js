import { defineStore } from "pinia";
// 跟 composables 的差別是可以跨組件儲存資料，
export const useHomeStore=defineStore('home',()=>{

  const count =ref(0);

  const addCount=()=>{
    count.value++;
  }

  return { count, addCount };
})