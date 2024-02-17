<script setup>
import { storeToRefs } from 'pinia';
import VoteBtn from 'components/VoteBtn.vue';
/**
 * ※ Pinia 的小技巧
 * ref、computed 需要 storeToRefs
 * reactive 、function 不需要，可以直接解構取出
 */
const store = useVoteStore();
const { voteData, isFetch } = storeToRefs(store);
const { addVote } = store;
</script>
<template>
  <div v-for="vote in voteData" :key="vote.name" class="card">
    <div class="card_info">
      <img :src="vote.path" :alt="vote.name" />
      <h1>{{ vote.name }}</h1>
    </div>
    <VoteBtn @click="addVote(vote.name)">
      {{ isFetch ? '投票中' : vote.count }}
    </VoteBtn>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 170px;
  height: 220px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
    }
  }
}
</style>
