<template>
  <div :class="[loginBox ? 'left' : 'right']" class="card is-paddingless">
    <div :class="[loginBox ? 'left' : 'right', 'coverBox']">
      <p class="kowalla-logo is-size-1">kowalla</p>
      <p v-if="loginBox" class="has-text-white">
        <small>
          You new here? Create an account to react, subscribe, and make your own
          posts!
        </small>
      </p>
      <p v-else class="has-text-white">
        <small>Already have an account?</small>
      </p>
      <a v-if="loginBox" class="button" @click="toggleFlow">
        <font-awesome-icon icon="arrow-left" />&nbsp; Signup
      </a>
      <a v-else class="button" @click="toggleFlow">
        Login &nbsp;<font-awesome-icon icon="arrow-right" />
      </a>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="loginBox" key="login" class="login">
        <span class="title">Welcome Back!</span>
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
      </div>
      <div v-else key="signup" class="signup">
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
        <!--<b-field label="Email">-->
        <!--<b-input-->
        <!--v-model="registerForm.email"-->
        <!--@keyup.native.enter="register(registerForm)"-->
        <!--/>-->
        <!--</b-field>-->
        <b-field label="Email">
          <b-input
            v-model="registerForm.email"
            :has-counter="false"
            type="email"
            validation-message="You must submit a valid email"
            maxlength="320"
            @keyup.native.enter="register(registerForm)"
          />
        </b-field>
        <b-field label="Username">
          <b-input
            v-model="registerForm.username"
            pattern="^([\w,:\s/-]*)$"
            validation-message="No special characters or spaces allowed"
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
    </transition>
  </div>
</template>

<script>
import login from "~/mixins/login";

export default {
  name: "LoginAndRegisterModal",
  components: {},
  mixins: [login],
  data() {
    return {
      toggledLoginBox: this.initialState,
      count: 0,
    };
  },
  computed: {
    loginBox() {
      if (this.count === 0) return this.initialState;
      return this.toggledLoginBox;
    },
  },
  methods: {
    toggleFlow() {
      if (this.count === 0) {
        this.count++;
      }
      this.toggledLoginBox = !this.toggledLoginBox;
    },
  },
};
</script>

<style scoped>
.modal-content {
  border-radius: 6px;
  margin: 0;
  color: #39c9a0;
  width: auto;
}
.card {
  width: 800px;
  max-width: 100%;
  min-height: 60vh;
  max-height: 90vh;
  background: white;
  overflow-y: scroll;
  display: flex;
  justify-content: flex-end;
}
.card.right {
  justify-content: flex-start;
}
/*.card.left {*/
/*justify-content: flex-end;*/
/*}*/
/*.login {*/
/*width: 50%;*/
/*}*/
/*.signup {*/
/*width: 50%;*/
/*}*/
/*.modal-content {*/
/*border-radius: 6px;*/
/*margin: 0;*/
/*color: #39c9a0;*/
/*width: auto;*/
/*}*/
.title {
  color: #39c9a0;
  text-align: center;
  font-size: 2.5em;
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
.coverBox {
  width: 40%;
  height: 100%;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #39c9a0;
  -webkit-transition: all 0.75s ease;
  -moz-transition: all 0.75s ease;
  -o-transition: all 0.75s ease;
  -ms-transition: all 0.75s ease;
  transition: all 0.75s ease;
}
.coverBox.left {
  left: 0;
  border-radius: 6px 0 0 6px;
}
.coverBox.right {
  left: 60%;
  border-radius: 0 6px 6px 0;
}
/*.fade-enter-active,*/
/*.fade-leave-active {*/
/*transition: opacity 1s;*/
/*}*/
/*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
/*opacity: 0;*/
/*}*/
div.coverBox p small {
  font-weight: bold;
  display: flex;
  text-align: center;
}
.kowalla-logo {
  font-family: "Nunito";
  font-weight: 900;
  font-size: 2.5em;
  color: #fff;
  text-decoration: none;
}
.login,
.signup {
  margin: auto 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow-y: scroll;
}
/*.column {*/
/*border-radius: 0 6px 6px 0;*/
/*}*/
/*.kowalla-logo {*/
/*font-family: 'Nunito';*/
/*font-size: 2.25em;*/
/*color: #fff;*/
/*text-decoration: none;*/
/*margin-right: 10px;*/
/*}*/
/*.toggle {*/
/*z-index: 5;*/
/*}*/
/*.fade-enter-active, .fade-leave-active {*/
/*transition: opacity .5s;*/
/*}*/
/*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
/*opacity: 0;*/
/*}*/
.image img {
  border: 1px solid lightgray;
  border-radius: 6px;
}
div.row {
  display: flex;
  flex-direction: row;
}
.twitter {
  margin-right: 1em;
}
</style>