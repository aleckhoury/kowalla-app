<template>
    <div class="card">
        <PostHeader :isActive="post.isActive" />
        <div class="content is-marginless" v-html="post.content">
        </div>
        <br />
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
      post: Object,
      hideComments: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {}
    }
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
