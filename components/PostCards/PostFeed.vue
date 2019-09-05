<template>
  <div id="postFeed">
    <CreatePost v-if="postingAllowed" @post-created="addPostToPostList" />
    <b-tabs id="columnTabs" v-model="activeTab">
      <b-tab-item>
        <EmptyPostList v-if="!postList.length" />
        <Post
          v-for="post in postList"
          :key="post._id"
          :post="post"
          :is-mobile="isMobile"
          :is-feed="true"
          @delete-post="removePostFromPostList"
        />
      </b-tab-item>
      <b-tab-item>
        <EmptyPostList v-if="!subscribedPostList.length" />
        <Post
          v-for="post in subscribedPostList"
          :key="post._id"
          :post="post"
          :is-mobile="isMobile"
          :is-feed="true"
          @delete-post="removePostFromPostList"
        />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import Post from "./Post";
import EmptyPostList from "./EmptyPostList";
import CreatePost from "./CreatePost";
import { debounce } from 'debounce';

export default {
  name: "PostFeed",
  components: {
    Post,
    EmptyPostList,
    CreatePost,
  },
  props: {
    type: { type: String, default: "NewsFeedActiveTab" },
    isMobile: { type: Boolean, default: false },
    pageId: { type: String, default: "" },
  },
  data() {
    return {
      postList: [],
      subscribedPostList: [],
      isMounted: false,
      func: null,
      endAll: false,
      endSubscribed: false,
    };
  },
  computed: {
    sort() {
      if (process.browser) {
        return this.$store.state.sorting.feed;
      }
    },
    activeTab() {
      if (process.browser) {
        if (this.type === 'NewsFeedActiveTab') return this.$store.state.activeTabs.NewsFeedActiveTab;
        return 0;
      }
    },
    postingAllowed() {
      const a = this.$store.state.user.loggedIn;
      const b = this.type === "NewsFeedActiveTab";
      const c = !this.isMobile;
      return !!(a && b && c);
    },
    getPostsUrl() {
      if (this.type === 'NewsFeedActiveTab') {
        return `/api/v1/feed/posts/${this.sort}/${this.postList.length}`;
      } else {
        return `/api/v1/${this.type}/posts/${this.pageId}/${this.sort}/${this.postList.length}`;
      }
    },
    getSortPostsUrl() {
      if (this.type === 'NewsFeedActiveTab') {
        return `/api/v1/feed/posts/${this.sort}/0`;
      } else {
        return `/api/v1/${this.type}/posts/${this.pageId}/${this.sort}/0`;
      }
    }
  },
  watch: {
    async sort() {
      this.postList = await this.$axios.$get(this.getSortPostsUrl);
      if (
        this.$store.state.user.loggedIn &&
        this.type === "NewsFeedActiveTab"
      ) {
        this.subscribedPostList = await this.$axios.$get(
          `/api/v1/feed/posts/${this.$store.state.user._id}/${this.sort}/0`
        );
      }
      // await this.scroll();
    },
  },
  async mounted() {
    this.postList = await this.$axios.$get(this.getPostsUrl);
    if (this.$store.state.user.loggedIn && this.type === "NewsFeedActiveTab") {
      this.subscribedPostList = await this.$axios.$get(
        `/api/v1/feed/posts/${this.$store.state.user._id}/${this.sort}/${
          this.subscribedPostList.length
        }`
      );
    }
    // await this.scroll();
    this.func = debounce(this.scroll, 150);
    window.addEventListener('scroll', this.func, false);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.func);
  },
  methods: {
    async scroll() {
      if (this.postList.length || this.subscribedPostList.length) {
        let isActive = false;
          const feed = document.getElementById("postFeed");
          const bottomOfWindow =
            window.innerHeight + window.scrollY >= feed.offsetHeight - 500;
          if (!isActive && bottomOfWindow) {
            isActive = true;
            let posts;
            let newList;
            if (this.activeTab === 0) {
              posts = await this.$axios.$get(this.getPostsUrl);
              newList = await this.postList.concat(posts);
              if (posts.length) {
                this.postList = await newList;
                isActive = false;
              } else {
                this.endAll = true;
              }
            } else if (
              this.activeTab === 1 &&
              this.$store.state.user.loggedIn
            ) {
              posts = await this.$axios.$get(
                `/api/v1/feed/posts/${this.$store.state.user._id}/${
                  this.sort
                }/${this.subscribedPostList.length}`
              );
              newList = await this.subscribedPostList.concat(posts);
              if (posts.length) {
                this.subscribedPostList = await newList;
                isActive = false;
              } else {
                this.endSubscribed = true;
              }
            }
          }
          if (this.endAll && this.endSubscribed) {
            window.removeEventListener('scroll', this.func);
          }
      }
    },
    addPostToPostList(postObj) {
      this.postList.unshift(postObj);
      if (
        this.$store.state.user.loggedIn &&
        this.type === "NewsFeedActiveTab"
      ) {
        this.subscribedPostList.unshift(postObj);
      }
    },
    async removePostFromPostList(postId) {
      for (let i in this.postList) {
        if (this.postList[i]._id === postId) {
          this.postList.splice(i, 1);
          await this.$axios.$delete(
            `/api/v1/posts/${postId}`
          );
          break;
        }
      }
      if (
        this.$store.state.user.loggedIn &&
        this.type === "NewsFeedActiveTab"
      ) {
        for (let i in this.subscribedPostList) {
          if (this.subscribedPostList[i]._id === postId) {
            this.subscribedPostList.splice(i, 1);
            await this.$axios.$delete(
              `/api/v1/posts/${postId}`
            );
            break;
          }
        }
      }
    },
  },
};
</script>

<style scoped></style>
