<template>
  <div>
    <Picker
      :native="true"
      :show-skin-tones="false"
      :show-preview="false"
      @select="toggleReaction"
    />
  </div>
</template>

<script>
let Mart;
if (process.browser) {
  Mart = require("emoji-mart-vue-fast");
}
let { Picker } = Mart ? Mart : "";
import "emoji-mart-vue-fast/css/emoji-mart.css";

export default {
  name: "DropdownPicker",
  components: { Picker },
  props: {
    toggleReaction: { type: Function, default: () => {} }
  }
};
</script>

<style scoped></style>
