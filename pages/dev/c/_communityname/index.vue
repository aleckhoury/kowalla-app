<template lang="html">
  <div class="screen background-tint">
    <Header class="is-hidden-touch"></Header>

    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- three columns, navpane, content, infopane -->
      <div class="columns is-marginless main-margin">

          <div class="column is-one-quarter is-paddingless side-pane test-outline">
            <NavPane></NavPane>
          </div>

          <div class="column is-three-quarters is-paddingless">
              <Banner
                :bannerURL="bannerPictureURL"
                :bannerTitle="communityName"
                bannerTitlePrefix="#"
                :isSubscribed="isSubscribed"
                :isOwner="isOwner"
                @subscription-button-clicked="updateSubscriptions"
              />


            <div class="columns is-marginless newsfeed-padding">
              <div class="column is-two-thirds test-outline">
                <Post v-for="post in postList" :key="post._id" :post="post"></Post>

              </div>
              <div class="column is-one-third is-paddingless test-outline side-pane">
                <InfoPane>
                  <DescriptionCard
                    headerString="Description"
                    :subheaderOn="false"
                  >
                    {{communityDescription}}
                  </DescriptionCard>

                  <EditButton
                    v-if="this.$store.state.user._id === this.adminId"
                    @edit-button-clicked="callEditCommunityModal"
                  >
                    <b>Edit Settings</b>
                  </EditButton>

                </InfoPane>


              </div>
            </div>
          </div>
      </div>
    </div>

    <!-- Mobile -->
    <MobileHeader
      class="is-hidden-desktop"
      :locationPictureToDisplay="this.profilePictureURL"
      :locationToDisplay="`#${this.communityName}`"
    />

    <div class="columns is-marginless is-hidden-desktop mobile-main-margin">
      <Post v-for="post in postList" :key="post._id" :post="post"></Post>
    </div>


    <MobileFooter class="is-hidden-desktop"/>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import MobileHeader from '~/components/Header/MobileHeader';
import MobileFooter from '~/components/Header/MobileFooter';

import NavPane from '~/components/NavCards/NavPane';
import Banner from '~/components/Banner';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import InfoPane from '~/components/InfoCards/InfoPane';
import EditButton from '~/components/InfoCards/EditButton';
import EditCommunityModal from '~/components/Modals/Edit/EditCommunityModal';

import Post from "~/components/PostCard/feedPost";

import { mapGetters } from 'vuex';

export default {
  name: "user-page-test",
  components: {
    Header,
    MobileHeader,
    MobileFooter,
    NavPane,
    Banner,
    DescriptionCard,
    InfoPane,
    EditButton,
    EditCommunityModal,
    Post
  },
  data() {
    return {
      // backend content
      communityName: '',
      bannerPictureURL: '',
      profilePictureURL: '',
      communityDescription: '',
      adminId: '',
      isSubscribed: false,
      isOwner: false,
      numSubs: '',
      communityId: '',

      // newsfeed content
      postList: [],
    }
  },
  created() {
    this.communityName = this.$route.params.communityname;
  },
  async mounted() {
    this.isOwner = this.$store.getters['user/isUserOwner'];
    this.isSubscribed = this.$store.getters['user/isUserSubscribed'];

    let infoRes = await this.$axios.get(`/api/v1/communities/c/${this.communityName}`)
    console.log(infoRes.data);
    //------------------
    // remove if statements, but keep assignments in production.
    // they're only for quicker validation to ignore an unhelpful nuxt error throw
    //------------------
    if (infoRes.data.hasOwnProperty('headerPicture')) {
      this.bannerPictureURL = infoRes.data.headerPicture;
    }
    if (infoRes.data.hasOwnProperty('profilePicture')) {
      this.profilePictureURL = infoRes.data.profilePicture;
    }
    if (infoRes.data.hasOwnProperty('_id')) {
      this.communityId = infoRes.data._id;
    }
    if (infoRes.data.hasOwnProperty('description')) {
      this.communityDescription = infoRes.data.description;
    }
    if (infoRes.data.hasOwnProperty('admins')) {
      console.log(infoRes.data.admins[0]);
      this.adminId = infoRes.data.admins[0];
    }

    // get posts
    this.postList = await this.$axios.$get('/api/v1/posts');

    document.title = `kowalla - #${this.communityName}`;
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
        pictureURL: this.profilePictureURL,
        numSubs: Number(this.numSubs),
        communityId: this.communityId,
      };
      let subObj = { subBool, ...subInfo};

      this.$store.dispatch('user/updateSubscriptions', subObj)
      this.isSubscribed = subObj.subBool;
    },
    callEditCommunityModal() {
      console.log('edit project settings pressed')
      this.$modal.open({
        parent: this,
        component: EditCommunityModal,
        props: {
          name: this.communityName,
          headerPicture: this.bannerPictureURL,
          profilePicture: this.profilePictureURL,
          description: this.communityDescription,
          communityId: this.communityId,
        },
        width: 900,
        hasModalCard: true
      });
    }
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
