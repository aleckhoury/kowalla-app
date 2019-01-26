<template>
    <section class="section">
        <div class="box level">
            <span class="level-left is-size-4"><b>Create a post...</b></span>
            <a class="button action" @click="createDialog = !createDialog"><b>Create</b></a>
        </div>
        <div class="modal" :class="{ 'is-active': createDialog }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <section class="modal-card-body columns">
                    <figure class="column is-paddingless is-1">
                        <p class="image is-64x64 profilePic">
                            <img :src="this.$store.state.user.profilePicture">
                        </p>
                    </figure>
                    <div class="column">
                    <editor-menu-bar :editor="editor">
                        <div class="field has-addons" slot-scope="{ commands, isActive }">
                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.bold() }"
                                    @click="commands.bold"
                            >
                                <font-awesome-icon icon="bold" />
                            </a>

                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.italic() }"
                                    @click="commands.italic"
                            >
                                <font-awesome-icon icon="italic" />
                            </a>

                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.strike() }"
                                    @click="commands.strike"
                            >
                                <font-awesome-icon icon="strikethrough" />
                            </a>

                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.underline() }"
                                    @click="commands.underline"
                            >
                                <font-awesome-icon icon="underline" />
                            </a>

                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.code() }"
                                    @click="commands.code"
                            >
                                <font-awesome-icon icon="code" />
                            </a>

                            <!--<a-->
                            <!--class="button is-white"-->
                            <!--:class="{ 'is-active': isActive.paragraph() }"-->
                            <!--@click="commands.paragraph"-->
                            <!--&gt;-->
                            <!--<font-awesome-icon icon="paragraph" />-->
                            <!--</a>-->

                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                                    @click="commands.heading({ level: 1 })"
                            >
                                H1
                            </a>

                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                                    @click="commands.heading({ level: 2 })"
                            >
                                H2
                            </a>
                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                                    @click="commands.heading({ level: 3 })"
                            >
                                H3
                            </a>
                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.bullet_list() }"
                                    @click="commands.bullet_list"
                            >
                                <font-awesome-icon icon="list-ul" />
                            </a>
                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.ordered_list() }"
                                    @click="commands.ordered_list"
                            >
                                <font-awesome-icon icon="list-ol" />
                            </a>
                            <a
                                    class="button is-white"
                                    :class="{ 'is-active': isActive.blockquote() }"
                                    @click="commands.blockquote"
                            >
                                <font-awesome-icon icon="quote-right" />
                            </a>
                            <!--<a-->
                            <!--class="button is-white is-white"-->
                            <!--:class="{ 'is-active': isActive.code_block() }"-->
                            <!--@click="commands.code_block"-->
                            <!--&gt;-->
                            <!--<font-awesome-icon icon="code" />-->
                            <!--</a>-->
                            <a
                                    class="button is-white"
                                    @click="commands.horizontal_rule"
                            >
                                <font-awesome-icon icon="minus" />
                            </a>
                            <!--<a-->
                            <!--class="button is-white"-->
                            <!--@click="commands.undo"-->
                            <!--&gt;-->
                            <!--<font-awesome-icon icon="undo" />-->
                            <!--</a>-->

                            <!--<a-->
                            <!--class="button is-white"-->
                            <!--@click="commands.redo"-->
                            <!--&gt;-->
                            <!--<font-awesome-icon icon="redo" />-->
                            <!--</a>-->
                        </div>
                    </editor-menu-bar>
                        <div class="editor content">
                            <editor-content class="editor__content" :editor="editor" />
                    </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <a class="button action" @click="createDialog = !createDialog">Cancel</a>
                </footer>
            </div>
        </div>
    </section>
</template>

<script>
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
    },
    data() {
      return {
        createDialog: false,
        editor: null
      };
    },
    methods: {
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
.modal-card {
    width: 55%;
    border-radius: 6px;
}
.button.action {
    width: 12em;
    color: white;
    background-color: #39C9A0;
}
.is-white:hover {
    background-color: #E9EBEE;
}
.editor__content {
    padding-left: 1em;
    height: 5em;
    border-color: transparent;
    box-sizing: border-box;
}
.ProseMirror-focused {
    outline: 0;
}
</style>