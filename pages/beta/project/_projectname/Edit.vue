<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless main-margin">
        <!-- nav pane -->
        <div class="column is-one-quarter"></div>
        <!-- post feed -->
        <div class="column is-one-half">
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
        <div class="column is-one-quarter" />
      </div>
    </div>

    <!-- Mobile -->
    <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless is-hidden-desktop mobile-main-margin">
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
  </div>
</template>

<script>
import EditProjectForm from '~/components/Forms/EditProject';

export default {
  name: 'ProjectEdit',
  components: {
    EditProjectForm,
  },

  data() {
    return {
      bannerPictureUrl: '',
      projectProfilePictureUrl: '',
      projectDescription: '',
      admins: null,
      projectId: '',
      projectName: '',
      adminFirstName: '',
      adminLastName: '',
      adminUsername: '',
      adminProfilePictureUrl: '',
      projectStats: [],
      profileStats: [],
      // newsfeed content
      postList: [],
      infoRes: false,
    };
  },
  computed: {
    isOwner() {
      let isOwner;
      if (typeof this.$store.state.user.owned !== 'undefined') {
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
      return process.browser ? this.$store.state.activeTabs.ProjectSettingsActiveTab : undefined;
    },
  },
  async mounted() {
    if (typeof this.$store.state.user.owned !== 'undefined') {
      let isOwner;
      for (let i = 0; i < this.$store.state.user.owned.length; i++) {
        if (this.$store.state.user.owned[i].name === this.name) {
          isOwner = true;
          break;
        }
      }
      if (!isOwner) this.$router.push({ path: `/beta/user/${this.name}` });
    }
    // get project details
    this.infoRes = await this.$axios.$get(`/api/v1/projects/project/${this.name}`);
    this.projectName = this.infoRes.projectName;
    this.bannerPictureUrl = this.infoRes.headerPicture;
    this.projectProfilePictureUrl = this.infoRes.profilePicture;
    this.projectId = this.infoRes._id;
    this.projectDescription = this.infoRes.description;

    document.title = `Kowalla - Edit @${this.name}`;
  },
};
</script>

<style lang="css" scoped></style>
