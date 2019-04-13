<template>
    <article class="media">
        <div class="media-content">
            <div class="field">
                <p class="control">
                    <textarea class="textarea" v-model="comment" placeholder="Add a comment..." rows="2"></textarea>
                </p>
            </div>
            <div class="field">
                <a class="button action post" @click="createComment()"><b>Post</b></a>
            </div>
        </div>
    </article>
</template>

<script>
  export default {
    name: "addComment",
    props: {
      updateComment: Function,
      postId: String,
      commentId: String,
      resetReply: Function,
    },
    data() {
      return {
        comment: '',
      }
    },
    methods: {
      createComment() {
        if (this.comment.length) {
          const commentObj = {
            profileId: this.$store.state.user._id,
            postId: this.postId,
            content: this.comment,
            commentId: this.commentId ? this.commentId : '',
          };
          this.$axios.$post('/api/v1/comments', commentObj);
          this.updateComment(commentObj);
          this.comment = '';
          this.resetReply('');
        } else {
          this.$toast.open({
            duration: 4000,
            message: 'You cannot post a blank comment.',
            position: 'is-top',
            type: 'is-danger'
          })
        }
      },
    }
  };
</script>

<style scoped>
.media {
    padding: 1em 0.5em 0.5em 0.5em;
}
.button.action {
    width: 12em;
    color: white;
    background-color: #39C9A0;
    border-color: #39C9A0;
}
</style>