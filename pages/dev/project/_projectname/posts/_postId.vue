<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- two columns, navpane and banner -->
      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-marginless  main-margin"
      >
        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane class="fixed" />
        </div>

        <div class="column is-three-quarters is-paddingless">
          <!-- new columns for content and info pane -->
          <div id="postFeed" class="columns is-marginless">
            <!-- post feed -->
            <div class="column is-two-thirds is-paddingless">
              <Post
                id="projectPost"
                :key="post._id"
                :post="post"
                :is-mobile="false"
                :truncate="false"
                @delete-post="removePostFromPostList"
              />
            </div>

            <!-- info pane -->
            <div class="column is-one-third side-pane is-paddingless">
              <InfoPane>
                <DescriptionCard
                  :subheader-on="false"
                  header-string="Description"
                >
                  {{ projectDescription }}
                </DescriptionCard>
                <ProfileCard
                  :name="projectName"
                  :username="name"
                  :profile-picture-url="projectProfilePictureUrl"
                  :subheader-string="`View ${name}'s stats`"
                  :stats="projectStats"
                  type="project"
                />
                <ProfileCard
                  :name="`${adminFirstName} ${adminLastName}`"
                  :username="adminUsername"
                  :profile-picture-url="adminProfilePictureUrl"
                  :subheader-string="`View ${adminFirstName}'s profile`"
                  :subheader-url="`/dev/user/${adminUsername}`"
                  :stats="profileStats"
                  type="user"
                />
                <EditButton
                  v-if="this.$store.state.user.username === adminUsername"
                  @edit-button-clicked="callEditProjectModal"
                >
                  <b>Edit Settings</b>
                </EditButton>
                <SignupCard
                  v-if="!this.$store.state.user.loggedIn"
                  class="fullWidth"
                />
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
import SignupCard from "~/components/InfoCards/SignupCard";
import Post from "~/components/PostCards/Post";

export default {
  name: "ProjectPage",
  components: {
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
    EditProjectModal,
    Post,
  },

  data() {
    return {
      name: null,
      bannerPictureUrl: "",
      projectProfilePictureUrl: "",
      projectDescription: "",
      admins: null,
      numSubs: 0,
      projectId: "",
      adminFirstName: "",
      adminLastName: "",
      adminUsername: "",
      projectName: "",
      adminProfilePictureUrl: "",
      projectStats: [],
      profileStats: [],
      post: {},
    };
  },
  computed: {
    isOwner() {
      let isOwner = false;
      if (typeof this.$store.state.user.owned !== "undefined") {
        for (let i = 0; i < this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.name) {
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
          if (this.$store.state.user.subscriptions[i].name === this.name) {
            isSubscribed = true;
          }
        }
      }
      return isSubscribed;
    },
  },
  created() {
    this.name = this.$route.params.projectname;
  },
  async mounted() {
    // #############
    // Can probably add all these to a util function to save space in each index.vue
    // #############

    // get project details
    let infoRes = await this.$axios.$get(
      `/api/v1/projects/project/${this.name}`
    );
    this.post = await this.$axios.$get(
      `/api/v1/posts/${this.$route.params.postId}`
    );

    this.bannerPictureUrl = infoRes.headerPicture;
    this.projectProfilePictureUrl = infoRes.profilePicture;
    this.projectId = infoRes._id;
    this.projectName = infoRes.projectName;
    this.numSubs = infoRes.subscribers;
    this.projectDescription = infoRes.description;
    this.admins = infoRes.admins;

    // fill project stats
    this.projectStats.push({ name: "Subs", stat: infoRes.subscribers });
    this.projectStats.push({ name: "Rep", stat: infoRes.reputation });
    this.projectStats.push({ name: "Posts", stat: infoRes.postCount });

    // get admin details
    let adminRes = await this.$axios.$get(`/api/v1/profiles/${this.admins[0]}`);
    this.adminFirstName = adminRes.firstName;
    this.adminLastName = adminRes.lastName;
    this.adminUsername = adminRes.username;
    this.adminProfilePictureUrl = adminRes.profilePicture;

    // fill profil estats
    this.profileStats.push({ name: "Rep", stat: adminRes.reputation });
    this.profileStats.push({ name: "Posts", stat: adminRes.postCount });
    this.profileStats.push({
      name: "Replies",
      stat: adminRes.commentCount,
    });

    document.title = `Kowalla - @${this.name}`;
  },
  methods: {
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.name,
        pictureUrl: this.projectProfilePictureUrl,
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
      this.$router.push({
        path: `/dev/project/${this.name}/edit`,
      });
    },
    async removePostFromPostList() {
      await this.$axios.$delete(`/api/v1/posts/${this.post._id}`);
    },
  },
};
</script>

<style lang="css" scoped>
.column.isMobile {
  width: 50%;
}
.column.is-half {
  padding: 0;
}
.column.is-one-quarter {
  padding-top: 0;
  padding-right: 0;
}
div.level {
  top: 0;
}
</style>
