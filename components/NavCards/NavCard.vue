<template>
  <div>
    <NavCardLink
      v-if="type === 'user'"
      v-for="item in this.$store.state.user[selector]"
      :key="item.name"
      :name="item.name"
      :numSubs="item.numSubs"
      :pictureURL="item.pictureURL"
      :projectId="getProjectId(item)"
      :communityId="getCommunityId(item)"
    />
    <NavCardLink
      v-if="type === 'profile'"
      v-for="item in profileSubs[selector]"
      :key="item.name"
      :name="item.name"
      :numSubs="item.numSubs"
      :pictureURL="item.pictureURL"
      :projectId="getProjectId(item)"
      :communityId="getCommunityId(item)"
    />
  </div>
</template>
<script>
import NavCardLink from './NavCardLink';
export default {
  name: "NavCard",
  components: { NavCardLink },
  props: {
    type: String, // type is either user [logged in user] or profile [profile we're viewing]
    selector: String,
    profileSubs: { type: Object, default: () => {return {owned: [], subscriptions: []}}} // if profile, we'll populate this with an object with two arrays of subscriptions, mimicking the user state
  },
  mounted() {
    // console.log('navcard');
    // console.log(this.profileSubs);
  },
  methods: {
    getProjectId(item) {
      return (item.hasOwnProperty('projectId')) ? item.projectId : null;
    },
    getCommunityId(item) {
      return (item.hasOwnProperty('communityId')) ? item.communityId : null;
    }

  }

}
</script>
<style lang="css" scoped>
</style>
