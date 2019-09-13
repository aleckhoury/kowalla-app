import Cookies from "js-cookie";

const login = {
  props: {
    initialState: { type: Number, default: 0 }
  },
  data() {
    return {
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
  computed: {
    validRegister() {
      const validUsername = new RegExp("^([\\w,:\\s/-]*)$");
      if (!this.registerForm.email.includes('@')) return false;
      else if (!validUsername.test(this.registerForm.username)) return false;
      else if (this.registerForm.password.length <= 8) return false;
      return true;
    },
  },
  methods: {
    async getTwitterCreds() {
      const twitterCreds = await this.$axios.$post("api/v1/twitter/signin");
      Cookies.set("twitterToken", twitterCreds.oauth_token);
      window.location = `https://api.twitter.com/oauth/authenticate?oauth_token=${
        twitterCreds.oauth_token
      }`;
    },
    async register(registerForm) {
      if (
        this.registerForm.email === "" ||
        this.registerForm.username === "" ||
        this.registerForm.password === ""
      ) {
        this.$toast.open({
          duration: 4000,
          message: "Please fill out the full form",
          position: "is-top",
          type: "is-danger",
        });

        return null;
      } else if (!this.validRegister) {
        this.$toast.open({
          duration: 4000,
          message: "Invalid information",
          position: "is-top",
          type: "is-danger",
        });
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
        this.$store.commit('activeTabs/updateSettingsActiveTab', 0);
        this.$router.push(`beta/user/${registerForm.username}/edit`);
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
          duration: 4000,
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
        if (this.$route.path === '/') { this.$router.push('/beta'); }
        else { this.$router.go(); }
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
  },
};
export default login;