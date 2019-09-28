<template>
  <div class="box">
    <b-tabs v-model="activeTab">
      <b-tab-item label="Signup">
        <section>
          <span class="title">Create Account</span>
          <div class="row">
            <a
              class="image is-48x48 twitter"
              href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00"
            >
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
              pattern="/^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
              validation-message="You must submit a valid email"
              maxlength="320"
              @keyup.native.enter="register(registerForm)"
            />
          </b-field>
          <b-field
            :type="{ 'is-danger': formError.username || formError.usernameLength }"
            :message="[{ 'No special characters or spaces allowed': formError.username },
                       { 'Username is too long': formError.usernameLength }]"
            label="Username">
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
        </section>
      </b-tab-item>
      <b-tab-item label="Login">
        <section>
          <span class="title">Welcome Back!</span>
          <div class="row">
            <a
              class="image is-48x48 twitter"
              href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00"
            >
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
          <b-field label="Username or Email">
            <b-input
              v-model="loginForm.usernameOrEmail"
              @keyup.native.enter="login(loginForm)"
            />
          </b-field>

          <b-field label="Password">
            <b-input
              v-model="loginForm.password"
              type="password"
              password-reveal
              @keyup.native.enter="login(loginForm)"
            />
          </b-field>
          <a class="button action" @click="login(loginForm)">
            Submit
          </a>
        </section>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import login from '~/mixins/login';

  export default {
  name: "LoginAndRegisterModal",
  components: {},
  mixins: [login],
  data() {
    return {
      activeTab: this.initialState,
    };
  },
  methods: {},
};
</script>

<style scoped>
.box {
  max-width: 100%;
  max-height: 90vh;
}
.title {
  color: #39c9a0;
  text-align: center;
}
.button.action {
  width: 12em;
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
.image img {
  border: 1px solid lightgray;
  border-radius: 6px;
}
.twitter {
  margin-right: 1em;
}
div.row {
  display: flex;
  flex-direction: row;
}
</style>
