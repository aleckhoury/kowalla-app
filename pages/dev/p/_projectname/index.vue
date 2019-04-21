<template lang="html">
  <div class="screen background-tint">
    <Header class="is-hidden-touch" />

    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- two columns, navpane and banner -->
      <div class="columns is-marginless  main-margin">
        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane />
        </div>

        <div class="column is-three-quarters is-paddingless">
          <Banner
            :banner-url="bannerPictureURL"
            :banner-title="projectName"
            :id="projectId"
            :is-subscribed="isSubscribed"
            :is-owner="isOwner"
            banner-title-prefix="@"
            @subscription-button-clicked="updateSubscriptions"
          />

          <!-- new columns for description, profile and project cards -->
          <div class="columns is-marginless newsfeed-padding">
            <div class="column is-half is-paddingless">
              <DescriptionCard
                :subheader-on="false"
                header-string="Description"
              >
                {{ projectDescription }}
              </DescriptionCard>

              <EditButton
                v-if="this.$store.state.user.username === adminUsername"
                @edit-button-clicked="callEditProjectModal"
              >
                <b>Edit Settings</b>
              </EditButton>
            </div>

            <div class="column is-half is-paddingless">
              <div class="level">
                <div class="level-item">
                  <ProfileCard
                    :name="projectName"
                    :username="projectName"
                    :profile-picture-url="projectProfilePictureURL"
                    :subheader-string="`View ${projectName}'s stats`"
                    :stats="projectStats"
                    type="project"
                  />
                </div>

                <div class="level-item">
                  <ProfileCard
                    :name="`${adminFirstName} ${adminLastName}`"
                    :username="adminUsername"
                    :profile-picture-url="adminProfilePictureURL"
                    :subheader-string="`View ${adminFirstName}'s profile`"
                    :subheader-url="`/dev/u/${adminUsername}`"
                    :stats="profileStats"
                    type="user"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- new columns for content and info pane -->
          <div id="postFeed" class="columns is-marginless newsfeed-padding">
            <!-- post feed -->
            <div class="column is-two-thirds is-paddingless">
              <Post
                v-for="post in postList"
                :key="post._id"
                :post="post"
                :is-mobile="true"
                @delete-post="removePostFromPostList"
              />
            </div>

            <!-- info pane -->
            <div class="column is-one-third side-pane">
              <InfoPane>
                <!-- fill with children components -->
              </InfoPane>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <MobileHeader
      :location-picture-to-display="projectProfilePictureURL"
      :location-to-display="`@${projectName}`"
      class="is-hidden-desktop"
    />

    <div class="is-marginless is-hidden-desktop mobile-main-margin">
      <Banner
        :banner-url="bannerPictureURL"
        :banner-title="projectName"
        :id="projectId"
        :is-subscribed="isSubscribed"
        :is-owner="isOwner"
        banner-title-prefix="@"
        is-mobile
        @subscription-button-clicked="updateSubscriptions"
      />

      <DescriptionCard
        :subheader-on="false"
        class="newsfeed-margin"
        header-string="Description"
      >
        {{ projectDescription }}
      </DescriptionCard>

      <div
        class="columns is-marginless is-paddingless is-mobile is-centered is-centered is-multiline"
      >
        <div class="column is-narrow">
          <ProfileCard
            :name="projectName"
            :username="projectName"
            :profile-picture-url="projectProfilePictureURL"
            :subheader-string="`View ${projectName}'s stats`"
            :stats="projectStats"
            type="project"
            is-mobile
          />
        </div>

        <div class="column is-narrow">
          <ProfileCard
            :name="`${adminFirstName} ${adminLastName}`"
            :username="adminUsername"
            :profile-picture-url="adminProfilePictureURL"
            :subheader-string="`View ${adminFirstName}'s profile`"
            :subheader-url="`/dev/u/${adminUsername}`"
            :stats="profileStats"
            type="user"
            is-mobile
          />
        </div>
      </div>

      <div class="side-pane">
        <EditButton
          v-if="this.$store.state.user.username === adminUsername"
          @edit-button-clicked="callEditProjectModal"
        >
          <b>Edit Settings</b>
        </EditButton>
      </div>

      <Post
        v-for="post in postList"
        :key="post._id"
        :post="post"
        class="newsfeed-margin"
        @delete-post="removePostFromPostList"
      />
    </div>

    <MobileFooter class="is-hidden-desktop" />
  </div>
</template>

<script>
import MobileHeader from "~/components/Header/Mobile/MobileHeader";
import MobileFooter from "~/components/Header/Mobile/MobileFooter";

