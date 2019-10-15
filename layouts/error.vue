<template>
  <div class="screen background-tint">
    <Header class="is-hidden-touch" />
    <MobileHeader
      class="is-hidden-desktop"
      location-to-display="404"
      location-picture-to-display="https://s3.us-east-2.amazonaws.com/kowalla-dev/user/post-pics/ahUecQ6S_400x400.png"
    />
    <div v-if="error.statusCode === 404" class="container is-fullhd">
      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-centered is-marginless main-margin"
      >
        <div class="column is-half is-paddingless card">
          <p>Uh oh! Looks like you're lost!</p>
          <nuxt-link to="/beta">
            <a class="button action">Head Home</a>
          </nuxt-link>
          <img src="https://imgflip.com/s/meme/Surprised-Koala.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import MobileHeader from '~/components/Header/Mobile/MobileHeader';
export default {
  components: { Header, MobileHeader },

  props: {
    error: { type: Object, default: () => {} }
  }
};
</script>
<style scoped>
div.column {
  text-align: center;
}
.column p {
  color: #39c9a0;
  font-weight: 500;
  font-size: 3em;
}
.card {
  border-radius: 6px;
}
.button.action {
  width: 12em;
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
  margin-bottom: 0.5em;
}
</style>
