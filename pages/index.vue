<template>
  <div class="flex lp-background">
    <div class="container">
      <div class="columns is-centered is-marginless main-margin">
        <!-- post feed -->
        <div class="column is-narrow is-paddingless ">
          <div class="centered">
            <div class="title">
              kowalla
            </div>
            <div class="subtitle">
              build together here
            </div>
          </div>
        </div> <!-- end column -->
      </div> <!-- end columns -->

      <div class="columns is-centered is-marginless is-reverse main-margin">
        <div class="column is-one-half is-full-touch is-paddingless">
          <div class="centered">
            <div class="subtitle">
              Blog
            </div>
          </div>
          <Post v-if="postList.length" v-for="post in postList" :key="post._id" :post="post"></Post>
        </div>
        <!-- infopane -->
        <div class="column centered is-one-half is-full-touch is-paddingless">
          <div class="description-width">
            <DescriptionCard
              headerString="About Kowalla"
              :subheaderOn="false"
            >
              <p>Welcome to Kowalla.  We're building the world's first fully online coworking space.
                We want to bring you the community of a coworking space, without the desk.</p>
              <br>
              <p>Our team at Kowalla is building a platform to take the best elements of top tech communities across the
                world and bring them online.
                Our platform will be a place to create, collaborate and share your projects in the open.
                We believe that in a truly connected world, everyone should be able to be a part of the communities
                they're passionate about, no matter where they're from.
                Talent, ambition, ideas and execution should be the only limit to your success and not geography.</p>

            </DescriptionCard>
          </div>

          <div class="description-width">
            <DescriptionCard
              headerString="Sign up for our email list!"
              :subheaderOn="false"
            >
              <EmailSignup />
            </DescriptionCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoPane from '~/components/InfoCards/InfoPane';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import Post from "~/components/LandingPageComponents/LandingPagePost";
import EmailSignup from "~/components/LandingPageComponents/emailSignup";

export default {
  name: 'Index',
  auth: false,
  components: {
    DescriptionCard,
    InfoPane,
    Post,
    EmailSignup,
  },
  data() {
    return {
      posts: [],
      postList: [],
    }
  },
  async mounted() {
    document.title = `Kowalla - Home`;
    this.posts = await this.$axios.$get('/api/v1/posts/Oldest/0');
    this.postList = this.posts.filter(post => post._id === 'bOVESikDy' || post._id === 'uxWP0nd_C');
  }
};
</script>

<style scoped>
.title {
  font-family: "Nunito";
  display: block;
  font-weight: 300;
  font-size: 5em;
  color: #fff;
  letter-spacing: 1px;
}

.lp-accent {
  color: #E9EBEE;
}

.lp-background {
  background: #39C9A0;
}

.flex {
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #39C9A0;
}

.description-width {
  width: 75%;
}

.centered {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

@media(max-width: 767px) { /* <== You can change this break point as per your  needs */
  .is-reverse {
    flex-direction: column-reverse;
    display: flex;
  }
}

.subtitle {
  font-weight: 300;
  font-family: "Nunito";
  font-size: 2em;
  color: #2F8168;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
