<template lang="html">
  <button :disabled="buttonDisabled" :autofocus="autofocus" :type="nativeType" class="kow-button" @click="handleClick">
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'KowButton',
  props: {
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false }
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('kow-button-click', event);
    }
  }
};
</script>

<style lang="css" scoped>
.kow-button {
  height: 36px;
  width: 70px;
  border-radius: 6px;
  background-color: #fff;
  margin: 6px;

  color: rgb(57,201,160);
  font-size: 0.875em;
  cursor: pointer;
}

.kow-button:hover {
  background-color: rgb(255,255,255,.75);
}

.kow-button:focus {
  outline: none;
}
</style>
