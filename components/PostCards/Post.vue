<template>
  <div class="card">
    <PostHeader
      :is-active="post.isActive"
      :created-at="post.createdAt"
      :duration="post.duration"
      :profile="profile"
      :project="project"
      :space="space"
      :is-project="isProject"
      :is-mobile="isMobile"
      :post-id="post._id"
      @delete-post="echoDeletePost"
    />

    <PostTimer v-if="post.isActive || post.duration" :start-time="post.start" :duration="post.duration" />
    <div id="content-box" ref="content" :class="{ fullHeight: !overflow }">
      <!-- eslint-disable-next-line -->
      <div class="content is-marginless" v-html="post.content"></div>
      <p v-if="overflow" class="read-more" @click="overflow = !overflow">
        <a>Read More</a>
      </p>
    </div>
    <br />
    <Reactions
      :post-id="post._id"
      :create-picker="createPicker"
      :toggle-reaction="toggleReaction"
      :reactions-formatted="reactionsFormatted"
      :is-feed="isFeed"
      @open-post="openPost"
      @toggle="toggleComment"
    />
    <AddComment v-if="!activeCommentId && !isFeed" :post-id="post._id" :update-comment="updateComment" />
    <Comment v-for="comment in commentList" :key="comment._id" :active-comment="activeCommentId" :comment="comment" :nest-level="0" :toggle="toggleComment" />
  </div>
</template>

<script>
import Reactions from '~/components/PostCards/Reactions';
import PostHeader from '~/components/PostCards/PostHeader';
import PostTimer from '~/components/PostCards/PostTimer';
import PostModal from '~/components/PostCards/PostModal.vue';
import Comment from '~/components/PostCards/Comment.vue';
import AddComment from '~/components/PostCards/AddComment';
import reactions from '~/mixins/reactions';
import Utils from '~/utils/helpers';
import DropdownPicker from './DropdownPicker';
import LoginHandler from '~/components/Auth/LoginHandler';
import Vue from 'vue';
import highlight from 'highlight.js';

export default {
  name: 'Post',
  components: { PostTimer, PostHeader, Reactions, Comment, AddComment },
  mixins: [reactions],
  props: {
    post: { type: Object, default: () => {} },
    isFeed: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    methodProp: { type: Function, default: () => {} },
    truncate: { type: Boolean, default: true },
  },
  data() {
    return {
      project: {},
      space: {},
      profile: {},
      isProject: false,
      overflow: false,
      reactionList: [],
      commentList: [],
      activeCommentId: '',
    };
  },
  async mounted() {
    if (this.post.isActive || this.post.duration) {
      this.childNumber = 2;
    }
    if (this.post.hasOwnProperty('projectId')) {
      this.isProject = true;
      try {
        if (this.post.projectId) {
          this.project = await this.$axios.$get(`/api/v1/projects/${this.post.projectId}`);
        }
        if (this.post.spaceId) {
          this.space = await this.$axios.$get(`/api/v1/spaces/${this.post.spaceId}`);
        }
      } catch {
        console.log('error grabbing some values');
      }
    } else {
      this.isProject = false;
      try {
        if (this.post.profileId) {
          this.profile = await this.$axios.$get(`/api/v1/profiles/${this.post.profileId}`);
        }
        if (this.post.spaceId) {
          this.space = await this.$axios.$get(`/api/v1/spaces/${this.post.spaceId}`);
        }
      } catch {
        console.log('error grabbing some values');
      }
    }
    if (this.truncate) {
      if (this.$refs['content']) {
        if (this.$refs['content'].getBoundingClientRect().height >= 480) {
          this.overflow = true;
        }
      }
    }
    if (!this.isFeed) {
      this.commentList = await this.$axios.$get(`/api/v1/comments/${this.post._id}`);
      if (this.$store.state.user.loggedIn) {
        this.commentList.map(async (comment, idx) => {
          this.commentList[idx].upvote = await this.$axios.$get(`/api/v1/comments/${comment._id}/${this.$store.state.user._id}/upvote`);
        });
      }
    }
    try {
      this.reactionList = await this.$axios.$get(`/api/v1/posts/${this.post._id}/reactions`);
      if (this.reactionList.length) {
        this.reactionList.forEach(x => {
          const userReacted = x.profileId === this.$store.state.user._id;
          let index = this.reactionsFormatted.map(y => y.emoji).indexOf(x.emoji);
          if (index === -1) {
            this.reactionsFormatted.push({
              emoji: x.emoji,
              count: 1,
              userReacted: false,
            });
            if (userReacted) {
              index = this.reactionsFormatted.map(y => y.emoji).indexOf(x.emoji);
              this.reactionsFormatted[index].userReacted = true;
            }
          } else {
            this.reactionsFormatted[index].count++;
            if (userReacted) {
              this.reactionsFormatted[index].userReacted = true;
            }
          }
        });
      }
    } catch {
      console.log('some kind of error idk');
    }
    document.querySelectorAll('.content pre code').forEach(block => {
      highlight.highlightBlock(block);
    });
  },
  methods: {
    echoDeletePost(postId) {
      this.$emit('delete-post', postId);
    },
    openPost() {
      // figure out how to
      let infoObj = {
        space: this.space,
        project: this.isProject ? this.project : {},
        profile: this.isProject ? {} : this.profile,
        reactionsFormatted: this.reactionsFormatted,
      };
      if (this.isMobile) {
        if (Object.keys(this.space).length) {
          this.$router.push(`/beta/space/${this.space.name}/posts/${this.post._id}`);
        } else {
          this.$router.push(`/beta/project/${this.project.name}/posts/${this.post._id}`);
        }
      } else {
        this.$modal.open({
          parent: this,
          component: PostModal,
          props: {
            infoObj: infoObj,
            postObj: this.post,
            isProject: this.isProject,
          },
          events: {
            'delete-post': postId => {
              this.echoDeletePost(postId);
            },
          },
          width: 900,
          hasModalCard: true,
        });
      }
    },
    updateComment(comment) {
      this.commentList.unshift(comment);
    },
  },
};
</script>

<style scoped>
#content-box {
  padding: 1em 1em;
  max-height: 30em;
  overflow: hidden;
}
#content-box.fullHeight {
  max-height: none;
}
#content-box .read-more {
  position: absolute;
  bottom: 3em;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0 0 0;

  /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent, white, white);
}
b-icon {
  color: black;
}
.media-content {
  padding: 0 2em;
}
.content {
  word-break: break-word;
  margin-left: 8px;
}
</style>
