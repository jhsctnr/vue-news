<template>
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      <RouterLink :to="`/item/${item.id}`">
        {{ item.title }}
      </RouterLink>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    // #4
    ...mapGetters(['fetchedAsk']),

    // #3
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),

    // #2
    // ...mapState(['ask']),
    // #3
    // ask() {
    // return this.$store.state.ask;
    // }
  },
  methods: {
    ...mapActions({
      fetchAsk: 'FETCH_ASK',
    }),
  },
  created() {
    this.fetchAsk();
  },
};
</script>

<style></style>
