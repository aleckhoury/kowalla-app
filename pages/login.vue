<template>
    <div>
        <el-card>
            <el-form v-model="loginForm" v-if="!this.$auth.loggedIn">
                <el-form-item>
                    <el-input placeholder="Username" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="Password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-button type="primary" @click="login(loginForm)">Create</el-button>
            </el-form>
            <el-button v-if="this.$auth.loggedIn" v-on:click="logout()">
                Logout
            </el-button>
        </el-card>
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
        }
      }
    },
    methods: {
      login(loginForm) {
        try {
          this.$auth.loginWith('local', {
            data: {
              username: loginForm.username,
              password: loginForm.password
            }
          });
      } catch(e) {
        this.error = e.response.data.message
      }
      },
      logout() {
        this.$auth.logout();
      }
    },
  };
</script>

<style scoped>

</style>