<template lang="html">
  <div class="nav-header-container">
    <div class="container is-fullhd">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <nuxt-link class="kowalla-logo" to="/feed">
              <img src="https://i.imgur.com/04hoRgV.png" class="kowalla-logo-picture" />
              kowalla
            </nuxt-link>
          </div>

          <div class="level-item">
            <nuxt-link class="page-link" to="/">
              <b>About</b>
            </nuxt-link>
          </div>

          <div class="level-item" @click="callHelpModal">
            <div class="page-link">
              <b>Help</b>
            </div>
          </div>

          <div v-if="hasActivePost" class="level-item">
            <nuxt-link :to="`/live/${this.$store.state.user.username}`" class="page-link has-text-white">
              <b>LIVE</b>
            </nuxt-link>
          </div>
        </div>

        <div class="level-right">
          <div v-if="this.$store.state.user.loggedIn" class="level-item">
            <BButton type="is-black" inverted outlined @click="newCreateModal">
              <font-awesome-icon id="feather" icon="feather" />
            </BButton>

            <Searchbar />

            <NavNotifications />

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
import Searchbar from './Searchbar';
import NavProfilePicture from './NavProfilePicture';
import HelpModal from '~/components/Modals/Other/HelpModal';
import LoginHandler from '~/components/Auth/LoginHandler';
import CreatePost from '~/components/Modals/Creation/CreatePost';
import MobileCreateModal from '~/components/Modals/Creation/MobileCreateModal';
import CreateSpaceModal from '~/components/Modals/Creation/CreateSpaceModal';
import NavNotifications from './NavNotifications';
import { mapGetters } from 'vuex';

export default {
  name: 'NavHeader',
  components: {
    Searchbar,
    NavProfilePicture,
    NavNotifications,
  },
  data() {
    return {
      isMounted: false,
      canCancel: true,
    };
  },
  computed: {
    ...mapGetters('coworkers', ['hasActivePost']),
  },
  methods: {
    newCreateModal() {
      if (!this.$store.state.user.loggedIn) {
        return this.$buefy.modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true,
        });
      } else {
        this.$buefy.modal.open({
          parent: this,
          component: CreatePost,
          hasModalCard: true,
          canCancel: true,
        });
      }
    },
    callHelpModal() {
      this.$buefy.modal.open({
        parent: this,
        component: HelpModal,
        width: 900,
        hasModalCard: true,
      });
    },
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: LoginHandler,
        props: {
          initialState: 1,
        },
        width: 900,
        hasModalCard: true,
        canCancel: this.canCancel,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.nav-header-container {
  z-index: 100;
  height: 55px;
  background-color: #39C9A0;
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

.button {
  margin-right: 6px;
}

.button.is-black.is-inverted.is-outlined:hover {
  background-color: white;
  color: #39C9A0;
}

.kowalla-logo-picture {
  height: 50px;
  vertical-align: middle;
}
  #feather {
    font-size: 1.5em;
    width: 1.5em;
  }
</style>
