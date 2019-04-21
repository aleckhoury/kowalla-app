<template>
  <div class="card">
    <div class="post-header-container">
      <PostHeader
        :is-active="post.isActive"
        :created-at="post.createdAt"
        :profile="profile"
        :project="project"
        :community="community"
        :is-project="isProject"
        :is-mobile="isMobile"
        :post-id="post._id"
        @delete-post="echoDeletePost"
      />
    </div>

    <PostTimer v-if="post.isActive" :time="post.expiration" />
    <div id="content-box" ref="content" :class="{ fullHeight: !overflow }">
      <div class="content is-marginless" v-html="post.content" />

      <p v-if="overflow" class="read-more" @click="overflow = !overflow">
        <a>Read More</a>
      </p>
    </div>
    <br >
    <Reactions :post-id="post._id" @open-post="openPost" />
  </div>
</template>

<script>
import Reactions from "~/components/PostCards/Reactions";
import PostHeader from "~/components/PostCards/PostHeader";
import PostTimer from "~/components/PostCards/PostTimer";
import PostModal from "~/components/PostCards/PostModal.vue";
import Utils from "~/utils/helpers";

export default {
  name: "Post",
  components: { PostTimer, PostHeader, Reactions },
  props: {
    post: { type: Object, default: () => {} },
    hideComments: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    methodProp: { type: Function, default: () => {} },
  },
  data() {
    return {
      project: {},
      community: {},
      profile: {},
      isProject: false,
      overflow: false,
    };
  },
  async mounted() {
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
    if (
      this.post.expiration !== null &&
      !!this.post.isActive &&
      !Utils.isActivePost(this.post)
    ) {
      this.post.isActive = false;
      this.$axios.$put(`/api/v1/profile/posts/${this.post._id}`, {
        isActive: false,
      });
    }
    if (this.$refs["content"]) {
      if (this.$refs["content"].getBoundingClientRect().height >= 480) {
        this.overflow = true;
      }
    }
  },
  methods: {
    echoDeletePost(postId) {
      this.$emit("delete-post", postId);
    },

    openPost() {
      // figure out how to
      let infoObj = {
        community: this.community,
        project: this.isProject ? this.project : {},
        profile: this.isProject ? {} : this.profile,
      };
      this.$modal.open({
        parent: this,
        component: PostModal,
        props: {
          infoObj: infoObj,
          postObj: this.post,
          isProject: this.isProject,
        },
        events: {
          "delete-post": postId => {
            this.echoDeletePost(postId);
          },
        },
        width: 900,
        hasModalCard: true,
      });
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
  bottom: 4em;
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
.card {
  border-radius: 6px;
  margin-bottom: 1em;
}
.content {
  word-break: break-word;
  margin-left: 8px;
}
div.post-header-container {
  border-radius: 6px;
  overflow: hidden;
}
</style>
