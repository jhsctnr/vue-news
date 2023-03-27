<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
  components: {
    ListItem,
  },
};
</script>
