export default defineEventHandler((event) => {
  console.log(event)
  const data = {
    name: 'mike',
    age: 12
  }
  return { data }
})
