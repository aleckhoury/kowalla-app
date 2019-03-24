<template>
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
          @open-post="openPost"
        />
    </div>
</template>

<script>
  import Reactions from "./reactions";
  import PostHeader from "./postHeader";
  import PostTimer from "./postTimer";
  import PostModal from './modalPost.vue';
  import Utils from '~/utils/helpers';

  export default {
    name: "Post",
    components: { PostTimer, PostHeader, Reactions },
    props: {
      post: Object,
      hideComments: {
        type: Boolean,
        default: false,
      },
      isMobile: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        project: {},
        community: {},
        profile: {},
        isProject: false,
      }
    },
    async mounted() {
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
      if (!Utils.isActivePost(this.post)) {
        this.post.isActive = false;
        this.$axios.put(`/api/v1/posts/${this.post._id}`, {
          isActive: false,
        });
      }
    },
    methods: {
      openPost() { // figure out how to

        if (this.isMobile) {
          this.$router.push({
            path: `/dev/mobile/${this.post._id}`
          })
        } else {

          this.$modal.open({
            parent: this,
            component: PostModal,
            props: {
              post: this.post,
              profile: this.profile,
              project: this.project,
              community: this.community,
              isProject: this.isProject,
            },
            width: 900,
            hasModalCard: true,
          });
        }
      }
    }
  };
</script>

<style scoped>
    .content {
        padding: 1em 0.5em;
    }
    b-icon {
        color: black;
    }
    .media-content {
        padding: 0 2em;
    }
    .card {
        border-radius: 6px;
        margin-bottom: 1em;
    }
</style>
