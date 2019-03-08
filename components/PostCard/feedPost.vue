<template>
    <div class="card" @mouseover="loadPicker = true" @mouseleave="loadPicker = false">
        <post-header :post="post"/>
        <div class="content is-marginless" v-html="post.content">
        </div>
        <br />
        <reactions :post="post" :load-picker="loadPicker" />
    </div>
</template>

<script>
  import Reactions from "./reactions";
  import PostHeader from "./postHeader";
  export default {
    name: "Post",
    components: { PostHeader, Reactions },
    props: {
      post: Object,
      hideComments: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        loadPicker: false,
      }
    }
  };
</script>

<style scoped>
    .content {
        padding: 1em 0.5em;
    }
    b-icon {
        color: black;
    }
    .media-content {
        padding: 0 2em;
    }
    .card {
        border-radius: 6px;
        margin-bottom: 1em;
    }
</style>
