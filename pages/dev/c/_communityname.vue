<template lang="html">
  <el-container class="screen">
    <el-header class="no-padding" height="90px">
      <Header></Header>
    </el-header>

    <el-main class="main-margin background-tint">
      <el-row type="flex" justify="center">
        <el-col :span="6" class="side-pane">
          <NavPane></NavPane>
        </el-col>

        <el-col :span="18">

          <el-col :span="24">
            <Banner></Banner>
          </el-col>


          <el-row>
            <el-col :span="16" class="content">
              post feed
            </el-col>

            <el-col :span="8" class="side-pane content">
              info cards
            </el-col>
          </el-row>
        </el-col>

      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import PlaceholderText from '~/components/PlaceholderText';
import Header from '~/components/Header/Header';
import NavPane from '~/components/NavCards/NavPane';
import Banner from '~/components/Banner';

export default {
  name: "user-page-test",
  components: { PlaceholderText, Header, NavPane, Banner },
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

.background-tint {
  background-color: #E9EBEE;
}

.main-margin {
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

.content {
  margin-top: 15px;
  border: 1px solid black;
}

.side-pane {
  display: flex;
  justify-content: center;
  border: 1px solid black;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
