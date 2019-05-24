<template>
  <div class="modal-content">
    <div :class="[loginBox ? 'right' : 'left']" class="card is-paddingless">
      <div :class="[loginBox ? 'right' : 'left', 'coverBox']">
        <p class="kowalla-logo is-size-1">kowalla</p>
        <p v-if="loginBox" class="has-text-white">
          <small>You new here? Create an account to react, subscribe, and make your own posts!</small>
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
          <b-field label="Username">
            <b-input
              v-model="loginForm.username"
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
          <!--<b-field label="Email">-->
          <!--<b-input-->
          <!--v-model="registerForm.email"-->
          <!--@keyup.native.enter="register(registerForm)"-->
          <!--/>-->
          <!--</b-field>-->
          <b-field label="Username">
            <b-input
              v-model="registerForm.username"
              maxlength="20"
              @keyup.native.enter="register(registerForm)"
            />
          </b-field>
          <b-field label="Password">
            <b-input
              v-model="registerForm.password"
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
      <!--<div class="coverBox">-->
      <!---->
      <!--<b-tabs v-model="activeTab">-->
      <!--<b-tab-item label="Login">-->
      <!--</b-tab-item>-->
      <!--<b-tab-item label="Signup">-->
      <!--</b-tab-item>-->
      <!--</b-tabs>-->
      <!--</div>-->
      <!--<section class="column toggle" style="background-color: #39C9A0;">-->
      <!--<h1 class="kowalla-logo">kowalla</h1>-->
      <!--<p>You new here? Create an account!</p>-->
      <!--<a class="button" @click="signupToggle()">-->
      <!--<span>Signup</span>-->
      <!--<span class="icon is-small">-->
      <!--<font-awesome-icon icon="arrow-right"></font-awesome-icon>-->
      <!--</span>-->
      <!--</a>-->
      <!--</section>-->
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "LoginAndRegisterModal",
  components: {},
  props: {
    initialState: { type: Boolean, default: true },
  },
  data() {
    return {
      toggledLoginBox: this.initialState,
      count: 0,
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        name: "",
        // email: "",
        username: "",
        password: "",
      },
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
    async register(registerForm) {
      if (
        // this.registerForm.email === "" ||
        this.registerForm.username === "" ||
        this.registerForm.password === ""
      ) {
        this.$toast.open({
          duration: 5000,
          message: "Please fill out the full form",
          position: "is-top",
          type: "is-danger",
        });

        return null;
      }

      try {
        await this.$axios.$post("api/v1/users", {
          username: registerForm.username,
          password: registerForm.password,
        });
        const token = await this.$axios.$post("/api/v1/users/login", {
          username: registerForm.username,
          password: registerForm.password,
        });
        await Cookies.set("token", token);
        const user = await this.$axios.$get(
          `api/v1/users/${registerForm.username}`
        );

        await Object.assign(user, {
          loggedIn: Boolean(Object.keys(user).length),
        });

        await this.$store.commit("user/setUser", user);
        await this.$parent.close();
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    },
    async login(loginForm) {
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$toast.open({
          duration: 5000,
          message: "Please fill out the full form",
          position: "is-top",
          type: "is-danger",
        });

        return null;
      }

      try {
        const res = await this.$axios.$post("/api/v1/users/login", {
          username: loginForm.username,
          password: loginForm.password,
        });
        Cookies.set("token", res.token);
        const user = await this.$axios.$get(
          `api/v1/users/${loginForm.username}`
        );
        const subs = await this.$axios.$get(
          `/api/v1/profiles/${user._id}/subs`
        );

        const { owned, subscriptions } = subs.profileSubscriptions;
        await Object.assign(user, {
          loggedIn: Boolean(Object.keys(user).length),
        });
        await Object.assign(user, { subscriptions, owned });

        await this.$store.commit("user/setUser", user);
        await this.$parent.close();
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
/*.modal-content {*/
/*border-radius: 6px;*/
/*margin: 0;*/
/*color: #39c9a0;*/
/*width: auto;*/
/*}*/
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
