<template>
    <div>
        <article class="media">
            <font-awesome-icon icon="arrow-up" class="media-left upvote" />
            <svg height="10em" width="10">
                <line x1="0" y1="0" x2="0" y2="200" style="stroke:rgb(255,0,0);stroke-width:2; position: absolute; top: 315px;" />
                Sorry, your browser does not support inline SVG.
            </svg>
            <div class="media-content">
                <div class="content">
                    <p>
                        <small>@aleckhoury · 2h ago</small>
                        <br>
                        Test comment here!
                        <br>
                        <small><a>Reply</a></small>
                    </p>
                </div>

                <article class="media">
                    <font-awesome-icon icon="arrow-up" class="media-left upvote2" />
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <small>@aleckhoury · 2h ago</small>
                                <br>
                                Test comment here!
                                <br>
                                <small><a>Reply</a></small>
                            </p>
                        </div>

                    <article class="media">
                        <font-awesome-icon icon="arrow-up" class="media-left upvote2" />
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <small>@aleckhoury · 2h ago</small>
                                    <br>
                                    Test comment here!
                                    <br>
                                    <small><a>Reply</a></small>
                                </p>
                            </div>
                        </div>
                    </article>
                    </div>
                </article>
            </div>
        </article>
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="field">
                    <p class="control">
                        <textarea class="textarea" placeholder="Add a comment..."></textarea>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button">Post comment</button>
                    </p>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
  export default {
    name: "Comments",
    props: {
      postId: String,
    },
    async mounted() {
      try {
        this.profile = await this.$axios.$get(`/api/v1/profiles/${this.post.profileId}`);
        this.community = await this.$axios.$get(`/api/v1/communities/${this.post.communityId}`);
      } catch {
        console.log('error grabbing some values');
      }
    },
    data() {
      return {
      }
    },

  };
</script>

<style scoped>
.upvote {
    margin: 0.35em 0.5em 0 0.5em;
}
.upvote2 {
    margin: 0.35em 0.5em 0 0;
}
p small {
    color: #999;
}
small a {
    color: #39C9A0;
    font-weight: bold;
}
</style>