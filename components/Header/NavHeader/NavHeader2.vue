<template lang="html">
  <div class="nav-header-container">
    <div class="container is-fullhd">
      <nav class="level is-marginless">
          <div class="level-left">
            <div class="level-item">
              <nuxt-link
                class="kowalla-logo"
                to="/dev">kowalla</nuxt-link>
            </div>

            <div class="level-item">
              <nuxt-link
                class="page-link"
                to="/dev"><b>Home</b></nuxt-link>
            </div>

            <div class="level-item">
              <nuxt-link
                class="page-link"
                to="/about"><b>About</b></nuxt-link>
            </div>
          </div>

          <div class="level-right">

            <div v-if="this.$auth.loggedIn" class="level-item">
              <Button @kow-button-click="newPostModal"><b>New</b></Button>

              <Searchbar />

              <NavNotifications
                :has-notifications="this.$store.state.user.hasNotifications" />

              <NavProfilePicture
                :profile-picture="this.$store.state.user.profilePicture"
                :username="this.$store.state.user.username" />
            </div>

            <div v-if="!this.$auth.loggedIn" class="level-item">
              <Searchbar />
              <nuxt-link
                class="page-link"
                to="/login"><b>Login</b></nuxt-link>
            </div>


          </div>
      </nav>
    </div>
  </div>
</template>

<script>
import NavHeaderLeft from './NavHeaderLeft';
import NavHeaderRight from './NavHeaderRight';
import Button from './Button';
import Searchbar from './Searchbar';
import NavProfilePicture from './NavProfilePicture';
import NavNotifications from './NavNotifications';
/*
<NavHeaderLeft/>
<NavHeaderRight/>
*/
export default {
  name: 'NavHeader',
  components: {
    NavHeaderLeft,
    NavHeaderRight,
    Button,
    Searchbar,
    NavProfilePicture,
    NavNotifications, },
};
</script>

<style lang="css" scoped>
.nav-header-container {
  height: 55px;
  background-color: #39C9A0;
  border: 1px solid #2F8168;
}

.kowalla-logo {
  font-family: 'Nunito';
  font-size: 2.25em;
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

.page-link {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: #2F8168;
  display: flex;
  align-items: center;
  padding: 6px;
  text-decoration: none;
}

.test-outline {
  border: 1px solid black;
}



.main-theme {
  background-color: #39C9A0;
}

</style>
