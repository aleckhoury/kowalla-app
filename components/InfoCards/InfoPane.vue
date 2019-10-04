<template>
  <div>
    <div class="wrapper-margin wrapper-container">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoPane",
};
</script>
<style lang="css" scoped>
.wrapper-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.wrapper-margin > * {
  margin-bottom: 10px;
}
</style>
