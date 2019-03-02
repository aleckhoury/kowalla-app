<template lang="html">
  <button
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="nativeType"
    class="kow-button"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot/>
    </span>
  </button>
</template>

<script>
export default {
  name: 'KowButton',
  props: {
    nativeType: {
      type: String,
      default: 'button',
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('edit-button-clicked', event);
    },
  },
};
</script>

<style lang="css" scoped>
.kow-button {
  height: 35px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #E0DDDD;
  font-family: "Helvetica Neue";
  color: rgb(57,201,160);
  font-size: 0.875em;
  cursor: pointer;
}

.kow-button:hover {
  background-color: rgb(57,201,160,.75);
  border: 1px solid #2F8168;
  color: white;
}

.kow-button:focus {
  outline: none;
}
</style>