import Header from "~/components/Header/Header";
import NavPane from "~/components/NavCards/NavPane";
import Banner from "~/components/CommunitiesAndProjectsShared/Banner";
import DescriptionCard from "~/components/InfoCards/DescriptionCard";
import ProfileCard from "~/components/InfoCards/ProfileCard";
import InfoPane from "~/components/InfoCards/InfoPane";
import EditButton from "~/components/InfoCards/EditButton";
import EditProjectModal from "~/components/Modals/Edit/EditProjectModal";

import Post from "~/components/PostCards/NewsfeedPost";
import PostModal from "~/components/PostCards/PostModal.vue";

export default {
  middleware: "activePost",
  name: "UserPageTest",
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
    EditProjectModal,
    Post,
  },
  data() {
    return {
      projectName: null,
      bannerPictureURL: "",
      projectProfilePictureURL: "",
      projectDescription: "",
      admins: null,
      numSubs: 0,
      projectId: "",
      adminFirstName: "",
      adminLastName: "",
      adminUsername: "",
      adminProfilePictureURL: "",
      projectStats: [],
      profileStats: [],
      // newsfeed content
      postList: [],
      isNestedURL: false,
    };
  },
  computed: {
    getProjectName() {
      return this.projectName;
    },
    sort() {
      return this.$store.state.sorting.project;
    },
    isOwner() {
      let isOwner = false;
      if (typeof this.$store.state.user.owned !== "undefined") {
        for (let i = 0; i < this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.projectName) {
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
            this.$store.state.user.subscriptions[i].name === this.projectName
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
        `/api/v1/posts/project/${this.projectId}/${this.sort}/0`
      );

      await this.scroll();
    },
  },
  created() {
    this.projectName = this.$route.params.projectname;
    if (this.$route.params.hasOwnProperty("postId")) {
      this.isNestedURL = true;
    }
  },
  async mounted() {
    // #############
    // Can probably add all these to a util function to save space in each index.vue
    // #############

    // get project details
    let infoRes = await this.$axios.get(
      `/api/v1/projects/p/${this.projectName}`
    );
    this.bannerPictureURL = infoRes.data.headerPicture;
    this.projectProfilePictureURL = infoRes.data.profilePicture;
    this.projectId = infoRes.data._id;
    this.numSubs = infoRes.data.subscribers;
    this.projectDescription = infoRes.data.description;
    this.admins = infoRes.data.admins;

    // fill project stats
    this.projectStats.push({ name: "Subs", stat: infoRes.data.subscribers });
    this.projectStats.push({ name: "Rep", stat: infoRes.data.reputation });
    this.projectStats.push({ name: "Posts", stat: infoRes.data.postCount });

    // get admin details
    let adminRes = await this.$axios.get(`/api/v1/profiles/${this.admins[0]}`);
    this.adminFirstName = adminRes.data.firstName;
    this.adminLastName = adminRes.data.lastName;
    this.adminUsername = adminRes.data.username;
    this.adminProfilePictureURL = adminRes.data.profilePicture;

    // fill profil estats
    this.profileStats.push({ name: "Rep", stat: adminRes.data.reputation });
    this.profileStats.push({ name: "Posts", stat: adminRes.data.postCount });
    this.profileStats.push({
      name: "Replies",
      stat: adminRes.data.commentCount,
    });

    if (this.isNestedURL) {
      // need to launch modal to show post
      let post = await this.$axios.$get(
        `/api/v1/posts/${this.$route.params.postId}`
      );

      this.$modal.open({
        parent: this,
        component: PostModal,
        props: {
          postObj: post,
          isFromNestedURL: true,
          fallbackURL: `/dev/p/${this.projectName}`,
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
      `/api/v1/posts/project/${this.projectId}/${this.sort}/${
        this.postList.length
      }`
    );

    await this.scroll();

    document.title = `Kowalla - @${this.projectName}`;
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
              `/api/v1/posts/project/${this.projectId}/${this.sort}/${
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
        name: this.projectName,
        pictureURL: this.projectProfilePictureURL,
        numSubs: subBool
          ? this.projectStats[0].stat + 1
          : this.projectStats[0].stat - 1,
        projectId: this.projectId,
      };

      this.projectStats[0].stat = subBool
        ? this.projectStats[0].stat + 1
        : this.projectStats[0].stat - 1;

      let subObj = { subBool, ...subInfo };

      this.$store.dispatch("user/updateSubscriptions", subObj);
    },
    callEditProjectModal() {
      this.$modal.open({
        parent: this,
        component: EditProjectModal,
        props: {
          name: this.projectName,
          headerPicture: this.bannerPictureURL,
          profilePicture: this.projectProfilePictureURL,
          description: this.projectDescription,
          projectId: this.projectId,
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

<style lang="css" scoped></style>
