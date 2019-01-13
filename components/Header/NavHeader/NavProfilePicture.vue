<template lang="html">
  <el-dropdown>
    <nuxt-link :to="`dev/u/${this.username}`">
      <img
        class="nav-profile-picture"
        @click="handleClick"
        :src="profilePicture"
      />
    </nuxt-link>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <nuxt-link class="page-link" :to="`dev/u/${this.username}`"><b>Profile</b></nuxt-link>
      </el-dropdown-item>
      <el-dropdown-item disabled divided>
        <nuxt-link class="page-link" to="dev"><b>Logout</b></nuxt-link>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
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
    handleClick(event) {
      console.log('profileclicked');
    },
    getProfileLink() {
      console.log(`dev/u/${this.username}`)
      return `dev/u/${this.username}`
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
.page-link {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: black;
  text-decoration: none;
}

</style>
