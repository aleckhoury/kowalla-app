<template>
    <div>
        <Header></Header>
        <div class="columns">
            <div class="column is-one-quarter is-paddingless">
                <nav-card />
            </div>
            <div class="column is-paddingless">
                <create-post />
                <Post></Post>
            </div>
            <div class="column is-one-quarter is-paddingless">
                <nav-card />
            </div>
        </div>
    </div>
</template>

<script>
import Post from '~/components/post';
import NavCard from '../components/NavCard';
import Header from '../components/Header/Header';
import CreatePost from "../components/createPost";

  export default {
    name: "testPost",
    components: { CreatePost, NavCard, Post, Header },
  };
</script>

<style scoped>

</style>