<template>
        <div class="box">
            <figure class="media-left">
                <p class="image is-64x64 profilePic">
                    <img :src="this.$store.state.user.profilePicture">
                </p>
            </figure>
            <div class="content">
                <p>
                    <strong>Tyler O’Briant</strong> <small>@cowboy_morty · 31m</small>
                </p>
                <p>
                    Posted in <span><b>#ClubPal</b></span>
                </p>
            </div>
        </div>
</template>

<script>
  export default {
    name: "NavCard",
  };
</script>

<style scoped>

</style>