# plugins 用途

用來整合第三方套件或是程式庫 (libraries)

## server 端或 client 端 應用

### 範例
```javascript
test.client.js
test.server.js
```

可以在檔名中間使用 .server 或 .client 來決定要 server 端或 client 端載入插件

## 方法一 - provide 

注入方法到 Nuxt，在用 $ 取出

### 範例

hello.js

### 連結
Look at the [Nuxt 3 documentation](https://vuejs.org/api/application.html#app-provide) to learn more.

## 方法二 - directive 

```javascript
import { createApp } from 'vue'

const app = createApp({
  /* ... */
})

// register (object directive)
app.directive('my-directive', {
  /* custom directive hooks */
})

// register (function directive shorthand)
app.directive('my-directive', () => {
  /* ... */
})

// retrieve a registered directive
const myDirective = app.directive('my-directive')
```

### 範例

timeFormat.js

### 連結
Look at the [Nuxt 3 documentation](https://vuejs.org/guide/reusability/custom-directives.html) to learn more.

## 方法三 - use

常見的套件引入方式，與 Vue3 共用
