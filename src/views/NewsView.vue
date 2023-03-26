<template>
  <div>
    <p v-for="item in news" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <RouterLink :to="`/user/${item.user}`">{{ item.user }}</RouterLink>
      </small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['news']),
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
