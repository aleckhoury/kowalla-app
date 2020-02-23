import Cookies from 'js-cookie';

const login = {
  props: {
    initialState: { type: Number, default: 0 },
  },
  data() {
    return {
      loginForm: {
        usernameOrEmail: '',
        password: '',
      },
      registerForm: {
        email: '',
        username: '',
        password: '',
      },
      loading: false,
    };
  },
  methods: {
    validRegister() {
      this.$refs.registerEmail.checkHtml5Validity();
      this.$refs.registerUsername.checkHtml5Validity();
      this.$refs.registerPassword.checkHtml5Validity();
      return this.$refs.registerForm.checkValidity();
    },
    validLogin() {
      this.$refs.loginUsername.checkHtml5Validity();
      this.$refs.loginPassword.checkHtml5Validity();
      return this.$refs.loginForm.checkValidity();
    },
    async getTwitterCreds() {
      const twitterCreds = await this.$axios.$post('api/v1/twitter/signin');
      Cookies.set('twitterToken', twitterCreds.oauth_token);
      window.location = `https://api.twitter.com/oauth/authenticate?oauth_token=${twitterCreds.oauth_token}`;
    },
    async register(registerForm) {
      if (this.validRegister()) {
        try {
          this.loading = true;
          await this.$axios.$post('api/v1/users', {
            email: registerForm.email,
            username: registerForm.username,
            password: registerForm.password,
            inviteProfile: this.$route.query.invite || undefined,
          });
          const token = await this.$axios.$post('/api/v1/users/login', {
            usernameOrEmail: registerForm.username,
            password: registerForm.password,
          });
          await Cookies.set('token', token);
          await Cookies.set('firstVisit', true, { expires: 3650 });
          const user = await this.$axios.$get(`api/v1/users/${registerForm.username}`);
          const subs = await this.$axios.$get(`/api/v1/profiles/${user._id}/subs`);
          const { owned, subscriptions } = subs.subscriptions;
          await Object.assign(user, {
            loggedIn: Boolean(Object.keys(user).length),
          });
          await Object.assign(user, { subscriptions, owned });
          await this.$store.commit('user/setUser', user);
          this.loading = false;
          this.$store.commit('activeTabs/updateSettingsActiveTab', 0);
          this.$store.commit('onboarding/incrementActiveStep');
        } catch (err) {
          console.log(err);
          this.loading = false;
          this.$buefy.toast.open({
            duration: 4000,
            message: err.response.data.message,
            position: 'is-top',
            type: 'is-danger',
          });
        }
      }
    },
    async login(loginForm) {
      if (this.validLogin()) {
        try {
          this.loading = true;
          const res = await this.$axios.$post('/api/v1/users/login', {
            usernameOrEmail: loginForm.usernameOrEmail,
            password: loginForm.password,
          });
          Cookies.set('token', res.token);
          const user = await this.$axios.$get(`api/v1/users/${res.username}`);
          const subs = await this.$axios.$get(`/api/v1/profiles/${user._id}/subs`);

          const { owned, subscriptions } = subs.subscriptions;
          Object.assign(user, {
            loggedIn: Boolean(Object.keys(user).length),
          });
          Object.assign(user, { subscriptions, owned });

          await this.$store.commit('user/setUser', user);
          this.loading = false;
          await this.$emit('close');
          if (this.$route.path === '/') {
            this.$router.push('/feed');
          } else {
            this.$router.go();
          }
        } catch (err) {
          console.log(err);
          this.loading = false;
          this.$buefy.toast.open({
            duration: 4000,
            message: err.response.data.message,
            position: 'is-top',
            type: 'is-danger',
          });
        }
      }
    },
  },
};
export default login;
