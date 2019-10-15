<template>
  <div class="nav-card-link-container" @click="emitClickedEventToParent()">
    <nuxt-link :to="getRoute">
      <img :src="pictureUrl" class="picture" />
    </nuxt-link>

    <div class="nav-card-link-content">
      <nuxt-link :to="getRoute" class="name">
        <b>{{ getPrefix }}{{ name }}</b>
      </nuxt-link>

      <div class="info">{{ numSubs }} users</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavCardLink',
  props: {
    name: { type: String, default: '' },
    numSubs: { type: Number, default: 0 },
    pictureUrl: { type: String, default: '' },
    projectId: { type: String, default: '' },
    spaceId: { type: String, default: '' }
  },
  computed: {
    getPrefix() {
      return this.projectId !== null ? '@' : '#';
    },

    getRoute() {
      return this.projectId !== null ? `/beta/project/${this.name}` : `/beta/space/${this.name}`;
    }
  },
  methods: {
    emitClickedEventToParent() {
      this.$emit('nav-card-link-clicked');
    }
  }
};
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
  border-radius: 6px;
  margin-left: 8px;
  cursor: pointer;
}

.nav-card-link-content {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}

.name {
  font-size: 1em;
  height: 50%;
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.name:hover {
  text-decoration: underline;
  color: #39C9A0;
}

.info {
  font-size: 0.75em;
  margin-top: 2px;
  height: 50%;
  color: #999;
}
</style>
