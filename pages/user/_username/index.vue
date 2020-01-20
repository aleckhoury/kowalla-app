<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless main-margin">
        <!-- nav pane -->
        <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="column is-one-quarter">
          <Creations />
          <Subscriptions />
        </div>

        <!-- post feed -->
        <div id="postFeed" class="column is-one-half">
          <PostFeed v-if="profileId" :page-id="profileId" :is-subscribed="false" type="profile" />
        </div>

        <!-- info pane -->
        <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="column is-one-quarter">
          <InfoPane>
            <SignupCard v-if="!this.$store.state.user.loggedIn" />
            <ProfileCard :name="`${firstName} ${lastName}`" :profile-picture-url="profilePictureUrl" :username="username" :stats="profileStats" type="user" />

            <DescriptionCard :header-string="`About ${firstName}`" :subheader-on="false">
              {{ profileDescription }}
            </DescriptionCard>
            <!--            <CardContainer-->
            <!--              v-if="-->
            <!--                profileSubs.owned.length > 0 &&-->
            <!--                  this.$store.state.user.username !== username-->
            <!--              "-->
            <!--              :header-string="`Made by ${firstName}`"-->
            <!--              :subheader-on="false"-->
            <!--              header-on-->
            <!--            >-->
            <!--              &lt;!&ndash; need to make NavCard more flexible &ndash;&gt;-->
            <!--              <NavCard-->
            <!--                :profile-subs="profileSubs"-->
            <!--                type="profile"-->
            <!--                selector="owned"-->
            <!--              />-->
            <!--            </CardContainer>-->

            <!--            <CardContainer-->
            <!--              v-if="-->
            <!--                profileSubs.subscriptions.length > 0 &&-->
            <!--                  this.$store.state.user.username !== username-->
            <!--              "-->
            <!--              :header-string="`${firstName}'s Subscriptions`"-->
            <!--              subheader-string="More spaces you'll love"-->
            <!--            >-->
            <!--              &lt;!&ndash; need to make NavCard more flexible &ndash;&gt;-->
            <!--              <NavCard-->
            <!--                :profile-subs="profileSubs"-->
            <!--                type="profile"-->
            <!--                selector="subscriptions"-->
            <!--              />-->
            <!--            </CardContainer>-->
          </InfoPane>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless is-hidden-desktop mobile-main-margin">
      <div>
        <ProfileCard
          :name="`${firstName} ${lastName}`"
          :profile-picture-url="profilePictureUrl"
          :username="username"
          :stats="profileStats"
          is-mobile
          type="user"
        />
      </div>

      <DescriptionCard :header-string="`About ${firstName}`" :subheader-on="false" class="newsfeed-margin">
        {{ profileDescription }}
      </DescriptionCard>
      <PostFeed v-if="profileId" :page-id="profileId" :is-mobile="true" :is-subscribed="false" type="profile" />
    </div>
  </div>
</template>

<script>
import ProfileCard from '~/components/InfoCards/ProfileCard';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import InfoPane from '~/components/InfoCards/InfoPane';
import SignupCard from '~/components/InfoCards/SignupCard';
import PostFeed from '~/components/PostCards/PostFeed';
import Subscriptions from '../../../components/SidePaneCards/Subscriptions';
import Creations from '../../../components/SidePaneCards/Creations';

export default {
  name: 'User',
  components: {
    Creations,
    Subscriptions,
    ProfileCard,
    InfoPane,
    DescriptionCard,
    SignupCard,
    PostFeed,
  },

  data() {
    return {
      username: null,
      profileId: '',
      firstName: '',
      lastName: '',
      profilePictureUrl: '',
      profileDescription: '',
      profileStats: [],
      profileSubs: { subscriptions: [], owned: [] },
    };
  },
  computed: {
    getUsername() {
      return this.username;
    },
  },
  created() {
    this.username = this.$route.params.username;
  },
  async mounted() {
    let infoRes = await this.$axios.$get(`/api/v1/profiles/user/${this.username}`);
    //------------------
    // remove if statements, but keep assignments in production.
    // they're only for quicker validation to ignore an unhelpful nuxt error throw
    //------------------
    // get name
    if (infoRes.hasOwnProperty('firstName')) {
      this.firstName = infoRes.firstName;
      this.lastName = infoRes.lastName;
      this.profileDescription = infoRes.description;
      this.profilePictureUrl = infoRes.profilePicture;
      this.profileId = infoRes._id;
      this.profileStats.push({ name: 'Rep', stat: infoRes.reputation });
      this.profileStats.push({ name: 'Posts', stat: infoRes.postCount });
      this.profileStats.push({ name: 'Replies', stat: infoRes.commentCount });

      let subRes = await this.$axios.$get(`/api/v1/profiles/${this.profileId}/subs`);
      this.profileSubs = subRes.subscriptions;

      document.title = `Kowalla - ${this.firstName} ${this.lastName}`;
    }
  },
  methods: {},
};
</script>

<style lang="css">
.fullWidth {
  width: 100% !important;
}
</style>
