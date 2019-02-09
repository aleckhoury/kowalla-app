<template>
    <div class="level is-mobile">
        <div class="reactions level-left">
            <a
                class="button is-outlined iterator level-item is-hidden-mobile"
                v-for="(react, index) in reactionsFormatted.slice(0, 3)"
                :class="{ 'user-reacted': userReacted[index] }"
                @click="toggleReaction(react.emoji, index)">
                <b>{{ react.emoji }}{{ react.count }}</b>
            </a>
            <a class="button is-outlined level-item is-hidden-mobile" v-if="reactionCount">
                <b>··· {{ reactionCount }}</b>
            </a>
            <a v-if="reactionsFormatted.length" class="button is-outlined iterator level-item is-hidden-tablet">
                <b><span
                        class="is-marginless is-paddingless"
                        v-for="(react, index) in reactionsFormatted.slice(0, 3)">{{ react.emoji }}</span>{{ reactionCountMobile }}</b>
            </a>
            <BDropdown ref="dropdown">
                <a class="button is-outlined level-item" slot="trigger">
                    <font-awesome-icon icon="smile" />
                </a>
                <BDropdownItem custom>
                    <Picker :native="true" :showSkinTones="false" :showPreview="false" @select="toggleReaction" />
                </BDropdownItem>
            </BDropdown>
            <a class="comments level-item">
                <font-awesome-icon icon="comments" /> Comments
            </a>
        </div>
    </div>
</template>

<script>
  import { Picker } from 'emoji-mart-vue';

  export default {
    name: "reactions",
    components: { Picker },
    props: {
      post: Object,
    },
    data() {
      return {
        reactionList: [],
        reactionsFormatted: [],
        userReacted: [
          false,
          false,
          false,
        ],
      }
    },
    methods: {
      async toggleReaction(emoji, index) {
        const savedEmoji = typeof emoji === 'string' ? emoji : emoji.native;
        let objectEmojiIndex = this.reactionsFormatted.map(x => x.emoji).indexOf(savedEmoji);
        console.log(this.userReacted[objectEmojiIndex]);
        if (this.userReacted[index] || this.userReacted[objectEmojiIndex] && objectEmojiIndex !== -1) {
          await this.$axios.delete(`/api/v1/profiles/${this.$store.state.user._id}/reactions/${this.post._id}`, {
            data: {
            emoji: savedEmoji,
          }
        });
          this.reactionsFormatted[index || objectEmojiIndex].count--;
          this.userReacted[index || objectEmojiIndex] = false;
          if (this.reactionsFormatted[index || objectEmojiIndex].count === 0) {
            this.reactionsFormatted.splice(index || objectEmojiIndex, 1)
          }
          if (objectEmojiIndex === -1) {
            this.$refs.dropdown.toggle()
          }
        } else {
          await this.$axios.post(`/api/v1/profiles/${this.$store.state.user._id}/reactions`, {
            emoji: savedEmoji,
            postId: this.post._id,
          });
          if (typeof emoji === 'string') {
            this.userReacted[index] = true;
            this.reactionsFormatted[index].count++;
          } else if (typeof emoji === 'object') {
            this.$refs.dropdown.toggle()
             if (objectEmojiIndex === -1) {
               await this.reactionsFormatted.push({ emoji: emoji.native, count: 1});
               objectEmojiIndex = await this.reactionsFormatted.map(x => x.emoji).indexOf(savedEmoji);
                 this.userReacted[objectEmojiIndex] = true;
             } else {
               this.userReacted[objectEmojiIndex] = true;
               this.reactionsFormatted[objectEmojiIndex].count++;
             }
          }
        }
      },
    },
    computed: {
      reactionCount() {
        let count = 0;
        if (this.reactionsFormatted.length > 3) {
          this.reactionsFormatted.slice(3).map(x => {
            count = x.count + count;
          })
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
        this.reactionList = await this.$axios.$get(`/api/v1/reactions/${this.post._id}`);
        if (this.reactionList.length) {
          this.reactionList.forEach((x) => {
            const userReacted = x.profileId === this.$store.state.user._id;
            const index = this.reactionsFormatted.map(x => x.emoji).indexOf(x.emoji);
            if (index === -1) {
              this.reactionsFormatted.push({ emoji: x.emoji, count: 1});
            } else {
              this.reactionsFormatted[index].count++
            }
            if (userReacted) {
              this.userReacted[index] = true;
            }
          })
        }
      } catch {
        console.log('some kind of error idk');
      }
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
        color: #39C9A0;
        border-color: #39C9A0;
        border-width: medium;
        width: 3em;
        height: 2em;
        font-size: 1.2em;
    }
    .button:hover {
        background-color: rgba(57,201,160,0.3);
        color: #39C9A0;
        border-color: #39C9A0;
    }
    .comments {
        color: #39C9A0;
        margin-left: 0.5em;
    }
    div.dropdown-item, .is-active.is-mobile-modal div.dropdown-item {
        padding: 0;
    }
    .emoji-mart-category {
        white-space: pre-wrap;
    }
    .is-hidden-tablet {
        width: 6em;
    }
    .user-reacted, .user-reacted:hover {
        background: #39C9A0;
        color: white;
    }
</style>