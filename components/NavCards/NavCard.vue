<template>
  <div>
    <NavCardLink
      v-for="item in this.$store.state.user[type]"
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
  props: { type: String },
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
