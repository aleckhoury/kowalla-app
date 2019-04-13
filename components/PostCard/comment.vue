<template>
    <div>
        <article class="media">
            <a @click="toggleUpvote()">
                <font-awesome-icon
                    icon="arrow-up"
                    class="media-left upvote icon"
                    :class="{ 'user-upvoted': !!userUpvoted }"
                />
            </a>
            <div class="media-content">
                <div class="content">
                    <p id="reply">
                        <small>@{{ profile.username }} · {{ createdAtFormatted }}</small>
                        <br>
                        {{ comment.content }}
                        <br>
                        <small v-if="nestLevel < 2" @click="toggleReply()"><a>Reply</a></small>
                    </p>
                    <AddComment
                        v-if="activeComment === comment._id"
                        :commentId="comment._id"
                        :updateComment="updateComment"
                        :resetReply="toggle"
                        :postId="comment.postId" />
                </div>
                <Comment
                    v-if="nestLevel < 2"
                    v-for="nestComment in replyList"
                    :activeComment="activeComment"
                    :key="nestComment._id"
                    :comment="nestComment"
                    :commentUpvote="nestComment.upvote"
                    :nest-level="nextNestLevel"
                    :toggle="toggle" />
            </div>
        </article>
    </div>
</template>

<script>
  import AddComment from "./addComment";
const { format } = require('timeago.js');

  export default {
    name: "Comment",
    props: {
      comment: Object,
      nestLevel: Number,
      toggle: Function,
      activeComment: String,
    },
    components: {
      AddComment
    },
    async mounted() {
      try {
        this.profile = await this.$axios.$get(`/api/v1/profiles/${this.comment.profileId}`);
          this.replyList = await this.$axios.$get(`/api/v1/comments/${this.comment.postId}/${this.comment._id}`);
          // this.replyList.map(async (nestComment, idx) => {
          //   this.replyList[idx].upvote =
          // });
          this.upvote = await this.$axios.$get(`/api/v1/comments/${comment._id}/${this.$store.state.user._id}/upvote`)
      } catch {
        console.log('error grabbing some values');
      }
    },
    data() {
      return {
        profile: {},
        replyList: [],
        activeNestedCommentId: '',
        upvote: {},
      }
    },
    methods: {
      updateComment(comment) {
        this.replyList.unshift(comment)
      },
      toggleReply() {
        if (this.activeComment === this.comment._id) {
          this.toggle('');
        } else {
          this.toggle(this.comment._id);
        }
      },
      toggleUpvote() {
        if (this.upvote.userUpvoted) {
          this.$axios.delete(`/api/v1/comments/${ this.comment.postId }/${this.$store.state.user._id}/upvote`);
        } else {
          this.$axios.$post(`/api/v1/comments/upvote`, {
            commentId: this.comment._id,
            profileId: this.$store.state.user._id,
          });
        }
        this.upvote.userUpvoted = !this.upvote.userUpvoted;

      }
    },
    computed: {
      userUpvoted() {
        if (this.upvote.userUpvoted) {
          return true;
        }
        return false;
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
    color: black;
}
p small {
    color: #999;
}
small a {
    color: #39C9A0;
    font-weight: bold;
}
.upvote.user-upvoted {
    color: #39C9A0;
}
#reply {
    padding-bottom: 1em;
}
</style>