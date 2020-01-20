<template>
  <div class="card-header">
    <figure class="media-left">
      <nuxt-link v-if="!isProject" :to="getProfileRoute">
        <p class="image is-48x48 profilePic">
          <img :src="profile.profilePicture" />
        </p>
      </nuxt-link>

      <nuxt-link v-if="isProject" :to="getProjectRoute">
        <p class="image is-48x48 profilePicProject">
          <img :src="project.profilePicture" />
        </p>
      </nuxt-link>
    </figure>
    <div class="card-content is-paddingless">
      <p v-if="isProject">
        <nuxt-link :to="getProjectRoute" class="no-decor">
          <strong class="underline">{{ project.name }}</strong>

          <small>
            <span :to="getProjectRoute" class="grey">
              <b>@{{ project.name }}</b>
            </span>
          </small>
        </nuxt-link>

        <small>
          · <span :class="{ link: !isModal }" @click="showPost()">{{ createdAtFormatted }}</span>
          <span v-if="isActive">
            ·
            <span class="status live" @click="showPost()">
              LIVE
            </span>
          </span>
          <span v-else-if="duration">
            ·
            <span class="status duration" @click="showPost()">
              EXPIRED
            </span>
          </span>
        </small>
      </p>

      <nuxt-link v-if="!isProject" :to="getProfileRoute" class="no-decor">
        <p>
          <strong class="underline">{{ profile.firstName }}{{ profile.lastName ? ` ${profile.lastName}` : '' }}</strong>

          <small>
            <span :to="getProfileRoute" class="grey">
              <b>@{{ profile.username }}</b>
            </span>

            <span class="grey">· {{ createdAtFormatted }}</span>
          </small>
        </p>
      </nuxt-link>

      <p v-if="space.name">
        Posted in
        <nuxt-link :to="getSpaceRoute" class="space underline">
          <b>#{{ space.name }}</b>
        </nuxt-link>
        <span v-if="isProject && profile.username">
          <span class="grey">by</span>
          <nuxt-link :to="getProfileRoute" class="space underline grey">
            <b>@{{ profile.username }}</b>
          </nuxt-link>
        </span>
      </p>
      <p v-else-if="isProject && profile.username">
        <span class="grey">by</span>
        <nuxt-link :to="getProfileRoute" class="space underline grey">
          <b>@{{ profile.username }}</b>
        </nuxt-link>
      </p>

      <!--      <p class="created-at-mobile">-->
      <!--        <span v-if="isMobile && !isProject" class="grey">{{ createdAtFormatted }}</span>-->
      <!--      </p>-->
    </div>
    <div class="media-right">
      <!--      <div v-if="isProject && !isMobile && !isModal" class="update level is-size-6">-->
      <!--        <div class="level-left">-->
      <!--          <font-awesome-icon icon="flag" /> &nbsp;-->
      <!--          <h2><b>Update</b></h2>-->
      <!--        </div>-->
      <!--        <b-dropdown class="level-right has-text-white" position="is-bottom-left" aria-role="list">-->
      <!--          <font-awesome-icon slot="trigger" icon="angle-down" />-->

      <!--          <b-dropdown-item key="0" aria-role="listitem" @click="copyPostUrl">-->
      <!--            <font-awesome-icon icon="link" />-->
      <!--            Copy link-->
      <!--          </b-dropdown-item>-->

      <!--          <b-dropdown-item v-if="deleteAllowed" key="1" aria-role="listitem" @click="deletePost">-->
      <!--            <font-awesome-icon icon="trash-alt" />-->
      <!--            Delete-->
      <!--          </b-dropdown-item>-->
      <!--        </b-dropdown>-->
      <!--      </div>-->
      <!--      <div v-else-if="isProject && isMobile && !isModal" class="update level is-mobile is-size-6">-->
      <!--        <div class="mobile level-left">-->
      <!--          <font-awesome-icon icon="flag" />-->
      <!--        </div>-->
      <!--        <b-dropdown :mobile-modal="false" class="mobile level-right has-text-white" position="is-bottom-left" aria-role="list">-->
      <!--          <font-awesome-icon slot="trigger" icon="angle-down" />-->

      <!--          <b-dropdown-item key="0" aria-role="listitem" @click="copyPostUrl">-->
      <!--            <font-awesome-icon icon="link" />-->
      <!--            Copy link-->
      <!--          </b-dropdown-item>-->

      <!--          <b-dropdown-item v-if="profile._id === this.$store.state.user._id" key="1" aria-role="listitem" @click="deletePost">-->
      <!--            <font-awesome-icon icon="trash-alt" />-->
      <!--            Delete-->
      <!--          </b-dropdown-item>-->
      <!--        </b-dropdown>-->
      <!--      </div>-->
      <b-dropdown :mobile-modal="false" position="is-bottom-left" aria-role="list">
        <font-awesome-icon slot="trigger" icon="angle-down" />

        <b-dropdown-item key="0" aria-role="listitem" @click="copyPostUrl">
          <font-awesome-icon icon="link" />
          Copy link
        </b-dropdown-item>

        <b-dropdown-item v-if="profile._id === this.$store.state.user._id" key="1" aria-role="listitem" @click="deletePost">
          <font-awesome-icon icon="trash-alt" />
          Delete
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
const { format } = require('timeago.js');
export default {
  name: 'PostHeader',
  props: {
    isActive: { type: Boolean, default: false },
    isModal: { type: Boolean, default: false },
    duration: { type: String, default: '' },
    createdAt: { type: String, default: '' },
    postId: { type: String, default: '' },
    profile: { type: Object, default: () => {} },
    project: { type: Object, default: () => {} },
    space: { type: Object, default: () => {} },
    isProject: { type: Boolean, default: false },
    isMobile: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  computed: {
    createdAtFormatted() {
      return format(this.createdAt, 'en_US');
    },
    getProfileRoute() {
      return `/user/${this.profile.username}`;
    },
    getProjectRoute() {
      return `/project/${this.project.name}`;
    },
    getSpaceRoute() {
      return `/space/${this.space.name}`;
    },
    deleteAllowed() {
      if (this.$store.state.user.loggedIn) {
        if (this.isProject && this.project.admins) {
          return this.project.admins.indexOf(this.$store.state.user._id) > -1;
        }
        return this.profile._id === this.$store.state.user._id;
      }
      return false;
    },
  },
  methods: {
    showPost() {
      window.history.pushState({}, '');
      this.$emit('open-post');
    },
    copyPostUrl() {
      let stringToCopy = '';

      if (this.isProject) {
        stringToCopy = `https://www.kowalla.co/project/${this.project.name}/posts/${this.postId}`;
      } else {
        stringToCopy = `https://www.kowalla.co/space/${this.space.name}/posts/${this.postId}`;
      }

      let x = document.createElement('input');

      document.body.appendChild(x);
      x.value = stringToCopy;
      x.select();

      try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        this.$toast.open({
          duration: 4000,
          message: 'Link copied! :)',
          position: 'is-top',
          type: 'is-success',
        });
      } catch (err) {
        this.$toast.open({
          duration: 4000,
          message: 'Link copy failed, try opening the post and copying the URL directly',
          position: 'is-top',
          type: 'is-danger',
        });
      }
      document.body.removeChild(x);
    },

    deletePost() {
      this.$emit('delete-post', this.postId);
    },
  },
};
</script>

