<template>
    <div class="modal-content">
        <div class="box is-paddingless">
          <div class="card">
              <post-header
                :isActive="post.isActive"
                :createdAt="this.post.createdAt"
                :profile="this.profile"
                :project="this.project"
                :community="this.community"
                :isProject="this.isProject"
              />
              <PostTimer v-if="post.isActive" :time="post.expiration" />
              <div class="content is-marginless" v-html="post.content">
              </div>
              <br />
              <Reactions
                :postId="this.post._id"
              />
          </div>

          <AddComment v-if="!activeCommentId" :postId="post._id" :updateComment="updateComment" />
          <Comment
            v-for="comment in commentList"
            :activeComment="activeCommentId"
            :key="comment._id"
            :comment="comment"
            :nest-level="0"
            :toggle="toggleComment"
          />
        </div>
    </div>
</template>

<script>
import Comment from './comment.vue';
import AddComment from "./addComment";
import Reactions from "./reactionsNoComments";
import PostHeader from "./postHeader";
import PostTimer from "./postTimer";
import Utils from '~/utils/helpers';

export default {
  name: "PostModal",
  components: { AddComment, Comment, Reactions, PostHeader, PostTimer },
  props: {
    post: Object,
    isFromNestedURL: { type: Boolean, default: false },
    isFromNewsfeed: { type: Boolean, default: false },
    fallbackURL: { type: String, default: ''},
    profile: Object,
    project: Object,
    community: Object,
    isProject: Boolean,

  },
  data() {
    return {
      commentList: [],
      activeCommentId: '',
      originalPath: '',
    }
  },
  created() {
    this.originalPath = this.$route.path;
    window.history.pushState(
      {}, null,
      `/dev/c/${this.community.name}/posts/${this.post._id}`
    )
  },
  beforeDestroy() {
    window.history.pushState({}, null, `${this.$route.path}`)
  },
  async mounted() {
    this.commentList = await this.$axios.$get(`/api/v1/comments/${this.post._id}`);
    this.commentList.map(async (comment, idx) => {
      this.commentList[idx].upvote = await this.$axios.$get(`/api/v1/upvotes/${comment._id}/${this.$store.state.user._id}`)
    });
    if (!Utils.isActivePost(this.post)) {
      this.post.isActive = false;
      this.$axios.put(`/api/v1/posts/${this.post._id}`, {
        isActive: false,
      });
    }
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
    height: auto;
    overflow: visible;
}
.content {
    max-height: 60vh;
    overflow-y: scroll;
    word-break: break-all;
}
</style>
