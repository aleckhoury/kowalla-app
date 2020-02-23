<template>
  <div>
    <article class="media">
      <div class="media-left is-marginless">
        <a @click="toggleUpvote()">
          <font-awesome-icon :class="{ 'user-upvoted': !!userUpvoted }" icon="angle-up" class="upvote icon" />
        </a>
        <strong>{{ upvoteCount }}</strong>
      </div>
      <div class="media-content">
        <div class="content">
          <p id="reply">
            <nuxt-link :to="`/user/${profile.username}`">
              <small>@{{ profile.username }} · {{ createdAtFormatted }}</small>
            </nuxt-link>
            <br />
            {{ comment.content }}
            <br />
            <small v-if="nestLevel < 2" @click="toggleReply()">
              <a>Reply</a>
            </small>
          </p>
          <AddComment
            v-if="activeComment === comment._id && this.$store.state.user.loggedIn"
            :comment-id="comment._id"
            :update-comment="updateComment"
            :reset-reply="toggle"
            :post-id="comment.postId"
          />
        </div>
        <div v-if="nestLevel < 2">
          <Comment
            v-for="nestComment in replyList"
            :key="nestComment._id"
            :active-comment="activeComment"
            :comment="nestComment"
            :comment-upvote="nestComment.upvote"
            :nest-level="nextNestLevel"
            :toggle="toggle"
          />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import AddComment from './AddComment';
const { format } = require('timeago.js');
import LoginHandler from '../Onboarding/LoginHandler';

export default {
  name: 'Comment',
  components: { AddComment },
  props: {
    comment: { type: Object, default: () => {} },
    nestLevel: { type: Number, default: 0 },
    toggle: {
      type: Function,
      default: () => {},
    },
    activeComment: { type: String, default: '' },
  },
  data() {
    return {
      profile: {},
      replyList: [],
      activeNestedCommentId: '',
      userUpvoted: false,
      upvoteCount: 0,
    };
  },
  computed: {
    createdAtFormatted() {
      return format(this.comment.createdAt, 'en_US');
    },
    nextNestLevel() {
      return Number(this.nestLevel + 1);
    },
  },
  async mounted() {
    try {
      this.profile = await this.$axios.$get(`/api/v1/profiles/${this.comment.profileId}`);
      this.replyList = await this.$axios.$get(`/api/v1/comments/${this.comment.postId}/${this.comment._id}`);
      const upvoteCountObj = await this.$axios.$get(`/api/v1/upvotes/count/${this.comment._id}`);
      this.upvoteCount = upvoteCountObj.count;
      if (this.$store.state.user.loggedIn && !this.comment.isNew) {
        const upvote = await this.$axios.$get(`/api/v1/comments/${this.comment._id}/${this.$store.state.user._id}/upvote`);
        this.userUpvoted = upvote.userUpvoted;
      } else {
        this.userUpvoted = !this.userUpvoted;
        this.upvoteCount = 1;
      }
    } catch {
      console.log('error grabbing some values');
    }
  },
  methods: {
    updateComment(comment) {
      comment.isNew = true;
      this.replyList.unshift(comment);
    },
    toggleReply() {
      if (!this.$store.state.user.loggedIn) {
        return this.$buefy.modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true,
        });
      }
      if (this.activeComment === this.comment._id) {
        this.toggle('');
      } else {
        this.toggle(this.comment._id);
      }
    },
    async toggleUpvote() {
      this.userUpvoted = !this.userUpvoted;
      if (this.userUpvoted) this.upvoteCount++;
      else this.upvoteCount--;
      if (!this.userUpvoted) {
        await this.$axios.$delete(`/api/v1/comments/${this.comment._id}/${this.$store.state.user._id}/upvote`);
      } else {
        await this.$axios.$post(`/api/v1/comments/upvote`, {
          commentId: this.comment._id,
          profileId: this.$store.state.user._id,
        });
      }
    },
  },
};
</script>

<style scoped>
.upvote {
  margin: 0.35em 0.5em 0 0.5em;
  color: black;
}
.media-left {
  display: flex;
  flex-direction: column;
  text-align: center;
}
p small {
  color: #999;
}
small a {
  color: #39c9a0;
  font-weight: bold;
}
.upvote.user-upvoted {
  color: #39c9a0;
}
#reply {
  padding-bottom: 1em;
}
</style>
