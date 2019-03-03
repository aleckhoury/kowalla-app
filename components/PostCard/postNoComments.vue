<template>
    <div class="card" @mouseover="loadPicker = true">
        <post-header :post="post"/>
        <div class="content is-marginless" v-html="post.content">
        </div>
        <br />
        <reactions :post="post" :load-picker="loadPicker" />
    </div>
</template>

<script>
import Reactions from "./reactionsNoComments";
import PostHeader from "./postHeader";
  export default {
    name: "postNoComments",
    props: {
      post: Object,
    },
    data() {
      return {
        loadPicker: false,
      }
    },
    components: { Reactions, PostHeader },
    methods: {
      async createPost() {
        this.s3Loading = true;
        const community = await this.$axios.get(`/api/v1/communities/5c3292a2f03d751a7ffb80ab`);
        await this.$axios.post(`/api/v1/communities/1234567890/posts`, {
          profileId: this.$store.state.user._id,
          communityId: community._id,
          content: this.html,
        });
        this.clearPhoto = false;
        this.s3Loading = false;
        this.$parent.close()
      },
    },
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
        box-shadow: none;
    }
</style>