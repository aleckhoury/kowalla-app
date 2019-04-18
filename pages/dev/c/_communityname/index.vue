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
                :id="communityId"
                bannerTitlePrefix="#"
                :isSubscribed="isSubscribed"
                :isOwner="isOwner"
                @subscription-button-clicked="updateSubscriptions"
              />

            <!-- v-for="post in postList" -->
            <div class="columns is-marginless newsfeed-padding" id="postFeed">
              <div class="column is-two-thirds is-paddingless">
                <Post
                  v-if="!!postList.length"
                  v-for="post in postList"
                  :key="post._id"
                  :post="post"
                  @delete-post="removePostFromPostList"
                />
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
        :id="communityId"
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
        @delete-post="removePostFromPostList"
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
import PostModal from '~/components/PostCard/modalPost.vue';

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
      numSubs: '',
      communityId: '',
      communityStats: [],

      isNestedURL: false,

      // newsfeed content
      postList: [],
    }
  },
  created() {
    this.communityName = this.$route.params.communityname;
    if (this.$route.params.hasOwnProperty('postId')) {
      this.isNestedURL = true;
    }
  },
  async mounted() {
    let infoRes = await this.$axios.get(`/api/v1/communities/c/${this.communityName}`)
    this.bannerPictureURL = infoRes.data.headerPicture;
    this.profilePictureURL = infoRes.data.profilePicture;
    this.communityId = infoRes.data._id;
    this.numSubs = infoRes.data.subscribers;
    this.communityDescription = infoRes.data.description;
    this.adminId = infoRes.data.admins[0];

    // fill stats
    this.communityStats.push({name: 'Subs', stat: infoRes.data.subscribers});
    this.communityStats.push({name: 'Posts', stat: infoRes.data.postCount});


    if (this.isNestedURL) {
      // need to launch modal to show post
      let post = await this.$axios.$get(`/api/v1/posts/${this.$route.params.postId}`);

      this.$modal.open({
        parent: this,
        component: PostModal,
        props: {
          postObj: post,
          isFromNestedURL: true,
          fallbackURL: `/dev/c/${this.communityName}`,
        },
        events: {
          'delete-post': postId => {
            this.removePostFromPostList(postId);
          },
        },
        width: 900,
        hasModalCard: true,
      });
    }

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
    },
    isOwner() {
      let isOwner = false;
      if (typeof this.$store.state.user.owned !== 'undefined') {
        for (let i=0; i< this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.communityName) {
            isOwner = true;
          }
        }
      }
      return isOwner;
    },
    isSubscribed() {
      let isSubscribed = false;
      if (typeof this.$store.state.user.subscriptions !== 'undefined') {
        for (let i = 0; i < this.$store.state.user.subscriptions.length; i++) {
          if (this.$store.state.user.subscriptions[i].name === this.communityName) {
            isSubscribed = true;
          }
        }
      }
      return isSubscribed;
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
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.communityName,
        pictureURL: this.profilePictureURL,
        numSubs: subBool ? this.communityStats[0].stat + 1 : this.communityStats[0].stat - 1,
        communityId: this.communityId,
      };
      let subObj = { subBool, ...subInfo};
      this.communityStats[0].stat = subBool ? this.communityStats[0].stat + 1 : this.communityStats[0].stat - 1;

      this.$store.dispatch('user/updateSubscriptions', subObj);
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
    },
    async removePostFromPostList(postId) {
      for (let i in this.postList) {
        if (this.postList[i]._id === postId) {
          this.postList.splice(i, 1);
          this.$axios.$delete(`/api/v1/communities/${this.communityId}/posts/${postId}`);
          break;
        }
      }
    },
  }
}

</script>

<style lang="css">
</style>
