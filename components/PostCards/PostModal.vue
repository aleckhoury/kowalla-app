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

        <Reactions :post-id="post._id" />
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
import Reactions from "~/components/PostCards/ReactionsNoComments";
import PostHeader from "~/components/PostCards/PostHeader";
import PostTimer from "~/components/PostCards/PostTimer";
import Utils from "~/utils/helpers";

export default {
  name: "PostModal",
  components: { AddComment, Comment, Reactions, PostHeader, PostTimer },
  props: {
    isFromNestedUrl: { type: Boolean, default: false },
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

    if (!this.isFromNestedUrl) {
      this.originalPath = this.$route.path;
      window.history.pushState(
        {},
        null,
        `/dev/community/${this.community.name}/posts/${this.post._id}`
      );
    }
  },
  beforeDestroy() {
    window.history.pushState({}, null, `${this.$route.path}`);
  },
  async mounted() {
    //this.post = await this.$axios.$get(`/api/v1/posts/${this.post._id}`);

    if (this.isFromNestedUrl) {
      // have to get information we haven't gotten from the NewsfeedPost component

      if (this.post.hasOwnProperty("projectId")) {
        this.isProject = true;
        try {
          this.project = await this.$axios.$get(
            `/api/v1/projects/${this.post.projectId}`
          );
          this.community = await this.$axios.$get(
            `/api/v1/communities/${this.post.communityId}`
          );
        } catch {
          console.log("error grabbing some values");
        }
      } else {
        this.isProject = false;
        try {
          this.profile = await this.$axios.$get(
            `/api/v1/profiles/${this.post.profileId}`
          );
          this.community = await this.$axios.$get(
            `/api/v1/communities/${this.post.communityId}`
          );
        } catch {
          console.log("error grabbing some values");
        }
      }
    }

    this.commentList = await this.$axios.$get(
      `/api/v1/comments/${this.post._id}`
    );
    this.commentList.map(async (comment, idx) => {
      this.commentList[idx].upvote = await this.$axios.$get(
        `/api/v1/comments/${comment._id}/${this.$store.state.user._id}/upvote`
      );
    });
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
  max-height: 85vh;
  overflow-y: scroll;
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
  padding: 1em 1em;
  overflow-y: scroll;
  word-break: break-word;
}
</style>
