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
      <nuxt-link v-if="isProject" :to="getProjectRoute" class="no-decor">
        <p>
          <strong>{{ project.name }}</strong>

          <small class="grey">
            <span :to="getProjectRoute" class="grey underline">
              <b>@{{ project.name }}</b>
            </span>

            · {{ createdAtFormatted }}
            <span v-if="isActive">
              ·
              <span class="status live">
                LIVE
              </span>
            </span>
            <span v-else-if="duration">
              ·
              <span class="status duration">
                EXPIRED
              </span>
            </span>
          </small>
        </p>
      </nuxt-link>

      <nuxt-link v-if="!isProject" :to="getProfileRoute" class="no-decor">
        <p>
          <strong>{{ profile.firstName }} {{ profile.lastName }}</strong>

          <small class="grey">
            <span :to="getProfileRoute" class="grey underline">
              <b>@{{ profile.username }}</b>
            </span>

            <span v-if="!isMobile" class="grey">· {{ createdAtFormatted }}</span>
          </small>
        </p>
      </nuxt-link>

      <p v-if="space.name">
        Posted in
        <nuxt-link :to="getSpaceRoute" class="space underline">
          <b>#{{ space.name }}</b>
        </nuxt-link>
      </p>

      <p class="created-at-mobile">
        <span v-if="isMobile && !isProject" class="grey">{{ createdAtFormatted }}</span>
      </p>
    </div>
    <div class="media-right">
      <div v-if="isProject && !isMobile && !isModal" class="update level is-size-6">
        <div class="level-left">
          <font-awesome-icon icon="flag" /> &nbsp;
          <h2><b>Update</b></h2>
        </div>
        <b-dropdown class="level-right has-text-white" position="is-bottom-left" aria-role="list">
          <font-awesome-icon slot="trigger" icon="angle-down" />

          <b-dropdown-item key="0" aria-role="listitem" @click="copyPostUrl">
            <font-awesome-icon icon="link" />
            Copy link
          </b-dropdown-item>

          <b-dropdown-item v-if="deleteAllowed" key="1" aria-role="listitem" @click="deletePost">
            <font-awesome-icon icon="trash-alt" />
            Delete
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div v-else-if="isProject && isMobile && !isModal" class="update level is-mobile is-size-6">
        <div class="mobile level-left">
          <font-awesome-icon icon="flag" />
        </div>
        <b-dropdown :mobile-modal="false" class="mobile level-right has-text-white" position="is-bottom-left" aria-role="list">
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
      <b-dropdown v-else :mobile-modal="false" position="is-bottom-left" aria-role="list">
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
      return `/beta/user/${this.profile.username}`;
    },
    getProjectRoute() {
      return `/beta/project/${this.project.name}`;
    },
    getSpaceRoute() {
      return `/beta/space/${this.space.name}`;
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
    copyPostUrl() {
      let stringToCopy = '';

      if (this.isProject) {
        stringToCopy = `https://www.kowalla.co/beta/project/${this.project.name}/posts/${this.postId}`;
      } else {
        stringToCopy = `https://www.kowalla.co/beta/space/${this.space.name}/posts/${this.postId}`;
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
.created-at-mobile {
  font-size: 0.75em;
  padding-top: -0.5em;
}
.space {
  color: #39c9a0;
}

.no-decor {
  text-decoration: none;
  color: black;
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
