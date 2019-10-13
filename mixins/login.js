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
        email: "",
        username: "",
        password: "",
      },
    };
  },
  computed: {
    validPass() {
      return this.registerForm.password.length > 8;
    },
    formError() {
      const regex = RegExp('^(?=.+$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');
      const emailRegex = RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
      return {
        email: this.registerForm.email.length ? !emailRegex.test(this.registerForm.email) : false,
        username: this.registerForm.username.length ? !regex.test(this.registerForm.username) : false,
        usernameLength: this.registerForm.username.length > 20,
      };
    }
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
      // if (Object.values(this.formError).some(v => v === false)) { return false; }
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
      } else if (Object.values(this.formError).some(x => x === true) || !this.validPass) {
        return this.$toast.open({
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
          inviteProfile: this.$route.query.invite || undefined,
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
        const { owned, subscriptions } = subs.subscriptions;
        await Object.assign(user, {
          loggedIn: Boolean(Object.keys(user).length),
        });
        await Object.assign(user, { subscriptions, owned });

        await this.$store.commit("user/setUser", user);
        this.$store.commit('activeTabs/updateSettingsActiveTab', 0);
        this.$store.commit('onboarding/incrementActiveStep');
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

        const { owned, subscriptions } = subs.subscriptions;
        Object.assign(user, {
          loggedIn: Boolean(Object.keys(user).length),
        });
        Object.assign(user, { subscriptions, owned });

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