# server 裡的 middleware

Nuxt 會自動讀取裡面所有的 js 檔變成 server 的 middleware

簡單來說就是會攔截你每個 Request 

✮　特別注意 server / middleware 能攔截的只有站內的 Request 


## 比較
middleware           =>   攔截 Router 的變化
server/middleware    =>   攔截 Request 的請求