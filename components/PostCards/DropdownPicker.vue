<template>
  <Picker :data="index" :show-skin-tones="false" :show-preview="false" @select="toggleReaction" />
</template>

<script>
let Mart;
let data;
let index;
if (process.browser) {
  Mart = require('emoji-mart-vue-fast');
  data = require('emoji-mart-vue-fast/data/all.json');
}
let { Picker, EmojiIndex } = Mart ? Mart : '';
if (data) {
  index = new EmojiIndex(data);
}

export default {
  name: 'DropdownPicker',
  components: { Picker },
  props: {
    toggleReaction: { type: Function, default: () => {} },
  },
  data() {
    return {
      data,
      index,
    };
  },
};
</script>

<style scoped></style>
