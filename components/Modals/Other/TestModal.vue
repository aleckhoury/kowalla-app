<template>
  <div class="modal-content">
    <div class="box">
      {{modalText}}
    </div>
  </div>
</template>
<script>
export default {
  name: "HelpModal",
  props: {
    modalText: String,
    modalOpen: Boolean,
  },
  watch: {
    modalOpen: function(newVal, oldVal)
      { // watch it
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        if (newVal === false) {
          console.log(`close ${this.modalText}`)
          this.$parent.close();
        }
      }
  }

}
</script>
<style lang="css" scoped>
.box {
    margin: 25px;
    max-width: 100%;
    text-align: center;
}
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}
</style>
