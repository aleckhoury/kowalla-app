<template>
  <div>
    <div v-if="type === 'user'">
      <NavCardLink
        v-for="item in this.$store.state.user[selector]"
        :key="item.name"
        :name="item.name"
        :num-subs="item.numSubs"
        :picture-url="item.pictureUrl"
        :project-id="getProjectId(item)"
        :community-id="getCommunityId(item)"
        @nav-card-link-clicked="emitClickedEventToParent()"
      />
    </div>
    <div v-else-if="type === 'profile'">
      <NavCardLink
        v-for="item in profileSubs[selector]"
        :key="item.name"
        :name="item.name"
        :num-subs="item.numSubs"
        :picture-url="item.pictureUrl"
        :project-id="getProjectId(item)"
        :community-id="getCommunityId(item)"
        @nav-card-link-clicked="emitClickedEventToParent()"
      />
    </div>
  </div>
</template>
<script>
import NavCardLink from "./NavCardLink";
export default {
  name: "NavCard",
  components: { NavCardLink },
  props: {
    type: { type: String, default: "" }, // type is either user [logged in user] or profile [profile we're viewing]
    selector: { type: String, default: "" },
    profileSubs: {
      type: Object,
      default: () => {
        return { owned: [], subscriptions: [] };
      },
    }, // if profile, we'll populate this with an object with two arrays of subscriptions, mimicking the user state
  },
  methods: {
    getProjectId(item) {
      return item.hasOwnProperty("projectId") ? item.projectId : null;
    },
    getCommunityId(item) {
      return item.hasOwnProperty("communityId") ? item.communityId : null;
    },
    emitClickedEventToParent() {
      this.$emit("nav-card-link-clicked");
    },
  },
};
</script>
<style lang="css" scoped></style>
