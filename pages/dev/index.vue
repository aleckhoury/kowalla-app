<template lang="html">
  <div class="screen background-tint">

    <Header class="is-hidden-touch"></Header>

    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div class="columns is-centered is-marginless main-margin">

        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless test-outline side-pane">
          <NavPane></NavPane>
        </div>

        <div class="column is-one-half is-paddingless no-margin test-outline">
          <LoginRegister></LoginRegister>
          <CreatePost></CreatePost>
          <Post v-for="post in postList" :key="post._id" :post="post"></Post>
        </div>

        <!-- info pane -->
        <div class="column is-one-quarter is-paddingless test-outline side-pane">
          info
        </div>
      </div>
    </div>

    <MobileHeader
      class="is-hidden-desktop"
      locationToDisplay="Home"
      isHome
    />

    <div class="columns is-marginless is-hidden-desktop mobile-main-margin">
      <Post
        v-for="post in postList"
        :key="post._id"
        :post="post"
      >
      </Post>
    </div>


    <MobileFooter class="is-hidden-desktop"/>
  </div>
</template>

<script>
import MobileHeader from '~/components/Header/MobileHeader';
import MobileFooter from '~/components/Header/MobileFooter';

import Header from '~/components/Header/Header';
import NavPane from '~/components/NavCards/NavPane';
import Post from "~/components/PostCard/feedPost";
import CreatePost from "~/components/createPost";
import LoginRegister from "../../components/LoginRegister";

export default {
  name: "test",
  components: {
    LoginRegister,
    CreatePost,
    Header,
    NavPane,
    Post,
    MobileHeader,
    MobileFooter,
  },
  data() {
    return {
      postList: [],
    }
  },
  async mounted() {
    this.postList = await this.$axios.$get('/api/v1/posts');
  }
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}

.no-margin {
  margin: 0px;
}

.test-outline {
  border: 1px solid black;
}
.side-pane {
  display: flex;
  justify-content: center;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
