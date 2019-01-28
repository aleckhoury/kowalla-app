<template lang="html">
  <el-container class="screen">
    <el-header class="no-padding" height="90px">
      <Header></Header>
    </el-header>

    <el-main class="main-margin background-tint">
      <el-row type="flex" justify="center">
        <el-col :span="6" :md="8" class="hidden-sm-and-down side-pane">
          <NavPane></NavPane>
        </el-col>

        <el-col :span="12" :md="16" :sm="24" :xs="24" class="no-margin central-pane">
          post feed
        </el-col>

        <el-col :span="6" class="hidden-md-and-down side-pane">info pane</el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Header from '~/components/Header/Header';
import PlaceholderText from '~/components/PlaceholderText';
import NavPane from '~/components/NavCards/NavPane';
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: "test",
  components: { Header, PlaceholderText, NavPane }
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}

.no-margin {
  margin: 0px;
}

.main-margin {
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
  border: 1px solid green;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
