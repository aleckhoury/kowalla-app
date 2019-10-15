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
      <a v-if="reactionCount" class="button is-outlined level-item is-hidden-mobile" @click="cardModal()">
        <b>··· {{ reactionCount }}</b>
      </a>
      <a v-if="reactionsFormatted.length" class="button is-outlined iterator level-item is-hidden-tablet" @click="cardModal()">
        <b>
          <span v-for="(react, index) in reactionsFormatted.slice(0, 3)" :key="index" class="is-marginless is-paddingless">{{ react.emoji }} </span>{{ reactionCountMobile }}
        </b>
      </a>
      <b-dropdown v-if="this.$store.state.user.loggedIn" ref="dropdown" mobile-modal>
        <a slot="trigger" class="button is-outlined level-item" @click="createPicker">
          <font-awesome-icon icon="smile" />
        </a>
        <b-dropdown-item custom>
          <div ref="picker" />
        </b-dropdown-item>
      </b-dropdown>
      <div v-if="isFeed" class="comments level-item" @click="showPost()"><font-awesome-icon class="commentIcon" icon="comments" /> Comments</div>
      <div v-else class="comments level-item" @click="toggleReply()"><font-awesome-icon class="commentIcon" icon="comments" /> Reply</div>
    </div>
  </div>
</template>

<script>
import ReactionModal from './ReactionModal';
import LoginHandler from '~/components/Auth/LoginHandler';

export default {
  name: 'Reactions',
  props: {
    postId: { type: String, default: '' },
    createPicker: { type: Function, default: () => {} },
    reactionsFormatted: { type: Array, default: () => [] },
    toggleReaction: { type: Function, default: () => {} },
    isFeed: { type: Boolean, default: true }
  },
  data() {
    return {};
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
    }
  },
  async mounted() {},
  methods: {
    toggleReply() {
      if (!this.$store.state.user.loggedIn) {
        return this.$modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true
        });
      }
      this.$emit('toggle', '');
    },
    cardModal() {
      if (!this.$store.state.user.loggedIn) {
        return this.$modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true
        });
      }
      this.$modal.open({
        parent: this,
        component: ReactionModal,
        props: {
          reactionsFormatted: this.reactionsFormatted,
          toggleReaction: this.toggleReaction
        },
        hasModalCard: true
      });
    },
    showPost() {
      window.history.pushState({}, '');
      this.$emit('open-post');
    }
  }
};
</script>

<style scoped>
.level {
  padding-left: 0.5em;
  padding-bottom: 0.5em;
  display: flex;
  flex-wrap: wrap;
}
.level:not(:last-child) {
  margin: 0;
}
.button {
  color: #39c9a0;
  border: 2px solid #39c9a0;
  width: 3em;
  height: 2em;
  font-size: 1.2em;
}
.button:hover {
  background-color: rgba(57, 201, 160, 0.3);
  color: #39c9a0;
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
.commentIcon {
  margin-right: 0.25em;
}
</style>
