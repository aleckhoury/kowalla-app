<template>
  <div class="modal-content">
    <b-steps v-model="activeStep" :has-navigation="false" class="signup">
      <b-step-item :clickable="false">
        <LoginAndRegister :initial-state="initialState" :is-mobile="isMobile" @close="closeModal" />
      </b-step-item>

      <b-step-item :clickable="false">
        <CreateProfile v-if="user._id" :class="isMobile ? 'mobile' : ''" />
      </b-step-item>

      <b-step-item :clickable="false">
        <CreateProject :is-mobile="isMobile" @complete-signup="completeSignup" />
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import LoginAndRegister from './LoginAndRegister';
import CreateProfile from './CreateProfile';
import CreateProject from './CreateProject';

export default {
  name: 'LoginHandler',
  components: {
    CreateProject,
    CreateProfile,
    LoginAndRegister,
  },
  props: {
    initialState: { type: Number, default: 0 },
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
    activeStep() {
      return this.$store.state.onboarding.ActiveStep;
    },
    user() {
      return this.$store.state.user;
    },
  },
  watch: {
    activeStep() {
      if (this.activeStep === 1) {
        // For non-signin flows, the default behavior is to never allow cancel
        // However for other login flows, after skipping first screen we want to prevent cancellation
        // LoginHandler default modal state is ['escape', 'x', 'outside']
        // @see https://buefy.org/documentation/modal/
        // TODO: change into an on-cancel event so we aren't mutating parent props
        return (this.$parent.canCancel = [false, false, false]);
      }
    },
  },
  created() {
    if (this.$route.query.code || this.$route.query.oauth_token) {
      this.$store.commit('onboarding/incrementActiveStep');
    }
  },
  methods: {
    closeModal() {
      this.$parent.close();
    },
    async completeSignup() {
      this.$parent.close();
      // TODO Revisit later. This code was used when we showed communities/projects to discover at first,
      // TODO just keeping logic until I see how the rest of this goes
      // const user = this.$store.state.user;
      // // const subs = await this.$axios.$get(`/api/v1/profiles/${user._id}/subs`);
      //
      // const { subscriptions } = subs.subscriptions;
      // await Object.assign(user, { subscriptions });

      // await this.$store.commit('user/setUser', user);
      this.$router.push({ path: `/feed` });
    },
  },
};
</script>

<style scoped>
.modal.animation-content {
  margin: 0;
}
.modal-content {
  border-radius: 6px;
  margin: 0;
  color: #39c9a0;
  width: auto;
}
.b-steps .steps + .step-content {
  padding: 0;
}
div.b-steps.signup {
  border-radius: 6px;
}
/*.box {*/
/*  width: 800px;*/
/*  max-width: 100%;*/
/*  max-height: 90vh;*/
/*  overflow: scroll;*/
/*}*/
</style>
