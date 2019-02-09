<template lang="html">
  <div class="screen background-tint">
    <Header></Header>

    <div class="container is-fullhd">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- three columns, navpane, content, infopane -->
      <div class="columns is-marginless is-hidden-touch main-margin">

          <div class="column is-one-quarter is-paddingless side-pane test-outline">
            <NavPane></NavPane>
          </div>

          <div class="column is-three-quarters is-paddingless">
              <Banner
                :bannerURL="communityPictureUrl"
                :bannerTitle="communityName"
                bannerTitlePrefix="#"
                :isSubscribed="isSubscribed"
                :isOwner="isOwner"
                @subscription-button-clicked="updateSubscriptions"
              />


            <div class="columns is-marginless main-margin">
              <div class="column is-two-thirds test-outline">
                post content
              </div>
              <div class="column is-one-third test-outline">
                <DescriptionCard
                  headerString="Description"
                  subheaderString="test substring"
                  subheaderURL="/about"
                >
                Test content

              </DescriptionCard>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import NavPane from '~/components/NavCards/NavPane';
import Banner from '~/components/Banner';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';

import { mapGetters } from 'vuex';

export default {
  name: "user-page-test",
  components: { Header, NavPane, Banner, DescriptionCard },
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
      pictureURL: '',
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
</style>
