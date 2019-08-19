<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-centered is-marginless main-margin"
      >
        <!-- nav pane -->
        <div class="column is-one-quarter side-pane">
          <NavPane class="fixed" />
        </div>

        <div
          class="column is-one-half is-paddingless is-marginless"
        >
          <PostFeed
            type="NewsFeedActiveTab"
          />
        </div>
        <!-- info pane -->
        <div class="column is-one-quarter side-pane">
          <SignupCard v-if="!this.$store.state.user.loggedIn" class="fixed" />
          <ActiveCoworkers />
        </div>
      </div>
    </div>

    <div
      :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
      class="columns is-marginless is-hidden-desktop mobile-main-margin"
    >
      <ActiveCoworkers />
      <SortingOptions :is-mobile="true" />
      <PostFeed
        :is-mobile="true"
        type="NewsFeedActiveTab"
      />
    </div>
  </div>
</template>

<script>
import MobileHeader from "~/components/Header/Mobile/MobileHeader";
import MobileFooter from "~/components/Header/Mobile/MobileFooter";

import Header from "~/components/Header/Header";
import NavPane from "~/components/NavCards/NavPane";
import CreatePost from "~/components/PostCards/CreatePost";
import SignupCard from "~/components/InfoCards/SignupCard";
import ActiveCoworkers from "../../components/InfoCards/ActiveCoworkers";
import PostFeed from "~/components/PostCards/PostFeed";
import SortingOptions from "~/components/Header/NavSubHeader/SortingOptions";

export default {
  layout: "default",
  name: "Home",
  components: {
    SortingOptions,
    ActiveCoworkers,
    SignupCard,
    CreatePost,
    Header,
    NavPane,
    MobileHeader,
    MobileFooter,
    PostFeed,
  },

  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    sendEmail() {
      this.$axios.post('/api/v1/email/signup', {
        firstName: 'Alec',
      });
    }
  },
};
</script>

<style lang="css" scoped>
</style>
