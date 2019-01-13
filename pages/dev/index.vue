<template lang="html">
  <el-container>
    <el-header class="no-padding" height="90px">
      <Header></Header>
    </el-header>

    <el-main class="no-padding">
      <PlaceholderText>dev test</PlaceholderText>
    </el-main>
  </el-container>
</template>

<script>
import Header from '~/components/Header/Header';
import PlaceholderText from '~/components/PlaceholderText';

export default {
  name: "test",
  components: { Header, PlaceholderText }
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}
</style>
