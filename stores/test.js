import { defineStore } from 'pinia';

export const useTestStore = defineStore('test', () => {
  const voteStore = useVoteStore();

  const voteToTestData = computed(() => voteStore.voteData);

  return { voteToTestData };
});
