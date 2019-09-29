<template>
  <div :class="{ register: true, isMobile}">
    <span class="title">Create Account</span>
    <div class="row">
      <a class="image is-48x48 twitter" @click="getTwitterCreds">
        <img
          src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png"
        />
      </a>
      <a
        class="image is-48x48 github"
        href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
      </a>
    </div>
    <b-field label="Email">
      <b-input
        v-model="registerForm.email"
        :has-counter="false"
        type="email"
        maxlength="320"
        @keyup.native.enter="register(registerForm)"
      />
    </b-field>
    <b-field
      :type="{ 'is-danger': formError.username || formError.usernameLength }"
      :message="[
        { 'No special characters or spaces allowed': formError.username },
        { 'Username is too long': formError.usernameLength },
      ]"
      label="Username"
    >
      <b-input
        v-model="registerForm.username"
        maxlength="20"
        @keyup.native.enter="register(registerForm)"
      />
    </b-field>
    <b-field label="Password">
      <b-input
        v-model="registerForm.password"
        pattern=".{8,}"
        validation-message="Passwords must be 8 characters or more (We recommend more!)"
        type="password"
        password-reveal
        @keyup.native.enter="register(registerForm)"
      />
    </b-field>
    <a class="button action" @click="register(registerForm)">
      Submit
    </a>
  </div>
</template>

<script>
import login from "~/mixins/login";

export default {
  name: "RegisterForm",
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
