<template>
  <div class="modal-content">
    <LoginAndRegisterModalMobile v-if="isMobile" :initial-state="initialState" @close="closeModal" />
    <LoginAndRegisterModal v-else :initial-state="initialState" @close="closeModal" />
  </div>
</template>

<script>
  import LoginAndRegisterModalMobile from "./LoginAndRegisterModalMobile";
  import LoginAndRegisterModal from "./LoginAndRegisterModal";

  export default {
    name: "LoginHandler",
    components: { LoginAndRegisterModal, LoginAndRegisterModalMobile },
    props: {
      initialState: { type: Number, default: 0 },
    },
    computed: {
      isMobile() {
        return window.innerWidth < 768;
      }
    },
    methods: {
      closeModal() {
        this.$parent.close();
      }
    }
  };
</script>

<style scoped>
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39c9a0;
    width: auto;
}
</style>