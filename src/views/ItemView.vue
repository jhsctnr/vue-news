<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <UserProfile :info="fetchedItem">
        <RouterLink slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </RouterLink>
        <span slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</span>
      </UserProfile>
    </section>
    <section>
      <h2>
        {{ fetchedItem.title }}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-dompurify-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import bus from '../utils/bus.js';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    bus.$emit('start:spinner');
    this.$store
      .dispatch('FETCH_ITEM', itemId)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error) => console.log(error));
  },
  components: {
    UserProfile,
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-decription {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
