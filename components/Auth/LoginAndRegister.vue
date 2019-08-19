<template>
  <div>
    <div class="box level">
      <span class="level-left is-size-4"><b>Log In</b></span>
      <a class="button action" @click="cardModal()"><b>Create</b></a>
    </div>
  </div>
</template>

<script>
import LoginHandler from "~/components/Auth/LoginHandler";

export default {
  name: "LoginAndRegister",
  data() {
    return {
      userDropdown: false,
      commDropdown: false,
    };
  },
  methods: {
    cardModal() {
      this.$modal.open({
        parent: this,
        component: LoginHandler,
        width: 900,
        hasModalCard: true,
      });
    },
  },
};
</script>

<style scoped>
span {
  color: #39c9a0;
}
.level {
  padding: 1rem;
}
.button.action {
  width: 12em;
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
</style>
