<template>
  <div id="app">
    <ToolBar />
    <transition name="page" mode="out-in">
      <RouterView />
    </transition>
    <LoadSpinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import LoadSpinner from './components/LoadSpinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    LoadSpinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    console.log(process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
