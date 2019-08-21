<template lang="html">
  <div class="screen background-tint">
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
              <EditProfileForm
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
              <IntegrationCard v-for="(test, idx) in integrationList" :key="idx" :name="test.name" :description="test.description" />
            </b-tab-item>
          </b-tabs>
        </div>
        <div class="column is-one-quarter is-paddingless" />
      </div>
    </div>

    <!-- Mobile -->
    <div
      :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
      class="columns is-marginless is-hidden-desktop mobile-main-margin"
    >
      <b-tabs id="columnTabs" v-model="activeTab">
        <b-tab-item>
          <EditProfileForm
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
          <IntegrationCard v-for="(test, idx) in integrationList" :key="idx" :name="test.name" :description="test.description" />
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import MobileHeader from "~/components/Header/Mobile/MobileHeader";
import MobileFooter from "~/components/Header/Mobile/MobileFooter";

import NavPane from "~/components/NavCards/NavPane";
import Header from "~/components/Header/Header";
import ProfileCard from "~/components/InfoCards/ProfileCard";
import DescriptionCard from "~/components/InfoCards/DescriptionCard";
import InfoPane from "~/components/InfoCards/InfoPane";
import Card from "~/components/Card";
import NavCard from "~/components/NavCards/NavCard";
import EditProfileForm from "~/components/Forms/EditProfile";
import IntegrationCard from "../../../../components/Forms/IntegrationCard";
export default {
  middleware: 'tabs',
  name: "Edit",
  components: {
    IntegrationCard,
    NavPane,
    NavCard,
    Card,
    EditProfileForm,
    Header,
    ProfileCard,
    InfoPane,
    DescriptionCard,
    MobileHeader,
    MobileFooter,
  },

  data() {
    return {
      profileId: "",
      firstName: "",
      lastName: "",
      profilePictureUrl: "",
      profileDescription: "",
      infoRes: false,
      integrationList: [],
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    activeTab() {
      if (process.browser) {
        return this.$store.state.activeTabs.SettingsActiveTab;
      }
    },
  },
  async mounted() {
    if (this.username !== this.$store.state.user.username) {
      this.$router.push({
        path: `/dev/user/${this.username}`,
      });
    }

    this.infoRes = await this.$axios.$get(
      `/api/v1/profiles/user/${this.username}`
    );
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

<style lang="css">
</style>
