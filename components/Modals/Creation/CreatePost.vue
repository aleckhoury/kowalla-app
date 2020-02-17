<template>
  <div class="modal-content">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="this.$store.state.user.profilePicture" />
          </figure>
        </div>
        <div class="media-content">
          <client-only>
            <editor-menu-bar :editor="editor">
              <div slot-scope="{ commands, isActive }" class="field has-addons">
                <BTooltip label="Bold" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.bold() }" class="button is-white" @click="commands.bold">
                    <font-awesome-icon icon="bold" />
                  </a>
                </BTooltip>
                <BTooltip label="Italic" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.italic() }" class="button is-white" @click="commands.italic">
                    <font-awesome-icon icon="italic" />
                  </a>
                </BTooltip>
                <BTooltip label="Strikethrough" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.strike() }" class="button is-white" @click="commands.strike">
                    <font-awesome-icon icon="strikethrough" />
                  </a>
                </BTooltip>
                <BTooltip label="Underline" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.underline() }" class="button is-white" @click="commands.underline">
                    <font-awesome-icon icon="underline" />
                  </a>
                </BTooltip>
                <BTooltip label="Code Block" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.code_block() }" class="button is-white" @click="commands.code_block">
                    <font-awesome-icon icon="code" />
                  </a>
                </BTooltip>
                <BTooltip label="Heading 1" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.heading({ level: 1 }) }" class="button is-white" @click="commands.heading({ level: 1 })">
                    H1
                  </a>
                </BTooltip>
                <BTooltip label="Heading 2" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.heading({ level: 2 }) }" class="button is-white" @click="commands.heading({ level: 2 })">
                    H2
                  </a>
                </BTooltip>
                <BTooltip label="Heading 3" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.heading({ level: 3 }) }" class="button is-white" @click="commands.heading({ level: 3 })">
                    H3
                  </a>
                </BTooltip>
                <BTooltip label="To Do List" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.todo_list() }" class="button is-white" @click="commands.todo_list">
                    <font-awesome-icon icon="tasks" />
                  </a>
                </BTooltip>
                <BTooltip label="Bullet List" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.bullet_list() }" class="button is-white" @click="commands.bullet_list">
                    <font-awesome-icon icon="list-ul" />
                  </a>
                </BTooltip>
                <BTooltip label="Numbered List" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.ordered_list() }" class="button is-white" @click="commands.ordered_list">
                    <font-awesome-icon icon="list-ol" />
                  </a>
                </BTooltip>
                <BTooltip label="Blockquote" type="is-light" position="is-top">
                  <a :class="{ 'is-active': isActive.blockquote() }" class="button is-white" @click="commands.blockquote">
                    <font-awesome-icon icon="quote-right" />
                  </a>
                </BTooltip>
                <BTooltip label="Horizontal Rule" type="is-light" position="is-top">
                  <a class="button is-white" @click="commands.horizontal_rule">
                    <font-awesome-icon icon="minus" />
                  </a>
                </BTooltip>
                <BTooltip label="Upload Photo" type="is-light" position="is-top">
                  <a class="button is-white">
                    <input ref="file" class="file-input" type="file" @change="selectFile(commands.image)" />
                    <font-awesome-icon icon="camera" />
                  </a>
                </BTooltip>
                <div class="toggle">
                  <BTooltip
                    label="Coworking on Kowalla shows others you're working in real time, and creates a post that lets you update it as you work"
                    type="is-light"
                    position="is-top"
                    multilined
                  >
                    <BButton :class="activeType === 'cowork' ? 'selected' : ''" :disabled="hasActivePost" @click="toggleLivePost('cowork')">
                      <font-awesome-icon icon="users" />&nbsp; Cowork
                    </BButton>
                  </BTooltip>
                  <BTooltip label="You can post a discussion in any space you're subscribed to" type="is-light" position="is-top" multilined>
                    <BButton :class="activeType === 'discussion' ? 'selected' : ''" @click="toggleLivePost('discussion')">
                      <font-awesome-icon icon="comment-dots" />&nbsp; Discussion
                    </BButton>
                  </BTooltip>
                </div>
              </div>
            </editor-menu-bar>
            <div class="editor content">
              <editor-content :editor="editor" class="editor__content" />
            </div>
          </client-only>
          <div class="level is-paddingless">
            <a :class="{ 'is-loading': s3Loading }" class="level-item button action post" @click="createPost()">
              <b v-if="isLivePost">Start Coworking</b>
              <b v-else>Post</b>
            </a>
            <div class="level-right">
              <b v-if="isLivePost" class="has-text-grey">on</b>
              <b-dropdown v-if="isLivePost" class="level-item dropdown-container" position="is-bottom-left" aria-role="list" required>
                <div slot="trigger" class="dropdown-selector">
                  <b class="font theme-color">@{{ postingAs.name }}</b>
                  <font-awesome-icon icon="angle-down" class="theme-color selector-child" />
                </div>
                <b-dropdown-item v-for="item in postAsList" :key="item._id" aria-role="listitem" @click="postingAs = item"> @{{ item.name }} </b-dropdown-item>
              </b-dropdown>
              <b v-if="!isLivePost && postInList.length" class="level-item has-text-grey">in</b>
              <b-dropdown v-if="!isLivePost && postInList.length" class="level-item dropdown-container" position="is-bottom-left" aria-role="list">
                <div slot="trigger" class="dropdown-selector">
                  <b class="font theme-color">{{ postingIn.name === 'Select' ? postingIn.name : `#${postingIn.name}` }}</b>
                  <font-awesome-icon icon="angle-down" class="theme-color selector-child" />
                </div>
                <b-dropdown-item v-for="item in postInList" :key="item._id" aria-role="listitem" @click="postingIn = item">
                  {{ item.name === 'Select' ? item.name : `#${item.name}` }}
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
import editor from '~/mixins/editor';
export default {
  name: 'CreatePost',
  mixins: [editor],
  mounted() {
    this.mixMount();
    console.log(this.$route);
    if (this.$route.name.includes('space')) {
      this.getDefaultSpace();
    }
  },
};
</script>

