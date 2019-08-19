<template lang="html">
  <div class="nav-header-container">
    <div class="container is-fullhd">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <p class="kowalla-logo">kowalla</p>
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
    Button,
    Searchbar,
    CreatePost,
    NavProfilePicture,
    NavNotifications,
    HelpModal,
  },
  data() {
    return {
      isMounted: false,
    };
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
