<template lang="html">
  <div class="card profile-card-container">
    <h1 class="cardTitle">
      Join Kowalla
    </h1>
    <div class="lower">
      <div class="row">
        <a
          id="twitter"
          class="image is-48x48"
          @click="getTwitterCreds"
        >
          <img
            src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png"
          />
        </a>
        <a
          id="github"
          class="image is-48x48"
          href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          />
        </a>
      </div>
      <a class="button action" @click="cardModal">Join Beta</a>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import LoginHandler from "~/components/Auth/LoginHandler";

export default {
  name: "SignupCard",
  components: {},
  methods: {
    cardModal() {
      this.$modal.open({
        parent: this,
        component: LoginHandler,
        width: 900,
        hasModalCard: true,
      });
    },
    async getTwitterCreds() {
      const twitterCreds = await this.$axios.$post('api/v1/twitter/signin');
      Cookies.set('firstVisit', true);
      Cookies.set("twitterToken", twitterCreds.oauth_token);
      window.location = `https://api.twitter.com/oauth/authenticate?oauth_token=${twitterCreds.oauth_token}`;
    }
  },
};
</script>

<style lang="css" scoped>
.profile-card-container {
  width: 18%;
  background-color: white;
  border-radius: 6px;
}
.cardTitle {
  padding: 0.25em;
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: #0A2049;
  border-radius: 6px 6px 0 0;
}
.lower {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0A2049;
  padding: 0 1em 1em 1em;
  color: black;
  border-radius: 0 0 6px 6px;
}
.lower div.row {
  display: flex;
  flex-direction: row;
}
.image img {
  border-radius: 6px;
}
#twitter {
  margin-right: 1em;
}
.button.action {
  font-weight: bold;
  width: 12em;
  color: #0A2049;
  background-color: white;
  border-color: white;
  margin-top: 1em;
}

.button.action:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
