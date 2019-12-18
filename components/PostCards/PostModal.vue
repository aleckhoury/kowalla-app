<template>
  <div class="modal-content">
    <div class="box is-paddingless">
      <div class="card">
        <PostHeader
          :is-active="post.isActive"
          :created-at="post.createdAt"
          :duration="post.duration"
          :profile="profile"
          :project="project"
          :space="space"
          :is-project="isProject"
          :post-id="post._id"
          :is-modal="true"
          @delete-post="echoDeletePost"
        />
        <PostTimer v-if="post.isActive || post.duration" :start-time="post.start" :duration="post.duration" />
        <!-- eslint-disable-next-line -->
        <div class="content is-marginless" v-html="post.content"></div>
        <br />
        <Reactions
          :post-id="post._id"
          :create-picker="createPicker"
          :reactions-formatted="reactionsFormatted"
          :toggle-reaction="toggleReaction"
          :is-feed="false"
          @toggle="toggleComment"
        />
      </div>
      <AddComment v-if="!activeCommentId && this.$store.state.user.loggedIn" :post-id="post._id" :update-comment="updateComment" />
      <Comment v-for="comment in commentList" :key="comment._id" :active-comment="activeCommentId" :comment="comment" :nest-level="0" :toggle="toggleComment" />
    </div>
  </div>
</template>

<script>
import Comment from '~/components/PostCards/Comment.vue';
import AddComment from '~/components/PostCards/AddComment';
import Reactions from '~/components/PostCards/Reactions';
import PostHeader from '~/components/PostCards/PostHeader';
import PostTimer from '~/components/PostCards/PostTimer';
import reactions from '~/mixins/reactions';

export default {
  name: 'PostModal',
  components: { AddComment, Comment, Reactions, PostHeader, PostTimer },
  mixins: [reactions],
  props: {
    isFromNewsfeed: { type: Boolean, default: false },
    fallbackUrl: { type: String, default: '' },
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
      activeCommentId: '',
      originalPath: '',
      profile: {},
      project: {},
      space: {},
      post: {},
    };
  },
  created() {
    this.post = this.postObj;
    this.profile = this.infoObj.profile;
    this.space = this.infoObj.space;
    this.project = this.infoObj.project;
    this.reactionsFormatted = this.infoObj.reactionsFormatted;

    this.originalPath = this.$route.path;
    if (Object.keys(this.space).length) {
      window.history.pushState({}, null, `/beta/space/${this.space.name}/posts/${this.post._id}`);
    } else {
      window.history.pushState({}, null, `/beta/project/${this.project.name}/posts/${this.post._id}`);
    }
  },
  beforeDestroy() {
    window.history.pushState({}, null, `${this.$route.path}`);
  },
  async mounted() {
    if (this.post.isActive || this.post.duration) {
      this.childNumber = 2;
    }
    this.commentList = await this.$axios.$get(`/api/v1/comments/${this.post._id}`);
    if (this.$store.state.user.loggedIn) {
      this.commentList.map(async (comment, idx) => {
        this.commentList[idx].upvote = await this.$axios.$get(`/api/v1/comments/${comment._id}/${this.$store.state.user._id}/upvote`);
      });
    }
    setTimeout(() => {
      const modalHeight = document.getElementsByClassName('modal-content')[0].offsetHeight;
      const modalBackground = document.getElementsByClassName('modal-background')[0];
      modalBackground.style.height = `${modalHeight}px`;
    }, 1000);
  },
  methods: {
    updateComment(comment) {
      this.commentList.unshift(comment);
    },
    echoDeletePost(postId) {
      this.$emit('delete-post', postId);
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
  padding: 2em 1em;
  overflow-y: scroll;
  word-break: break-word;
}
</style>
