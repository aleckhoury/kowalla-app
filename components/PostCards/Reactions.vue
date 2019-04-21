<template>
  <div class="level is-mobile">
    <div class="reactions level-left">
      <a
        v-for="(react, index) in reactionsFormatted.slice(0, 3)"
        :key="index"
        :class="{ 'user-reacted': react.userReacted }"
        class="button is-outlined iterator level-item is-hidden-mobile"
        @click="toggleReaction(react.emoji, index)"
      >
        <b>{{ react.emoji }}{{ react.count }}</b>
      </a>
      <a
        v-if="reactionCount"
        class="button is-outlined level-item is-hidden-mobile"
        @click="cardModal()"
      >
        <b>··· {{ reactionCount }}</b>
      </a>
      <a
        v-if="reactionsFormatted.length"
        class="button is-outlined iterator level-item is-hidden-tablet"
        @click="cardModal()"
      >
        <b
        ><span
          v-for="(react, index) in reactionsFormatted.slice(0, 3)"
          :key="index"
          class="is-marginless is-paddingless"
        >{{ react.emoji }}</span
        >{{ reactionCountMobile }}</b
        >
      </a>
      <b-dropdown ref="dropdown" mobile-modal>
        <a slot="trigger" class="button is-outlined level-item">
          <font-awesome-icon icon="smile" />
        </a>
        <b-dropdown-item custom>
          <Picker
            :show-skin-tones="false"
            :show-preview="false"
            set="apple"
            @select="toggleReaction"
          />
        </b-dropdown-item>
      </b-dropdown>
      <div class="comments level-item" @click="showPost()">
        <font-awesome-icon id="commentIcon" icon="comments" /> Comments
      </div>
    </div>
  </div>
</template>

<script>
import ReactionModal from "./ReactionModal";
let Mart;
if (process.browser) {
  Mart = require("emoji-mart-vue-fast");
}
let { Picker } = Mart ? Mart : "";
import "emoji-mart-vue-fast/css/emoji-mart.css";

export default {
  name: "Reactions",
  components: { ReactionModal, Picker },
  props: {
    postId: { type: String, default: "" },
  },
  data() {
    return {
      reactionList: [],
      reactionsFormatted: [],
    };
  },
  computed: {
    reactionCount() {
      let count = 0;
      if (this.reactionsFormatted.length > 3) {
        this.reactionsFormatted.slice(3).map(x => {
          count = x.count + count;
        });
      }
      return count;
    },
    reactionCountMobile() {
      let count = 0;
      this.reactionsFormatted.map(x => {
        count = x.count + count;
      });
      return count;
    },
  },
  async mounted() {
    try {
      this.reactionList = await this.$axios.$get(
        `/api/v1/posts/${this.postId}/reactions`
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
          postId: this.postId,
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
      if (isEmojiObject) {
        this.$refs.dropdown.toggle();
      }
    },
    async toggleReactionFalse(emoji, index) {
      await this.$axios.delete(
        `/api/v1/profiles/${this.$store.state.user._id}/reactions/${
          this.postId
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
    cardModal() {
      this.$modal.open({
        parent: this,
        component: ReactionModal,
        props: {
          reactionsFormatted: this.reactionsFormatted,
          toggleReaction: this.toggleReaction,
        },
        hasModalCard: true,
      });
    },
    showPost() {
      window.history.pushState({}, "");
      this.$emit("open-post");
    },
  },
};
</script>

<style scoped>
.level {
  padding-left: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  flex-wrap: wrap;
}
.button {
  color: #39c9a0;
  border-color: #39c9a0;
  border-width: medium;
  width: 3em;
  height: 2em;
  font-size: 1.2em;
}
.button:hover {
  background-color: rgba(57, 201, 160, 0.3);
  color: #39c9a0;
  border-color: #39c9a0;
}
.comments {
  color: #39c9a0;
  margin-left: 0.5em;
  cursor: pointer;
}
div.dropdown-item,
.is-active.is-mobile-modal div.dropdown-item {
  padding: 0;
}
.is-hidden-tablet {
  width: 6em;
}
.user-reacted,
.user-reacted:hover {
  background: #39c9a0;
  color: white;
}
.visible {
  display: none;
}
#commentIcon {
  margin-right: 0.25em;
}
</style>
