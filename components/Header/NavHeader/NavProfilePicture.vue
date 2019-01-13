<template lang="html">
  <nuxt-link to="/dev/u/tob">
    <img
      class="nav-profile-picture"
      @click="handleClick"
      :src="profilePicture"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavProfilePicture',
  props: {
    username: String,
    profilePicture: String,
    dropdownDisabled: Boolean,
  },
  methods: {
    handleClick(event) {
      console.log('profileclicked');
    }
  }
}
</script>

<style lang="css">
.nav-profile-picture {
  height: 45px;
  width: 45px;
  border: 1px solid #2F8168;
  border-radius: 6px;
  margin-left: 6px
}
</style>
