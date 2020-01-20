<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless main-margin">
        <!-- nav pane -->
        <div class="column is-one-quarter">
          <EditInfo />
        </div>

        <!-- post feed -->
        <div class="column is-one-half">
          <b-tabs id="columnTabs" v-model="activeTab">
            <b-tab-item>
              <EditProfile
                v-if="infoRes"
                :first-name="firstName"
                :last-name="lastName"
                :username="username"
                :profile-picture="profilePictureUrl"
                :description="profileDescription"
                :profile-id="profileId"
              />
            </b-tab-item>
            <b-tab-item>
              <IntegrationCard v-for="(int, idx) in integrationList" :key="idx" :name="int.name" :description="int.description" />
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
          <EditProfile
            v-if="infoRes"
            :first-name="firstName"
            :last-name="lastName"
            :username="username"
            :profile-picture="profilePictureUrl"
            :description="profileDescription"
            :profile-id="profileId"
          />
        </b-tab-item>
        <b-tab-item>
          <IntegrationCard v-for="(int, idx) in integrationList" :key="idx" :name="int.name" :description="int.description" />
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import EditProfile from '~/components/Forms/EditProfile';
import IntegrationCard from '../../../components/Forms/IntegrationCard';
import EditInfo from '../../../components/SidePaneCards/EditInfo';

export default {
  middleware: 'tabs',
  name: 'Edit',
  components: {
    IntegrationCard,
    EditProfile,
    EditInfo,
  },

  data() {
    return {
      profileId: '',
      firstName: '',
      lastName: '',
      profilePictureUrl: '',
      profileDescription: '',
      infoRes: false,
      integrationList: [],
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    activeTab() {
      return process.browser ? this.$store.state.activeTabs.SettingsActiveTab : undefined;
    },
  },
  async mounted() {
    if (this.username !== this.$store.state.user.username) {
      this.$router.push({
        path: `/user/${this.username}`,
      });
    }

    this.infoRes = await this.$axios.$get(`/api/v1/profiles/user/${this.username}`);
    this.firstName = this.infoRes.firstName;
    this.lastName = this.infoRes.lastName;
    this.profileDescription = this.infoRes.description;
    this.profilePictureUrl = this.infoRes.profilePicture;
    this.profileId = this.infoRes._id;

    this.integrationList = await this.$axios.$get(`/api/v1/integrations`);
    document.title = `Kowalla - Edit Profile`;
  },
  methods: {},
};
</script>

<style lang="css"></style>
