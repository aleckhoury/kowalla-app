<template>
  <div class="modal-content">
    <b-steps v-model="activeStep" :has-navigation="false" class="signup">
      <b-step-item :clickable="false">
        <LoginAndRegisterModalMobile
          v-if="isMobile"
          :initial-state="initialState"
          @close="closeModal"
          @register-user="sendUserData"
          @increment-active-step="activeStep += 1"
        />
        <LoginAndRegisterModal
          v-else
          :initial-state="initialState"
          @close="closeModal"
          @register-user="sendUserData"
          @increment-active-step="activeStep += 1"
        />
      </b-step-item>

      <b-step-item :clickable="false">
        <EditProfile
          v-if="activeStep === 1"
          :class="isMobile ? 'mobile' : ''"
          :is-onboarding="true"
          :first-name="user.firstName"
          :last-name="user.lastName"
          :username="user.username"
          :profile-picture="user.profilePicture"
          :description="user.profileDescription"
          :profile-id="user._id"
          title="Complete Profile Details"
          @increment-active-step="activeStep += 1"
        />
      </b-step-item>

      <b-step-item :clickable="false">
        <SpaceProjectList @complete-signup="completeSignup" />
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import LoginAndRegisterModalMobile from "./LoginAndRegisterModalMobile";
import LoginAndRegisterModal from "./LoginAndRegisterModal";
import EditProfile from "~/components/Forms/EditProfile";
import SpaceProjectList from "./SpaceProjectList";

export default {
  name: "LoginHandler",
  components: {
    SpaceProjectList,
    LoginAndRegisterModal,
    LoginAndRegisterModalMobile,
    EditProfile,
  },
  props: {
    initialState: { type: Number, default: 0 },
  },
  data() {
    return {
      activeStep: 0,
      user: {},
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 768;
    },
  },
  watch: {
    activeStep() {
      if (this.activeStep === 1) {
        return (this.$parent.canCancel = [false, false, false]);
      }
    },
  },
  created() {
    if (this.$route.query.code || this.$route.query.oauth_token) {
      this.activeStep = 1;
      this.user = this.$store.state.user;
    }
  },
  methods: {
    closeModal() {
      this.$parent.close();
    },
    sendUserData(value) {
      this.user = value;
    },
    async completeSignup() {
      this.$parent.close();
      const user = this.$store.state.user;
      const subs = await this.$axios.$get(
              `/api/v1/profiles/${user._id}/subs`
      );

      const { subscriptions } = subs.profileSubscriptions;
      await Object.assign(user, { subscriptions });

      await this.$store.commit("user/setUser", user);
      this.$router.push({ path: `/beta/space/all` });
    }
  },
};
</script>

<style scoped>
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
.box {
  width: 800px;
  max-width: 100%;
  max-height: 60vh;
  overflow: scroll;
}
</style>
