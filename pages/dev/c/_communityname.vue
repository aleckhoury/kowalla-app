<template lang="html">
  <el-container>
    <el-header class="no-padding" height="90px">
      <Header></Header>
    </el-header>

    <el-main class="no-padding">
      <PlaceholderText>{{getCommunityName}}</PlaceholderText>
    </el-main>
  </el-container>
</template>

<script>
import PlaceholderText from '~/components/PlaceholderText';
import Header from '~/components/Header/Header';

export default {
  name: "user-page-test",
  components: { PlaceholderText, Header },
  data() {
    return {
      communityname: null,
    }
  },
  created() {
    this.communityname = this.$route.params.communityname;
  },
  computed: {
    getCommunityName() {
      return this.communityname;
    }
  }
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}
</style>
