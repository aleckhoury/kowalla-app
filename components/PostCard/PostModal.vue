<template>
    <div class="modal-content">
        <div class="box is-paddingless">
            <post :post="post" :hideComments="true" />
            <Comments :postId="post._id" />
        </div>
    </div>
</template>

<script>
import Post from './Post.vue';
import Comments from './Comments.vue';

  export default {
    name: "PostModal",
    components: { Post, Comments },
    props: {
      post: Object,
    },
  };
</script>

<style scoped>
    div.card {
        border-radius: 6px 6px 0 0;
    }
    .box {
        width: 800px;
        max-width: 100%;
    }
    .modal-content {
        border-radius: 6px;
        margin: 0;
        color: #39C9A0;
        width: auto;
    }
</style>