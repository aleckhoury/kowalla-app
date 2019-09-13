<template lang="html">
  <div class="nav-header-container">
    <div class="container is-fullhd">
      <nav class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <nuxt-link to="/beta">
              <p class="kowalla-logo">kowalla</p>
            </nuxt-link>
          </div>
        </div>
        <div class="level-right">
          <div v-if="this.$store.state.user.loggedIn" class="level-item">
            <NavProfilePicture
              :profile-picture="this.$store.state.user.profilePicture"
              :username="this.$store.state.user.username"
            />
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
import Button from "./Button";
import Searchbar from "./Searchbar";
import NavProfilePicture from "./NavProfilePicture";
import NavNotifications from "./NavNotifications";
import HelpModal from "~/components/Modals/Other/HelpModal";
import LoginHandler from "~/components/Auth/LoginHandler";
import CreatePost from "~/components/Modals/Creation/CreatePost";
import { mapGetters } from "vuex";

export default {
  name: "LandingNavHeader",
  components: {
    CreatePost,
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
    }
  },
  methods: {
    newPostModal() {
      this.$modal.open({
        parent: this,
        component: CreatePost,
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
    font-family: "Helvetica Neue";
    font-size: 1em;
    display: flex;
    color: white;
    align-items: center;
    padding: 6px;
    text-decoration: none;
    cursor: pointer;
}
</style>
