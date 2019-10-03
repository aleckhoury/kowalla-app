<template>
  <CardContainer header-string="Subscriptions">
    <div v-for="sub in subscriptions" :key="sub._id" class="subscription">
      <nuxt-link :to="getRoute(sub.isProject)">
        <img :src="sub.pictureUrl" />
      </nuxt-link>

      <div class="subscription-link">
        <nuxt-link :to="getRoute(sub.isProject)" class="name">
          <b>{{ getPrefix(sub.isProject) }}{{ sub.spaceName }}</b>
        </nuxt-link>

        <!--        <div v-if="" class="info">{{ numSubs }} users</div>-->
      </div>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from "./CardContainer";

export default {
  name: "Subscriptions",
  components: { CardContainer },
  computed: {
    subscriptions() {
      return this.$store.state.user.subscriptions;
    },
  },
  methods: {
    getRoute(isProject) {
      return isProject
        ? `/beta/project/${this.name}`
        : `/beta/space/${this.name}`;
    },
    getPrefix(isProject) {
      return isProject ? "@" : "#";
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
  font-family: "Helvetica Neue";
  font-size: 1em;
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
  font-family: "Helvetica Neue";
  font-size: 0.75em;
  margin-top: 2px;
  height: 50%;
  color: #999;
}
</style>
