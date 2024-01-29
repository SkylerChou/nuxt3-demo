// 檔案命名跟變數名稱取一樣，比較好找
export const useAddCount = () => {
  const count=ref(0);

  const addCount= () => {
    count.value++;
  }

  return {
    count,
    addCount
  }
}
