<template>
    <div class="card-header">
        <figure class="media-left">
          <nuxt-link v-if="!isProject" :to="getProfileRoute">
            <p class="image is-64x64 profilePic">

                <img :src="profile.profilePicture">

            </p>
          </nuxt-link>

          <nuxt-link v-if="isProject" :to="getProjectRoute">
            <p class="image is-64x64 profilePic">

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

                · {{ createdAtFormatted }}
                    <span v-if="isActive">
                        ·
                        <span class="liveBox">
                            LIVE
                        </span>
                    </span>
                </small>
            </p>
            </nuxt-link>

              <p class="communityOfPost">
                  Posted in
                  <nuxt-link :to="getCommunityRoute" class="community underline">
                    <b>#{{ community.name }}</b>
                  </nuxt-link>
              </p>

        </div>
        <div class="media-right">
          <b-dropdown position="is-bottom-left" aria-role="list">
            <font-awesome-icon class="media-left" slot="trigger" icon="angle-down" style="font-size: 18px"></font-awesome-icon>

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
      isProject: Boolean
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
/*.communityOfPost {*/
    /*margin-top: 1em;*/
/*}*/
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
</style>
