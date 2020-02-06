<template>
  <CardContainer
    header-string="Subscriptions"
    :subheader-is-button="subscriptions !== undefined && subscriptions.length > 4 ? true : false"
    :subheader-string="subscriptions !== undefined && subscriptions.length > 4 ? 'View All Subscriptions' : ''"
    @subheader-clicked="callSubscriptionListModal"
  >
    <div v-for="sub in subscriptions.slice(0, 4)" :key="sub._id" class="subscription">
      <nuxt-link :to="getRoute(sub.isProject, sub.name)">
        <img :src="sub.pictureUrl" />
      </nuxt-link>

      <div class="subscription-link">
        <nuxt-link :to="getRoute(sub.isProject, sub.name)" class="name">
          <b>{{ getPrefix(sub.isProject) }}{{ sub.name }}</b>
        </nuxt-link>

        <div class="info">{{ sub.numSubs }} subscribers</div>
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
import LoginHandler from '../Auth/LoginHandler';
import SubscriptionList from '../Modals/Other/SubscriptionList';

export default {
  name: 'Subscriptions',
  components: { EmptySubs, CardContainer },
  computed: {
    subscriptions() {
      return this.$store.state.user.subscriptions;
    },
  },
  methods: {
    getRoute(isProject, name) {
      return isProject ? `/project/${name}` : `/space/${name}`;
    },
    getPrefix(isProject) {
      return isProject ? '@' : '#';
    },
    callSubscriptionListModal() {
      if (!this.$store.state.user.loggedIn) {
        return this.$buefy.modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true,
        });
      }
      this.$buefy.modal.open({
        parent: this,
        component: SubscriptionList,
        width: 900,
        hasModalCard: true,
      });
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
