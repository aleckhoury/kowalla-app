<template>
  <div>
    <el-tabs>
      <el-tab-pane 
        label="Register" 
        name="second">
        <el-card>
          REGISTER
          <el-form 
            v-if="!this.$auth.loggedIn" 
            v-model="registerForm">
            <el-form-item>
              <el-input 
                v-model="registerForm.username" 
                placeholder="Username"/>
            </el-form-item>
            <el-form-item>
              <el-input 
                v-model="registerForm.password" 
                placeholder="Password"/>
            </el-form-item>
            <el-button 
              type="primary" 
              @click="register(registerForm)">Create</el-button>
          </el-form>
          <el-button 
            v-if="this.$auth.loggedIn" 
            @click="logout()">
            Logout
          </el-button>
        </el-card>
      </el-tab-pane>
      <el-tab-pane 
        v-if="!this.$auth.loggedIn" 
        label="Login" 
        name="first">
        <el-card>
          LOGIN
          <el-form v-model="loginForm">
            <el-form-item>
              <el-input 
                v-model="loginForm.username" 
                placeholder="Username"/>
            </el-form-item>
            <el-form-item>
              <el-input 
                v-model="loginForm.password" 
                placeholder="Password"/>
            </el-form-item>
            <el-button 
              type="primary" 
              @click="login(loginForm)">Create</el-button>
          </el-form>
          <el-button 
            v-if="this.$auth.loggedIn" 
            @click="logout">
            Logout
          </el-button>
        </el-card>
      </el-tab-pane>
    </el-tabs>
    <el-button 
      v-if="this.$auth.loggedIn" 
      @click="logout()">
      Logout
    </el-button>
  </div>

</template>

<script>
import navBar from '../components/navBar';
export default {
  name: 'Login',
  components: { navBar, },
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
        this.$store.commit('user/setUser', user.data);

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
        this.$router.push('/dev');
      } catch (err) {
        console.log(err);
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
