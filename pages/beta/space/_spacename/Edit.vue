<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-marginless main-margin"
      >
        <!-- nav pane -->
        <div class="column is-one-quarter">
        </div>
        <!-- post feed -->
        <div class="column is-one-half">
          <b-tabs id="columnTabs" v-model="activeTab">
            <b-tab-item>
              <EditSpaceForm
                v-if="infoRes"
                :name="name"
                :header-picture="bannerPictureUrl"
                :profile-picture="profilePictureUrl"
                :description="spaceDescription"
                :space-id="spaceId"
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
    <div
      :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
      class="is-marginless is-hidden-desktop mobile-main-margin"
    >
      <b-tabs id="columnTabs" v-model="activeTab">
        <b-tab-item>
          <EditSpaceForm
            v-if="infoRes"
            :name="name"
            :header-picture="bannerPictureUrl"
            :profile-picture="profilePictureUrl"
            :description="spaceDescription"
            :space-id="spaceId"
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
import MobileHeader from "~/components/Header/Mobile/MobileHeader";
import MobileFooter from "~/components/Header/Mobile/MobileFooter";

import Header from "~/components/Header/Header";

import DescriptionCard from "~/components/InfoCards/DescriptionCard";
import ProfileCard from "~/components/InfoCards/ProfileCard";
import InfoPane from "~/components/InfoCards/InfoPane";
import EditButton from "~/components/InfoCards/EditButton";
import EditSpaceForm from "~/components/Forms/EditSpace";

export default {
  name: "Edit",
  components: {
    EditSpaceForm,
    Header,
    MobileHeader,
    MobileFooter,
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
      spaceId: "",
      infoRes: false,
    };
  },
  computed: {
    name() {
      return this.$route.params.spacename;
    },
    activeTab() {
      if (process.browser) {
        return this.$store.state.activeTabs.SettingsActiveTab;
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
      if (!isOwner) this.$router.push({ path: `/beta/space/${this.name}` });
    }
    // get project details
    this.infoRes = await this.$axios.$get(
      `/api/v1/spaces/space/${this.name}`
    );
    this.bannerPictureUrl = this.infoRes.headerPicture;
    this.profilePictureUrl = this.infoRes.profilePicture;
    this.spaceId = this.infoRes._id;
    this.spaceDescription = this.infoRes.description;

    document.title = `Kowalla - Edit @${this.name}`;
  },
};
</script>

<style lang="css" scoped>
</style>
