<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">

      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-marginless main-margin"
      >
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane class="fixed" />
        </div>

        <div class="column is-three-quarters is-paddingless">
          <div id="postFeed" class="columns is-marginless">
            <div class="column is-two-thirds is-paddingless">
              <Post
                id="communityPost"
                :key="post._id"
                :post="post"
                :is-mobile="false"
                :truncate="false"
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
      <Post
        :key="post._id"
        :post="post"
        :is-mobile="true"
        :truncate="false"
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
import SignupCard from "~/components/InfoCards/SignupCard";
import Post from "~/components/PostCards/NewsfeedPost";

export default {
  name: "UserPageTest",
  components: {
    Post,
    SignupCard,
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
      post: {},
    };
  },
  computed: {
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
  created() {
    this.communityName = this.$route.params.communityname;
  },
  async mounted() {
    let infoRes = await this.$axios.get(
      `/api/v1/communities/community/${this.communityName}`
    );
    this.post = await this.$axios.$get(`/api/v1/posts/${this.$route.params.postId}`);

    this.bannerPictureUrl = infoRes.data.headerPicture;
    this.profilePictureUrl = infoRes.data.profilePicture;
    this.communityId = infoRes.data._id;
    this.numSubs = infoRes.data.subscribers;
    this.communityDescription = infoRes.data.description;
    this.adminId = infoRes.data.admins[0];

    // fill stats
    this.communityStats.push({ name: "Subs", stat: infoRes.data.subscribers });
    this.communityStats.push({ name: "Posts", stat: infoRes.data.postCount });

    if ('scrollRestoration' in history) {
      // Back off, browser, I got this...
      history.scrollRestoration = 'manual';
    }

    document.title = `Kowalla - #${this.communityName}`;
  },
  methods: {
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
    async removePostFromPostList() {
      await this.$axios.delete(
              `/api/v1/posts/${this.post._id}`
      );
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
