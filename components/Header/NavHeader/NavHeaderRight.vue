<template lang="html">
  <div class="nav-right-container">
    <Button @kow-button-click="newPostModal">
      <b>New</b>
    </Button>
    <Searchbar></Searchbar>

    <el-badge :is-dot="hasNotifications" class="notif-dot"><font-awesome-icon icon="bell" class="theme-color"></font-awesome-icon></el-badge>

    <NavProfilePicture
      profilePicture="https://media.licdn.com/dms/image/C5603AQHR9b4T-gMdDA/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=OCqWMbZEViWI0AEtPBdiA0-VlrUFfC-wJCR900OQaBE"
      username="tob"
    />

  </div>
</template>

<script>
import Searchbar from './Searchbar';
import Button from './Button';
import NavProfilePicture from './NavProfilePicture';

export default {
  name: "NavHeaderRight",
  components: { Searchbar, Button, NavProfilePicture },
  data() {
    return {
      hasNotifications: false
    }
  },
  methods: {
    newPostModal(event) {
      this.$alert('this is a new post modal');
    },
  }
}
</script>

<style lang="css" scoped>
.nav-right-container {
  display: flex;
  align-items: center;
}

.theme-color {
  color: #2F8168;
}

.notif-dot {
  margin: 6px;
}

.override {
  color: #39C9A0;
  border: 2px solid #2F8168;
  margin: 6px;
  font-family: "Helvetica Neue";
  border-radius: 6px;
}



</style>
