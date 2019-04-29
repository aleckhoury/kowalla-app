<template>
  <!--<div class="modal" :class="{ 'is-active': createDialog }">-->
  <!--<div class="modal-background" @click="createDialog = !createDialog" />-->
  <div class="modal-content">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="this.$store.state.user.profilePicture" >
          </figure>
        </div>
        <div class="media-content">
          <editor-menu-bar :editor="editor">
            <div slot-scope="{ commands, isActive }" class="field has-addons">
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
              <!--<a-->
              <!--class="button is-white is-white"-->
              <!--:class="{ 'is-active': isActive.code_block() }"-->
              <!--@click="commands.code_block"-->
              <!--&gt;-->
              <!--<font-awesome-icon icon="code" />-->
              <!--</a>-->
              <a class="button is-white" @click="commands.horizontal_rule">
                <font-awesome-icon icon="minus" />
              </a>
              <a class="button is-white">
                <input
                  ref="file"
                  class="file-input"
                  type="file"
                  @change="selectFile(commands.image)"
                >
                <font-awesome-icon icon="camera" />
              </a>
              <a
                v-if="!Boolean(activePost)"
                class="button is-white"
                @click="toggleTimedPost"
              >
                <font-awesome-icon icon="clock" /> &nbsp; Timed Post
              </a>
            </div>
          </editor-menu-bar>
          <div v-if="timedPost" class="block">
            <p>
              <b>Select a timespan for your timed post:</b>
            </p>
            <b-timepicker
              v-model="time"
              :max-time="new Date(2018, 11, 24, 10)"
              inline
            />
          </div>
          <div class="editor content">
            <editor-content :editor="editor" class="editor__content" />
          </div>
          <div class="level is-paddingless">
            <a
              :class="{ 'is-loading': s3Loading }"
              class="level-item button action post"
              @click="createPost()"
            ><b>Post</b></a
            >
            <div class="level-right">
              <span v-if="postAsList.length" class="level-item has-text-grey"
              >as</span
              >
              <b-dropdown
                v-if="postAsList.length"
                class="level-item dropdown-container"
                position="is-bottom-left"
                aria-role="list"
              >
                <div slot="trigger" class="dropdown-selector">
                  <b class="font theme-color selector-child"
                  >@{{ postingAs.name }}</b
                  >
                  <font-awesome-icon
                    icon="angle-down"
                    class="theme-color selector-child"
                  />
                </div>
                <b-dropdown-item
                  v-for="item in postAsList"
                  :key="item._id"
                  aria-role="listitem"
                  @click="postingAs = item"
                >
                  @{{ item.name }}
                </b-dropdown-item>
              </b-dropdown>
              <span v-if="postInList.length" class="level-item has-text-grey"
              >in</span
              >
              <b-dropdown
                v-if="postInList.length"
                class="level-item dropdown-container"
                position="is-bottom-left"
                aria-role="list"
              >
                <div slot="trigger" class="dropdown-selector">
                  <b class="font theme-color selector-child"
                  >#{{ postingIn.name }}</b
                  >
                  <font-awesome-icon
                    icon="angle-down"
                    class="theme-color selector-child"
                  />
                </div>
                <b-dropdown-item
                  v-for="item in postInList"
                  :key="item._id"
                  aria-role="listitem"
                  @click="postingIn = item"
                >
                  #{{ item.name }}
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
import { mapGetters } from "vuex";

