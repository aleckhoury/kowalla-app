<template>
    <div class="focusPage">
        <Header></Header>
            <div v-if="post.data && !post.data.userCompleted" class="container">
                <div class="columns is-vcentered is-centered is-marginless main-margin">
                    <!-- post feed -->
                    <div class="column">
                        <div class="card livePost">
                            <h2 class="is-size-1 title"><b>Live Post</b></h2>
                            <div class="media-content">
                                <editor-menu-bar :editor="editor">
                                    <div class="field has-addons"
                                         slot-scope="{ commands, isActive }">
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
                                                :class="{ 'is-active': isActive.todo_list() }"
                                                @click="commands.todo_list">
                                            <font-awesome-icon icon="tasks" />
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
                                    <editor-content class="editor__content focusEditor" :editor="editor" />
                                </div>
                        </div>
                    </div>
                    </div>
                    <div class="column">
                        <div class="card liveTimer">
                            <b><span class="countdown">{{ countdown }}</span></b>
                        </div>
                    </div>
                </div>
            </div>
        <div v-else class="container is-size-1">
            <div class="startNew">
                <b><span>Start a new live post!</span></b>
                <p><a class="button action" @click="cardModal()"><b>Start</b></a></p>
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
  import CreatePostModal from "~/components/Modals/Creation/createPost/CreatePostModal"
  export default {
    name: "focus",
    components: {
      CreatePostModal,
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
      cardModal() {
        this.$modal.open({
            parent: this,
            component: CreatePostModal,
            props: {
              reactionsFormatted: this.reactionsFormatted,
            },
            hasModalCard: true,
          },
        )
      },
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

          if (seconds === 30 || seconds === '00') {
            self.updatePost();
          }
          self.countdown = `${hours}:${minutes}:${seconds}`;
          if (self.countdown === '00:00:00') {
            self.updatePost(true);
            clearInterval(x);
          }
        }, 1000)
      },
      updatePost(isComplete = false) {
        if (!isComplete) {
          this.$axios.put(`/api/v1/posts/${this.post.data._id}`, {
            content: this.html,
          });
        } else if (isComplete) {
          this.$axios.put(`/api/v1/posts/${this.post.data._id}`, {
            content: this.html,
            isActive: false,
            userCompleted: true,
          });
        }
      },
      async selectFile(command) {
        this.file = await this.$refs.file.files[0];

        this.sendFile(command);
      },
      async sendFile(command) {
        this.clearPhoto = true;
        const formData = new FormData();
        formData.append('file', this.file);
        try {
          const image = await this.$axios.post('/api/v1/posts/imageUpload', formData);
          this.photoUrl = image.data.file;
          command({ src: image.data.file });
        } catch(err) {
          console.log(err);
          this.$toast.open({
            duration: 5000,
            message: 'There was an error with your file. Please confirm it\'s less than 10MB and a png, jpeg, or gif.',
            position: 'is-top',
            type: 'is-danger'
          })
        }
      },
    },
    async mounted() {
      this.post = await this.$axios.get(`/api/v1/posts/active/${this.$store.state.user._id}`);
      if (this.post.data.isActive === true) {
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
    },
    computed: {
      activePost () {
        return this.$store.state.user.activePost;
      }
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
        margin: 0 auto;
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
        text-align: center;
        color: white;
    }
    .livePost {
        margin: 0 auto;
        padding: 1em;
        border-radius: 6px;
        background-color: rgba(0,0,0, 0.35);
        color: white;
    }
    .liveTimer {
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 10vw;
        text-align: center;
        color: white;
        border-radius: 6px;
        background-color: rgba(0,0,0, 0.35);
        padding: 0 0.25em;
    }
    .field {
        display: block;
    }
    .editor__content {
        color: white;
        max-height: 50vh;
        overflow-y: scroll;
        overflow-wrap: break-word;
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
    .startNew {
        color: white;
        display: block;
        text-align: center;
        border-radius: 6px;
        background-color: rgba(0,0,0, 0.35);
        margin-top: 2.25em;
        padding: 0.25em;
    }
    @media only screen and (max-width: 600px) {
        .columns {
            flex-direction: column-reverse;
            display: flex;
        }
    }
</style>