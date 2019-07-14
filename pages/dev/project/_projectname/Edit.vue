<template lang="html">
  <div class="screen background-tint">
    <Header :type="'ProjectSettingsActiveTab'" class="is-hidden-touch" />

    <div class="container is-fullhd is-hidden-touch">
      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-marginless main-margin"
      >
        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane />
        </div>
        <!-- post feed -->
        <div class="column is-one-half is-paddingless">
          <b-tabs id="columnTabs" v-model="activeTab">
            <b-tab-item>
              <EditProjectForm
                v-if="infoRes"
                :name="name"
                :project-name="projectName"
                :header-picture="bannerPictureUrl"
                :profile-picture="projectProfilePictureUrl"
                :description="projectDescription"
                :project-id="projectId"
              />
            </b-tab-item>
            <b-tab-item>
              Test!
            </b-tab-item>
          </b-tabs>
        </div>
        <div class="column is-one-quarter is-paddingless" />
      </div>
    </div>

    <!-- Mobile -->
    <MobileHeader
      :location-picture-to-display="profilePictureUrl"
      :location-to-display="`@${username}`"
      class="is-hidden-desktop"
    />

    <div
      :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
      class="columns is-marginless is-hidden-desktop mobile-main-margin"
    >
      <EditProjectForm
        v-if="infoRes"
        :name="name"
        :project-name="projectName"
        :header-picture="bannerPictureUrl"
        :profile-picture="projectProfilePictureUrl"
        :description="projectDescription"
        :project-id="projectId"
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
import EditProjectForm from "~/components/Forms/EditProject";
import EditProjectModal from "~/components/Modals/Edit/EditProjectModal";
export default {
  name: "UserPageTest",
  components: {
    EditProjectForm,
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
  },

  data() {
    return {
      bannerPictureUrl: "",
      projectProfilePictureUrl: "",
      projectDescription: "",
      admins: null,
      projectId: "",
      projectName: "",
      adminFirstName: "",
      adminLastName: "",
      adminUsername: "",
      adminProfilePictureUrl: "",
      projectStats: [],
      profileStats: [],
      // newsfeed content
      postList: [],
      isNestedUrl: false,
      infoRes: false,
    };
  },
  computed: {
    isOwner() {
      let isOwner;
      if (typeof this.$store.state.user.owned !== "undefined") {
        for (let i = 0; i < this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.name) {
            isOwner = true;
          }
        }
      }
      return isOwner;
    },
    name() {
      return this.$route.params.projectname;
    },
    activeTab() {
      if (process.browser) {
        return this.$store.state.activeTabs.ProjectSettingsActiveTab;
      }
    },
  },
  async mounted() {
    if (typeof this.$store.state.user.owned !== "undefined") {
      let isOwner;
      for (let i = 0; i < this.$store.state.user.owned.length; i++) {
        if (this.$store.state.user.owned[i].name === this.name) {
          isOwner = true;
          break;
        }
      }
      if (!isOwner) this.$router.push({ path: `/dev/user/${this.name}` });
    }
    // get project details
    this.infoRes = await this.$axios.get(
      `/api/v1/projects/project/${this.name}`
    );
    this.projectName = this.infoRes.data.projectName;
    this.bannerPictureUrl = this.infoRes.data.headerPicture;
    this.projectProfilePictureUrl = this.infoRes.data.profilePicture;
    this.projectId = this.infoRes.data._id;
    this.projectDescription = this.infoRes.data.description;

    document.title = `Kowalla - @${this.name} Settings`;
  },
};
</script>

<style lang="css" scoped>
.screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
