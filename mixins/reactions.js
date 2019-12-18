import Vue from 'vue';
import LoginHandler from '~/components/Auth/LoginHandler';
import DropdownPicker from '~/components/PostCards/DropdownPicker';

// NOTE - The $children[1] selector only works in the local environment. Not sure why 🤔
// NOTE - When testing use $children[1], but when deploying, use $children[1]

const reactions = {
  data() {
    return {
      reactionsFormatted: [],
      childNumber: 1,
    };
  },
  methods: {
    createPicker() {
      if (this.$children[this.childNumber].$refs.picker.attributes[0].ownerElement.children.length) {
        return null;
      }
      let ComponentClass = Vue.extend(DropdownPicker);
      let instance = new ComponentClass({
        propsData: { toggleReaction: this.toggleReaction },
      });
      instance.$mount(); // pass nothing
      this.$children[this.childNumber].$refs.picker.appendChild(instance.$el);
    },
    async toggleReaction(emoji) {
      if (!this.$store.state.user.loggedIn) {
        return this.$modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true,
        });
      }
      const savedEmoji = typeof emoji === 'string' ? emoji : emoji.native;
      let emojiIndex = await this.reactionsFormatted.map(x => x.emoji).indexOf(savedEmoji);
      const isEmojiObject = typeof emoji === 'object';
      if (emojiIndex === -1 || this.reactionsFormatted[emojiIndex].userReacted === false) {
        return this.toggleReactionTrue(savedEmoji, emojiIndex, isEmojiObject);
      } else if (emojiIndex !== -1 && this.reactionsFormatted[emojiIndex].userReacted === true) {
        return this.toggleReactionFalse(savedEmoji, emojiIndex);
      }
    },
    async toggleReactionTrue(emoji, index, isEmojiObject) {
      await this.$axios.$post(`/api/v1/profiles/${this.$store.state.user._id}/reactions`, {
        emoji: emoji,
        postId: this.post._id,
      });
      if (index === -1) {
        this.reactionsFormatted.push({
          emoji: emoji,
          count: 1,
          userReacted: false,
        });
        const newIndex = this.reactionsFormatted.map(x => x.emoji).indexOf(emoji);
        this.reactionsFormatted[newIndex].userReacted = true;
      } else {
        this.reactionsFormatted[index].userReacted = true;
        this.reactionsFormatted[index].count++;
      }
      if (isEmojiObject) {
        this.$children[this.childNumber].$refs.dropdown.toggle();
      }
    },
    async toggleReactionFalse(emoji, index) {
      await this.$axios.$delete(`/api/v1/profiles/${this.$store.state.user._id}/reactions/${this.post._id}`, {
        data: {
          emoji: emoji,
        },
      });
      this.reactionsFormatted[index].count--;
      this.reactionsFormatted[index].userReacted = false;
      if (this.reactionsFormatted[index].count === 0) {
        this.reactionsFormatted.splice(index, 1);
      }
    },
    toggleComment(activeCommentId) {
      this.activeCommentId = activeCommentId;
    },
  },
};
export default reactions;
