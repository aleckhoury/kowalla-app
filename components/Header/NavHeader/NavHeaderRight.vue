<template lang="html">
  <div 
    v-if="this.$auth.loggedIn" 
    class="nav-right-container">
    <Button @kow-button-click="newPostModal"><b>New</b></Button>

    <Searchbar />

    <NavNotifications
      :has-notifications="this.$store.state.user.hasNotifications" />
    <NavProfilePicture
      :profile-picture="this.$store.state.user.profilePicture"
      :username="this.$store.state.user.username" />
  </div>
  <div 
    v-else 
    class="nav-right-container">
    <Searchbar />
    <nuxt-link 
      class="page-link" 
      to="/login"><b>Login</b></nuxt-link>
  </div>
</template>

<script>
import Searchbar from './Searchbar';
import Button from './Button';
import NavProfilePicture from './NavProfilePicture';
import NavNotifications from './NavNotifications';

export default {
  name: 'NavHeaderRight',
  components: { Searchbar, Button, NavProfilePicture, NavNotifications, },
  data() {
    return {
      hasNotifications: false,
    };
  },
  methods: {
    newPostModal(event) {
      this.$alert('this is a new post modal');
    },
  },
};
</script>

<style lang="css" scoped>
.nav-right-container {
  display: flex;
  align-items: center;
}
.page-link {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: #2F8168;
  text-decoration: none;
  padding: 6px;
}
</style>
