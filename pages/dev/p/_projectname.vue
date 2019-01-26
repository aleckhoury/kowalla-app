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

            <Banner
              bannerURL="https://i0.wp.com/9gauge.com/wp-content/uploads/2018/11/aceable.jpg?ssl=1"
              :bannerTitle="projectName"
              bannerTitlePrefix="@"
              :isSubscribed="isSubscribed"
              :isOwner="isOwner"
              @subscription-button-clicked="updateSubscriptions"
            />



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
      projectName: null,
      pictureURL: '',
      isSubscribed: false,
      isOwner: false,
      numSubs: 0,
      projectId: ''
    }
  },
  created() {
    this.projectName = this.$route.params.projectname;
  },
  mounted() {
    //let projectObj = axiosCallToDatabase();
    let projectObj = {
      name: "Aceable",
      numSubs: 1000,
      projectId: '1111',
      pictureURL: '',
    }

    // get info from obj
    this.pictureURL = projectObj.pictureURL;
    this.numSubs = projectObj.numSubs;
    this.projectId = projectObj.projectId;

    // get info from state
    this.isSubscribed = this.$store.getters['user/isUserSubscribed'];
    this.isOwner = this.$store.getters['user/isUserOwner'];

  },
  computed: {
    getProjectName() {
      return this.projectName;
    }
  },
  methods: {
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.projectName,
        pictureURL: this.pictureURL,
        numSubs: Number(this.numSubs),
        projectId: this.projectId,
      };

      let subObj = { subBool, ...subInfo };

      this.$store.dispatch('user/updateSubscriptions', subObj)
      this.isSubscribed = subObj.subBool;
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

.main_margin {
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

.side-pane {
  display: flex;
  justify-content: center;
}

.content {
  margin-top: 15px;
  background-color: white;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
