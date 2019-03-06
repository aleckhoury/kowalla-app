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
        <div class="column is-one-half is-full-touch is-paddingless test-outline">
          <Post v-for="post in postList" :key="post._id" :post="post"></Post>
        </div>

        <!-- infopane -->
        <div class="column centered is-one-half is-full-touch is-paddingless test-outline">
          <div class="description-width">
            <DescriptionCard
              headerString="About Kowalla"
              :subheaderOn="false"
            >
              copy copy copy
            </DescriptionCard>
          </div>

          <div class="description-width">
            <DescriptionCard
              headerString="Sign up for our email list!"
              :subheaderOn="false"
            >
              add the email signup
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
import Post from "~/components/PostCard/feedPost";
export default {
  name: 'Index',
  auth: false,
  components: {
    DescriptionCard,
    InfoPane,
    Post,
  },
  data() {
    return {
      postList: [],
    }
  },
  async mounted() {
    document.title = `Kowalla - Home`;
    this.postList = await this.$axios.$get('/api/v1/posts');
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
