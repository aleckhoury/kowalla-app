<template lang="html">
  <el-container>
    <el-header class="no-padding" height="90px">
      <Header></Header>
    </el-header>

    <el-main class="no-padding">
      <PlaceholderText>about</PlaceholderText>
    </el-main>
  </el-container>
</template>

<script>
import PlaceholderText from '~/components/PlaceholderText';
import Header from '~/components/Header/Header';

export default {
  name: "about",
  components: { PlaceholderText, Header },
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}
</style>
