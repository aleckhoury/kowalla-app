<template>
    <div class="modal-content">
        <div class="box">
          
        </div>
    </div>
</template>

<script>
// In order to call this component, call it with a function below and an "@click"
// cardModal() {
//   this.$modal.open({
//       parent: this,
//       component: LoginAndRegisterModal,
//       width: 900,
//       hasModalCard: true,
//     },
//   )
// },
  export default {
    name: "PostModal",
    components: {},
    props: {},
  };
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
</style>
