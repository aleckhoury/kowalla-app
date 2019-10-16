<template>
  <div :class="{ login: true, isMobile }">
    <span class="title">Welcome Back!</span>
    <div class="row">
      <a class="image is-48x48 twitter" @click="getTwitterCreds">
        <img src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" />
      </a>
      <a class="image is-48x48 github" href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
      </a>
    </div>
    <b-field label="Username or Email">
      <b-input v-model="loginForm.usernameOrEmail" @keyup.native.enter="login(loginForm)" />
    </b-field>

    <b-field label="Password">
      <b-input v-model="loginForm.password" type="password" password-reveal @keyup.native.enter="login(loginForm)" />
    </b-field>
    <a class="button action" @click="login(loginForm)">
      Submit
    </a>
  </div>
</template>

<script>
import login from '~/mixins/login';

export default {
  name: 'LoginForm',
  mixins: [login],
  props: {
    isMobile: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.title {
  color: #39c9a0;
  text-align: center;
  font-size: 2.5em;
}
.login {
  margin: auto 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow-y: scroll;
}
.login.isMobile {
  width: 100%;
}
.image img {
  border: 1px solid lightgray;
  border-radius: 6px;
}
div.field {
  width: 80%;
}
.button.action {
  font-weight: bold;
  width: 12em;
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
div.row {
  display: flex;
  flex-direction: row;
}
.twitter {
  margin-right: 1em;
}
</style>
