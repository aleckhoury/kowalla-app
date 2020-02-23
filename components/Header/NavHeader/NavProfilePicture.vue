<template lang="html">
  <b-dropdown :mobile-modal="false" position="is-bottom-left" aria-role="list">
    <img slot="trigger" :src="profilePicture" class="nav-profile-picture level-item" />

    <b-dropdown-item aria-role="listitem" has-link>
      <nuxt-link :to="`/user/${username}`" class="page-link">
        Profile
      </nuxt-link>
    </b-dropdown-item>

    <b-dropdown-item aria-role="listitem" has-link>
      <nuxt-link :to="`/user/${username}/edit`" class="page-link">
        Settings
      </nuxt-link>
    </b-dropdown-item>

    <b-dropdown-item aria-role="listitem" @click="callCreateSpace()">
      Create a new Space
    </b-dropdown-item>

    <b-dropdown-item aria-role="listitem" @click="logout()">
      Logout
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import Cookies from 'js-cookie';
import CreateSpaceModal from '~/components/Create/CreateSpaceModal';

export default {
  name: 'NavProfilePicture',
  props: {
    dropdown: { type: Boolean, default: false },
  },
  computed: {
    profilePicture() {
      return this.$store.state.user.profilePicture;
    },
    username() {
      return this.$store.state.user.username;
    },
  },
  methods: {
    logout() {
      this.$store.commit('user/clearUser');
      Cookies.remove('token');
      this.$store.commit('activeTabs/updateNewsFeedActiveTab', 0);
      this.$store.commit('onboarding/resetActiveStep');
      this.$router.go();
    },
    callCreateSpace() {
      this.$buefy.modal.open({
        parent: this,
        component: CreateSpaceModal,
        width: 900,
        hasModalCard: true,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.nav-profile-picture {
  height: 42px;
  width: 42px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 0.75em;
}
.dropdown-item {
  color: #4a4a4a;
}
.dropdown-item.is-active {
  background-color: #39C9A0;
}
.page-link {
  font-size: 1em;
  color: black;
  text-decoration: none;
}
.dropdown + .dropdown {
  margin-left: 0;
}
</style>
