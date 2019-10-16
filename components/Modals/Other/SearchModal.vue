<template>
  <div class="modal-content">
    <div class="box">
      <b>Find something great</b>
      <Searchbar @option-selected="closeModal" />
    </div>
  </div>
</template>
<script>
import Searchbar from '~/components/Header/NavHeader/Searchbar';

export default {
  name: '' + 'SearchModal',
  components: { Searchbar },
  props: {
    modalText: { type: String, default: '' },
  },
  methods: {
    closeModal() {
      this.$parent.close();
    },
  },
};
</script>
<style lang="css" scoped>
.box {
    max-width: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
    overflow: visible;
}
</style>
