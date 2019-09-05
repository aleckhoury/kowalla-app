<template>
  <div class="noPosts">
    <h1 v-if="this.$store.state.user.loggedIn">No posts here yet!</h1>
    <h1 v-else>
      Create an account or sign in to subscribe to spaces and projects!
    </h1>
  </div>
</template>

<script>
export default {
  name: "EmptyPostList",
};
</script>

<style scoped>
</style>
