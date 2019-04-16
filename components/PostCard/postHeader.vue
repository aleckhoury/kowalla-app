<template>
    <div class="card-header">
        <figure class="media-left">
          <nuxt-link v-if="!isProject" :to="getProfileRoute">
            <p class="image is-64x64 profilePic">

                <img :src="profile.profilePicture">

            </p>
          </nuxt-link>

          <nuxt-link v-if="isProject" :to="getProjectRoute">
            <p class="image is-48x48 profilePic">

                <img :src="project.profilePicture">

            </p>
          </nuxt-link>
        </figure>
        <div class="card-content is-paddingless">
          <nuxt-link v-if="isProject" :to="getProjectRoute" class="no-decor">
            <p>
                <strong>{{project.name}}</strong>

                <small class="grey">
                  <span :to="getProjectRoute" class="grey underline">
                    <b>@{{ project.name }}</b>
                  </span>

                · {{ createdAtFormatted }}

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

                <span class="grey" v-if="!isMobile">· {{ createdAtFormatted }}</span>

                  <span v-if="isActive">  ·
                    <span class="liveBox">
                        LIVE
                    </span>
                  </span>
                </small>
            </p>
            </nuxt-link>

            <p>
                Posted in
                <nuxt-link :to="getCommunityRoute" class="community underline">
                  <b>#{{ community.name }}</b>
                </nuxt-link>
            </p>

            <p class="created-at-mobile">
              <span class="grey" v-if="isMobile">{{ createdAtFormatted }}</span>
            </p>


        </div>
        <div class="media-right">
            <div v-if="isProject && !isMobile" class="update level is-size-6">
                <div class="level-left"><font-awesome-icon icon="flag" /> &nbsp; <h2><b>Update</b></h2></div>
                <b-dropdown class="level-right has-text-white" position="is-bottom-left" aria-role="list">
                    <font-awesome-icon slot="trigger" icon="angle-down"></font-awesome-icon>

                    <b-dropdown-item aria-role="listitem" key="0" @click="copyPostURL">
                        <font-awesome-icon icon="link" />
                        Copy link
                    </b-dropdown-item>

                    <b-dropdown-item
                            aria-role="listitem"
                            key="1"
                            v-if="this.profile._id === this.$store.state.user._id"
                            @click="deletePost"
                    >
                        <font-awesome-icon icon="trash-alt" />
                        Delete
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <div v-else-if="isProject && isMobile" class="update level is-mobile is-size-6">
                <div class="mobile level-left"><font-awesome-icon icon="flag" /></div>
                <b-dropdown class="mobile level-right has-text-white" position="is-bottom-left" aria-role="list" :mobile-modal="false">
                    <font-awesome-icon slot="trigger" icon="angle-down"></font-awesome-icon>

                    <b-dropdown-item aria-role="listitem" key="0" @click="copyPostURL">
                        <font-awesome-icon icon="link" />
                        Copy link
                    </b-dropdown-item>

                    <b-dropdown-item
                            aria-role="listitem"
                            key="1"
                            v-if="this.profile._id === this.$store.state.user._id"
                            @click="deletePost"
                    >
                        <font-awesome-icon icon="trash-alt" />
                        Delete
                    </b-dropdown-item>
                </b-dropdown>
            </div>
          <b-dropdown v-else position="is-bottom-left" aria-role="list" :mobile-modal="false">
            <font-awesome-icon slot="trigger" icon="angle-down"></font-awesome-icon>

            <b-dropdown-item aria-role="listitem" key="0" @click="copyPostURL">
              <font-awesome-icon icon="link" />
              Copy link
            </b-dropdown-item>

            <b-dropdown-item
              aria-role="listitem"
              key="1"
              v-if="this.profile._id === this.$store.state.user._id"
              @click="deletePost"
            >
              <font-awesome-icon icon="trash-alt" />
              Delete
            </b-dropdown-item>
          </b-dropdown>
        </div>
    </div>
</template>

<script>
  const { format, render, cancel, register } = require('timeago.js');
  export default {
    name: "postHeader",
    props: {
      isActive: Boolean,
      createdAt: String,
      postId: String,
      profile: {},
      project: {},
      community: {},
      isProject: Boolean,
      isMobile: Boolean,
    },
    data() {
      return {
      }
    },
    methods: {
      copyPostURL() {
        let stringToCopy = "";

        if (this.isProject) {
          stringToCopy = `www.kowalla.co/dev/p/${this.project.name}/posts/${this.postId}`;
        } else {
          stringToCopy = `www.kowalla.co/dev/c/${this.community.name}/posts/${this.postId}`;
        }

        let x = document.createElement('input');

        document.body.appendChild(x);
        x.value = stringToCopy;
        x.select();

        try {
          let successful = document.execCommand('copy');
          let msg = successful ? 'successful' : 'unsuccessful';
          this.$toast.open('Link copied! :)')
        }

        catch (err) {
          this.$toast.open('Link copy failed, try opening the post and copying the URL directly')
        }
        document.body.removeChild(x);
      },

      deletePost() {
        this.$emit('delete-post', this.postId)
      }
    },
    computed: {
      createdAtFormatted() {
        return format(this.createdAt, 'en_US');
      },
      getProfileRoute() {
        return `/dev/u/${this.profile.username}`;
      },
      getProjectRoute() {
        return `/dev/p/${this.project.name}`;
      },
      getCommunityRoute() {
        return `/dev/c/${this.community.name}`
      }
    }
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
  border-radius: 0.75em;
}
span {
  color: #39C9A0;
}

.grey {
  color: #999;
}
.created-at-mobile {
    font-size: .75em;
    padding-top: -.5em;
}
.community {
  color: #39C9A0;
}

.no-decor {
  text-decoration: none;
  color: black;
}

.underline:hover {
  color: #39C9A0;
  text-decoration: underline;
}
.liveBox {
    border-radius: 3px;
    padding: 0.125em 0.25em;
    width: fit-content;
    background: red;
    color: white;
}
.update {
    background-color: #39C9A0;
    color: white;
    width: 10em;
    height: 100%;
    margin-top: -10px;
    margin-right: -2em;
    -webkit-transform: skewX(-25deg);
    -moz-transform: skewX(-25deg);
    -ms-transform: skewX(-25deg);
    -o-transform: skewX(-25deg);
    transform: skewX(-25deg);
}
.update.is-mobile {
    background-color: #39C9A0;
    color: white;
    width: 5.5em;
    height: 85%;
    margin-top: -10px;
    margin-right: -2em;
    -webkit-transform: skewX(-25deg);
    -moz-transform: skewX(-25deg);
    -ms-transform: skewX(-25deg);
    -o-transform: skewX(-25deg);
    transform: skewX(-25deg);
}
    div.level-left {
        padding-left: 1em;
        -webkit-transform: skewX(25deg);
        -moz-transform: skewX(25deg);
        -ms-transform: skewX(25deg);
        -o-transform: skewX(25deg);
        transform: skewX(25deg);
    }
    div.level-right {
        margin-right: 2em;
        margin-top: -.25em;
        -webkit-transform: skewX(25deg);
        -moz-transform: skewX(25deg);
        -ms-transform: skewX(25deg);
        -o-transform: skewX(25deg);
        transform: skewX(25deg);
    }
</style>
