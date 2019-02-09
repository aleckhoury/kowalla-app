<template>
        <!--<Header></Header>-->
        <div class="columns is-mobile">
            <div class="column is-one-quarter is-paddingless">
                <nav-card />
            </div>
            <div class="column is-paddingless">
                <create-post />
                <Post v-for="post in postList" :key="post._id" :post="post"></Post>
            </div>
            <div class="column is-one-quarter is-paddingless">
                <nav-card />
            </div>
        </div>
</template>

<script>
import Post from '~/components/PostCard/post.vue';
import NavCard from '../components/NavCard';
import Header from '../components/Header/Header';
import CreatePost from "../components/createPost";

  export default {
    name: "testPost",
    components: { CreatePost, NavCard, Post, Header },
    data() {
      return {
        postList: [],
      }
    },
    async created() {
      this.postList = await this.$axios.$get('/api/v1/posts');
    }
  };
</script>

<style scoped>

</style>