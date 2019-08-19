<template>
  <div class="box">
    <b-tabs v-model="activeTab">
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
        </section>
      </b-tab-item>
    </b-tabs>
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
        usernameOrEmail: "",
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
        this.registerForm.email === "" ||
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
          email: registerForm.email,
          username: registerForm.username,
          password: registerForm.password,
        });
        const token = await this.$axios.$post("/api/v1/users/login", {
          usernameOrEmail: registerForm.username,
          password: registerForm.password,
        });
        await Cookies.set("token", token);
        await Cookies.set("firstVisit", true);
        const user = await this.$axios.$get(
          `api/v1/users/${registerForm.username}`
        );

        await Object.assign(user, {
          loggedIn: Boolean(Object.keys(user).length),
        });

        await this.$store.commit("user/setUser", user);
        await this.$emit('close');
        this.$router.go();
      } catch (err) {
        console.log(err);
        this.$toast.open({
          duration: 4000,
          message: err.response.data.message,
          position: "is-top",
          type: "is-danger",
        });
      }
    },
    async login(loginForm) {
      if (this.loginForm.usernameOrEmail === "" || this.loginForm.password === "") {
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
          usernameOrEmail: loginForm.usernameOrEmail,
          password: loginForm.password,
        });
        Cookies.set("token", res.token);
        const user = await this.$axios.$get(
          `api/v1/users/${res.username}`
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
        await this.$emit('close');
        this.$router.go();
      } catch (err) {
        this.$toast.open({
          duration: 4000,
          message: err.response.data.message,
          position: "is-top",
          type: "is-danger",
        });
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
