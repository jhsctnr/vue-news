<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import ListMixin from '@/mixins/ListMixin';
import ListItem from '../components/ListItem.vue';
// import { mapActions, mapGetters } from 'vuex';

export default {
  mixins: [ListMixin],
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
