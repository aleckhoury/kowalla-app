<template lang="html">
  <div class="screen background-tint">
    <Header class="is-hidden-touch" />

    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div class="columns is-centered is-marginless main-margin">
        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane id="fixed" />
        </div>

        <div id="postFeed" class="column is-one-half is-paddingless no-margin">
          <CreatePost
            v-if="this.$store.state.user.loggedIn && isMounted"
            @post-created="addPostToPostList"
          />
          <EmptyPostList v-if="!postList.length" />
          <Post
            v-for="post in postList"
            :key="post._id"
            :post="post"
            @delete-post="removePostFromPostList"
          />
        </div>

        <!-- info pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          info
        </div>
      </div>
    </div>

    <MobileHeader
      class="is-hidden-desktop"
      location-to-display="Home"
      is-home
    />

    <div class="columns is-marginless is-hidden-desktop mobile-main-margin">
      <EmptyPostList v-if="!postList.length" />
      <Post
        v-for="post in postList"
        :key="post._id"
        :post="post"
        :is-mobile="true"
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
import Post from "~/components/PostCards/NewsfeedPost";
import CreatePost from "~/components/PostCards/CreatePost";
import EmptyPostList from "~/components/PostCards/EmptyPostList";

export default {
  name: "Test",
  components: {
    EmptyPostList,
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
      isMounted: false,
    };
  },
  computed: {
    sort() {
      if (process.browser) {
        return this.$store.state.sorting.newsfeed;
      }
    },
  },
  watch: {
    async sort() {
      this.postList = await this.$axios.$get(
        `/api/v1/feed/posts/${this.sort}/0`
      );

      await this.scroll();
    },
  },
  async mounted() {
    console.log(this.$store.state.user);
    this.postList = await this.$axios.$get(
      `/api/v1/feed/posts/${this.sort}/${this.postList.length}`
    );

    await this.scroll();
    this.isMounted = true;
  },
  methods: {
    async scroll() {
      if (this.postList.length) {
        let isActive = false;
        window.onscroll = async () => {
          const feed = document.getElementById("postFeed");
          const bottomOfWindow =
            window.innerHeight + window.scrollY >= feed.offsetHeight - 500;
          if (!isActive && bottomOfWindow) {
            isActive = true;
            const posts = await this.$axios.$get(
              `/api/v1/feed/posts/${this.sort}/${this.postList.length}`
            );
            const newList = await this.postList.concat(posts);
            if (posts.length) {
              this.postList = await newList;
              isActive = false;
            }
          }
        };
      }
    },
    addPostToPostList(postObj) {
      //console.log('postcreated')
      this.postList.unshift(postObj);
    },
    async removePostFromPostList(postId) {
      for (let i in this.postList) {
        if (this.postList[i]._id === postId) {
          this.postList.splice(i, 1);
          await this.$axios.delete(
            `/api/v1/communities/${this.communityId}/posts/${postId}`
          );
          break;
        }
      }
    },
  },
};
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
#fixed {
  position: fixed;
}
</style>