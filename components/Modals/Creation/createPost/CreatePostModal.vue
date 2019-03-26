<template>
    <!--<div class="modal" :class="{ 'is-active': createDialog }">-->
        <!--<div class="modal-background" @click="createDialog = !createDialog" />-->
        <div class="modal-content">
            <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img :src="this.$store.state.user.profilePicture">
                        </figure>
                    </div>
                    <div class="media-content">
                        <editor-menu-bar :editor="editor">
                            <div class="field has-addons" slot-scope="{ commands, isActive }">
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
                                <!--<a-->
                                <!--class="button is-white is-white"-->
                                <!--:class="{ 'is-active': isActive.code_block() }"-->
                                <!--@click="commands.code_block"-->
                                <!--&gt;-->
                                <!--<font-awesome-icon icon="code" />-->
                                <!--</a>-->
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
                                <a class="button is-white" v-if="!activePost.isActive" @click="toggleTimedPost">
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
                                    inline
                                    :max-time="new Date(2018, 11, 24, 10)"></b-timepicker>
                        </div>
                        <div class="editor content">
                            <editor-content class="editor__content" :editor="editor" />
                        </div>
                        <div class="level is-paddingless">
                            <a class="level-item button action post" :class="{ 'is-loading': s3Loading }" @click="createPost()"><b>Post</b></a>
                            <div class="level-right">
                                <span class="level-item has-text-grey">as</span>
                                <div class="level-item dropdown" @click="userDropdown = !userDropdown" :class="{ 'is-active': userDropdown }">
                                    <dropdown></dropdown>
                                </div>
                                <span class="level-item has-text-grey">in</span>
                                <div class="level-item dropdown" @click="commDropdown = !commDropdown" :class="{ 'is-active': commDropdown }">
                                    <dropdown></dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    <!--</div>-->
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
  import { mapGetters } from 'vuex';
  import Dropdown from "../../../dropdownItems";

  export default {
    name: "createPostModal",
    components: {
      Dropdown,
      Editor,
      EditorContent,
      EditorMenuBar,
    },
    data() {
      return {
        userDropdown: false,
        commDropdown: false,
        createDialog: false,
        editor: null,
        file: '',
        s3Loading: false,
        clearPhoto: false,
        photoUrl: '',
        timedPost: false,
        time: new Date(2018, 11, 24, 0, 0),
        isActive: null,
        userCompleted: null,
        unselectableTimes: [],
      };
    },
    async beforeDestroy() {
      if (this.clearPhoto === true) {
        const fileName = await (this.photoUrl.split('post-pics/'))[1];
        await this.$axios.post('/api/v1/posts/imageDelete', {
          bucket: 'kowalla-dev/user/post-pics',
          fileName,
          });
      }
      await this.editor.destroy();
    },
    computed: {
      ...mapGetters('user', ['activePost']),
      minutes() {
        return this.time ? this.time.getMinutes() : 0;
      },
      hours() {
        return this.time ? this.time.getHours() : 0;
      },
      expiration() {
        const time = new Date();
        const expireTime = time.setHours(time.getHours() + this.hours, time.getMinutes() + this.minutes);
        return new Date(expireTime);
      }
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
        let StrippedString = this.html.replace(/(<([^>]+)>)/ig,"");
        if (StrippedString.length === 0) {
          this.$toast.open({
            duration: 5000,
            message: 'You must input some text to make a post',
            position: 'is-top',
            type: 'is-danger'
          });
          this.s3Loading = false;
          return null;
        }
        const community = await this.$axios.get(`/api/v1/communities/5c3292a2f03d751a7ffb80ab`);
        await this.$axios.post(`/api/v1/communities/1234567890/posts`, {
          profileId: this.$store.state.user._id,
          communityId: community._id,
          content: this.html,
          duration: this.time,
          expiration: this.expiration || null,
          isActive: this.isActive,
          userCompleted: this.userCompleted,
        });
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
        content: '<p></p><p></p><p></p><p></p>',
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
        },
      })
    }
  }
</script>

<style scoped>
    .section {
        padding-bottom: 0;
    }
    span {
        color: #39C9A0;
    }
    .box {
        width: 800px;
        max-width: 100%;
    }
    .modal-content {
        border-radius: 6px;
        margin: 0;
        color: #39C9A0;
        width: auto;
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
        background-color: #39C9A0;
        border-color: #39C9A0;
    }
    .post {
        margin-right: 0.75em;
    }
    .is-white:hover {
        background-color: #E9EBEE;
    }
    .dropdown-content {
        overflow: visible;
    }
    div.animation-content {
        margin: 0;
    }
    .block {
        color: #39C9A0;
    }
</style>