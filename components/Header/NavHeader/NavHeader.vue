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

            <div class="level-item">
              <nuxt-link
                class="page-link"
                to="/dev/trello"><b>Trello</b></nuxt-link>
            </div>

            <div class="level-item" @click="callHelpModal">
              <div class="page-link"><b>Help</b></div>
            </div>
          </div>

          <div class="level-right">

            <div v-if="this.$store.state.user.loggedIn" class="level-item">
              <Button @kow-button-click="newPostModal"><b>New</b></Button>

              <Searchbar />

              <NavNotifications
                :has-notifications="this.$store.state.user.hasNotifications" />

              <NavProfilePicture
                :profile-picture="this.$store.state.user.profilePicture"
                :username="this.$store.state.user.username" />
            </div>

            <div v-if="!this.$store.state.user.loggedIn" class="level-item">
              <Searchbar />
              <b class="page-link" @click="cardModal">Login/Sign Up</b>
            </div>
          </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Button from './Button';
import Searchbar from './Searchbar';
import NavProfilePicture from './NavProfilePicture';
import NavNotifications from './NavNotifications';
import HelpModal from '~/components/Modals/Other/HelpModal';
import LoginRegisterModal from '~/components/LoginRegisterModal'

export default {
  name: 'NavHeader',
  data() {
    return {
      isMounted: false,
    }
  },
  components: {
    Button,
    Searchbar,
    NavProfilePicture,
    NavNotifications,
    HelpModal,
  },
  methods: {
    newPostModal() {
      console.log('create new postmodal');
    },
    callHelpModal() {
      this.$modal.open({
        parent: this,
        component: HelpModal,
        width: 900,
        hasModalCard: true
      });
    },
    cardModal() {
      this.$modal.open({
                parent: this,
                component: LoginRegisterModal,
                width: 900,
                hasModalCard: true,
              },
        )
    },
  }

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
  color: white;
  display: flex;
  align-items: center;
  padding: 6px;
  text-decoration: none;
  cursor: pointer;
}

.main-theme {
  background-color: #39C9A0;
}

</style>
