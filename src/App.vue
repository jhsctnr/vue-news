<template>
  <div id="app">
    <ToolBar />
    <transition name="page">
      <RouterView />
    </transition>
    <LoadSpinner :loading="true" />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import LoadSpinner from './components/LoadSpinner.vue';

export default {
  components: {
    ToolBar,
    LoadSpinner,
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
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