<style scoped>
.media-left {
  margin-right: 0.5em;
}
.media-right {
  margin-left: auto;
}
.card-header {
  padding: 10px;
  box-shadow: none;
}
.profilePic img {
  border-radius: 6px;
}
.profilePicProject img {
  border-radius: 6px;
  height: 48px;
  width: 48px;
}

.grey {
  color: #999;
}

.space {
  color: #39c9a0;
}

.no-decor {
  text-decoration: none;
  color: black;
}

.link:hover {
  cursor: pointer;
  text-decoration: underline;
}

.underline:hover {
  color: #39c9a0;
  text-decoration: underline;
}
.status {
  border-radius: 3px;
  padding: 0 0.25em 0.125em 0.25em;
  width: fit-content;
  color: white;
  cursor: pointer;
}
.status.live {
  background: red;
}
.status.duration {
  background: #bfbfbf;
}
.update {
  background-color: #39c9a0;
  color: white;
  width: 12em;
  height: 100%;
  margin-top: -10px;
  margin-right: -10px;
  border-top-right-radius: 6px;
}
.update::before {
  position: absolute;
  /*left: -50px;*/
  /*margin-top: 1px;*/
  top: 0;
  content: '';
  border-bottom: 1.75em solid transparent;
  border-left: 1.75em solid white;
  border-top: 1.75em solid white;
  border-right: 1.75em solid transparent;
}
.update.is-mobile {
  background-color: #39c9a0;
  color: white;
  width: 6.5em;
  height: 3.5em;
}
div.level-left {
  padding-left: 3.5em;
}
div.level-right {
  margin-right: 10px;
  /*margin-top: -0.25em;*/
}
</style>
