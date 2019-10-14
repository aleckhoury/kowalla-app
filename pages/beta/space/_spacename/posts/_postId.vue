<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-marginless main-margin"
      >
        <div
          :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
          class="column is-one-quarter"
        >
          <Creations />
          <Subscriptions />
        </div>

        <div class="column is-one-half">
          <Post
            id="spacePost"
            :key="post._id"
            :post="post"
            :is-mobile="false"
            :truncate="false"
            @delete-post="removePostFromPostList"
          />
        </div>
        <div
          :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
          class="column is-one-quarter"
        >
          <InfoPane>
            <SignupCard
              v-if="!this.$store.state.user.loggedIn"
              class="fullWidth"
            />
            <ProfileCard
              :name="spaceName"
              :username="spaceName"
              :profile-picture-url="profilePictureUrl"
              :subheader-string="`View ${spaceName}'s stats`"
              :stats="spaceStats"
              type="project"
            />

            <DescriptionCard :subheader-on="false" header-string="Description">
              {{ spaceDescription }}
            </DescriptionCard>

            <EditButton
              v-if="this.$store.state.user._id === adminId"
              @edit-button-clicked="editSpace"
            >
              <b>Edit Settings</b>
            </EditButton>
          </InfoPane>
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

import Banner from "~/components/SpacesAndProjectsShared/Banner";
import DescriptionCard from "~/components/InfoCards/DescriptionCard";
import InfoPane from "~/components/InfoCards/InfoPane";
import EditButton from "~/components/InfoCards/EditButton";
import ProfileCard from "~/components/InfoCards/ProfileCard";
import SignupCard from "~/components/InfoCards/SignupCard";
import Post from "~/components/PostCards/Post";
import Creations from "../../../../../components/SidePaneCards/Creations";
import Subscriptions from "../../../../../components/SidePaneCards/Subscriptions";

export default {
  name: "SpacePost",
  components: {
    Subscriptions,
    Creations,
    Post,
    SignupCard,
    Header,
    MobileHeader,
    MobileFooter,
    Banner,
    DescriptionCard,
    ProfileCard,
    InfoPane,
    EditButton,
  },

  data() {
    return {
      // backend content
      spaceName: "",
      bannerPictureUrl: "",
      profilePictureUrl: "",
      spaceDescription: "",
      adminId: "",
      numSubs: "",
      spaceId: "",
      spaceStats: [],
      post: {},
    };
  },
  computed: {
    isOwner() {
      let isOwner = false;
      if (typeof this.$store.state.user.owned !== "undefined") {
        for (let i = 0; i < this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.spaceName) {
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
          if (this.$store.state.user.subscriptions[i].name === this.spaceName) {
            isSubscribed = true;
          }
        }
      }
      return isSubscribed;
    },
  },
  created() {
    this.spaceName = this.$route.params.spacename;
  },
  async mounted() {
    let infoRes = await this.$axios.$get(
      `/api/v1/spaces/space/${this.spaceName}`
    );
    this.post = await this.$axios.$get(
      `/api/v1/posts/${this.$route.params.postId}`
    );

    this.bannerPictureUrl = infoRes.headerPicture;
    this.profilePictureUrl = infoRes.profilePicture;
    this.spaceId = infoRes._id;
    this.numSubs = infoRes.subscribers;
    this.spaceDescription = infoRes.description;
    this.adminId = infoRes.admins[0];

    // fill stats
    this.spaceStats.push({ name: "Subs", stat: infoRes.subscribers });
    this.spaceStats.push({ name: "Posts", stat: infoRes.postCount });

    if ("scrollRestoration" in history) {
      // Back off, browser, I got this...
      history.scrollRestoration = "manual";
    }

    document.title = `Kowalla - #${this.spaceName}`;
  },
  methods: {
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.spaceName,
        pictureUrl: this.profilePictureUrl,
        numSubs: subBool
          ? this.spaceStats[0].stat + 1
          : this.spaceStats[0].stat - 1,
        spaceId: this.spaceId,
      };
      let subObj = { subBool, ...subInfo };
      this.spaceStats[0].stat = subBool
        ? this.spaceStats[0].stat + 1
        : this.spaceStats[0].stat - 1;

      this.$store.dispatch("user/updateSubscriptions", subObj);
    },
    editSpace() {
      this.$router.push({
        path: `/beta/space/${this.spaceName}/edit`,
      });
    },
    async removePostFromPostList() {
      await this.$axios.$delete(`/api/v1/posts/${this.post._id}`);
    },
  },
};
</script>

<style lang="css" scoped></style>
