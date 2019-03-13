<template>
    <div class="modal-content">
        <div class="box is-paddingless">
            <post :post="post" />
            <AddComment v-if="!activeCommentId" :postId="post._id" :updateComment="updateComment" />
            <Comment
                v-for="comment in commentList"
                :activeComment="activeCommentId"
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
        activeCommentId: '',
      }
    },
    async mounted() {
      this.commentList = await this.$axios.$get(`/api/v1/comments/${this.post._id}`);
      this.commentList.map(async (comment, idx) => {
        this.commentList[idx].upvote = await this.$axios.$get(`/api/v1/upvotes/${comment._id}/${this.$store.state.user._id}`)
      })
    },
    methods: {
      updateComment(comment) {
        this.commentList.unshift(comment)
      },
      toggleComment(activeCommentId) {
        this.activeCommentId = activeCommentId;
      },
    }
  };
</script>

<style scoped>
    div.card {
        border-radius: 6px 6px 0 0;
        padding: 0 5em;
    }
    @media only screen and (max-width: 600px) {
        div.card {
            padding: 0;
        }
    }
    .box {
        width: 55em;
        max-width: 100%;
    }
    .modal-content {
        border-radius: 6px;
        margin: 0;
        color: #39C9A0;
        width: auto;
    }
</style>
