<template lang="html">
  <el-container class="screen">
    <el-header class="no-padding" height="90px">
      <Header></Header>
    </el-header>

    <el-main class="main-margin background-tint">
      <el-row type="flex" justify="center">
        <el-col type="flex" justify="center" :span="5" class="side-pane">
          <NavPane></NavPane>
        </el-col>

        <el-col :span="12" class="central-pane">
          post feed
        </el-col>

        <el-col :span="5" class="side-pane">info cards</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Header from '~/components/Header/Header';
import PlaceholderText from '~/components/PlaceholderText';
import NavPane from '~/components/NavCards/NavPane';

export default {
  name: "test",
  components: { Header, PlaceholderText, NavPane }
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}

.main_margin {
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

.background-tint {
  background-color: #E9EBEE;
}

.side-pane {
  display: flex;
  justify-content: center;
}

.central-pane {
  background-color: white;
  margin-right: 15px;
  margin-left: 15px;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
