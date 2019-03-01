<template>
    <div class="modal-content">
        <div class="box">
            <b-tabs v-model="activeTab">
                <b-tab-item label="Login">
                    <section>
                        <span class="title">Welcome Back!</span>
                        <b-field label="Username">
                            <b-input v-model="loginForm.username" maxlength="15"></b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input v-model="loginForm.password" type="password"
                                     password-reveal>
                            </b-input>
                        </b-field>
                        <a class="button action" @click="login(loginForm)">
                            Submit
                        </a>
                    </section>
                </b-tab-item>
                <b-tab-item label="Signup">
                    <section>
                        <span class="title">Create Account</span>
                        <!--<b-field label="Name">-->
                            <!--<b-input v-model="registerForm.name"></b-input>-->
                        <!--</b-field>-->

                        <!--<b-field label="Email">-->
                            <!--<b-input v-model="registerForm.email" type="email">-->
                            <!--</b-input>-->
                        <!--</b-field>-->

                        <b-field label="Username">
                            <b-input v-model="registerForm.username" maxlength="15"></b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input v-model="registerForm.password" type="password"
                                     password-reveal>
                            </b-input>
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

  export default {
    name: "LoginRegisterModal",
    components: {},
    data() {
      return {
        activeTab: 0,
        loginForm: {
          username: '',
          password: '',
        },
        registerForm: {
          name: '',
          email: '',
          username: '',
          password: '',
        },
      };
    },
    methods: {
      async register(registerForm) {
        try {
          await this.$axios.post('api/v1/users', {
            username: registerForm.username,
            password: registerForm.password,
          });

          await this.$auth.loginWith('local', {
            data: {
              username: registerForm.username,
              password: registerForm.password,
            },
          });
          const user = await this.$axios.get('api/v1/users/me', {
            params: {
              username: registerForm.username,
              password: registerForm.password,
            },
          });
          console.log('test');
          console.log(user);
          this.$store.commit('user/setUser', user.data);
          this.$parent.close();
          this.$router.push('/dev');
        } catch (e) {
          console.log(e);
        }
      },
      async login(loginForm) {
        try {
          await this.$auth.loginWith('local', {
            data: {
              username: loginForm.username,
              password: loginForm.password,
            },
          });
          const user = await this.$axios.get('api/v1/users/me', {
            params: {
              username: loginForm.username,
              password: loginForm.password,
            },
          });
          this.$store.commit('user/setUser', user.data);
          this.$parent.close();
          this.$router.push('/dev');
        } catch (err) {
          console.log(err);
        }
      },
      logout() {
        this.$auth.logout();
      },
    },
    mounted() {}
  }
</script>

<style scoped>
    .box {
        width: 800px;
        max-width: 100%;
    }
    .modal-content {
        border-radius: 6px;
        margin: 0;
        color: #39C9A0;
        width: auto;
    }
    .title {
        color: #39C9A0;
        text-align: center;
    }
    .button.action {
        width: 12em;
        color: white;
        background-color: #39C9A0;
        border-color: #39C9A0;
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