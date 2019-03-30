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
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane></NavPane>
        </div>

        <div class="column is-one-half is-paddingless no-margin" id="postFeed">
          <LoginRegister></LoginRegister>
          <CreatePost></CreatePost>
          <Post v-if="!!posts.length" v-for="post in posts" :key="post._id" :post="post"></Post>
        </div>

        <!-- info pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
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
        v-if="!!posts.length"
        v-for="post in posts"
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
    this.postList = await this.$axios.$get(`/api/v1/posts/${ this.sort }/${ this.postList.length }`);

    await this.scroll();
  },
  computed: {
    sort() {
      return this.$store.state.sorting.newsfeed;
    },
    posts() {
      return this.postList;
    }
  },
  methods: {
    async scroll() {
      let isActive = false;
      window.onscroll = async ev => {
        const feed = document.getElementById('postFeed');
        const bottomOfWindow = (window.innerHeight + window.scrollY >= feed.offsetHeight - 500);
        if (!isActive && bottomOfWindow) {
          isActive = true;
          const posts = await this.$axios.$get(`/api/v1/posts/${this.sort}/${this.postList.length}`);
          const newList = await this.postList.concat(posts);
          if (posts.length) {
            this.postList = await newList;
            isActive = false;
          }
        }
      }
    },
  },
  watch: {
    async sort() {
      this.postList = await this.$axios.$get(`/api/v1/posts/${ this.sort }/0`);

      await this.scroll();
    }
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
