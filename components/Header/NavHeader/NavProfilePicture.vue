<template lang="html">
  <b-dropdown position="is-bottom-left" aria-role="list">
    <img
      :src="profilePicture"
      class="nav-profile-picture"
      slot="trigger"
    >

    <b-dropdown-item @click="goToProfile" aria-role="listitem">
      <nuxt-link class="page-link" :to="`/dev/u/${username}`">
        Profile
      </nuxt-link>
    </b-dropdown-item>

    <b-dropdown-item @click="logout()" aria-role="listitem">
        Logout
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'NavProfilePicture',
  props: {
    username: String,
    profilePicture: String,
    dropdown: Boolean,
  },
  methods: {
    logout() {
      this.$store.commit('user/clearUser');
      Cookies.remove('token');
      location.reload();

    },
    goToProfile() {
      this.$router.push({
        path: `/dev/u/${this.username}`
      });
    }
  },
};
</script>

<style lang="css" scoped>
.nav-profile-picture {
  height: 48px;
  width: 48px;
  border: 1px solid #2F8168;
  border-radius: 6px;
}
.dropdown-item {
  color: #4a4a4a;
}
.dropdown-item.is-active {
  background-color: #39C9A0;
}
.page-link {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: black;
  text-decoration: none;
}
</style>
