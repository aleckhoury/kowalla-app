<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- three columns, navpane, content, infopane -->
      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-marginless main-margin"
      >
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane class="fixed" />
        </div>

        <div class="column is-three-quarters is-paddingless">
          <Banner
            :banner-url="bannerPictureUrl"
            :banner-title="communityName"
            :id="communityId"
            :is-subscribed="isSubscribed"
            :is-owner="isOwner"
            banner-title-prefix="#"
            @subscription-button-clicked="updateSubscriptions"
          />

          <!-- v-for="post in postList" -->
          <div id="postFeed" class="columns is-marginless newsfeed-padding">
            <div class="column is-two-thirds is-paddingless">
              <EmptyPostList v-if="!postList.length" />
              <Post
                v-for="post in postList"
                :key="post._id"
                :post="post"
                @delete-post="removePostFromPostList"
              />
            </div>
            <div class="column is-one-third is-paddingless side-pane">
              <InfoPane>
                <SignupCard
                  v-if="!this.$store.state.user.loggedIn"
                  class="fullWidth"
                />
                <ProfileCard
                  :name="communityName"
                  :username="communityName"
                  :profile-picture-url="profilePictureUrl"
                  :subheader-string="`View ${communityName}'s stats`"
                  :stats="communityStats"
                  type="project"
                />

                <DescriptionCard
                  :subheader-on="false"
                  header-string="Description"
                >
                  {{ communityDescription }}
                </DescriptionCard>

                <EditButton
                  v-if="this.$store.state.user._id === adminId"
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
    <div
      :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
      class="is-marginless is-hidden-desktop mobile-main-margin"
    >
      <Banner
        :banner-url="bannerPictureUrl"
        :banner-title="communityName"
        :id="communityId"
        :is-subscribed="isSubscribed"
        :is-owner="isOwner"
        banner-title-prefix="#"
        is-mobile
        @subscription-button-clicked="updateSubscriptions"
      />

      <DescriptionCard
        :subheader-on="false"
        class="newsfeed-margin"
        header-string="Description"
      >
        {{ communityDescription }}
      </DescriptionCard>

      <div class="side-pane">
        <EditButton
          v-if="this.$store.state.user._id === adminId"
          @edit-button-clicked="callEditCommunityModal"
        >
          <b>Edit Settings</b>
        </EditButton>
      </div>
      <EmptyPostList v-if="!postList.length" />
      <Post
        v-for="post in postList"
        :is-mobile="true"
        :key="post._id"
        :post="post"
        class="newsfeed-margin"
        @delete-post="removePostFromPostList"
      />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import MobileHeader from "~/components/Header/Mobile/MobileHeader";
import MobileFooter from "~/components/Header/Mobile/MobileFooter";

