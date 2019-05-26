<template lang="html">
  <div class="nav-header-container">
    <div class="container is-fullhd">
      <nav class="level is-marginless">
        <div class="level-left">
          <div class="level-item">
            <nuxt-link class="kowalla-logo" to="/dev">kowalla</nuxt-link>
          </div>

          <div class="level-item">
            <nuxt-link class="page-link" to="/dev"><b>Home</b></nuxt-link>
          </div>

          <div class="level-item">
            <nuxt-link class="page-link" to="/about"><b>About</b></nuxt-link>
          </div>

          <div class="level-item" @click="callHelpModal">
            <div class="page-link"><b>Help</b></div>
          </div>

          <div v-if="Object.keys(activePost).length && activePost.isActive" class="level-item">
            <nuxt-link class="page-link has-text-white" to="/dev/focus"><b>Focus</b></nuxt-link>
          </div>
        </div>

        <div class="level-right">
          <div v-if="this.$store.state.user.loggedIn" class="level-item">
            <Button @kow-button-click="newPostModal"><b>New</b></Button>

            <Searchbar />

            <NavNotifications
              :has-notifications="this.$store.state.user.hasNotifications"
            />

            <NavProfilePicture
              :profile-picture="this.$store.state.user.profilePicture"
              :username="this.$store.state.user.username"
            />
          </div>

          <div v-else class="level-item">
            <b class="page-link" @click="cardModal">Login or Register</b>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import Searchbar from "./Searchbar";
import NavProfilePicture from "./NavProfilePicture";
import NavNotifications from "./NavNotifications";
import HelpModal from "~/components/Modals/Other/HelpModal";
import LoginAndRegisterModal from "~/components/Auth/LoginAndRegisterModal";
import CreatePostModal from "~/components/Modals/Creation/CreatePostModal";
import { mapGetters } from "vuex";

export default {
  name: "NavHeader",
  components: {
    Button,
    Searchbar,
    CreatePostModal,
    NavProfilePicture,
    NavNotifications,
    HelpModal,
  },
  data() {
    return {
      isMounted: false,
    };
  },
  computed: {
    ...mapGetters("user", ["activePost"]),
  },
  methods: {
    newPostModal() {
      this.$modal.open({
        parent: this,
        component: CreatePostModal,
        events: {
          "post-created": postObj => {
            this.$emit("post-created", postObj);
          },
        },
        hasModalCard: true,
      });
    },
    callHelpModal() {
      this.$modal.open({
        parent: this,
        component: HelpModal,
        width: 900,
        hasModalCard: true,
      });
    },
    cardModal() {
      this.$modal.open({
        parent: this,
        component: LoginAndRegisterModal,
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
  background-color: #39C9A0;
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
  display: flex;
  color: #2F8168;
  align-items: center;
  padding: 6px;
  text-decoration: none;
  cursor: pointer;
}

.main-theme {
  background-color: #39C9A0;
}
</style>
