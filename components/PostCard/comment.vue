<template>
    <div>
        <article class="media">
            <font-awesome-icon icon="arrow-up" class="media-left upvote" />
            <div class="media-content">
                <div class="content">
                    <p>
                        <small>@{{ profile.username }} · {{ createdAtFormatted }}</small>
                        <br>
                        {{ comment.content }}
                        <br>
                        <small v-if="nestLevel < 2" @click="toggleReply"><a>Reply</a></small>
                    </p>
                    <AddComment v-if="reply" :commentId="comment._id" :updateComment="updateComment" :postId="comment.postId" />
                </div>
                <Comment v-if="nestLevel < 2" v-for="nestComment in replyList" :key="nestComment._id" :comment="nestComment" :nest-level="nextNestLevel" :toggle="toggleNestedReply" />

                <!--<article class="media">-->
                    <!--<font-awesome-icon icon="arrow-up" class="media-left upvote2" />-->
                    <!--<div class="media-content">-->
                        <!--<div class="content">-->
                            <!--<p>-->
                                <!--<small>@{{ profile.username }} · {{ createdAtFormatted }}</small>-->
                                <!--<br>-->
                                <!--{{ comment.content }}-->
                                <!--<br>-->
                                <!--<small><a>Reply</a></small>-->
                            <!--</p>-->
                        <!--</div>-->

                        <!--<article class="media">-->
                            <!--<font-awesome-icon icon="arrow-up" class="media-left upvote2" />-->
                            <!--<div class="media-content">-->
                                <!--<div class="content">-->
                                    <!--<p>-->
                                        <!--<small>@{{ profile.username }} · {{ createdAtFormatted }}</small>-->
                                        <!--<br>-->
                                        <!--{{ comment.content }}-->
                                        <!--<br>-->
                                        <!--<small><a>Reply</a></small>-->
                                    <!--</p>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</article>-->

                    <!--</div>-->
                <!--</article>-->
            </div>
        </article>
    </div>
</template>

<script>
  import AddComment from "./addComment";
const { format, render, cancel, register } = require('timeago.js');

  export default {
    name: "Comment",
    props: {
      comment: Object,
      nestLevel: Number,
      toggle: Function,
      reply: Boolean,
    },
    components: {
      AddComment
    },
    async mounted() {
      try {
        this.profile = await this.$axios.$get(`/api/v1/profiles/${this.comment.profileId}`);
        this.replyList = await this.$axios.$get(`/api/v1/comments/${this.comment.postId}/${this.comment._id}`);
        // this.community = await this.$axios.$get(`/api/v1/communities/${this.post.communityId}`);
      } catch {
        console.log('error grabbing some values');
      }
    },
    data() {
      return {
        profile: {},
        replyList: [],
      }
    },
    methods: {
      updateComment(comment) {
        this.replyList.unshift(comment)
      },
      toggleReply() {
        console.log('not nested' + this.reply);
        this.reply = !this.reply;
        this.toggle(this.reply);
      },
      toggleNestedReply(reply) {
        console.log('nested' + reply);
        this.reply = reply;
      }
    },
    computed: {
      createdAtFormatted() {
        return format(this.comment.createdAt, 'en_US');
      },
      nextNestLevel() {
        return Number(this.nestLevel + 1);
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