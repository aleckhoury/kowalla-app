<template>
    <section class="section">
        <div class="box level">
            <span class="level-left is-size-4"><b>Create a post...</b></span>
            <a class="button" @click="createDialog = !createDialog"><b>Create</b></a>
        </div>
        <div v-if="createDialog" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <section class="modal-card-body">
                    <figure class="media-left">
                        <p class="image is-64x64 profilePic">
                            <img :src="this.$store.state.user.profilePicture">
                        </p>
                    </figure>
                    <div class="editor">
                        <editor-menu-bar :editor="editor">
                            <div class="menubar" slot-scope="{ commands, isActive }">
                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.bold() }"
                                        @click="commands.bold"
                                >
                                    <icon name="bold" />
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.italic() }"
                                        @click="commands.italic"
                                >
                                    <icon name="italic" />
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.strike() }"
                                        @click="commands.strike"
                                >
                                    <icon name="strike" />
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.underline() }"
                                        @click="commands.underline"
                                >
                                    <icon name="underline" />
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.code() }"
                                        @click="commands.code"
                                >
                                    <icon name="code" />
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.paragraph() }"
                                        @click="commands.paragraph"
                                >
                                    <icon name="paragraph" />
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                                        @click="commands.heading({ level: 1 })"
                                >
                                    H1
                                </button>

                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                                        @click="commands.heading({ level: 2 })"
                                >
                                    H2
                                </button>
                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                                        @click="commands.heading({ level: 3 })"
                                >
                                    H3
                                </button>
                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.bullet_list() }"
                                        @click="commands.bullet_list"
                                >
                                    <icon name="ul" />
                                </button>
                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.ordered_list() }"
                                        @click="commands.ordered_list"
                                >
                                    <Icon name="ol" />
                                </button>
                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.blockquote() }"
                                        @click="commands.blockquote"
                                >
                                    <icon name="quote" />
                                </button>
                                <button
                                        class="menubar__button"
                                        :class="{ 'is-active': isActive.code_block() }"
                                        @click="commands.code_block"
                                >
                                    <icon name="code" />
                                </button>
                                <button
                                        class="menubar__button"
                                        @click="commands.horizontal_rule"
                                >
                                    <icon name="hr" />
                                </button>
                                <button
                                        class="menubar__button"
                                        @click="commands.undo"
                                >
                                    <icon name="undo" />
                                </button>

                                <button
                                        class="menubar__button"
                                        @click="commands.redo"
                                >
                                    <icon name="redo" />
                                </button>
                            </div>
                        </editor-menu-bar>
                        <editor-content class="editor__content" :editor="editor" />
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" @click="createDialog = !createDialog">Cancel</button>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>
  import Icon from './icon.vue';
  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import {
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
  } from 'tiptap-extensions'

  export default {
    name: "createPost",
    components: {
      Editor,
      EditorContent,
      EditorMenuBar,
      Icon
    },
    data() {
      return {
        createDialog: false,
        editor: null
      };
    },
    beforeDestroy() {
      this.editor.destroy()
    },
    mounted() {
      this.editor = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: '<p>This is just a boring paragraph</p>',
      })
    }
  };
</script>

<style scoped>
.section {
    padding-bottom: 0;
}
span {
    color: #39C9A0;
}
.button {
    width: 12em;
    color: white;
    background-color: #39C9A0;
}
</style>