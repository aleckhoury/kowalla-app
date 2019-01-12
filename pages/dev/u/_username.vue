<template lang="html">
  <el-container>
    <el-header class="no-padding" height="90px">
      <Header></Header>
    </el-header>

    <el-main class="no-padding">
      <PlaceholderText>{{getUsername}}</PlaceholderText>
    </el-main>
  </el-container>
</template>

<script>
import PlaceholderText from '~/components/PlaceholderText';
import Header from '~/components/Header/Header';



export default {
  name: "user page test",
  components: { PlaceholderText, Header },
  data() {
    return {
      username: null,
    }
  },
  created() {
    this.username = this.$route.params.username;
  },
  computed: {
    getUsername() {
      return this.username;
    }
  }
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}
</style>
