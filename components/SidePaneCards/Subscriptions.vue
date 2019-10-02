<template>
  <CardContainer>
    <div v-for="sub in subscriptions" :key="sub._id" class="nav-card-link-container">
      <nuxt-link :to="getRoute">
        <img :src="sub.pictureUrl" class="picture">
      </nuxt-link>

      <div class="nav-card-link-content">
        <nuxt-link :to="getRoute(sub.isProject)" class="name">
          <b>{{ getPrefix(sub.isProject) }}{{ name }}</b>
        </nuxt-link>

        <div class="info">{{ numSubs }} users</div>
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
        return isProject ? `/beta/project/${this.name}` : `/beta/space/${this.name}`;
      },
      getPrefix(isProject) {
        return isProject ? "@" : "#";
      },
    },
  };
</script>

<style scoped>
</style>