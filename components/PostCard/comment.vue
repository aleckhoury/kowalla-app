<template>
    <div>
        <article class="media">
            <font-awesome-icon icon="arrow-up" class="media-left upvote" />
            <div class="media-content">
                <div class="content">
                    <p>
                        <small>@{{ profile.username }} · {{ createdAtFormatted }}</small>
                        <br>
                        {{ comment.content }}
                        <br>
                        <small v-if="nestLevel < 2" @click="toggleReply(reply)"><a>Reply</a></small>
                    </p>
                    <AddComment
                        v-if="reply && activeCommentId === comment._id"
                        :commentId="comment._id"
                        :updateComment="updateComment"
                        :postId="comment.postId" />
                </div>
                <Comment
                    v-if="nestLevel < 2"
                    :nested="true"
                    v-for="nestComment in replyList"
                    :key="nestComment._id"
                    :comment="nestComment"
                    :nest-level="nextNestLevel"
                    :toggle="toggle"
                    :toggleNested="nestedToggleReply" />
            </div>
        </article>
    </div>
</template>

<script>
  import AddComment from "./addComment";
const { format, render, cancel, register } = require('timeago.js');

  export default {
    name: "Comment",
    props: {
      comment: Object,
      nestLevel: Number,
      toggle: Function,
      toggleNested: Function,
      activeComment: String,
      nested: Boolean,
    },
    components: {
      AddComment
    },
    async mounted() {
      try {
        this.profile = await this.$axios.$get(`/api/v1/profiles/${this.comment.profileId}`);
        this.replyList = await this.$axios.$get(`/api/v1/comments/${this.comment.postId}/${this.comment._id}`);
      } catch {
        console.log('error grabbing some values');
      }
    },
    data() {
      return {
        profile: {},
        replyList: [],
        reply: false,
        activeNestedCommentId: '',
      }
    },
    methods: {
      updateComment(comment) {
        this.replyList.unshift(comment)
      },
      toggleReply(reply) {
        this.reply = !reply;
        this.toggle(!reply, this.comment._id);
        if (this.nested) {
          this.nestedToggleReply(this.comment._id);
        }
      },
      nestedToggleReply(commentId) {
        console.log(this);
        this.activeNestedCommentId = commentId;
      }
    },
    computed: {
      activeCommentId() {
        return this.activeComment ? this.activeComment : this.activeNestedCommentId
      },
      createdAtFormatted() {
        return format(this.comment.createdAt, 'en_US');
      },
      nextNestLevel() {
        return Number(this.nestLevel + 1);
      }
    },
  };
</script>

<style scoped>
.upvote {
    margin: 0.35em 0.5em 0 0.5em;
}
.upvote2 {
    margin: 0.35em 0.5em 0 0;
}
p small {
    color: #999;
}
small a {
    color: #39C9A0;
    font-weight: bold;
}
</style>