<template>
  <div>
    <div v-if="isMobile" class="box isMobile">
      <b-tabs v-model="activeTab">
        <b-tab-item label="Signup">
          <RegisterForm :is-mobile="true" @close="$emit('close')" />
        </b-tab-item>
        <b-tab-item label="Login">
          <LoginForm :is-mobile="true" />
        </b-tab-item>
      </b-tabs>
    </div>
    <div v-else :class="[loginBox ? 'left' : 'right']" class="card is-paddingless">
      <div :class="[loginBox ? 'left' : 'right', 'coverBox']">
        <p class="kowalla-logo is-size-1">
          kowalla
        </p>
        <p v-if="loginBox" class="has-text-white">
          <small>
            You new here? Create an account to react, subscribe, and make your own posts!
          </small>
        </p>
        <p v-else class="has-text-white">
          <small>Already have an account?</small>
        </p>
        <a v-if="loginBox" class="button" @click="toggleFlow"> <font-awesome-icon icon="arrow-left" />&nbsp; Signup </a>
        <a v-else class="button" @click="toggleFlow"> Login &nbsp;<font-awesome-icon icon="arrow-right" /> </a>
      </div>
      <transition name="fade" mode="out-in">
        <LoginForm v-if="loginBox" />
        <RegisterForm v-else @close="$emit('close')" />
      </transition>
    </div>
  </div>
</template>

<script>
import login from '~/mixins/login';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default {
  name: 'LoginAndRegisterModal',
  components: { RegisterForm, LoginForm },
  mixins: [login],
  props: {
    isMobile: { type: Boolean, default: false }
  },
  data() {
    return {
      count: 0,
      activeTab: this.initialState,
      user: {}
    };
  },
  computed: {
    loginBox() {
      if (this.count === 0) return this.initialState;
      return this.activeTab;
    }
  },
  methods: {
    toggleFlow() {
      if (this.count === 0) {
        this.count++;
      }
      this.activeTab = !this.activeTab;
    }
  }
};
</script>

<style scoped>
.card {
  width: 800px;
  max-width: 100%;
  min-height: 60vh;
  max-height: 90vh;
  background: white;
  overflow-y: scroll;
  display: flex;
  justify-content: flex-end;
  border-radius: 6px;
}
.box.isMobile {
  max-width: 100%;
  max-height: 90vh;
  display: block;
  min-height: auto;
}
.card.right {
  justify-content: flex-start;
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
div.coverBox p small {
  font-weight: bold;
  display: flex;
  text-align: center;
}
.kowalla-logo {
  font-family: 'Nunito';
  font-weight: 900;
  font-size: 2.5em;
  color: #fff;
  text-decoration: none;
}
</style>
