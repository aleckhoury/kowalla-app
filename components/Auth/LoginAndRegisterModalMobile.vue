<template>
  <div class="modal-content">
    <div class="box">
      <b-tabs v-model="activeTab">
        <b-tab-item label="Login">
          <section>
            <span class="title">Welcome Back!</span>
            <a class="image is-48x48"
               href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png">
            </a>
            <b-field label="Username">
              <b-input
                v-model="loginForm.username"
                maxlength="20"
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
        <b-tab-item label="Signup">
          <section>
            <span class="title">Create Account</span>
            <a class="image is-48x48"
               href="https://github.com/login/oauth/authorize?client_id=95399e4009a5d2353d00">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png">
            </a>
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
          </section>
        </b-tab-item>
      </b-tabs>
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
  data() {
    return {
      activeTab: 0,
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        name: "",
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async register(registerForm) {
      if (
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
.box {
  max-width: 100%;
  max-height: 90vh;
}
.modal-content {
  border-radius: 6px;
  margin: 0;
  color: #39c9a0;
  width: auto;
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
</style>
