<template lang="html">
  <b-dropdown :mobile-modal="false" position="is-bottom-left" aria-role="list">
    <img slot="trigger" :src="profilePicture" class="nav-profile-picture level-item" onerror="this.src='https://gradientjoy.com/50'" >

    <b-dropdown-item aria-role="listitem" has-link>
      <nuxt-link :to="`/dev/user/${username}`" class="page-link">
        Profile
      </nuxt-link>
    </b-dropdown-item>

    <b-dropdown-item aria-role="listitem" has-link>
      <nuxt-link :to="`/dev/user/${username}/edit`" class="page-link">
        Settings
      </nuxt-link>
    </b-dropdown-item>

    <b-dropdown-item aria-role="listitem" @click="logout()">
      Logout
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "NavProfilePicture",
  props: {
    username: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    dropdown: { type: Boolean, default: false },
  },
  methods: {
    logout() {
      this.$store.commit("user/clearUser");
      Cookies.remove("token");
      this.$router.go();
    },
  },
};
</script>

<style lang="css" scoped>
.nav-profile-picture {
  height: 42px;
  width: 42px;
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
