<template lang="html">
  <b-dropdown class="dropdown-container" position="is-bottom-left" aria-role="list">
    <img
      :src="profilePicture"
      class="nav-profile-picture"
      slot="trigger"
    >
    <b-dropdown-item aria-role="listitem">
      <nuxt-link :to="`/dev/u/${username}`">
        Profile
      </nuxt-link>
    </b-dropdown-item>
    <b-dropdown-item @click="logout()" aria-role="listitem">
        Logout
    </b-dropdown-item>
  </b-dropdown>
  <!--
    TODO commenting out for now, we'll refactor these to work with buefy later
    <el-dropdown>
      <nuxt-link :to="`/dev/u/${username}`">
        <img
          :src="profilePicture"
          class="nav-profile-picture"
        >
      </nuxt-link>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <nuxt-link
            :to="`/dev/u/${username}`"
            class="page-link"><b>Profile</b></nuxt-link>
        </el-dropdown-item>
        <el-dropdown-item
          divided
          @click.native="logout()">
          <b class="page-link">Logout</b>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  -->
</template>

<script>
export default {
  name: 'NavProfilePicture',
  props: {
    username: String,
    profilePicture: String,
    dropdown: Boolean,
  },
  methods: {
    logout() {
      this.$store.commit('user/clearUser', { loggedIn: false });
      this.$axios.setToken(false);
      location.reload();
    },
  },
};
</script>

<style lang="css" scoped>
.nav-profile-picture {
  height: 48px;
  width: 48px;
  border: 1px solid #2F8168;
  border-radius: 6px;
  margin-left: 6px
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
