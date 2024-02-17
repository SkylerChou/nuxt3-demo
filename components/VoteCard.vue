<script setup>
import VoteBtn from 'components/VoteBtn.vue';
const store = useVoteStore();
</script>
<template>
  <div v-for="vote in store.voteData" :key="vote.name" class="card">
    <div class="card_info">
      <img :src="vote.path" :alt="vote.name" />
      <h1>{{ vote.name }}</h1>
    </div>
    <VoteBtn @click="store.addVote(vote.name)">
      {{ store.isFetch ? '投票中' : vote.count }}
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
