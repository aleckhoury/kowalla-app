<template>
    <div class="modal-content">
        <div class="box is-paddingless">
            <post :post="post" />
            <AddComment v-if="!otherReplies" :postId="post._id" :updateComment="updateComment" />
            <Comment
                v-for="comment in commentList"
                :nested="false"
                :activeComment="activeCommentId"
                :reply="otherReplies"
                :key="comment._id"
                :comment="comment"
                :nest-level="0"
                :toggle="toggleComment" />
        </div>
    </div>
</template>

<script>
import Post from './postNoComments.vue';
import Comment from './comment.vue';
import AddComment from "./addComment";

  export default {
    name: "PostModal",
    components: { AddComment, Post, Comment },
    props: {
      post: Object,
    },
    data() {
      return {
        commentList: [],
        otherReplies: false,
        activeCommentId: '',
      }
    },
    async mounted() {
      this.commentList = await this.$axios.$get(`/api/v1/comments/${this.post._id}`);
    },
    methods: {
      updateComment(comment) {
        this.commentList.unshift(comment)
      },
      toggleComment(toggleValue, activeCommentId) {
        this.activeCommentId = activeCommentId;
        this.otherReplies = toggleValue;
      },
    }
  };
</script>

<style scoped>
    div.card {
        border-radius: 6px 6px 0 0;
    }
    .box {
        width: 800px;
        max-width: 100%;
    }
    .modal-content {
        border-radius: 6px;
        margin: 0;
        color: #39C9A0;
        width: auto;
    }
</style>