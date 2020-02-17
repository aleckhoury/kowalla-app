<template>
  <div class="modal-content">
    <div class="box">
      <div class="title">
        {{ title }}
      </div>
      <div class="subtitle">
        {{ content }}
      </div>
      <div class="level">
        <div class="level-left" />
        <div class="level-right">
          <BButton class="level-item" @click="$parent.close">{{ cancel }}</BButton>
          <BButton class="level-item" @click="confirmClicked()">{{ confirm }}</BButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    title: { type: String, default: 'Please Confirm' },
    content: { type: String, default: 'Are you sure?' },
    cancel: { type: String, default: 'No, Cancel' },
    confirm: { type: String, default: 'Yes, Continue' },
  },
  methods: {
    confirmClicked() {
      this.$emit('confirm');
      this.$parent.close();
    },
  },
};
</script>

<style scoped>
.modal-content {
  border-radius: 6px;
  margin: 0;
  width: auto;
}
.box {
  width: 700px;
  max-width: 100%;
}
.subtitle {
  margin-bottom: 3rem !important;
}
</style>
