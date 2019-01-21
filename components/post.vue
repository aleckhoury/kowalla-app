<template>
    <section class="section">
            <div class="card">
                <div class="card-header">
                    <figure class="media-left">
                        <p class="image is-64x64 profilePic">
                            <img :src="this.$store.state.user.profilePicture">
                        </p>
                    </figure>
                    <div class="card-content is-paddingless">
                        <p>
                            <strong>Tyler O’Briant</strong> <small>@cowboy_morty · 31m</small>
                        </p>
                        <p>
                            Posted in <span><b>#ClubPal</b></span>
                        </p>
                    </div>
                </div>
                <div class="content is-marginless">
                    <h2>
                        Kowalla now supports live GIFS!
                    </h2>
                    <p>We’ve heard your cries for further meme support, and we’ve delivered!  Kowalla now hosts gifs that you
                        upload, and will take links to gifs hosted elsewhere online.</p>
                    <p>Happy memeing Kowallafam
                    </p>
                    <p><3 TOB
                    </p>
                </div>
                <figure class="media-content">
                    <p class="image is-4by3">
                        <img src="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/02/learn-code-e1455713167295.jpg">
                    </p>
                </figure>
                <br />
                <p>
                    <a class="button is-outlined"><b>😂26</b></a>
                    <a class="button is-outlined"><b>🤠13</b></a>
                    <a class="button is-outlined"><b>···</b></a>
                    <b-icon
                            pack="far"
                            icon="comment"
                            size="is-large">
                    </b-icon>
                </p>
            </div>
    </section>
</template>

<script>
  export default {
    name: "testPost",
  };
</script>

<style scoped>
    .content {
        padding: 1em 0.5em;
    }
    .button {
        color: #39C9A0;
        border-color: #39C9A0;
        border-width: medium;
    }
    .button:hover {
        background-color: rgba(57,201,160,0.3);
        color: #39C9A0;
        border-color: #39C9A0;
    }
    b-icon {
        color: black;
    }
    .media-content {
        padding: 0 2em;
    }
    .card {
        border-radius: 6px;
    }
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