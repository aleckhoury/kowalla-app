<template>
  <CardContainer header-string="Creations">
    <div v-for="item in owned" :key="item._id" class="creation">
      <nuxt-link :to="getRoute(item.isProject, item.name)">
        <img :src="item.pictureUrl" />
      </nuxt-link>

      <div class="creation-link">
        <nuxt-link :to="getRoute(item.isProject, item.name)" class="name">
          <b>{{ getPrefix(item.isProject) }}{{ item.name }}</b>
        </nuxt-link>

        <div class="info">{{ item.numSubs }} users</div>
      </div>
    </div>
    <div v-if="owned && !owned.length" class="noCreations" @click="callCreateSpaceModal">
      <EmptyCreations />
      <span>You haven't created any spaces or projects. Start here!</span>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from "./CardContainer";
import EmptyCreations from "../../svg/EmptyCreations";
import CreateSpaceModal from "../Modals/Creation/CreateSpaceModal";

export default {
  name: "Creations",
  components: { EmptyCreations, CardContainer },
  computed: {
    owned() {
      return this.$store.state.user.owned;
    },
  },
  methods: {
    getRoute(isProject, name) {
      return isProject ? `/beta/project/${name}` : `/beta/space/${name}`;
    },
    getPrefix(isProject) {
      return isProject ? "@" : "#";
    },
    callCreateSpaceModal() {
      this.$modal.open({
        parent: this,
        component: CreateSpaceModal,
        width: 900,
        hasModalCard: true,
      });
    },
  },
};
</script>

<style scoped>
.creation {
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
.creation-link {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}
.name {
  font-family: "Helvetica Neue";
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
.noCreations {
  text-align: center;
  padding: 1em;
  height: auto;
  font-weight: 500;
  cursor: pointer;
}

.noCreations:hover {
  text-decoration: underline;
  color: #39C9A0;
}
</style>
