<template lang="html">
  <div class="nav-right-container">
    <Button @kow-button-click="newPostModal">
      <b>New</b>
    </Button>
    <Searchbar></Searchbar>

    <NavNotifications :hasNotifications="true"/>

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
import NavNotifications from './NavNotifications';

export default {
  name: "NavHeaderRight",
  components: { Searchbar, Button, NavProfilePicture, NavNotifications },
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
</style>
