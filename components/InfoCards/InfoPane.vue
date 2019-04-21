<template>
  <div class="info-pane-container">
    <div class="wrapper-margin wrapper-container">
      <slot />

      <!--
        <slot
          v-for="(item, index) in filteredItems"
          :item="item"
          :_class="{
            'first': index == 0,
            'odd': !(index % 2),
            'even': index % 2,
            'last': index == (filteredItems.length - 1)
          }"
        >
      </slot>
      -->
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
  max-width: 250px;
  width: 100%;
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
