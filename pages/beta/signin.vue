<template>
  <div class="fullPage">
    <img class="image" src="https://i.imgur.com/04hoRgV.png" />
    <b-loading :active.sync="isLoading" :is-full-page="isFullPage" />
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import LoginHandler from '~/components/Auth/LoginHandler';

export default {
  layout: 'none',
  name: 'SignIn',
  data() {
    return {
      isLoading: true,
      isFullPage: true,
    };
  },
  async mounted() {
    if (this.$route.query.code) {
      const { isNew, token, user } = await this.$axios.$post('api/v1/github/signin', {
        code: this.$route.query.code,
      });
      await Cookies.set('firstVisit', true);
      await Cookies.set('token', token);
      const subs = await this.$axios.$get(`/api/v1/profiles/${user._id}/subs`);

      const { owned, subscriptions } = subs.subscriptions;
      await Object.assign(user, {
        loggedIn: Boolean(Object.keys(user).length),
      });
      await Object.assign(user, { subscriptions, owned });

      await this.$store.commit('user/setUser', user);
      if (isNew) {
        this.isLoading = false;
        await this.$modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true,
          canCancel: [false, false, false],
        });
      } else {
        await this.$router.push({
          path: `/beta`,
        });
      }
    } else if (this.$route.query.oauth_token) {
      const { oauth_token, oauth_verifier } = this.$route.query;
      const authToken = await Cookies.get('twitterToken');
      if (oauth_token === authToken) {
        const { isNew, token, user } = await this.$axios.$post('api/v1/twitter/verify', {
          oauthToken: oauth_token,
          verifier: oauth_verifier,
        });
        await Cookies.set('token', token);
        const subs = await this.$axios.$get(`/api/v1/profiles/${user._id}/subs`);

        const { owned, subscriptions } = subs.subscriptions;
        await Object.assign(user, {
          loggedIn: Boolean(Object.keys(user).length),
        });
        await Object.assign(user, { subscriptions, owned });

        await this.$store.commit('user/setUser', user);
        if (isNew) {
          this.isLoading = false;
          await this.$modal.open({
            parent: this,
            component: LoginHandler,
            width: 900,
            hasModalCard: true,
            canCancel: [false, false, false],
          });
        } else {
          await this.$router.push({
            path: `/beta`,
          });
        }
      }
    }
  },
  methods: {},
};
</script>

<style scoped>
.fullPage {
  height: 100vh;
  width: 100%;
  background-color: #39c9a0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  height: 20em;
  width: auto;
}
</style>
