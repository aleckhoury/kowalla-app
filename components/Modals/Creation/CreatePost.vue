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
          <no-ssr>
            <editor-menu-bar :editor="editor">
              <div slot-scope="{ commands, isActive }" class="field has-addons">
                <a :class="{ 'is-active': isActive.bold() }" class="button is-white" @click="commands.bold">
                  <font-awesome-icon icon="bold" />
                </a>

                <a :class="{ 'is-active': isActive.italic() }" class="button is-white" @click="commands.italic">
                  <font-awesome-icon icon="italic" />
                </a>

                <a :class="{ 'is-active': isActive.strike() }" class="button is-white" @click="commands.strike">
                  <font-awesome-icon icon="strikethrough" />
                </a>

                <a :class="{ 'is-active': isActive.underline() }" class="button is-white" @click="commands.underline">
                  <font-awesome-icon icon="underline" />
                </a>

                <a :class="{ 'is-active': isActive.code() }" class="button is-white" @click="commands.code">
                  <font-awesome-icon icon="code" />
                </a>

                <!--<a-->
                <!--class="button is-white"-->
                <!--:class="{ 'is-active': isActive.paragraph() }"-->
                <!--@click="commands.paragraph"-->
                <!--&gt;-->
                <!--<font-awesome-icon icon="paragraph" />-->
                <!--</a>-->

                <a :class="{ 'is-active': isActive.heading({ level: 1 }) }" class="button is-white" @click="commands.heading({ level: 1 })">
                  H1
                </a>

                <a :class="{ 'is-active': isActive.heading({ level: 2 }) }" class="button is-white" @click="commands.heading({ level: 2 })">
                  H2
                </a>
                <a :class="{ 'is-active': isActive.heading({ level: 3 }) }" class="button is-white" @click="commands.heading({ level: 3 })">
                  H3
                </a>
                <a :class="{ 'is-active': isActive.todo_list() }" class="button is-white" @click="commands.todo_list">
                  <font-awesome-icon icon="tasks" />
                </a>
                <a :class="{ 'is-active': isActive.bullet_list() }" class="button is-white" @click="commands.bullet_list">
                  <font-awesome-icon icon="list-ul" />
                </a>
                <a :class="{ 'is-active': isActive.ordered_list() }" class="button is-white" @click="commands.ordered_list">
                  <font-awesome-icon icon="list-ol" />
                </a>
                <a :class="{ 'is-active': isActive.blockquote() }" class="button is-white" @click="commands.blockquote">
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
                  <input ref="file" class="file-input" type="file" @change="selectFile(commands.image)" />
                  <font-awesome-icon icon="camera" />
                </a>
                <BButton v-if="!activePost" :class="{ isLive: livePost }" class="button" @click="toggleLivePost">
                  <span v-if="!livePost" class="dot" />
                  <font-awesome-icon v-else icon="check" class="is-white checkmark" />Live Post
                </BButton>
                <EmbedButton v-if="embedIsActive" :command="commands.iframe" @enterUrl="insertVideo" />
              </div>
            </editor-menu-bar>
            <div class="editor content">
              <editor-content :editor="editor" class="editor__content" />
            </div>
          </no-ssr>
          <div class="level is-paddingless">
            <a :class="{ 'is-loading': s3Loading }" class="level-item button action post" @click="createPost()">
              <b v-if="livePost">Start Coworking</b>
              <b v-else>Post</b>
            </a>
            <div class="level-right">
              <b v-if="postAsList.length" class="level-item has-text-grey">as</b>
              <b-dropdown v-if="postAsList.length" class="level-item dropdown-container" position="is-bottom-left" aria-role="list" required>
                <div slot="trigger" class="dropdown-selector">
                  <b class="font theme-color">@{{ postingAs.name }}</b>
                  <font-awesome-icon icon="angle-down" class="theme-color selector-child" />
                </div>
                <b-dropdown-item v-for="item in postAsList" :key="item._id" aria-role="listitem" @click="postingAs = item"> @{{ item.name }} </b-dropdown-item>
              </b-dropdown>
              <b v-if="postInList.length" class="level-item has-text-grey">in</b>
              <div>
                <b-dropdown v-if="postInList.length" class="level-item dropdown-container" position="is-bottom-left" aria-role="list">
                  <div slot="trigger" class="dropdown-selector">
                    <b class="font theme-color">{{ postingIn.name === 'Select' ? postingIn.name : `#${postingIn.name}` }}</b>
                    <font-awesome-icon icon="angle-down" class="theme-color selector-child" />
                  </div>
                  <b-dropdown-item v-for="item in postInList" :key="item._id" aria-role="listitem" @click="postingIn = item">
                    {{ item.name === 'Select' ? item.name : `#${item.name}` }}
                  </b-dropdown-item>
                </b-dropdown>
                <span v-if="postingAs.type === 'project'" class="optional"><i>Optional</i></span>
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
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
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
  History
} from 'tiptap-extensions';
import { mapGetters } from 'vuex';
import Iframe from './Iframe';
import EmbedButton from './EmbedButton';