import NavPane from "~/components/NavCards/NavPane";
import Banner from "~/components/CommunitiesAndProjectsShared/Banner";
import DescriptionCard from "~/components/InfoCards/DescriptionCard";
import InfoPane from "~/components/InfoCards/InfoPane";
import EditButton from "~/components/InfoCards/EditButton";
import EditCommunityModal from "~/components/Modals/Edit/EditCommunityModal";
import ProfileCard from "~/components/InfoCards/ProfileCard";
import Post from "~/components/PostCards/NewsfeedPost";
import PostModal from "~/components/PostCards/PostModal.vue";
import EmptyPostList from "~/components/PostCards/EmptyPostList";
import SignupCard from "../../../../components/InfoCards/SignupCard";
export default {
  name: "UserPageTest",
  components: {
    SignupCard,
    EmptyPostList,
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
    Post,
  },

  data() {
    return {
      // backend content
      communityName: "",
      bannerPictureUrl: "",
      profilePictureUrl: "",
      communityDescription: "",
      adminId: "",
      numSubs: "",
      communityId: "",
      communityStats: [],

      isNestedUrl: false,

      // newsfeed content
      postList: [],
    };
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
      if (typeof this.$store.state.user.owned !== "undefined") {
        for (let i = 0; i < this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.communityName) {
            isOwner = true;
          }
        }
      }
      return isOwner;
    },
    isSubscribed() {
      let isSubscribed = false;
      if (typeof this.$store.state.user.subscriptions !== "undefined") {
        for (let i = 0; i < this.$store.state.user.subscriptions.length; i++) {
          if (
            this.$store.state.user.subscriptions[i].name === this.communityName
          ) {
            isSubscribed = true;
          }
        }
      }
      return isSubscribed;
    },
  },
  watch: {
    async sort() {
      this.postList = await this.$axios.$get(
        `/api/v1/community/posts/${this.communityId}/${this.sort}/0`
      );

      await this.scroll();
    },
  },
  created() {
    this.communityName = this.$route.params.communityname;
    if (this.$route.params.hasOwnProperty("postId")) {
      this.isNestedUrl = true;
    }
  },
  async mounted() {
    let infoRes = await this.$axios.get(
      `/api/v1/communities/community/${this.communityName}`
    );
    this.bannerPictureUrl = infoRes.data.headerPicture;
    this.profilePictureUrl = infoRes.data.profilePicture;
    this.communityId = infoRes.data._id;
    this.numSubs = infoRes.data.subscribers;
    this.communityDescription = infoRes.data.description;
    this.adminId = infoRes.data.admins[0];

    // fill stats
    this.communityStats.push({ name: "Subs", stat: infoRes.data.subscribers });
    this.communityStats.push({ name: "Posts", stat: infoRes.data.postCount });

    if (this.isNestedUrl) {
      // need to launch modal to show post
      let post = await this.$axios.$get(
        `/api/v1/posts/${this.$route.params.postId}`
      );

      this.$modal.open({
        parent: this,
        component: PostModal,
        props: {
          postObj: post,
          isFromNestedUrl: true,
          fallbackUrl: `/dev/community/${this.communityName}`,
        },
        events: {
          "delete-post": postId => {
            this.removePostFromPostList(postId);
          },
        },
        width: 900,
        hasModalCard: true,
      });
    }

    // get posts
    this.postList = await this.$axios.$get(
      `/api/v1/community/posts/${this.communityId}/${this.sort}/${
        this.postList.length
      }`
    );
    console.log(this.postList.length);
    await this.scroll();

    document.title = `Kowalla - #${this.communityName}`;
  },
  methods: {
    async scroll() {
      if (this.postList.length) {
        let isActive = false;
        window.onscroll = async () => {
          const feed = document.getElementById("postFeed");
          const bottomOfWindow =
            window.innerHeight + window.scrollY >= feed.offsetHeight - 300;
          if (!isActive && bottomOfWindow) {
            isActive = true;
            const posts = await this.$axios.$get(
              `/api/v1/community/posts/${this.communityId}/${this.sort}/${
                this.postList.length
              }`
            );
            const newList = await this.postList.concat(posts);
            if (posts.length) {
              this.postList = await newList;
              isActive = false;
            }
          }
        };
      }
    },
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.communityName,
        pictureUrl: this.profilePictureUrl,
        numSubs: subBool
          ? this.communityStats[0].stat + 1
          : this.communityStats[0].stat - 1,
        communityId: this.communityId,
      };
      let subObj = { subBool, ...subInfo };
      this.communityStats[0].stat = subBool
        ? this.communityStats[0].stat + 1
        : this.communityStats[0].stat - 1;

      this.$store.dispatch("user/updateSubscriptions", subObj);
    },
    callEditCommunityModal() {
      this.$modal.open({
        parent: this,
        component: EditCommunityModal,
        props: {
          name: this.communityName,
          headerPicture: this.bannerPictureUrl,
          profilePicture: this.profilePictureUrl,
          description: this.communityDescription,
          communityId: this.communityId,
        },
        width: 900,
        hasModalCard: true,
      });
    },
    async removePostFromPostList(postId) {
      for (let i in this.postList) {
        if (this.postList[i]._id === postId) {
          this.postList.splice(i, 1);
          await this.$axios.delete(
            `/api/v1/communities/${this.communityId}/posts/${postId}`
          );
          break;
        }
      }
    },
  },
};
</script>

<style lang="css" scoped>
.mobile-main-margin {
  padding-top: 100px !important;
}
.card-container {
  margin-bottom: 0;
}
.fullWidth {
  width: 100% !important;
}
</style>
