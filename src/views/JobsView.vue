<template>
  <div>
    <ListItem />
  </div>
</template>

<script>
import ListMixin from '../mixins/ListMixin.js';
import ListItem from '../components/ListItem.vue';

export default {
  mixins: [ListMixin],
  components: {
    ListItem,
  },
};
</script>
