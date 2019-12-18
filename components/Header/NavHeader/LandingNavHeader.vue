<template lang="html">
  <div class="nav-header-container">
    <div class="container is-fullhd">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <nuxt-link to="/beta">
              <p class="kowalla-logo">
                kowalla
              </p>
            </nuxt-link>
            <nuxt-link v-if="!this.$store.state.user.loggedIn" to="/beta">
              <b class="page-link">Go to Feed</b>
            </nuxt-link>
          </div>
        </div>
        <div class="level-right">
          <div v-if="this.$store.state.user.loggedIn" class="level-item">
            <NavProfilePicture />
          </div>

          <div v-else class="level-item">
            <b class="page-link" @click="cardModal">Login</b>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import NavProfilePicture from './NavProfilePicture';
import HelpModal from '~/components/Modals/Other/HelpModal';
import LoginHandler from '~/components/Auth/LoginHandler';
import CreatePost from '~/components/Modals/Creation/CreatePost';

export default {
  name: 'LandingNavHeader',
  components: {
    NavProfilePicture,
  },
  data() {
    return {
      isMounted: false,
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
  },
  methods: {
    cardModal() {
      this.$modal.open({
        parent: this,
        component: LoginHandler,
        props: {
          initialState: 1,
        },
        width: 900,
        hasModalCard: true,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.nav-header-container {
    height: 55px;
    /*background-color: #39C9A0;*/
}
.level.is-mobile {
  margin: 0 10px;
}

.kowalla-logo {
    font-family: 'Nunito';
    font-weight: 900;
    font-size: 2.25em;
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
}

.page-link {
    font-size: 1em;
    display: flex;
    color: white;
    align-items: center;
    padding: 6px;
    text-decoration: none;
    cursor: pointer;
}
</style>
