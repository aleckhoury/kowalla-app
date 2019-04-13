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

          <div class="column is-one-quarter is-paddingless side-pane">
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


            <div class="columns is-marginless newsfeed-padding" id="postFeed">
              <div class="column is-two-thirds">
                <Post v-for="post in postList" :key="post._id" :post="post"></Post>

              </div>
              <div class="column is-one-third is-paddingless side-pane">
                <InfoPane>
                  <ProfileCard
                    :name="communityName"
                    :username="communityName"
                    :profilePictureURL="profilePictureURL"
                    :subheaderString="`View ${communityName}'s stats`"
                    :stats="communityStats"
                    type="project"
                  ></ProfileCard>

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

    <div class="is-hidden-desktop mobile-main-margin">
      <Banner
        :bannerURL="bannerPictureURL"
        :bannerTitle="communityName"
        bannerTitlePrefix="#"
        :isSubscribed="isSubscribed"
        :isOwner="isOwner"
        @subscription-button-clicked="updateSubscriptions"
        isMobile
      />

      <DescriptionCard
        class="newsfeed-margin"
        headerString="Description"
        :subheaderOn="false"
      >
      {{communityDescription}}

      </DescriptionCard>

      <div class="side-pane">
        <EditButton
          v-if="this.$store.state.user._id === this.adminId"
          @edit-button-clicked="callEditCommunityModal"
        >
          <b>Edit Settings</b>
        </EditButton>
      </div>

      <Post
        class="newsfeed-margin"

        v-for="post in postList"
        :key="post._id"
        :post="post"
      />
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
import ProfileCard from '~/components/InfoCards/ProfileCard';
import Post from "~/components/PostCard/feedPost";

export default {
  middleware: 'activePost',
  name: "user-page-test",
  components: {
    Header,
    MobileHeader,
    MobileFooter,
    NavPane,
    Banner,
    DescriptionCard,
    ProfileCard,
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
      communityStats: [],

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

    let infoRes = await this.$axios.$get(`/api/v1/communities/c/${this.communityName}`)
      this.bannerPictureURL = infoRes.headerPicture;
      this.profilePictureURL = infoRes.profilePicture;
      this.communityId = infoRes._id;
      this.communityDescription = infoRes.description;
      this.adminId = infoRes.admins[0];

      this.communityStats.push({name: 'Subs', stat: infoRes.subscribers});
      this.communityStats.push({name: 'Posts', stat: infoRes.postCount});

    // get posts
    this.postList = await this.$axios.$get(`/api/v1/community/posts/${ this.communityId }/${ this.sort }/${this.postList.length}`);

    await this.scroll();

    document.title = `Kowalla - #${this.communityName}`;
  },
  computed: {
    getCommunityName() {
      return this.communityName;
    },
    sort() {
      return this.$store.state.sorting.community;
    }
  },
  watch: {
    async sort() {
      this.postList = await this.$axios.$get(`/api/v1/community/posts/${ this.communityId }/${ this.sort }/0`);

      await this.scroll();
    }
  },
  methods: {
    async scroll() {
      if (this.postList.length) {
        let isActive = false;
        window.onscroll = async ev => {
          const feed = document.getElementById('postFeed');
          const bottomOfWindow = (window.innerHeight + window.scrollY >= feed.offsetHeight - 300);
          if (!isActive && bottomOfWindow) {
            isActive = true;
            const posts = await this.$axios.$get(`/api/v1/community/posts/${this.communityId}/${this.sort}/${this.postList.length}`);
            const newList = await this.postList.concat(posts);
            if (posts.length) {
              this.postList = await newList;
              isActive = false;
            }
          }
        }
      }
    },
    //...mapGetters(['user/isUserSubscribed']),
    updateSubscriptions(subBool) {
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
  }
}

</script>

<style lang="css">
</style>
