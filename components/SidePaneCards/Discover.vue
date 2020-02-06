<template>
  <CardContainer header-string="Discover">
    <div v-for="item in discoveries.slice(0, 5)" :key="item.name" class="subscription">
      <nuxt-link :to="getRoute(item.isProject, item.name)">
        <img :src="item.profilePicture" />
      </nuxt-link>

      <div class="subscription-link">
        <nuxt-link :to="getRoute(item.isProject, item.name)" class="name">
          <b>{{ getPrefix(item.isProject) }}{{ item.name }}</b>
        </nuxt-link>

        <div class="info">{{ item.subscribers }} subscribers</div>
      </div>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from './CardContainer';

export default {
  name: 'Discover',
  components: { CardContainer },
  data() {
    return {
      discoveries: [],
    };
  },
  async mounted() {
    this.discoveries = await this.$axios.$get('/api/v1/profiles/subs/default');
  },
  methods: {
    getRoute(isProject, name) {
      return isProject ? `/project/${name}` : `/space/${name}`;
    },
    getPrefix(isProject) {
      return isProject ? '@' : '#';
    },
  },
};
</script>

<style scoped>
.subscription {
  height: 36px;
  display: flex;
  flex-direction: row;
  margin: 8px;
}
img {
  height: 36px;
  width: 36px;
  border-radius: 6px;
  margin-left: 8px;
  cursor: pointer;
}
.subscription-link {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}
.name {
  height: 50%;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.name:hover {
  text-decoration: underline;
  color: #39c9a0;
}

.info {
  font-size: 0.75em;
  margin-top: 2px;
  height: 50%;
  color: #999;
}
.noSubs {
  text-align: center;
  padding: 1em;
  height: auto;
  font-weight: 500;
}
</style>
