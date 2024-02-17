import { defineStore } from 'pinia';

export const useVoteStore = defineStore('vote', () => {
  const voteData = ref({});

  const isFetch = ref(false);

  const setVoteData = async () => {
    const data = await $fetch('https://vue-lessons-api.vercel.app/vote/list');

    voteData.value = data;
  };

  const addVote = async (type) => {
    if (isFetch.value) return;
    isFetch.value = true;
    try {
      const data = await $fetch('https://vue-lessons-api.vercel.app/vote/add', {
        method: 'POST',
        body: { type }
      });
      voteData.value = data;
      alert('投票成功');
    } catch (error) {
      alert('投票錯誤');
    } finally {
      isFetch.value = false;
    }
  };

  return { isFetch, voteData, setVoteData, addVote };
});
