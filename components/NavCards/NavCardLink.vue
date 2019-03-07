<template>
  <div class="nav-card-link-container" @click="emitClickedEventToParent()">
    <nuxt-link  :to="getRoute">
      <img class="picture" :src="pictureURL"/>
    </nuxt-link>

    <div class="nav-card-link-content">
      <nuxt-link :to="getRoute" class="name">
        <b>{{getPrefix}}{{name}}</b>
      </nuxt-link>

      <div class="info">
        {{numSubs}} users
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavCardLink",
  props: {
    name: String,
    numSubs: Number,
    pictureURL: String,
    projectId: String,
    communityId: String,
  },
  methods: {
    emitClickedEventToParent() {
      this.$emit("nav-card-link-clicked");
    }
  },
  computed: {
    getPrefix() {
      return (this.projectId !== null) ? '@' : '#';
    },

    getRoute() {
      return (this.projectId !== null) ? `/dev/p/${this.name}` : `/dev/c/${this.name}`;
    }
  }
}
</script>
<style lang="css" scoped>
.nav-card-link-container {
  height: 36px;
  display: flex;
  flex-direction: row;
  margin: 8px;
}

.picture {
  height: 36px;
  width: 36px;
  margin-left: 8px;
  cursor: pointer;
}

.nav-card-link-content {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}

.name {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.name:hover {
  text-decoration: underline;
  color: #39C9A0;
}

.info {
  font-family: "Helvetica Neue";
  font-size: 0.75em;
  color: #999;
}
</style>
