<template lang="html">
  <el-container>
    <el-header 
      class="no-padding" 
      height="90px">
      <Header/>
    </el-header>

    <el-main class="no-padding">
      <PlaceholderText>{{ getUsername }}</PlaceholderText>
    </el-main>
  </el-container>
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
</style>
