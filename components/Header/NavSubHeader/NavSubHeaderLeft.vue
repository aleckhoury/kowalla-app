<template lang="html">
  <div>
    <div v-if="type === '/u/'">user</div>
    <div v-if="type === '/p/'">project</div>
    <div v-if="type === '/c/'">community</div>
  </div>
</template>

<script>
export default {
  name: "NavSubHeaderLeft",
  data() {
    return {
      type: null
    }
  },
  created() {
    // sort the current route and see what type of
    // page we're on
    let re = new RegExp('\/[u,p,c]\/');
    this.type = this.$route.fullPath.match(re)[0]
  }
}
</script>

<style lang="css">
</style>
