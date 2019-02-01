<template lang="html">
  <div class="screen">
    <Header></Header>


    <div class="columns is-marginless">
      <PlaceholderText>{{ getUsername }}</PlaceholderText>
    </div>
  </div>
</template>

<script>
import PlaceholderText from '~/components/PlaceholderText';
import Header from '~/components/Header/Header';

export default {
  name: 'UserPageTest',
  components: { PlaceholderText, Header, },
  data() {
    return {
      username: null,
    };
  },
  computed: {
    getUsername() {
      return this.username;
    },
  },
  created() {
    this.username = this.$route.params.username;
  },
};
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
