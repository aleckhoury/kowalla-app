<template>
    <div>
        <el-tabs>
            <el-tab-pane label="Register" name="second">
                <el-card>
                    REGISTER
                    <el-form v-model="registerForm" v-if="!this.$auth.loggedIn">
                        <el-form-item>
                            <el-input placeholder="Username" v-model="registerForm.username"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="Password" v-model="registerForm.password"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="register(registerForm)">Create</el-button>
                    </el-form>
                    <el-button v-if="this.$auth.loggedIn" v-on:click="logout()">
                        Logout
                    </el-button>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="Login" name="first" v-if="!this.$auth.loggedIn">
                <el-card>
                    LOGIN
                    <el-form v-model="loginForm">
                        <el-form-item>
                            <el-input placeholder="Username" v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="Password" v-model="loginForm.password"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="login(loginForm)">Create</el-button>
                    </el-form>
                    <el-button v-if="this.$auth.loggedIn" v-on:click="logout">
                        Logout
                    </el-button>
                </el-card>
            </el-tab-pane>
        </el-tabs>
        <el-button v-if="this.$auth.loggedIn" v-on:click="logout()">
            Logout
        </el-button>
    </div>

</template>

<script>
  import navBar from "../components/navBar";
  export default {
    name: "login",
    components: { navBar },
    auth: false,
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        registerForm: {
          username: '',
          password: '',
        }
      };
    },
    methods: {
      async register(registerForm) {
        console.log(registerForm);
        try {
          await this.$axios.post('api/v1/users', {
            username: registerForm.username,
            password: registerForm.password
          });

          await this.$auth.loginWith('local', {
            data: {
              username: registerForm.username,
              password: registerForm.password
            },
          });

          this.$router.push('/')
        } catch (e) {
          console.log('Some kind of error idk');
        }
      },
      login(loginForm) {
        try {
          this.$auth.loginWith('local', {
            data: {
              username: loginForm.username,
              password: loginForm.password
            }
          });
        } catch (e) {
          console.log(e);
        }
      },
      logout() {
        this.$auth.logout();
      },
    },
  };

</script>

<style scoped>

</style>