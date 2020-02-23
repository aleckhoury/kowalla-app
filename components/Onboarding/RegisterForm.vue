<template>
  <div :class="{ register: true, isMobile }">
    <span class="title">Create Account</span>
    <div class="row">
      <a class="image is-48x48 twitter" @click="getTwitterCreds">
        <img src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" />
      </a>
      <a class="image is-48x48 github" href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
      </a>
    </div>
    <form ref="registerForm">
      <b-field label="Email">
        <b-input
          ref="registerEmail"
          v-model="registerForm.email"
          :has-counter="false"
          required
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          validation-message="This email is invalid"
          type="email"
          maxlength="320"
          @keyup.native.enter="register(registerForm)"
        />
      </b-field>
      <b-field>
        <template slot="label">
          Username
          <BTooltip multilined type="is-light" label="Your username cannot be changed once you create it.">
            <font-awesome-icon icon="question-circle" />
          </BTooltip>
        </template>
        <b-input
          ref="registerUsername"
          v-model="registerForm.username"
          required
          pattern="^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$"
          :validation-message="registerForm.username.length ? 'No special characters or spaces allowed besides \'_\'' : 'This field is required'"
          icon="at"
          maxlength="20"
          @keyup.native.enter="register(registerForm)"
        />
      </b-field>
      <b-field label="Password">
        <b-input
          ref="registerPassword"
          v-model="registerForm.password"
          required
          pattern=".{8,}"
          validation-message="Passwords must be 8 characters or more (We recommend more!)"
          type="password"
          password-reveal
          @keyup.native.enter="register(registerForm)"
        />
      </b-field>
    </form>
    <a class="button action" :class="{ 'is-loading': loading }" @click="register(registerForm)">
      Submit
    </a>
  </div>
</template>

<script>
import login from '~/mixins/login';

export default {
  name: 'RegisterForm',
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
.register {
  margin: auto 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow-y: scroll;
}
.register.isMobile {
  width: 100%;
}
.image img {
  border: 1px solid lightgray;
  border-radius: 6px;
}
form {
  width: 80%;
  margin-bottom: 0.75rem;
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
.b-tooltip {
  vertical-align: middle;
  color: grey;
  font-size: 14px;
}
</style>
