<template>
  <div class="modal-content">
    <div class="box is-paddingless">
      <div class="card">
        <PostHeader
          :is-active="post.isActive"
          :created-at="post.createdAt"
          :profile="profile"
          :project="project"
          :community="community"
          :is-project="isProject"
          :post-id="post._id"
          :is-modal="true"
          @delete-post="echoDeletePost"
        />
        <PostTimer v-if="post.isActive" :time="post.expiration" />
        <div class="content is-marginless" v-html="post.content" />
        <br >
        <Reactions :post-id="post._id" :is-feed="false" @toggle="toggleComment" />
      </div>
      <AddComment
        v-if="!activeCommentId"
        :post-id="post._id"
        :update-comment="updateComment"
      />
      <Comment
        v-for="comment in commentList"
        :active-comment="activeCommentId"
        :key="comment._id"
        :comment="comment"
        :nest-level="0"
        :toggle="toggleComment"
      />
    </div>
  </div>
</template>

<script>
import Comment from "~/components/PostCards/Comment.vue";
import AddComment from "~/components/PostCards/AddComment";
import Reactions from "~/components/PostCards/Reactions";
import PostHeader from "~/components/PostCards/PostHeader";
import PostTimer from "~/components/PostCards/PostTimer";
import Utils from "~/utils/helpers";

export default {
  name: "PostModal",
  components: { AddComment, Comment, Reactions, PostHeader, PostTimer },
  props: {
    isFromNewsfeed: { type: Boolean, default: false },
    fallbackUrl: { type: String, default: "" },
    isProject: { type: Boolean, default: false },
    infoObj: {
      type: Object,
      default: function() {
        return {};
      },
    },
    postObj: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data() {
    return {
      commentList: [],
      activeCommentId: "",
      originalPath: "",
      profile: {},
      project: {},
      community: {},
      post: {},
    };
  },
  created() {
    this.post = this.postObj;
    this.profile = this.infoObj.profile;
    this.community = this.infoObj.community;
    this.project = this.infoObj.project;

    this.originalPath = this.$route.path;
    if (Object.keys(this.community).length) {
      window.history.pushState(
        {},
        null,
        `/dev/community/${this.community.name}/posts/${this.post._id}`
      );
    } else {
      window.history.pushState(
        {},
        null,
        `/dev/project/${this.project.name}/posts/${this.post._id}`
      );
    }
  },
  beforeDestroy() {
    window.history.pushState({}, null, `${this.$route.path}`);
  },
  async mounted() {
    this.commentList = await this.$axios.$get(
      `/api/v1/comments/${this.post._id}`
    );
    if (this.$store.state.user.loggedIn) {
      this.commentList.map(async (comment, idx) => {
        this.commentList[idx].upvote = await this.$axios.$get(
                `/api/v1/comments/${comment._id}/${this.$store.state.user._id}/upvote`
        );
      });
    }
  },
  methods: {
    updateComment(comment) {
      this.commentList.unshift(comment);
    },
    toggleComment(activeCommentId) {
      this.activeCommentId = activeCommentId;
    },
    echoDeletePost(postId) {
      this.$emit("delete-post", postId);
    },
  },
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
  overflow-y: scroll;
  max-height: 87vh;
}
.modal-content {
  border-radius: 6px;
  margin: 0;
  color: #39c9a0;
  width: auto;
  height: auto;
  overflow: visible;
}
.content {
  max-height: 60vh;
  padding: 2em 1em;
  overflow-y: scroll;
  word-break: break-word;
}
</style>