export default {
  name: "CreatePostModal",
  components: {
    Editor,
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      postingAs: { name: this.$store.state.user.username },
      postingIn: { name: "Select" },
      createDialog: false,
      editor: null,
      file: "",
      s3Loading: false,
      clearPhoto: false,
      photoUrl: "",
      timedPost: false,
      time: new Date(2018, 11, 24, 0, 0),
      isActive: null,
      userCompleted: null,
      unselectableTimes: [],
    };
  },
  computed: {
    ...mapGetters("user", ["activePost"]),
    minutes() {
      return this.time ? this.time.getMinutes() : 0;
    },
    hours() {
      return this.time ? this.time.getHours() : 0;
    },
    expiration() {
      const time = new Date();
      const expireTime = time.setHours(
        time.getHours() + this.hours,
        time.getMinutes() + this.minutes
      );
      return this.timedPost ? new Date(expireTime) : null;
    },
    postAsList() {
      let list = [
        {
          name: this.$store.state.user.username,
          id: this.$store.state.user._id,
        },
      ];
      this.$store.state.user.owned.forEach(function(owned) {
        if (owned.isProject) {
          list.push({ name: owned.name, id: owned.projectId });
        }
      });
      if (list.length) {
        return list;
      }
    },
    postInList() {
      let list = [];
      this.$store.state.user.subscriptions.forEach(function(sub) {
        if (!sub.isProject) {
          list.push({ name: sub.name, id: sub.communityId });
        }
      });
      if (list.length) {
        return list;
      }
    },
  },
  mounted() {
    this.editor = new Editor({
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
      content: "<p></p><p></p><p></p><p></p>",
      onUpdate: ({ getHTML }) => {
        this.html = getHTML();
      },
    });
  },
  async beforeDestroy() {
    if (this.clearPhoto === true) {
      const fileName = await this.photoUrl.split("post-pics/")[1];
      const type = this.postingAs.id ? "project" : "community";
      await this.$axios.$post("/api/v1/imageDelete", {
        bucket: `kowalla-dev/${type}/post-pics`,
        fileName,
      });
    }
    await this.editor.destroy();
  },
  methods: {
    toggleTimedPost() {
      this.timedPost = !this.timedPost;
      this.isActive = true;
      if (!this.timedPost) {
        this.time = null;
        this.isActive = false;
      }
    },
    async createPost() {
      this.s3Loading = true;
      let StrippedString = this.html.replace(/(<([^>]+)>)/gi, "");
      if (StrippedString.length === 0) {
        this.$toast.open({
          duration: 5000,
          message: "You must input some text to make a post",
          position: "is-top",
          type: "is-danger",
        });
        this.s3Loading = false;
        return null;
      }

      // force the user to post it to a community
      if (this.postingIn.id === undefined) {
        this.$toast.open({
          duration: 5000,
          message: "You must select a community to post in",
          position: "is-top",
          type: "is-danger",
        });
        this.s3Loading = false;
        return null;
      }

      let postObj = await this.$axios.$post(
        `/api/v1/communities/${this.postingIn.id}/posts`,
        {
          profileId: this.$store.state.user._id,
          projectId: this.postingAs.id || undefined,
          communityId: this.postingIn.id,
          content: this.html,
          duration: this.time,
          expiration: this.expiration,
          isActive: this.isActive,
          userCompleted: this.userCompleted,
        }
      );

      this.$emit("post-created", postObj);

      this.clearPhoto = false;
      this.s3Loading = false;
      this.$parent.close();
      if (this.timedPost) {
        this.$router.push({ path: `/dev/focus` });
        if (this.$router.history.current.fullPath === "/dev/focus") {
          this.$router.go();
        }
      }
    },
    async selectFile(command) {
      this.file = this.$refs.file.files[0];

      this.sendFile(command);
    },
    async sendFile(command) {
      this.clearPhoto = true;
      const formData = new FormData();
      formData.append("file", this.file);
      const type = this.postingAs.id ? "project" : "community";
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
.section {
  padding-bottom: 0;
}
span {
  color: #39c9a0;
}
.box {
  width: 800px;
  max-width: 100%;
  max-height: 85vh;
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
  margin: 1em 0;
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
  max-height: 50vh;
  overflow-y: scroll;
  word-break: break-word;
}
.dropdown-container {
  height: 30px;
  border: 2px solid #39c9a0;
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
</style>
