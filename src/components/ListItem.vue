<template>
  <div>
    <ul class="listItem-list">
      <li v-for="item in listItems" v-bind:key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="listItem-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <RouterLink :to="`/item/${item.id}`">
                {{ item.title }}
              </RouterLink>
            </template>
          </p>
          <small class="listItem-info">
            {{ item.time_ago }} by
            <RouterLink
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="listItem-info link-text"
            >
              {{ item.user }}
            </RouterLink>
            <a v-else v-bind:href="item.url" class="jobs-info">
              {{ ` ${item.domain || ''}` }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask') {
        return this.$store.state.ask;
      } else {
        return this.$store.state.jobs;
      }
    },
  },
};
</script>

<style scoped>
.listItem-list {
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: solid 1px #eeeeee;
  list-style: none;
}
.points {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  color: #42b883;
}
.listItem-title {
  margin: 0;
}
.listItem-info {
  color: #828282;
}
.link-text:hover {
  color: #42b883;
}
</style>
