<template>
  <div class="info-pane-container">
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
.info-pane-container {
  width: 100%;
  margin-left: 5%;
}
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
