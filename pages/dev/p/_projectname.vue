<template lang="html">
  <div class="screen">

    <Header></Header>


    <div class="columns is-marginless main-margin background-tint">

        <div class="column is-one-quarter is-paddingless test-outline side-pane">
          <NavPane></NavPane>
        </div>

        <div class="column is-three-quarters is-paddingless test-outline">

            <Banner
              bannerURL=""
              :bannerTitle="projectName"
              bannerTitlePrefix="@"
              :isSubscribed="isSubscribed"
              :isOwner="isOwner"
              @subscription-button-clicked="updateSubscriptions"
            />

            <div class="columns is-marginless">
              <div class="column is-two-thirds test-outline">
                post content
              </div>
              <div class="column is-one-third test-outline">
                info
              </div>
            </div>

        </div>




      <el-row>
        <el-col :span="16" class="content">
          post feed
        </el-col>

        <el-col :span="8" class="side-pane content">
          info cards
        </el-col>
      </el-row>



    </div>
  </div>
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

.test-outline {
  border: 1px solid black;
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
