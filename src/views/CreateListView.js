import ListView from './ListView.vue';
// import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 인스턴스 옵션
    name,
    created() {
      bus.$emit('start:spinner');
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => console.log(error));
    },
    render: (createElement) => createElement(ListView),
  };
}
