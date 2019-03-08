<template>
    <div class="card-header">
        <figure class="media-left">
          <nuxt-link :to="getProfileRoute">
            <p class="image is-64x64 profilePic">

                <img :src="profile.profilePicture">

            </p>
            </nuxt-link>
        </figure>
        <div class="card-content is-paddingless">
          <nuxt-link :to="getProfileRoute" class="no-decor">
            <p>
                <strong>{{ profile.firstName }} {{ profile.lastName }}</strong>

                <small class="grey">
                  <span :to="getProfileRoute" class="grey underline">
                    <b>@{{ profile.username }}</b>
                  </span>

                · {{ createdAtFormatted }}

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
      post: Object,
    },
    data() {
      return {
        profile: {},
        community: {},
      }
    },
    async mounted() {
      try {
        this.profile = await this.$axios.$get(`/api/v1/profiles/${this.post.profileId}`);
        this.community = await this.$axios.$get(`/api/v1/communities/${this.post.communityId}`);
      } catch {
        console.log('error grabbing some values');
      }
    },
    computed: {
      createdAtFormatted() {
        return format(this.post.createdAt, 'en_US');
      },
      getProfileRoute() {
        return `/dev/u/${this.profile.username}`;
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

</style>