export default {
  name: 'CreatePost',
  components: {
    EmbedButton,
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      postingAs: { name: this.$store.state.user.username, type: 'user' },
      postingIn: { name: 'Select' },
      editor: null,
      file: '',
      s3Loading: false,
      clearPhoto: false,
      photoUrl: '',
      livePost: false
    };
  },
  computed: {
    ...mapGetters('coworkers', ['activePost']),
    postAsList() {
      let list;
      if (!this.livePost) {
        list = [
          {
            name: this.$store.state.user.username,
            id: this.$store.state.user._id,
            type: 'user'
          }
        ];
      } else {
        list = [];
      }
      this.$store.state.user.owned.forEach(function(owned) {
        if (owned.isProject) {
          list.push({ name: owned.name, id: owned.projectId, type: 'project' });
        }
      });
      return list;
    },
    postInList() {
      let list = [
        {
          name: 'Select'
        }
      ];
      this.$store.state.user.subscriptions.forEach(function(sub) {
        if (!sub.isProject) {
          list.push({ name: sub.name, id: sub.spaceId });
        }
      });
      this.$store.state.user.owned.forEach(function(own) {
        if (!own.isProject) {
          list.push({ name: own.name, id: own.spaceId });
        }
      });
      if (list.length) {
        return list;
      }
      return [];
    },
    embedIsActive() {
      return this.$store.state.user.integrations.indexOf('Embed Video') !== -1;
    }
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
        // Custom Extensions
        new Iframe()
      ],
      content: '<p></p>',
      onUpdate: ({ getHTML }) => {
        this.html = getHTML();
      }
    });
  },
  async beforeDestroy() {
    if (this.clearPhoto === true) {
      const fileName = await this.photoUrl.split('post-pics/')[1];
      const type = this.postingAs.id ? 'project' : 'space';
      await this.$axios.$post('/api/v1/imageDelete', {
        bucket: `kowalla-dev/${type}/post-pics`,
        fileName
      });
    }
    await this.editor.destroy();
  },
  methods: {
    insertVideo(data) {
      if (data.command !== null) {
        data.command(data.data);
      }
    },
    toggleLivePost() {
      if (this.postAsList.some(x => x.type === 'project')) {
        this.livePost = !this.livePost;
        this.postingAs = this.postAsList[0];
      } else {
        this.$toast.open({
          duration: 6000,
          message: 'Working on something? You must create a project in order to make a live post!',
          position: 'is-top',
          type: 'is-danger'
        });
      }
    },
    async createPost() {
      this.s3Loading = true;

      if (this.html) {
        let StrippedString = this.html.replace(/(<([^>]+)>)/gi, '');
        if (StrippedString.length === 0) {
          this.$toast.open({
            duration: 5000,
            message: "You can't make a blank post!",
            position: 'is-top',
            type: 'is-danger'
          });
          this.s3Loading = false;
          return null;
        }
      } else if (this.html === undefined) {
        this.$toast.open({
          duration: 5000,
          message: "You can't make a blank post!",
          position: 'is-top',
          type: 'is-danger'
        });
        this.s3Loading = false;
        return null;
      }
      // force the user to post it to a space
      if (this.postingAs.type === 'user' && this.postingIn.id === undefined) {
        this.$toast.open({
          duration: 5000,
          message: 'You must select a space to post in',
          position: 'is-top',
          type: 'is-danger'
        });
        this.s3Loading = false;
        return null;
      }

      let postObj = await this.$axios.$post('/api/v1/posts', {
        profileId: this.$store.state.user._id,
        projectId: this.postingAs.id !== this.$store.state.user._id ? this.postingAs.id : undefined,
        spaceId: this.postingIn.id || undefined,
        content: this.html,
        duration: null,
        start: new Date(),
        end: null,
        isActive: this.livePost,
        username: this.$store.state.user.username
      });
      this.$store.commit('user/incrementPostCount');
      this.$emit('post-created', postObj);

      this.clearPhoto = false;
      this.s3Loading = false;
      this.$parent.close();
      if (this.livePost) {
        this.$socket.emit('join', {
          username: this.$store.state.user.username,
          profilePicture: this.$store.state.user.profilePicture
        });
        this.$router.push({ path: `/beta/focus/${this.$store.state.user.username}` });
        if (this.$router.history.current.fullPath === '/beta/focus') {
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
      formData.append('file', this.file);
      const type = this.postingAs.id ? 'project' : 'space';
      formData.append('type', type);
      try {
        const image = await this.$axios.$post('/api/v1/posts/imageUpload', formData);
        this.photoUrl = image.file;
        command({ src: image.file });
      } catch (err) {
        console.log(err);
        this.$toast.open({
          duration: 5000,
          message: "There was an error with your file. Please confirm it's less than 10MB and a png, jpeg, or gif.",
          position: 'is-top',
          type: 'is-danger'
        });
      }
    }
  }
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
</style>
