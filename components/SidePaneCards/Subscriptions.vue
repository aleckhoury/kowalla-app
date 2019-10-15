<template>
  <CardContainer :header-string="headerString">
    <div v-for="sub in subscriptions" :key="sub._id" class="subscription">
      <nuxt-link :to="getRoute(sub.isProject, sub.name)">
        <img :src="sub.pictureUrl" />
      </nuxt-link>

      <div class="subscription-link">
        <nuxt-link :to="getRoute(sub.isProject, sub.name)" class="name">
          <b>{{ getPrefix(sub.isProject) }}{{ sub.name }}</b>
        </nuxt-link>

        <div class="info">{{ sub.numSubs }} users</div>
      </div>
    </div>
    <div v-if="subscriptions === undefined || !subscriptions.length" class="noSubs">
      <EmptySubs />
      <span>There's nothing here. Subscribe to some spaces and projects!</span>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from './CardContainer';
import EmptySubs from '../../svg/EmptySubs';

export default {
  name: 'Subscriptions',
  components: { EmptySubs, CardContainer },
  asyncComputed: {
    subscriptions: {
      get() {
        if (this.$store.state.user.loggedIn) {
          return this.$store.state.user.subscriptions;
        }
        return this.$axios.$get('/api/v1/profiles/subs/default');
      },
      default: []
    }
  },
  computed: {
    headerString() {
      return this.$store.state.user.loggedIn ? 'Subscriptions' : 'Discover';
    }
  },
  methods: {
    getRoute(isProject, name) {
      return isProject ? `/beta/project/${name}` : `/beta/space/${name}`;
    },
    getPrefix(isProject) {
      return isProject ? '@' : '#';
    }
  }
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
