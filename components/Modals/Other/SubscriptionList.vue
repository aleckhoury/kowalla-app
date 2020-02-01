<template>
  <div class="modal-content">
    <div class="box">
      <BMenu>
        <BMenuList label="Subscriptions">
          <div v-for="sub in subscriptions" :key="sub._id" class="subscription">
            <nuxt-link :to="getRoute(sub.isProject, sub.name)" class="container">
              <img :src="sub.pictureUrl" />
              <div class="subscription-link">
                <b class="name">{{ getPrefix(sub.isProject) }}{{ sub.name }}</b>
                <div class="info">{{ sub.numSubs }} subscribers</div>
              </div>
            </nuxt-link>
          </div>
        </BMenuList>
      </BMenu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionList',
  computed: {
    headerString() {
      return this.$store.state.user.loggedIn ? 'Subscriptions' : 'Discover';
    },
    subscriptions() {
      return this.$store.state.user.subscriptions;
    },
  },
  watch: {
    async $route(to, from) {
      await this.$parent.close();
    },
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
.modal-card-title {
  font-family: 'Helvetica Neue';
  padding-bottom: 1em;
  color: #39c9a0;
  font-weight: 700;
  text-align: center;
}
.subscription {
  width: 300px;
  display: flex;
  flex-direction: row;
}
img {
  height: 48px;
  width: 48px;
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
  font-size: 1.1em;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.info {
  font-size: 0.8em;
  margin-top: 2px;
  height: 50%;
  color: #999;
}
.container {
  display: grid;
  grid-template-columns: 55px auto;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: left;
}
</style>
