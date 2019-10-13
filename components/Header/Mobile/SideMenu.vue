<template>
  <div class="wrapper" @touchmove.prevent @click="closeActions">
    <div
      :class="{ isOpen: delayOpen }"
      class="sidebar"
      @click.stop
      @touchmove.stop
    >
      <BMenu>
        <div class="columns is-mobile">
          <div class="column is-one-third">
            <img
              :src="this.$store.state.user.profilePicture"
              class="nav-profile-picture"
            />
          </div>
          <div class="column is-two-thirds">
            <b>@{{ this.$store.state.user.username }}</b>
            <br>
            <span><strong>Creations:</strong> {{ this.$store.state.user.owned.length }}</span>
            <br>
            <span><strong>Subscriptions:</strong> {{ this.$store.state.user.subscriptions.length }}</span>
          </div>
        </div>
        <BMenuList label="Menu">
          <nuxt-link :to="`/beta/user/${this.$store.state.user.username}`" class="page-link is-paddingless" @click.native="closeActions">
            <BMenuItem icon="user-alt" label="Profile" />
          </nuxt-link>
          <nuxt-link :to="`/beta/user/${this.$store.state.user.username}/edit`" class="page-link is-paddingless" @click.native="closeActions">
            <BMenuItem icon="cog" label="Settings" />
          </nuxt-link>
          <BMenuItem icon="sign-out-alt" label="Logout" @click="logout"></BMenuItem>
        </BMenuList>
        <!--<BMenuList label="Subscriptions">-->
        <!--Test-->
        <!--</BMenuList>-->
        <!--<BMenuList label="Actions">-->
        <!--</BMenuList>-->
      </BMenu>
    </div>
  </div>
  <!--<div  class="content"></div>-->
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: "SideMenu",
  props: {
    isOpen: { type: Boolean, default: false },
    closeSidebar: { type: Function, default: () => {} },
  },
  data() {
    return {
      delayOpen: false,
      targetElement: null,
    };
  },
  mounted() {
    setTimeout(() => (this.delayOpen = true), 150);
  },
  methods: {
    logout() {
      this.$store.commit("user/clearUser");
      Cookies.remove("token");
      this.$store.commit('activeTabs/updateNewsFeedActiveTab', 0);
      this.$store.commit('onboarding/resetActiveStep');
      this.$router.go();
    },
    closeActions() {
      this.delayOpen = false;
      setTimeout(() => this.closeSidebar(), 250);
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  z-index: 99;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(10, 10, 10, 0.86);
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.sidebar {
  z-index: 100;
  position: fixed;
  display: flex;
  width: 60%;
  height: 100%;
  background: #eeeeee;
  right: 0;
  box-shadow: 0 0 5px black;
  transform: translate3d(60vw, 0, 0);
  transition: transform 0.35s;
  overflow-y: scroll;
}
.sidebar.isOpen {
  transform: translate3d(0, 0, 0);
}
.menu {
  width: 100%;
  padding: 1em;
}
.nav-profile-picture {
  height: auto;
  border-radius: 6px;
}
.column {
  padding: 0.25em;
}
.columns {
  border-bottom: 2px solid #39C9A0;
}
</style>
