<template lang="html">
  <div class="nav-right-container">
    <Button @kow-button-click="newPostModal"><b>New</b></Button>

    <Searchbar />

    <NavNotifications
      :hasNotifications="this.$store.state.user.hasNotifications" />

    <NavProfilePicture
      :profilePicture="this.$store.state.user.profilePicture"
      :username="this.$store.state.user.username" />

  </div>
</template>

<script>
import Searchbar from './Searchbar';
import Button from './Button';
import NavProfilePicture from './NavProfilePicture';
import NavNotifications from './NavNotifications';

export default {
  name: "NavHeaderRight",
  components: { Searchbar, Button, NavProfilePicture, NavNotifications },
  data() {
    return {
      hasNotifications: false
    }
  },
  methods: {
    newPostModal(event) {
      this.$alert('this is a new post modal');
    },
  }
}
</script>

<style lang="css" scoped>
.nav-right-container {
  display: flex;
  align-items: center;
}
</style>
