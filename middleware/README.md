# middleware

## 匿名
  
  寫在頁面裡面

```javascript
// pages/address.vue
<script setup>
definePageMeta({
 middleware: (to, from) => {
   console.log("address=>", { to, from });
 },
});
</script>
<template>
 <div>
   <h1>Address</h1>
 </div>
</template>
```

## 具名

指定檔案 

```javascript
// page/about.js
<script setup>
definePageMeta({
 middleware: ["auth"],
});
</script>
```


## 全域

會優先執行。

加上檔案中間名 XXX.global.js，在 middleware 檔名後面加上 global 就會變成全域的 route middleware

