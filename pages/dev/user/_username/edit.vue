<template lang="html">
  <div class="screen background-tint">
    <Header class="is-hidden-touch" />

    <div class="container is-fullhd is-hidden-touch">
      <div class="columns is-marginless main-margin">
        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane />
        </div>

        <!-- post feed -->
        <div class="column is-one-half is-paddingless">
          <EditProfileForm
            v-if="infoRes"
            :first-name="firstName"
            :last-name="lastName"
            :username="username"
            :profile-picture="profilePictureUrl"
            :description="profileDescription"
            :profile-id="profileId"
          />
        </div>
        <div class="column is-one-quarter is-paddingless" />
      </div>
    </div>

    <!-- Mobile -->
    <!--<MobileHeader-->
    <!--:location-picture-to-display="profilePictureUrl"-->
    <!--:location-to-display="`@${username}`"-->
    <!--class="is-hidden-desktop"-->
    <!--/>-->

    <!--<div class="columns is-marginless is-hidden-desktop mobile-main-margin">-->
    <!--<div class="side-pane">-->
    <!--<ProfileCard-->
    <!--:name="`${firstName} ${lastName}`"-->
    <!--:profile-picture-url="profilePictureUrl"-->
    <!--:username="username"-->
    <!--:stats="profileStats"-->
    <!--is-mobile-->
    <!--type="user"-->
    <!--/>-->
    <!--</div>-->

    <!--<DescriptionCard-->
    <!--:header-string="`About ${firstName}`"-->
    <!--:subheader-on="false"-->
    <!--class="newsfeed-margin"-->
    <!--&gt;-->
    <!--{{ profileDescription }}-->
    <!--</DescriptionCard>-->
    <!--</div>-->

    <!--<MobileFooter class="is-hidden-desktop" />-->
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
import EditButton from "~/components/InfoCards/EditButton";
import Post from "~/components/PostCards/NewsfeedPost";
import EmptyPostList from "~/components/PostCards/EmptyPostList";
import EditProfileForm from "~/components/Forms/EditProfile";

export default {
  middleware: "activePost",
  name: "Edit",
  components: {
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
    };
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    sort() {
      return this.$store.state.sorting.profile;
    },
  },
  async mounted() {
    this.infoRes = await this.$axios.$get(
      `/api/v1/profiles/user/${this.username}`
    );
    this.firstName = this.infoRes.firstName;
    this.lastName = this.infoRes.lastName;
    this.profileDescription = this.infoRes.description;
    this.profilePictureUrl = this.infoRes.profilePicture;
    this.profileId = this.infoRes._id;
    document.title = `Kowalla - Edit Profile`;
  },
  methods: {},
};
</script>

<style lang="css">
.screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
