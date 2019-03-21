<template>
<div class="screen">

  <div class="size">
    <div class="mobile-header-container is-touch">
      <div class="level half-height is-mobile mobile-header-top-container">
        <div
          class="level-left"
          @click="goBackToFeed"
        >
          <div class="level-item margin-adjust">
            <font-awesome-icon icon="arrow-left" />
          </div>

          <div>
            Post
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="card mobile-main-margin" @mouseover="loadPicker = true" @mouseleave="loadPicker = false">
      <post-header
        :createdAt="this.post.createdAt"
        :profile="this.profile"
        :project="this.project"
        :community="this.community"
        :isProject="this.isProject"
      />
      <div class="content is-marginless" v-html="post.content">
      </div>
      <br />
      <Reactions
        :postId="this.post._id"
        :load-picker="loadPicker"
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
</template>
<script>
import ChangeLocationModal from '~/components/Modals/Other/ChangeLocationModal';
import MobileNavIcons from '~/components/MobileNavIcons';
import Reactions from "~/components/PostCard/Reactions";
import PostHeader from "~/components/PostCard/postHeader";
import Comment from '~/components/PostCard/comment.vue';
import AddComment from "~/components/PostCard/addComment";

export default {
  name: "MobilePostView",
  components: { AddComment, Comment, PostHeader, Reactions },
  data() {
    return {
      loadPicker: false,
      post: {},
      project: {},
      community: {},
      profile: {},
      isProject: false,
      originalPath: '',
      commentList: [],
      activeCommentId: '',
    };
  },
  created() {
    this.originalIndex = window.history.length;
    console.log(this.originalIndex);
  },
  async mounted() {
    console.log(this.$route.params.postId)
    this.post = await this.$axios.$get(`/api/v1/posts/${this.$route.params.postId}`);

    if (this.post.hasOwnProperty('projectId')) {
      this.isProject = true;
      try {
        this.project = await this.$axios.$get(`/api/v1/projects/${this.post.projectId}`);
        this.community = await this.$axios.$get(`/api/v1/communities/${this.post.communityId}`);
      } catch {
        console.log('error grabbing some values');
      }
    }

    if (this.post.hasOwnProperty('profileId')) {
      this.isProject = false;
      try {
        this.profile = await this.$axios.$get(`/api/v1/profiles/${this.post.profileId}`);
        this.community = await this.$axios.$get(`/api/v1/communities/${this.post.communityId}`);
      } catch {
        console.log('error grabbing some values');
      }
    }

    window.history.pushState(
      {}, null,
      `/dev/c/${this.community.name}/posts/${this.post._id}`
    );

    this.commentList = await this.$axios.$get(`/api/v1/comments/${this.post._id}`);
    this.commentList.map(async (comment, idx) => {
      this.commentList[idx].upvote = await this.$axios.$get(`/api/v1/upvotes/${comment._id}/${this.$store.state.user._id}`)
    })
  },
  methods: {
    goBackToFeed() {
      /*
      this.$router.back(); // once for the original url change
      this.$router.back(); // once to punt us back to the feed
      */

      window.history.go(this.originalIndex);
    }
  }
}
</script>
<style lang="css" scoped>
.size {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 50px;
  width: 100%;
  background-color: white;
}

.mobile-header-top-container {
  margin: 0px 10px 0px 10px;
}

.on-bottom {
  position: relative;
  bottom: 0;
  right: 0;
}

.level-left {
  border: 1px solid black;
  border-radius: 6px;
  padding: 5px;
  height: 40px;
}

.margin-adjust {
  margin: 0px 0px 0px -4px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.half-height {
  height: 50px;
}

.mobile-nav-profile-picture {
  height: 40px;
  width: 40px;
  border: 1px solid #E0DDDD;
  border-radius: 6px;
}

.mobile-nav-link-picture {
  height: 30px;
  width: 30px;
  border: 1px solid #E0DDDD;
  border-radius: 6px;
}
</style>
