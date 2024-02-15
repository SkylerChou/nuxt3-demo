// 檔案命名跟變數名稱取一樣，比較好找
// 跟 store 的差別是不能跨組件儲存資料，會是不同的 scope
export const useAddCount = () => {
  const count = ref(0);

  const addCount = () => {
    count.value++;
  };

  return {
    count,
    addCount
  };
};
