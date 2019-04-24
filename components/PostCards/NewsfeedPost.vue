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
    <Reactions
      :post-id="post._id"
      :create-picker="createPicker"
      :toggle-reaction="toggleReaction"
      :reactions-formatted="reactionsFormatted"
      @open-post="openPost"
    />
  </div>
</template>

<script>
import Reactions from "~/components/PostCards/Reactions";
import PostHeader from "~/components/PostCards/PostHeader";
import PostTimer from "~/components/PostCards/PostTimer";
import PostModal from "~/components/PostCards/PostModal.vue";
import Utils from "~/utils/helpers";
import DropdownPicker from "./DropdownPicker";
import Vue from "vue";

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
      reactionList: [],
      reactionsFormatted: [],
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
    try {
      this.reactionList = await this.$axios.$get(
        `/api/v1/posts/${this.post._id}/reactions`
      );
      if (this.reactionList.length) {
        this.reactionList.forEach(x => {
          const userReacted = x.profileId === this.$store.state.user._id;
          let index = this.reactionsFormatted
            .map(y => y.emoji)
            .indexOf(x.emoji);
          if (index === -1) {
            this.reactionsFormatted.push({
              emoji: x.emoji,
              count: 1,
              userReacted: false,
            });
            if (userReacted) {
              index = this.reactionsFormatted
                .map(y => y.emoji)
                .indexOf(x.emoji);
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
      console.log("some kind of error idk");
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
    async toggleReaction(emoji) {
      const savedEmoji = typeof emoji === "string" ? emoji : emoji.native;
      let emojiIndex = await this.reactionsFormatted
        .map(x => x.emoji)
        .indexOf(savedEmoji);
      const isEmojiObject = typeof emoji === "object";
      if (
        emojiIndex === -1 ||
        this.reactionsFormatted[emojiIndex].userReacted === false
      ) {
        return this.toggleReactionTrue(savedEmoji, emojiIndex, isEmojiObject);
      } else if (
        emojiIndex !== -1 &&
        this.reactionsFormatted[emojiIndex].userReacted === true
      ) {
        return this.toggleReactionFalse(savedEmoji, emojiIndex);
      }
    },
    async toggleReactionTrue(emoji, index, isEmojiObject) {
      await this.$axios.$post(
        `/api/v1/profiles/${this.$store.state.user._id}/reactions`,
        {
          emoji: emoji,
          postId: this.post._id,
        }
      );
      if (index === -1) {
        this.reactionsFormatted.push({
          emoji: emoji,
          count: 1,
          userReacted: false,
        });
        const newIndex = this.reactionsFormatted
          .map(x => x.emoji)
          .indexOf(emoji);
        this.reactionsFormatted[newIndex].userReacted = true;
      } else {
        this.reactionsFormatted[index].userReacted = true;
        this.reactionsFormatted[index].count++;
      }
      // if (isEmojiObject) {
      //   this.$refs.dropdown.toggle();
      // }
    },
    async toggleReactionFalse(emoji, index) {
      await this.$axios.delete(
        `/api/v1/profiles/${this.$store.state.user._id}/reactions/${
          this.post._id
        }`,
        {
          data: {
            emoji: emoji,
          },
        }
      );
      this.reactionsFormatted[index].count--;
      this.reactionsFormatted[index].userReacted = false;
      if (this.reactionsFormatted[index].count === 0) {
        this.reactionsFormatted.splice(index, 1);
      }
    },
    createPicker() {
      let ComponentClass = Vue.extend(DropdownPicker);
      let instance = new ComponentClass({
        propsData: { toggleReaction: this.toggleReaction },
      });
      instance.$mount(); // pass nothing
      this.$children[1].$refs.picker.appendChild(instance.$el);
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
