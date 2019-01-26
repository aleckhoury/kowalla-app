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
              :bannerURL="communityPictureUrl"
              :bannerTitle="communityName"
              bannerTitlePrefix="#"
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

import { mapGetters } from 'vuex';

export default {
  name: "user-page-test",
  components: { PlaceholderText, Header, NavPane, Banner },
  data() {
    return {
      communityName: '',
      communityPictureUrl: '',
      isSubscribed: false,
      isOwner: false,
      numSubs: '',
      communityId: '',
    }
  },
  created() {
    this.communityName = this.$route.params.communityname;
  },
  mounted() {
    //let communityObj = axiosCallToDatabase();
    let communityObj = {
      name: "EarlyAdopters",
      numSubs: '10',
      pictureURL: 'http://thedigitalunion.com/wp-content/uploads/2015/08/maxresdefault.jpg',
      communityId: '2222',
    };
    this.communityPictureUrl = communityObj.pictureURL;
    this.numSubs = communityObj.numSubs;
    this.communityId = communityObj.communityId;
    this.isSubscribed = this.$store.getters['user/isUserSubscribed'];
    this.isOwner = this.$store.getters['user/isUserOwner'];
  },
  computed: {
    getCommunityName() {
      return this.communityName;
    }
  },
  methods: {
    //...mapGetters(['user/isUserSubscribed']),
    updateSubscriptions(subBool) { // change subbool to on

      let subInfo = {
        name: this.communityName,
        pictureURL: this.communityPictureUrl,
        numSubs: Number(this.numSubs),
        communityId: this.communityId,
      };
      let subObj = { subBool, ...subInfo};

      this.$store.dispatch('user/updateSubscriptions', subObj)
      this.isSubscribed = subObj.subBool;
    },
    /*isUserSubscrbed() {
      return this.$store.getters['user/isUserSubscribed'];
    }*/
  }
}


/* todos
change subobj to only be a bool, and add other necessary things to sub obj
so we can properly add things
*/
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
