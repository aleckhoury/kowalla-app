<template lang="html">
  <div class="screen background-tint">
    <Header :type="'CommunitySettingsActiveTab'" class="is-hidden-touch" />

    <div class="container is-fullhd is-hidden-touch">
      <div class="columns is-marginless main-margin">
        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane />
        </div>
        <!-- post feed -->
        <div class="column is-one-half is-paddingless">
          <b-tabs id="columnTabs" v-model="activeTab">
            <b-tab-item>
              <EditCommunityForm
                v-if="infoRes"
                :name="name"
                :header-picture="bannerPictureUrl"
                :profile-picture="profilePictureUrl"
                :description="communityDescription"
                :community-id="communityId"
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
      :location-to-display="`#${communityName}`"
      class="is-hidden-desktop"
    />
    <div class="is-marginless is-hidden-desktop mobile-main-margin">
      <EditCommunityForm
        v-if="infoRes"
        :name="name"
        :header-picture="bannerPictureUrl"
        :profile-picture="profilePictureUrl"
        :description="communityDescription"
        :community-id="communityId"
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
import DescriptionCard from "~/components/InfoCards/DescriptionCard";
import ProfileCard from "~/components/InfoCards/ProfileCard";
import InfoPane from "~/components/InfoCards/InfoPane";
import EditButton from "~/components/InfoCards/EditButton";
import EditCommunityForm from "~/components/Forms/EditCommunity";
import EditProjectModal from "~/components/Modals/Edit/EditProjectModal";

export default {
  name: "Edit",
  components: {
    EditCommunityForm,
    Header,
    MobileHeader,
    MobileFooter,
    NavPane,
    DescriptionCard,
    ProfileCard,
    InfoPane,
    EditButton,
    EditProjectModal,
  },
  data() {
    return {
      // backend content
      communityName: "",
      bannerPictureUrl: "",
      profilePictureUrl: "",
      communityDescription: "",
      communityId: "",
      infoRes: false,
    };
  },
  computed: {
    name() {
      return this.$route.params.communityname;
    },
    activeTab() {
      if (process.browser) {
        return this.$store.state.activeTabs.CommunitySettingsActiveTab;
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
      if (!isOwner) this.$router.push({ path: `/dev/community/${this.name}` });
    }
    // get project details
    this.infoRes = await this.$axios.get(
      `/api/v1/communities/community/${this.name}`
    );
    this.bannerPictureUrl = this.infoRes.data.headerPicture;
    this.profilePictureUrl = this.infoRes.data.profilePicture;
    this.communityId = this.infoRes.data._id;
    this.communityDescription = this.infoRes.data.description;

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
