<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- three columns, navpane, content, infopane -->
      <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless main-margin">
        <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="column is-one-quarter">
          <Creations />
          <Subscriptions />
        </div>

        <div class="column is-three-quarters">
          <Banner
            :id="spaceId"
            :banner-url="bannerPictureUrl"
            :banner-title="spaceName"
            :is-subscribed="isSubscribed"
            :is-owner="isOwner"
            banner-title-prefix="#"
            @subscription-button-clicked="updateSubscriptions"
          />
          <div id="postFeed" class="columns is-marginless newsfeed-padding">
            <div class="column is-two-thirds">
              <PostFeed v-if="spaceId" :page-id="spaceId" :is-subscribed="isSubscribed" type="space" />
            </div>
            <div class="column is-one-third">
              <InfoPane>
                <SignupCard v-if="!this.$store.state.user.loggedIn" class="fullWidth" />
                <ProfileCard
                  :name="spaceName"
                  :username="spaceName"
                  :profile-picture-url="profilePictureUrl"
                  :subheader-string="`View ${spaceName}'s stats`"
                  :stats="spaceStats"
                  type="space"
                />

                <DescriptionCard :subheader-on="false" header-string="Description">
                  {{ spaceDescription }}
                </DescriptionCard>

                <EditButton v-if="this.$store.state.user._id === adminId" @edit-button-clicked="editSpace">
                  <b>Edit Settings</b>
                </EditButton>
              </InfoPane>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="is-marginless is-hidden-desktop mobile-main-margin">
      <Banner
        :id="spaceId"
        :banner-url="bannerPictureUrl"
        :banner-title="spaceName"
        :is-subscribed="isSubscribed"
        :is-owner="isOwner"
        banner-title-prefix="#"
        is-mobile
        @subscription-button-clicked="updateSubscriptions"
      />

      <DescriptionCard :subheader-on="false" class="newsfeed-margin" header-string="Description">
        {{ spaceDescription }}
      </DescriptionCard>

      <div>
        <EditButton v-if="this.$store.state.user._id === adminId" @edit-button-clicked="editSpace">
          <b>Edit Settings</b>
        </EditButton>
      </div>
      <PostFeed v-if="spaceId" :page-id="spaceId" :is-mobile="true" :is-subscribed="isSubscribed" type="space" />
    </div>
  </div>
</template>

<script>
import Banner from '~/components/SpacesAndProjectsShared/Banner';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import InfoPane from '~/components/InfoCards/InfoPane';
import EditButton from '~/components/InfoCards/EditButton';
import ProfileCard from '~/components/InfoCards/ProfileCard';
import SignupCard from '~/components/InfoCards/SignupCard';
import PostFeed from '~/components/PostCards/PostFeed';
import Subscriptions from '../../../components/SidePaneCards/Subscriptions';
import Creations from '../../../components/SidePaneCards/Creations';

export default {
  name: 'Space',
  components: {
    Creations,
    Subscriptions,
    PostFeed,
    SignupCard,
    Banner,
    DescriptionCard,
    ProfileCard,
    InfoPane,
    EditButton,
  },

  data() {
    return {
      // backend content
      spaceName: '',
      bannerPictureUrl: '',
      profilePictureUrl: '',
      spaceDescription: '',
      adminId: '',
      numSubs: '',
      spaceId: '',
      spaceStats: [],
    };
  },
  computed: {
    isOwner() {
      let isOwner = false;
      if (typeof this.$store.state.user.owned !== 'undefined') {
        for (let i = 0; i < this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.spaceName) {
            isOwner = true;
          }
        }
      }
      return isOwner;
    },
    isSubscribed() {
      const subscribed = this.$store.state.user.subscriptions ? this.$store.state.user.subscriptions.some(x => x.spaceId === this.spaceId) : undefined;
      const owned = this.$store.state.user.owned ? this.$store.state.user.owned.some(x => x.spaceId === this.spaceId) : undefined;
      return !!(subscribed || owned);
    },
  },
  created() {
    this.spaceName = this.$route.params.spacename;
  },
  async mounted() {
    let infoRes = await this.$axios.$get(`/api/v1/spaces/space/${this.spaceName}`);
    this.bannerPictureUrl = infoRes.headerPicture;
    this.profilePictureUrl = infoRes.profilePicture;
    this.spaceId = infoRes._id;
    this.numSubs = infoRes.subscribers;
    this.spaceDescription = infoRes.description;
    this.adminId = infoRes.admins[0];

    // fill stats
    this.spaceStats.push({ name: 'Subs', stat: infoRes.subscribers });
    this.spaceStats.push({ name: 'Posts', stat: infoRes.postCount });
    document.title = `Kowalla - #${this.spaceName}`;
  },
  methods: {
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.spaceName,
        pictureUrl: this.profilePictureUrl,
        numSubs: subBool ? this.spaceStats[0].stat + 1 : this.spaceStats[0].stat - 1,
        spaceId: this.spaceId,
      };
      let subObj = { subBool, ...subInfo };
      this.spaceStats[0].stat = subBool ? this.spaceStats[0].stat + 1 : this.spaceStats[0].stat - 1;

      this.$store.dispatch('user/updateSubscriptions', subObj);
    },
    editSpace() {
      this.$router.push({
        path: `/space/${this.spaceName}/edit`,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.fullWidth {
  width: 100% !important;
}
</style>
