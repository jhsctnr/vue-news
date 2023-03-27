<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  components: {
    ListItem,
  },
  // computed: {
  // #4
  // ...mapGetters(['fetchedAsk']),

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
  // },
  // methods: {
  //   ...mapActions({
  //     fetchAsk: 'FETCH_ASK',
  //   }),
  // },
  // created() {
  //   this.fetchAsk();
  // },
};
</script>

<style scoped></style>
