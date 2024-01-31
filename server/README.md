# server

可以透過 server 創建簡單的 RESTful API
 
## 撰寫帶有預設 /api 的 RESTful API

以 /api/hello.js 為例 API 路徑為 http://localhost:3000/api/hello

## server 裡的 middleware

Nuxt 會自動讀取裡面所有的 js 檔變成 server 的 middleware

簡單來說就是會攔截你每個 Request 

✮　特別注意 server / middleware 能攔截的只有站內的 Request 

### 比較
middleware           =>   攔截 Router 的變化
server/middleware    =>   攔截 Request 的請求

## 撰寫客製化路徑的 RESTful API

以 /routes/skyler.js 為例 API 路徑為 http://localhost:3000/skyler

## 連結
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/guide/directory-structure/server) to learn more.

