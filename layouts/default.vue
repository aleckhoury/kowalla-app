<template>
  <div>
    <Header
      class="is-hidden-touch"
    />
    <MobileHeader
      :open-sidebar="openSidebar"
      class="is-hidden-desktop"
    />
    <SideMenu v-if="isOpen" :is-open="isOpen" :close-sidebar="openSidebar" class="is-hidden-desktop" />
    <nuxt />
    <MobileFooter class="is-hidden-desktop" />
  </div>
</template>
<script>
import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/Mobile/MobileHeader";
import MobileFooter from "../components/Header/Mobile/MobileFooter";
import SideMenu from "../components/Header/Mobile/SideMenu";
import Utils from '~/utils/helpers';

export default {
  components: { SideMenu, MobileHeader, MobileFooter, Header },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.$socket.emit("checkUsers", this.$store.state.coworkers.list.length);
  },
  sockets: {
    updateUsers(data) {
      this.$store.commit("coworkers/SOCKET_JOIN", data);
    },
    checkForUser(data) {
      if (data === this.$store.state.user.username) {
        this.$socket.emit("join", {
          username: this.$store.state.user.username,
          profilePicture: this.$store.state.user.profilePicture,
        });
      } else {
        this.$socket.emit("checkUsers", this.$store.state.coworkers.list.length);
      }
    }
  },
  methods: {
    openSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style>
html {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #02075d;
  color: #02075d;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #02075d;
}
</style>
