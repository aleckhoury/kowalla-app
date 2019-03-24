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
            <font-awesome-icon icon="angle-down"></font-awesome-icon>
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
      profile: {},
      project: {},
      community: {},
      isProject: Boolean
    },
    data() {
      return {
        /*profile: {},
        project: {},
        community: {},*/
        //isProject: Boolean,
      }
    },
    async mounted() {

      // posts can be posted by projects or profiles, grab the right info
      // based on the id given by the post object in props
      /*
      if (this.post.hasOwnProperty('projectId')) {
        this.isProject = true;
        try {
          this.project = await this.$axios.$get(`/api/v1/projects/${this.post.projectId}`);
          this.community = await this.$axios.$get(`/api/v1/communities/${this.post.communityId}`);
        } catch {
          console.log('error grabbing some values');
        }
      }

      if (this.post.hasOwnProperty('profileId')) {
        this.isProject = false;
        try {
          this.profile = await this.$axios.$get(`/api/v1/profiles/${this.post.profileId}`);
          this.community = await this.$axios.$get(`/api/v1/communities/${this.post.communityId}`);
        } catch {
          console.log('error grabbing some values');
        }
      }*/

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
