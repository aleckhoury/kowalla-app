<template>
  <div class="modal-content">
    <div class="box is-narrow">
      <NavPane class="force-width"></NavPane>
    </div>
  </div>
</template>
<script>
import NavPane from '~/components/NavCards/NavPane';

export default {
  name: "ChangeLocationModal",
  components: { NavPane }

}
</script>
<style lang="css" scoped>
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}
</style>
