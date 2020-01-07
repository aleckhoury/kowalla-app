<template>
  <Picker :show-skin-tones="false" :show-preview="false" @select="toggleReaction" />
</template>

<script>
let Mart;
if (process.browser) {
  Mart = require('emoji-mart-vue-fast');
}
let { Picker } = Mart ? Mart : '';

export default {
  name: 'DropdownPicker',
  components: { Picker },
  props: {
    toggleReaction: { type: Function, default: () => {} },
  },
};
</script>

<style scoped></style>
