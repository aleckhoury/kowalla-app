<template>
    <div class="focusPage">
        <Header></Header>
            <div class="container">
                <div class="columns is-vcentered is-centered is-marginless main-margin">
                    <!-- post feed -->
                    <div class="column is-half">
                        <div class="card livePost">
                            <h2 class="is-size-1 title"><b>Live Post</b></h2>
                            <div class="media-content">
                                <editor-menu-bar :editor="editor">
                                    <div class="field has-addons"
                                         v-if="focused"
                                         slot-scope="{ commands, isActive, focused }">
                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.bold() }"
                                                @click="commands.bold">
                                            <font-awesome-icon icon="bold" />
                                        </a>

                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.italic() }"
                                                @click="commands.italic">
                                            <font-awesome-icon icon="italic" />
                                        </a>

                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.strike() }"
                                                @click="commands.strike">
                                            <font-awesome-icon icon="strikethrough" />
                                        </a>

                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.underline() }"
                                                @click="commands.underline">
                                            <font-awesome-icon icon="underline" />
                                        </a>

                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.code() }"
                                                @click="commands.code">
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
                                                @click="commands.heading({ level: 1 })">
                                            H1
                                        </a>

                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                                                @click="commands.heading({ level: 2 })">
                                            H2
                                        </a>
                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                                                @click="commands.heading({ level: 3 })">
                                            H3
                                        </a>
                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.bullet_list() }"
                                                @click="commands.bullet_list">
                                            <font-awesome-icon icon="list-ul" />
                                        </a>
                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.ordered_list() }"
                                                @click="commands.ordered_list">
                                            <font-awesome-icon icon="list-ol" />
                                        </a>
                                        <a
                                                class="button is-white"
                                                :class="{ 'is-active': isActive.blockquote() }"
                                                @click="commands.blockquote">
                                            <font-awesome-icon icon="quote-right" />
                                        </a>
                                        <a
                                                class="button is-white"
                                                @click="commands.horizontal_rule">
                                            <font-awesome-icon icon="minus" />
                                        </a>
                                        <a
                                                class="button is-white">
                                            <input class="file-input" type="file" ref="file" @change="selectFile(commands.image)">
                                            <font-awesome-icon icon="camera" />
                                        </a>
                                    </div>
                                </editor-menu-bar>
                                <div class="editor content">
                                    <editor-content class="editor__content" :editor="editor" />
                                </div>
                        </div>
                    </div>
                    </div>
                    <div class="column is-half">
                        <div class="card liveTimer">
                            <b><span class="countdown">{{ countdown }}</span></b>
                        </div>
                    </div>
                </div>
            </div>
    </div>
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
    Image,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History,
  } from 'tiptap-extensions'
  import Header from '~/components/Header/Header';
  export default {
    name: "focus",
    components: {
      Header,
      Editor,
      EditorContent,
      EditorMenuBar,
    },
    data() {
      return {
        editor: null,
        post: {},
        countdown: '',
      }
    },
    methods: {
      countdownTimer(expireTimeMS) {
        const self = this;
        let x = setInterval(function () {
          let now = new Date().getTime();

          let distance = expireTimeMS - now;

          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          hours = (hours < 10) ? '0' + hours : hours;
          minutes = (minutes < 10) ? '0' + minutes : minutes;
          seconds = (seconds < 10) ? '0' + seconds : seconds;

          self.countdown = `${hours}:${minutes}:${seconds}`;
          console.log(self.countdown)
          // if (countdownTime < 0) {
          //   clearInterval(x)
          // }
        }, 1000)
      },
    },
    async mounted() {
      this.post = await this.$axios.get(`/api/v1/posts/active/${this.$store.state.user._id}`);
      this.countdownTimer(new Date(this.post.data.expiration).getTime());
      this.editor = await new Editor({
        autoFocus: true,
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new Image(),
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
        content: this.post.data.content,
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
        },
      })
    }
  };
</script>

<style scoped>
    .focusPage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://source.unsplash.com/collection/1242150');
        background-size: cover;
    }
    .container {
        height: 90%;
        width: 100%;
    }
    .columns {
        height: 90%;
        max-height: 90%;
    }
    .column {
        max-height: 90%;
    }
    .title {
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 2vw;
        text-align: center;
        color: white;
    }
    .livePost {
        margin: 0 auto;
        padding: 1em;
        border-radius: 6px;
        background-color: rgba(0,0,0, 0.35);
    }
    .liveTimer {
        margin: 0 auto;
        max-width: 120%;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 10vw;
        text-align: center;
        color: white;
        border-radius: 6px;
        background-color: rgba(0,0,0, 0.35);
    }
    .field {
        display: block;
    }
    .editor__content {
        color: white;
        overflow: scroll;
    }
    .is-white {
        background-color: transparent;
        color: white;
    }
    .is-white:hover {
        background-color: #E9EBEE;
    }
    .button.action {
        color: white;
        font-size: 2em;
        margin: 0 auto;
        border-radius: 6px;
        background-color: #39C9A0;
        border-color: #39C9A0;
    }
    .countdown {
        padding: 100px;
    }
</style>