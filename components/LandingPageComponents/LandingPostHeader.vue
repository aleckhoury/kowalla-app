<template>
    <div class="card-header">
        <figure class="media-left">
                <p class="image is-64x64 profilePic">
                    <img :src="profile.profilePicture">
                </p>
        </figure>
        <div class="card-content is-paddingless">
                    <strong>{{ profile.firstName }} {{ profile.lastName }}</strong>

                    <small class="grey">
                    <b>@{{ profile.username }}</b>
                    </small>
            <p class="grey">
                <strong>Co-Founder, Kowalla</strong>
            </p>
        </div>
    </div>
</template>

<script>
  import { format, render, cancel, register } from 'timeago.js';
  export default {
    name: "LandingPostHeader",
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
      } catch {
        console.log('error grabbing some values');
      }
    },
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
