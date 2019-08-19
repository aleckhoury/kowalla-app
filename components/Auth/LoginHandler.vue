<template>
  <div class="modal-content">
    <LoginAndRegisterModalMobile v-if="isMobile" @close="closeModal" />
    <LoginAndRegisterModal v-else :initial-state="false" @close="closeModal" />
  </div>
</template>

<script>
  import LoginAndRegisterModalMobile from "./LoginAndRegisterModalMobile";
  import LoginAndRegisterModal from "./LoginAndRegisterModal";

  export default {
    name: "LoginHandler",
    components: { LoginAndRegisterModal, LoginAndRegisterModalMobile },
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