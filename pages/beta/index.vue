<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-centered is-marginless main-margin">
        <!-- nav pane -->
        <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="column is-one-quarter">
          <Creations />
          <Subscriptions />
        </div>

        <div class="column is-one-half is-marginless">
          <PostFeed type="NewsFeedActiveTab" />
        </div>
        <!-- info pane -->
        <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="column is-one-quarter">
          <SignupCard v-if="!this.$store.state.user.loggedIn" />
          <ActiveCoworkers />
          <ProfileProgress />
        </div>
      </div>
    </div>

    <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless is-hidden-desktop mobile-main-margin">
      <ActiveCoworkers />
      <SortingOptions :is-mobile="true" />
      <PostFeed :is-mobile="true" type="NewsFeedActiveTab" />
    </div>
  </div>
</template>

<script>
import SignupCard from '~/components/InfoCards/SignupCard';
import ActiveCoworkers from '../../components/InfoCards/ActiveCoworkers';
import PostFeed from '~/components/PostCards/PostFeed';
import SortingOptions from '~/components/Header/NavSubHeader/SortingOptions';
import Subscriptions from '../../components/SidePaneCards/Subscriptions';
import Creations from '../../components/SidePaneCards/Creations';
import ProfileProgress from '../../components/SidePaneCards/ProfileProgress';

export default {
  middleware: 'tabs',
  layout: 'default',
  name: 'Home',
  components: {
    Creations,
    Subscriptions,
    SortingOptions,
    ActiveCoworkers,
    SignupCard,
    PostFeed,
    ProfileProgress,
  },

  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    document.title = `Kowalla - Home`;
    this.isMounted = true;
  },
  methods: {},
};
</script>

<style lang="css" scoped></style>
