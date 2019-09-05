<template>
  <div>
    <div v-if="profileSubs[selector].length || this.$store.state.user[selector].length">
      <div v-if="type === 'user'">
        <NavCardLink
          v-for="item in this.$store.state.user[selector]"
          :key="item.name"
          :name="item.name"
          :num-subs="item.numSubs"
          :picture-url="item.pictureUrl"
          :project-id="getProjectId(item)"
          :space-id="getSpaceId(item)"
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
          :space-id="getSpaceId(item)"
          @nav-card-link-clicked="emitClickedEventToParent()"
        />
      </div>
    </div>
    <div v-else class="empty">
      <strong>{{ emptyText }}</strong>
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
  computed: {
    emptyText() {
      if (this.selector === 'owned') {
        return 'Create a project or a space!';
      } else {
        return 'Find some cool projects and spaces to subscribe to!';
      }
    }
  },
  methods: {
    getProjectId(item) {
      return item.hasOwnProperty("projectId") ? item.projectId : null;
    },
    getSpaceId(item) {
      return item.hasOwnProperty("spaceId") ? item.spaceId : null;
    },
    emitClickedEventToParent() {
      this.$emit("nav-card-link-clicked");
    },
  },
};
</script>
<style lang="css" scoped>
  .empty {
    padding: 0.5em;
    font-style: italic;
    font-size: 14px;
  }
</style>
