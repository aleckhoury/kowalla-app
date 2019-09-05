<template>
  <div class="focusPage">
    <div
      v-if="post.isActive"
      class="container"
    >
      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-centered is-marginless main-margin"
      >
        <!-- post feed -->
        <div class="column">
          <div class="card livePost">
            <h2 class="is-size-1 title"><b>Live Post</b></h2>
            <div class="media-content">
              <editor-menu-bar :editor="editor">
                <div
                  slot-scope="{ commands, isActive }"
                  class="field has-addons"
                >
                  <a
                    :class="{ 'is-active': isActive.bold() }"
                    class="button is-white"
                    @click="commands.bold"
                  >
                    <font-awesome-icon icon="bold" />
                  </a>

                  <a
                    :class="{ 'is-active': isActive.italic() }"
                    class="button is-white"
                    @click="commands.italic"
                  >
                    <font-awesome-icon icon="italic" />
                  </a>

                  <a
                    :class="{ 'is-active': isActive.strike() }"
                    class="button is-white"
                    @click="commands.strike"
                  >
                    <font-awesome-icon icon="strikethrough" />
                  </a>

                  <a
                    :class="{ 'is-active': isActive.underline() }"
                    class="button is-white"
                    @click="commands.underline"
                  >
                    <font-awesome-icon icon="underline" />
                  </a>

                  <a
                    :class="{ 'is-active': isActive.code() }"
                    class="button is-white"
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
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    class="button is-white"
                    @click="commands.heading({ level: 1 })"
                  >
                    H1
                  </a>

                  <a
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    class="button is-white"
                    @click="commands.heading({ level: 2 })"
                  >
                    H2
                  </a>
                  <a
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    class="button is-white"
                    @click="commands.heading({ level: 3 })"
                  >
                    H3
                  </a>
                  <a
                    :class="{ 'is-active': isActive.todo_list() }"
                    class="button is-white"
                    @click="commands.todo_list"
                  >
                    <font-awesome-icon icon="tasks" />
                  </a>
                  <a
                    :class="{ 'is-active': isActive.bullet_list() }"
                    class="button is-white"
                    @click="commands.bullet_list"
                  >
                    <font-awesome-icon icon="list-ul" />
                  </a>
                  <a
                    :class="{ 'is-active': isActive.ordered_list() }"
                    class="button is-white"
                    @click="commands.ordered_list"
                  >
                    <font-awesome-icon icon="list-ol" />
                  </a>
                  <a
                    :class="{ 'is-active': isActive.blockquote() }"
                    class="button is-white"
                    @click="commands.blockquote"
                  >
                    <font-awesome-icon icon="quote-right" />
                  </a>
                  <a class="button is-white" @click="commands.horizontal_rule">
                    <font-awesome-icon icon="minus" />
                  </a>
                  <a class="button is-white">
                    <input
                      ref="file"
                      class="file-input"
                      type="file"
                      @change="selectFile(commands.image)"
                    />
                    <font-awesome-icon icon="camera" />
                  </a>
                </div>
              </editor-menu-bar>
              <div class="editor content">
                <editor-content
                  :editor="editor"
                  class="editor__content focusEditor"
                />
              </div>
            </div>
          </div>
          <div class="endContainer is-hidden-desktop">
            <a class="button action end" @click="endCoworkingSession()"><b>End Coworking Session</b></a>
          </div>
        </div>
        <div class="column">
          <div class="card liveTimer">
            <b><span class="countUp">{{ countUp }}</span></b>
          </div>
          <div class="endContainer is-hidden-touch">
            <a class="button action end" @click="endCoworkingSession()"><b>End Coworking Session</b></a>
          </div>
        </div>
      </div>
    </div>
    <div v-else :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="container is-size-1">
      <div class="startNew">
        <b><span>Start a new live post!</span></b>
        <p>
          <a class="button action" @click="cardModal()"><b>Start</b></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
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
} from "tiptap-extensions";
import Header from "~/components/Header/Header";
import CreatePost from "~/components/Modals/Creation/CreatePost";
import CreatePostMobile from "~/components/Modals/Creation/CreatePostMobile";

export default {
  name: "Focus",
  components: {
    CreatePost,
    Header,
    Editor,
    EditorContent,
    EditorMenuBar,
  },

  data() {
    return {
      editor: null,
      post: {},
      countUp: "",
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    }
  },
  async mounted() {
    this.post = await this.$axios.$get(
      `/api/v1/posts/active/${this.$route.params.username}`
    );
    if (this.post.isActive === true) {
      this.countUpTimer();
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
        content: this.post.content,
        onUpdate: ({ getHTML }) => {
          this.html = getHTML();
        },
      });
    }
  },
  beforeDestroy() {
    if (this.editor !== null) {
      this.editor.destroy();
    }
  },
  sockets: {
    confirmManualDisconnect() {
      this.$router.push('/beta');
    },
  },
  methods: {
    endCoworkingSession() {
      this.$socket.emit('manual-disconnect');
    },
    cardModal() {
      this.$modal.open({
        parent: this,
        component: this.isMobile ? CreatePostMobile : CreatePost,
        props: {
          reactionsFormatted: this.reactionsFormatted,
        },
        hasModalCard: true,
      });
    },
    countUpTimer() {
      const start = new Date(this.post.start).getTime();
      const self = this;
      let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = now - start;

        let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (seconds === 30 || seconds.toString() === "00") {
          self.updatePost();
        }
        self.countUp = `${hours}:${minutes}:${seconds}`;
      }, 1000);
    },
    updatePost() {
        this.$axios.$put(`/api/v1/profile/posts/${this.post._id}`, {
          content: this.html,
        });
    },
    async selectFile(command) {
      this.file = this.$refs.file.files[0];

      this.sendFile(command);
    },
    async sendFile(command) {
      this.clearPhoto = true;
      const formData = new FormData();
      formData.append("file", this.file);
      const type = this.post.projectId ? "project" : "space";
      formData.append("type", type);
      try {
        const image = await this.$axios.$post(
          "/api/v1/posts/imageUpload",
          formData
        );
        this.photoUrl = image.file;
        command({ src: image.file });
      } catch (err) {
        console.log(err);
        this.$toast.open({
          duration: 5000,
          message:
            "There was an error with your file. Please confirm it's less than 10MB and a png, jpeg, or gif.",
          position: "is-top",
          type: "is-danger",
        });
      }
    },
  },
};
</script>

<style scoped>
.focusPage {
  width: 100%;
  height: 100vh;
  background-image: url("https://source.unsplash.com/collection/151521");
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
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
}
.livePost {
  margin: 0 auto;
  padding: 1em;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.35);
  color: white;
}
.liveTimer {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 10vw;
  text-align: center;
  color: white;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.35);
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
  background-color: #e9ebee;
}
.button.action {
  color: white;
  font-size: 1.75em;
  margin: 0 auto;
  border-radius: 6px;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
.end {
  width: 100%;
}
.endContainer {
  margin-top: 1em;
}
.startNew {
  color: white;
  display: block;
  text-align: center;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.35);
  margin-top: 2.25em;
  padding: 0.25em;
}
.container.firstVisit {
  padding-top: 12.5rem;
}
@media only screen and (max-width: 600px) {
  .columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