<style scoped lang="scss">
.section {
  padding-bottom: 0;
}
span {
  color: #39c9a0;
}
.box {
  width: 800px;
  max-width: 100%;
}
.modal-content {
  border-radius: 6px;
  margin: 0;
  color: #39c9a0;
  width: auto;
  overflow: visible;
}
.level {
  padding: 1rem;
}
.modal-card-body {
  overflow: visible;
}
.field {
  display: flex;
  flex-wrap: wrap;
}
.button.action {
  width: 12em;
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
.post {
  margin-right: 0.75em;
}
.is-white:hover {
  background-color: #e9ebee;
}
.dropdown-content {
  overflow: visible;
}
div.animation-content {
  margin: 0;
}
.block {
  color: #39c9a0;
}
.editor__content {
  min-height: 150px;
  overflow-y: scroll;
  word-break: break-word;
}
.dropdown-container {
  border-radius: 6px;
  cursor: pointer;
}
.dropdown-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  margin-left: 5px;
}
.selector-child {
  margin-top: 1px;
  margin-left: 5px;
  margin-right: 5px;
}
.theme-color {
  color: #39c9a0;
}
img {
  border-radius: 6px;
}
.dot {
  height: 13px;
  width: 13px;
  background-color: limegreen;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5em;
}
.isLive {
  background-color: limegreen;
  color: white;
}
.isLive:hover,
.isLive:focus {
  background-color: limegreen;
  color: white;
}
.checkmark {
  margin-right: 0.5em;
}
.optional {
  position: fixed;
  font-size: 10px;
  color: #7f828b;
}
.toggle {
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 50px;

  & .b-tooltip:last-child button {
    margin-left: 3px;
  }
}
.toggle button {
  border-radius: 50px !important;
  border: none;
  font-weight: 600;

  &.selected {
    background: #39c9a0;
    color: white;
  }
}
</style>
