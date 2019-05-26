<template>
  <div class="card">
    <PostHeader :is-active="post.isActive" />
    <div class="content is-marginless" v-html="post.content" />
    <br >
    <reactions :post="post" />
  </div>
</template>

<script>
import Reactions from "./LandingPageReactions";
import PostHeader from "./LandingPostHeader";
export default {
  name: "LandingPagePost",
  components: { PostHeader, Reactions },
  props: {
    post: { type: Object, default: () => {} },
    hideComments: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.content {
  padding: 1em 0.5em;
}
.media-content {
  padding: 0 2em;
}
.card {
  border-radius: 6px;
  margin-bottom: 1em;
}
</style>
