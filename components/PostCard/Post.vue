<template>
    <div class="card">
        <post-header :post="post"/>
        <div class="content is-marginless" v-html="post.content">
        </div>
        <!--<figure class="media-content">-->
            <!--<p class="image is-4by3">-->
                <!--<img src="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg">-->
            <!--</p>-->
        <!--</figure>-->
        <br />

        <Reactions :post="post"/>

    </div>
</template>

<script>
  import Reactions from "./reactions";
  import PostHeader from "./postHeader";
  export default {
    name: "testPost",
    components: { PostHeader, Reactions },
    props: {
      post: Object,
    },
    data() {
      return {
      }
    },
    methods: {},
    created() {
      console.log('post made');
    },
  };
</script>

<style scoped>
    .content {
        padding: 1em 0.5em;
    }
    b-icon {
        color: black;
    }
    .media-content {
        padding: 0 2em;
    }
    .card {
        border-radius: 6px;
        margin-bottom: 1em;
    }
</style>
