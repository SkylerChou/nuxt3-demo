export default defineEventHandler((event) => {
  // 可以用這個取得 request
  console.log(event.node.req.url)
})
