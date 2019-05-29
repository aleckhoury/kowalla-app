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
        <div class="column is-one-quarter side-pane">
          <NavPane class="fixed" />
        </div>

        <div id="postFeed" class="column is-one-half is-paddingless no-margin">
          <CreatePost
            v-if="this.$store.state.user.loggedIn && isMounted"
            @post-created="addPostToPostList"
          />
          <b-tabs id="columnTabs" v-model="activeTab" :destroy-on-hide="false">
            <b-tab-item>
              <EmptyPostList v-if="!postList.length" />
              <Post
                v-for="post in postList"
                :key="post._id"
                :post="post"
                @delete-post="removePostFromPostList"
              />
            </b-tab-item>
            <b-tab-item>
              <EmptyPostList v-if="!subscribedPostList.length && this.$store.state.user.loggedIn" />
              <h1 class="noPosts">Create an account or sign in to subscribe to communities and projects!</h1>
              <Post
                v-for="post in subscribedPostList"
                :key="post._id"
                :post="post"
                @delete-post="removePostFromPostList"
              />
            </b-tab-item>
          </b-tabs>
        </div>

        <!-- info pane -->
        <div class="column is-one-quarter side-pane">
          <SignupCard v-if="!this.$store.state.user.loggedIn" class="fixed" />
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
import SignupCard from "~/components/InfoCards/SignupCard";

export default {
  name: "Test",
  components: {
    SignupCard,
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
      subscribedPostList: [],
      isMounted: false,
    };
  },
  computed: {
    sort() {
      if (process.browser) {
        return this.$store.state.sorting.newsfeed;
      }
    },
    activeTab() {
      if (process.browser) {
        return this.$store.state.activeTabs.NewsFeedActiveTab;
      }
    },
  },
  watch: {
    async sort() {
      this.postList = await this.$axios.$get(
        `/api/v1/feed/posts/${this.sort}/0`
      );
      this.subscribedPostList = await this.$axios.$get(
        `/api/v1/feed/posts/${this.$store.state.user._id}/${this.sort}/0`
      );

      await this.scroll();
    },
  },
  async mounted() {
    this.postList = await this.$axios.$get(
      `/api/v1/feed/posts/${this.sort}/${this.postList.length}`
    );
    if (this.$store.state.user.loggedIn) {
    this.subscribedPostList = await this.$axios.$get(
      `/api/v1/feed/posts/${this.$store.state.user._id}/${this.sort}/${
        this.subscribedPostList.length
      }`
    );
    }

    await this.scroll();
    this.isMounted = true;
  },
  methods: {
    async scroll() {
      if (this.postList.length || this.subscribedPostList.length) {
        let isActive = false;
        window.onscroll = async () => {
          const feed = document.getElementById("postFeed");
          const bottomOfWindow =
            window.innerHeight + window.scrollY >= feed.offsetHeight - 500;
          if (!isActive && bottomOfWindow) {
            isActive = true;
            let posts;
            let newList;
            console.log(this.activeTab);
            if (this.activeTab === 0) {
              posts = await this.$axios.$get(
                `/api/v1/feed/posts/${this.sort}/${this.postList.length}`
              );
              newList = await this.postList.concat(posts);
              if (posts.length) {
                this.postList = await newList;
                isActive = false;
              }
            } else if (this.activeTab === 0 && this.$store.state.user.loggedIn) {
              posts = await this.$axios.$get(
                `/api/v1/feed/posts/${this.$store.state.user._id}/${
                  this.sort
                }/${this.subscribedPostList.length}`
              );
              newList = await this.subscribedPostList.concat(posts);
              if (posts.length) {
                this.subscribedPostList = await newList;
                isActive = false;
              }
            }
          }
        };
      }
    },
    addPostToPostList(postObj) {
      //console.log('postcreated')
      this.postList.unshift(postObj);
      if (this.$store.state.user.loggedIn) {
        this.subscribedPostList.unshift(postObj);
      }
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
      for (let i in this.subscribedPostList) {
        if (this.subscribedPostList[i]._id === postId) {
          this.subscribedPostList.splice(i, 1);
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
  padding: 0 2em 2em 2em;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.fixed {
  width: 100%;
  position: fixed;
}
</style>
