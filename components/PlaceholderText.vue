<template lang="html">
  <div class='placeholder-text-container'>
    <h1 v-if="$slots.default">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.placeholder-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
