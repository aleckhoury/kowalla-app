<template>
    <div class="card-header">
        <figure class="media-left">
            <p class="image is-64x64 profilePic">
                <img :src="profile.profilePicture">
            </p>
        </figure>
        <div class="card-content is-paddingless">
            <p>
                <strong>{{ profile.name }}</strong> <small>@{{ profile.username }} · {{ createdAtFormatted }}</small>
            </p>
            <p>
                Posted in <span><b>#{{ community.name }}</b></span>
            </p>
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
    async created() {
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
    }
  };
</script>

<style scoped>
    .media-left {
        margin-right: 0.5em;
    }
    .card-header {
        padding: 10px;
    }
    .profilePic img {
        border-radius: 0.75em;
    }
    span {
        color: #39C9A0;
    }
</style>